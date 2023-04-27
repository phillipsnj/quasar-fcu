<template>
  <q-card class="q-pa-xs" style="width: 300px">
    <q-card-section>
      <div class="text-h6">{{ displayTitle }}</div>
    </q-card-section>
    <q-card-section>
      <q-badge color="secondary">
        {{ variableValue * displayScale }} {{ displayUnits }}
      </q-badge>
      <q-slider
        v-model="variableValue"
        :max="max"
        :min="min"
        @change="update_variable"
      >
      </q-slider>
    </q-card-section>
  </q-card>
</template>

<script setup>
import {inject, ref, onMounted, computed, watch} from "vue";

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
  "displayTitle": {
    type: String,
    required: false
  },
  "displayScale": {
    type: Number,
    default: 1
  },
  "displayUnits": {
    type: String,
    default: ""
  },
  "max": {
    type: Number,
    default: 255
  },
  "min": {
    type: Number,
    default: 0
  }
})

const label = props.name ? props.name : "Event Variable " + props.eventVariableIndex
const store = inject('store')
const error = ref(false)
const error_message = ref('')
const eventValue = ref()
let eventIdentifier = store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].eventIdentifier
console.log(`Event Variable Props : ${JSON.stringify(props)}`)

const variableValue = computed({
  get() {
    return store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex]
  },
  set(newValue) {
    console.log(`NewValue : ${newValue}`)
    if (newValue <= props.max && newValue >= props.min) {
      console.log(`update_variable : ${newValue}`)
      error.value = false
      error_message.value = ''
      store.methods.update_event_variable(props.nodeNumber, eventIdentifier, props.eventIndex, props.eventVariableIndex, newValue)
    } else {
      console.log(`Invalid Value : ${newValue}`)
      error_message.value = 'Invalid Value'
      error.value = true
    }
  }
})

const update_variable = (newValue) => {
  if (error.value) {
    console.log(`Invalid Value : ${newValue}`)
  } else {
    console.log(`update_variable : ${newValue}`)
  }
}

onMounted(() => {
  console.log(`EventVariableRaw onMounted`)
  eventValue.value = store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex]
})

</script>

<style scoped>

</style>
