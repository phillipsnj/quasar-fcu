<template>
  <div class="q-pa-md" >
    <q-banner inline-actions>
      <div class="text-h6">
        Stored Events
      </div>
      <template v-slot:action>
        <q-btn color="positive" label="Add Event" @click="showAddEventDialog()" no-caps/>
      </template>
    </q-banner>
  </div>
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
          <q-td key="eventName" :props="props">{{ props.row.eventName}}</q-td>
          <q-td key="nodeNumber" :props="props">{{ props.row.nodeNumber }}</q-td>
          <q-td key="eventNumber" :props="props">{{ props.row.eventNumber }}</q-td>
          <q-td key="eventIndex" :props="props">{{ props.row.eventIndex }}</q-td>
          <q-td key="eventType" :props="props">{{ props.row.eventType }}</q-td>
          <q-td key="edit" :props="props">
            <q-btn outline rounded color="primary" label="Edit" @click="editEvent(props.row.eventIndex)" no-caps/>
            <q-btn outline rounded color="negative" label="Delete"
                   @click="removeEvent(store.state.selected_node, props.row.eventIdentifier)" no-caps/>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="addEventDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h4">Add new event</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Producer Node Number</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="newNodeNumber" autofocus />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Event Number</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="newEventNumber" autofocus />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add Event" v-close-popup @click="createEvent()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
  <div class="q-pa-sm row" v-if="store.state.debug">
    <p>
      {{ Object.values(store.state.events) }}
    </p>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, computed, watch, ref} from "vue";
import Default2EventVariables from "components/modules/default2/Default2EventVariables";
import {parseProducedEvent} from "components/modules/default2/Default2LogicParsers.js";

const columns = [
  {name: 'eventIdentifier', field: 'eventIdentifier', required: true, label: 'EventId', align: 'left', sortable: true},
  {name: 'eventName', field: 'eventName', required: false, label: 'Name', align: 'left', sortable: true},
  {name: 'nodeNumber', field: 'nodeNumber', required: true, label: 'Node', align: 'left', sortable: true},
  {name: 'eventNumber', field: 'eventNumber', required: true, label: 'Event', align: 'left', sortable: true},
  {name: 'eventIndex', field: 'eventIndex', required: true, label: 'Event Index', align: 'left', sortable: true},
  {name: 'eventType', field: 'eventType', required: true, label: 'Event Type', align: 'left', sortable: true},
  {name: 'edit', field: 'edit', required: true, label: 'Edit', align: 'left', sortable: true}
]

const store = inject('store')
const rows = ref([])
const addEventDialog = ref(false)
const newNodeNumber = ref()
const newEventNumber = ref()

const nodeEvents = computed(() =>{
  return Object.values(store.state.nodes[store.state.selected_node].consumedEvents)
})

watch(nodeEvents, () => {
  update_rows()
})

const update_rows = () => {
  //console.log(`DefaultEventList Update Rows ${store.state.selected_node}`)
  rows.value = []
  nodeEvents.value.forEach(event => {
    store.methods.request_all_event_variables(
        store.state.selected_node,
        event.eventIndex,
        100,
        store.state.nodes[store.state.selected_node].parameters[5]
    )
    var eventNodeNumber = parseInt(event.eventIdentifier.substr(0, 4), 16)
    let output = {}
    output['eventIdentifier'] = event.eventIdentifier
    output['eventName'] = store.getters.event_name(event.eventIdentifier)
    output['eventIndex'] = event.eventIndex
    output['nodeNumber'] = eventNodeNumber
    output['eventNumber'] = parseInt(event.eventIdentifier.substr(4, 4), 16)
    output['eventType'] = getEventType(event.eventIndex)
    rows.value.push(output)
  })
}


const getEventType = (eventIndex) =>{
  if (parseProducedEvent(eventIndex, store)){
    return "produced"
  } else{
    return "consumed"
  }
}


onBeforeMount(() => {
  //console.log(`DefaultEventList Mounted ${store.state.selected_node}`)
  store.methods.request_all_node_events(store.state.selected_node)
  update_rows()
})

const editEvent = (eventIndex) => {
  console.log(`editEvent`)
  store.state.selected_event_index = eventIndex
  store.methods.update_event_component("Default2EventVariables")
}

const removeEvent = (nodeId, eventIndex) => {
  console.log(`removeEvent`)
  store.methods.remove_event(nodeId, eventIndex)
}

const showAddEventDialog = () => {
  console.log(`addEventDialog`)
  newNodeNumber.value = null
  newEventNumber.value = null
  addEventDialog.value = true
}

const createEvent = () => {
  var eventIndex = getFreeEventIndex()
  var eventID = parseInt(newNodeNumber.value).toString(16).toUpperCase().padStart(4, 0)
               + parseInt(newEventNumber.value).toString(16).toUpperCase().padStart(4, 0)
  console.log(`createEvent - index ` + eventIndex + ` eventID ` + eventID)
  store.methods.teach_event(store.state.selected_node, eventID, eventIndex, )
}

const getFreeEventIndex = () => {
      // need to find first free event index - node parameter [4]
      var maxEventCount = store.state.nodes[store.state.selected_node].parameters[4]
      var eventIndex = null
      for (var i=1; i < maxEventCount; i++ ){
        console.log('i ' + i)
        if (store.state.nodes[store.state.selected_node].consumedEvents[i]) {
          continue
        } else {
          eventIndex = i + 1
          break
        }        
      }
      return eventIndex
    }


</script>

<style scoped>

</style>
