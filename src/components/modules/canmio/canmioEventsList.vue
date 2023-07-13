<template>
  <div class="full-width">
    <q-table
      title="Consumed Events"
      :rows=rows
      :columns="columns"
      row-key="eventIdentifier"
      virtual-scroll
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="eventIdentifier" :props="props">{{ props.row.eventIdentifier }}</q-td>
          <q-td key="happening" :props="props">{{ props.row.happening }}</q-td>
          <q-td key="nodeNumber" :props="props">{{ props.row.nodeNumber }}</q-td>
          <q-td key="eventNumber" :props="props">{{ props.row.eventNumber }}</q-td>
          <q-td key="eventIndex" :props="props">{{ props.row.eventIndex }}</q-td>
          <q-td key="edit" :props="props">
            <q-btn color="primary" flat rounded label="Edit" @click="editEvent(props.row.eventIndex)" no-caps/>
            <q-btn color="negative" flat rounded label="Delete"
                   @click="removeEvent(store.state.selected_node, props.row.eventIdentifier)" no-caps/>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
  <div class="q-pa-md row">
    <p>
      Event Actions{{ Object.values(event_actions) }}
    </p>
    <p>
      Happenings{{ happenings }}
    </p>
  </div>
  <div class="q-pa-md row" v-if="store.state.debug">
    <p>
      {{ Object.values(store.state.events) }}
    </p>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, computed, watch, ref} from "vue";
import CanmioEventVariables from "components/modules/canmio/canmioEventVariables";

const columns = [
  {name: 'eventIdentifier', field: 'eventIdentifier', required: true, label: 'EventId', align: 'left', sortable: true},
  {name: 'happening', field: 'happening', required: false, label: 'Happening', align: 'left', sortable: true},
  {name: 'nodeNumber', field: 'nodeNumber', required: true, label: 'Node', align: 'left', sortable: true},
  {name: 'eventNumber', field: 'eventNumber', required: true, label: 'Event', align: 'left', sortable: true},
  {name: 'eventIndex', field: 'eventIndex', required: true, label: 'Event Index', align: 'left', sortable: true},
  {name: 'edit', field: 'edit', required: true, label: 'Edit', align: 'left', sortable: true}
]

const store = inject('store')
const rows = ref([])
const event_actions = ref([])
const happenings = ref({})

const nodeEvents = computed(() => {
  return Object.values(store.state.nodes[store.state.selected_node].storedEvents)
})

watch(nodeEvents, () => {
  update_rows()
})

const update_rows = () => {
  console.log(`CanmioEventList Mounted ${store.state.selected_node}`)
  rows.value = []
  nodeEvents.value.forEach(event => {
    let output = {}
    output['eventIdentifier'] = event.eventIdentifier
    output['eventIndex'] = event.eventIndex
    output['nodeNumber'] = parseInt(event.eventIdentifier.substr(0, 4), 16)
    output['eventNumber'] = parseInt(event.eventIdentifier.substr(4, 4), 16)
    output['happening'] = happenings.value[store.state.nodes[store.state.selected_node].storedEvents[event.eventIndex].variables[1]]
    rows.value.push(output)
  })
}

onBeforeMount(() => {
  console.log(`DefaultEventList Mounted ${store.state.selected_node}`)
  store.methods.clear_node_events(store.state.selected_node)
  update_event_actions()
  update_happenings()
  store.methods.request_all_node_events(store.state.selected_node)
  update_rows()
})

const editEvent = (eventIndex) => {
  console.log(`editEvent ${eventIndex}`)
  store.state.selected_event_index = eventIndex
  store.methods.update_event_component("CanmioEventVariables")
}

const removeEvent = (nodeId, eventIndex) => {
  console.log(`removeEvent`)
  store.methods.remove_event(nodeId, eventIndex)
}

const update_event_actions = () => {
  console.log(`update_event_actions`)
  event_actions.value = []
  let x = 1
  let y = 8
  event_actions.value.push({"value": 0, "label": "Do Nothing"})
  event_actions.value.push({"value": 1, "label": "Start of Day"})
  event_actions.value.push({"value": 2, "label": "Wait 0.5"})
  event_actions.value.push({"value": 3, "label": "Wait 1"})
  event_actions.value.push({"value": 4, "label": "Wait 2"})
  event_actions.value.push({"value": 5, "label": "Wait 5"})
  for (let i = 16; i <= 121; i = i + 7) { //Get Channel Types

    if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 1) {
      //output = {"id":y, "name":"Ch-" + x +" Changed"}
      event_actions.value.push({"value": y, "label": `Ch-${x} Change`})
      event_actions.value.push({"value": y + 1, "label": `Ch-${x} ON`})
      event_actions.value.push({"value": y + 2, "label": `Ch-${x} OFF`})
      event_actions.value.push({"value": y + 3, "label": `Ch-${x} Flash`})
      event_actions.value.push({"value": y + 4, "label": `Ch-${x} !Changed`})
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 2) {
      event_actions.value.push({"value": y, "label": `Ch-${x} Change`})
      event_actions.value.push({"value": y + 1, "label": `Ch-${x} ON`})
      event_actions.value.push({"value": y + 2, "label": `Ch-${x} OFF`})
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 3) {
      event_actions.value.push({"value": y, "label": `Ch-${x} Change`})
      event_actions.value.push({"value": y + 1, "label": `Ch-${x} ON`})
      event_actions.value.push({"value": y + 2, "label": `Ch-${x} OFF`})
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 4) {
      event_actions.value.push({"value": y, "label": `Ch-${x} AT1`})
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 1) {
        event_actions.value.push({"value": y + 1, "label": `Ch-${x} AT2`})
      }
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 2) {
        event_actions.value.push({"value": y + 2, "label": `Ch-${x} AT3`})
      }
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 3) {
        event_actions.value.push({"value": y + 3, "label": `Ch-${x} AT4`})
      }
    }
    x = x + 1
    y = y + 5
  }
}

const update_happenings = () => {
  console.log(`update happenings`)
  happenings.value = {}
  let x = 1
  let y = 8
  let id = 0
  happenings.value[0] = ""
  happenings.value[1] = "Produced Startup Event"
  for (let i = 16; i <= 121; i = i + 7) { //Get Channel Types

    if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 1) {
      //output = {"id":y, "name":"Ch-" + x +" Changed"}
      happenings.value[y] = `Ch-${x} Changed`
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 0) {
      happenings.value[y] = `Ch-${x} Changed`
      happenings.value[y + 1] = `Ch-${x} TWO_ON`
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 2) {
      happenings.value[y] = `Ch-${x} Reached Off`
      happenings.value[y + 1] = `Ch-${x} Reached Mid`
      happenings.value[y + 2] = `Ch-${x} Reached On`
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 3) {
      happenings.value[y] = `Ch-${x} Changed`
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 4) {
      happenings.value[y] = `Ch-${x} AT1`
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 1) {
        happenings.value[y + 1] = `Ch-${x} AT2`
      }
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 2) {
        happenings.value[y + 2] = `Ch-${x} AT3`
      }
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 3) {
        happenings.value[y + 3] = `Ch-${x} AT4`
      }
    }
    x = x + 1
    y = y + 4
  }
}

</script>

<style scoped>

</style>
