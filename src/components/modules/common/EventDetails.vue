<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="q-pa-md" style="max-width: 300px">
      <q-card-section>
        <div class="text-h6">Event Details</div>
        <div class="text-subtitle2">Details to help identify the Event</div>
      </q-card-section>
      <q-card-section>
        <q-input
          outlined
          v-model="eventName"
          label="Event Name"
          hint="Name of Event"
          maxlength="30"
          @change="update_event">
        </q-input>
        <q-select
          outlined
          v-model="eventColour"
          :options="store.state.colours"
          label="Event Colour"
          hint="Colour of Event"
          maxlength="30"
          @update:model-value="update_event">
        </q-select>
        <q-select
          class="q-pa-sm"
          outlined
          use-input
          v-model="eventGroup"
          :options="groupList"
          label="Node Group"
          maxlength="30"
          new-value-mode="add-unique"
          @update:model-value="update_event">
        </q-select>
      </q-card-section>
    </q-card>
    <q-card class="q-pa-md" style="max-width: 300px">
      <q-card-section>
        <div class="text-h6">Taught Events</div>
        <div class="text-subtitle2">Nodes using this event</div>
      </q-card-section>
      <q-card-section>
        {{ taughtNodes }}
      </q-card-section>
    </q-card>
    <q-card class="q-pa-md" style="max-width: 300px">
      <q-card-section>
        <div class="text-h6">Teach Event</div>
        <div class="text-subtitle2">Select a Node to teach e vwent too.</div>
      </q-card-section>
      <q-card-section>
        <q-select
          v-model="newNode"
          :options="availableNodes"></q-select>
        <q-btn color="primary"
               flat
               rounded
               label="Teach"
               @click="teach_event()"
               no-caps/>
      </q-card-section>
      <q-card-section>
        {{ newNode }}
        {{ availableNodes }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import {inject, onMounted, ref, computed, watch} from "vue";

const props = defineProps({
  "eventIdentifier": {
    type: String,
    required: true
  }
})

const eventName = ref('')
const eventColour = ref('')
const eventGroup = ref('')
const newNode = ref()
const availableNodes = ref([])
const taughtNodes = ref([])
const groupList = ref([])

const store = inject('store')

const eventDetails = computed(() => {
  //console.log(`Computed Events`)
  return Object.values(store.state.layout.eventDetails)
})

watch(eventDetails, () => {
  console.log(`WATCH Node Details`)
  updateGroupList()
})

const updateGroupList = () => {
  groupList.value = []
  eventDetails.value.forEach(node => {
    if (!groupList.value.includes(node.group)) {
      groupList.value.push(node.group)
    }
  })
}

const nodeList = computed(() => {
  //console.log(`Computed Events`)
  return Object.values(store.state.nodes)
})

watch(nodeList, () => {
  //console.log(`WATCH Nodes`)
  update_taught_nodes()
  //taughtNodes.value = nodeList.value.find(o => o.consumedEvents === props.eventIdentifier)
  //availableNodes.value = nodeList.value.find(o => o.flim === true)
  availableNodes.value = []
  nodeList.value.forEach(node => {
    //console.log(node)
    if (node.flim == true) {
      availableNodes.value.push(node.nodeNumber)
    }
  })
})

const update_taught_nodes = () => {
  taughtNodes.value = []
  nodeList.value.forEach(node => {
    if (Object.values(node.consumedEvents).length > 0) {
      let events = Object.values(node.consumedEvents)
      events.forEach(event => {
       if (event.eventIdentifier == props.eventIdentifier) {
         //console.log(`Consumed Event ${props.eventIdentifier} ${event.node}`)
         taughtNodes.value.push(event.node)
       }
      })
    }
  })
}

onMounted(() => {
  //console.log(`Event Details Mounted ${props.eventIdentifier})`)
  if (props.eventIdentifier in store.state.layout.eventDetails) {
    //console.log(`Event Layout`)
    eventName.value = store.state.layout.eventDetails[props.eventIdentifier].name
    eventColour.value = store.state.layout.eventDetails[props.eventIdentifier].colour
    eventGroup.value = store.state.layout.eventDetails[props.eventIdentifier].group
  } else {
    //console.log(`Event No Layout ${props.eventIdentifier}`)
    eventName.value = props.eventIdentifier
    eventColour.value = "black"
    eventGroup.value = ""
  }

  update_taught_nodes()
  //taughtNodes.value = nodeList.value.find(o => o.event === props.eventIdentifier)

  availableNodes.value = []
  nodeList.value.forEach(node => {
    //console.log(node)
    if (node.flim == true) {
      availableNodes.value.push(node.nodeNumber)
    }
  })
})

const teach_event = () => {
  //console.log(`teach_event : ${newNode.value} : ${props.eventIdentifier}`)
  if (newNode.value != "") {
    store.methods.teach_event(newNode.value, props.eventIdentifier, props.eventIndex)
  }

}

const update_event = () => {
  //console.log(`Event Details Update Event`)
  if (props.eventIdentifier in store.state.layout.eventDetails === false) {
    store.state.layout.eventDetails[props.eventIdentifier] = {}
  }
  store.state.layout.eventDetails[props.eventIdentifier].name = eventName.value
  store.state.layout.eventDetails[props.eventIdentifier].colour = eventColour.value
  store.state.layout.eventDetails[props.eventIdentifier].group = eventGroup.value
  store.methods.update_layout()

}

</script>

<style scoped>

</style>
