<template>
  <q-card class="q-pa-md" flat>
    <q-input
      :label="label"
      :hint="hint"
      v-model="eventVariableValue"
      outlined
      :error-message="error_message"
      :error="error"
      @change="update_event">
    </q-input>
  </q-card>
</template>

<script setup>
import {inject, ref, onMounted, computed} from "vue";

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
console.log(`EventVariable` + props.nodeNumber + ' : ' + props.eventIndex + ' : ' + props.eventVariableIndex)
const label = props.name ? props.name : "Event Variable " + props.eventVariableIndex
const store = inject('store')
const error = ref(false)
const error_message = ref('')

const eventVariableValue = computed(() => {
    return store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex]
  }
)

const update_event = (newValue) => {
  if (newValue <= props.max && newValue >= props.min) {
    console.log(`update_event : ${newValue}`)
    error.value = false
    error_message.value = ''
    store.methods.update_event_variable(props.nodeNumber, props.eventIndex, props.eventVariableIndex, newValue)
  } else {
    console.log(`Invalid Value : ${newValue}`)
    error_message.value = 'Invalid Value'
    error.value = true
  }
}

console.log(`EventVariable` + eventVariableValue.value)

onMounted(() => {
  console.log(`EventVariable - onMounted`)
  //const variableValue = store.state.nodes[props.nodeNumber].consumedEvents[props.nodeVariableIndex]
})

</script>

<style scoped>

</style>
