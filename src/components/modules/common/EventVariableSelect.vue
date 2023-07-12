<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">{{ displayTitle }}</div>
      <div class="text-subtitle2">{{ displaySubTitle }}</div>
    <q-select
      v-model="selectVariable"
      :options="options"
      map-options
      @update:model-value="update_variable"
    >
    </q-select>
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
  "bitMask": {
    type: Number,
    default: 255
  },
  "name": {
    type: String,
    required: false
  },
  "options": {
    required: true
  },
  "hint": {
    type: String,
    default: ""
  },
  "displayTitle": {
    type: String,
    required: false
  },
  "displaySubTitle": {
    type: String,
    required: false
  }
})

const label = props.name ? props.name : "Variable" + props.eventVariableIndex
const store = inject('store')
const selectVariable = ref()
let eventIdentifier = store.state.nodes[props.nodeNumber].storedEvents[props.eventIndex].eventIdentifier

const variableValue = computed(() =>{
  return store.state.nodes[props.nodeNumber].storedEvents[props.eventIndex].variables[props.eventVariableIndex]
})

watch(variableValue, () => {
  selectVariable.value = variableValue.value & props.bitMask
})

const update_variable = (newValue) => {
  console.log(`EventVariableSelect: newValue ${newValue.value}`);

  
  // get previous value
  let byteValue = variableValue.value
  //set bits, but only if they match bits in the bitmask
  byteValue = byteValue | (newValue.value & props.bitMask)							// set bit by 'or-ing' bit value
  // clear bits, but only if they match bits in the bitmask
  byteValue = byteValue & (newValue.value | ~props.bitMask)							// clear bit by 'and-ing' inverse bit value

  console.log(`EventVariableSelect: byteValue ${byteValue}`);
  
  store.methods.update_event_variable(props.nodeNumber, eventIdentifier, props.eventIndex, props.eventVariableIndex, byteValue)
}

onMounted(() => {
  console.log(`EventVariableSelect: onMounted`)
  selectVariable.value = variableValue.value & props.bitMask
  console.log(`EventVariableSelect: props: ${JSON.stringify(props)}`)
})


</script>

<style scoped>

</style>
