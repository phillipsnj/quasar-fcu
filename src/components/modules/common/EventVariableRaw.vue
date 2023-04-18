<template>
  <q-card class="q-pa-none" flat>
    <q-card-section>
      <q-input
        mask="###"
        :label="label"
        debounce="1000"
        :hint="hint"
        v-model="eventValue"
        outlined
        :error-message="error_message"
        :error="error"
        @change="update_event">
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script setup>
import {inject, ref, onMounted, computed, watch} from "vue";

//name: "EventVariable"
const props = defineProps({
  "nodeNumber": {
    type: Number,
    required: true
  },
  "eventIndex": {
    type: Number,
    required: true
  },
  "eventVariableIndex": {
    type: Number,
    required: true
  },
  "Title": {
    type: String,
    required: false
  },
  "Description": {
    type: String,
    required: false
  },
  "name": {
    type: String,
    required: false
  },
  "max": {
    type: Number,
    default: 255
  },
  "min": {
    type: Number,
    default: 0
  },
  "hint": {
    type: String,
    default: ""
  }
})

const label = props.name ? props.name : "Event Variable " + props.eventVariableIndex
const store = inject('store')
const error = ref(false)
const error_message = ref('')
const eventValue = ref()
let eventIdentifier = store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].eventIdentifier
console.log(`Event Variable Props : ${JSON.stringify(props)}`)


const eventVariableValue = computed(() => {
  return store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex]
})

//store.state.nodes[store.state.selected_node].variableConfig.nodeVariables"

watch(eventVariableValue, () => {
eventValue.value = eventVariableValue.value
})

const update_event = (newValue) => {
  if (newValue < props.min || newValue > props.max ||newValue =='') {
    //console.log(`Invalid Value : ${newValue}`)
    error.value = true
    error_message.value = 'Invalid Value'
  } else {
    //console.log(`Valid Value : ${newValue}`)
    error_message.value = ''
    error.value = false
    store.methods.update_event_variable(props.nodeNumber, eventIdentifier, props.eventIndex, props.eventVariableIndex, newValue)
  }
}

//console.log(`EventVariable` + eventVariableValue.value)

onMounted(() => {
  console.log(`EventVariableRaw onMounted`)
  eventValue.value = store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex]
})

</script>

<style scoped>

</style>
