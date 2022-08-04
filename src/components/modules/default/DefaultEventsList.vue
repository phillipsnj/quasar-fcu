<template>
  <div class="full-width" >
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
  <div class="q-pa-md row" v-if="store.state.debug">
    <p>
      {{ Object.values(store.state.events) }}
    </p>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, computed, watch, ref} from "vue";
import DefaultEventVariables from "components/modules/default/DefaultEventVariables";

const columns = [
  {name: 'eventIdentifier', field: 'eventIdentifier', required: true, label: 'EventId', align: 'left', sortable: true},
  {name: 'nodeNumber', field: 'nodeNumber', required: true, label: 'Node', align: 'left', sortable: true},
  {name: 'eventNumber', field: 'eventNumber', required: true, label: 'Event', align: 'left', sortable: true},
  {name: 'eventIndex', field: 'eventIndex', required: true, label: 'Event Index', align: 'left', sortable: true},
  {name: 'edit', field: 'edit', required: true, label: 'Edit', align: 'left', sortable: true}
]

const store = inject('store')
const rows = ref([])

const nodeEvents = computed(() =>{
  return Object.values(store.state.nodes[store.state.selected_node].consumedEvents)
})

watch(nodeEvents, () => {
  update_rows()
})

const update_rows = () => {
  console.log(`DefaultEventList Mounted ${store.state.selected_node}`)
  rows.value = []
  nodeEvents.value.forEach(event => {
    let output = {}
    output['eventIdentifier'] = event.eventIdentifier
    output['eventIndex'] = event.eventIndex
    output['nodeNumber'] = parseInt(event.eventIdentifier.substr(0, 4), 16)
    output['eventNumber'] = parseInt(event.eventIdentifier.substr(4, 4), 16)
    rows.value.push(output)
  })
}

onBeforeMount(() => {
  console.log(`DefaultEventList Mounted ${store.state.selected_node}`)
  store.methods.request_all_node_events(store.state.selected_node)
  update_rows()
})

const editEvent = (eventIndex) => {
  console.log(`editEvent`)
  store.state.selected_event_index = eventIndex
  store.methods.update_event_component("DefaultEventVariables")
}

const removeEvent = (nodeId, eventIndex) => {
  console.log(`removeEvent`)
  store.methods.remove_event(nodeId, eventIndex)
}

/*export default {
  name: "DefaultEvents",
  components: {},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_events(store.state.selected_node)
    })
    const editEvent = (eventIndex) => {
      console.log(`editEvent`)
      store.state.selected_event_index = eventIndex
      store.methods.update_event_component("DefaultEventVariables")
    }
    const removeEvent = (nodeId, eventIndex) => {
      console.log(`removeEvent`)
      store.methods.remove_event(nodeId, eventIndex)
    }
    return {store, columns, editEvent, removeEvent}
  }
}*/
</script>

<style scoped>

</style>
