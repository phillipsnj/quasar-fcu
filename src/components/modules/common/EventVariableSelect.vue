<template>
  <q-card class="q-pa-xs" flat bordered style="min-width: 200px">
    <q-card-section>
      <div class="text-subtitle4">{{ Title }}</div>
      <div class="text-subtitle4">{{ Description }}</div>
    </q-card-section>
    <q-card-section>
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
  "Title": {
    type: String,
    default: ""
  },
  "Description": {
    type: String,
    default: ""
  },
})

const label = props.name ? props.name : "Variable" + props.eventVariableIndex
const store = inject('store')
const selectVariable = ref()
let eventIdentifier = store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].eventIdentifier

const variableValue = computed(() =>{
  return store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex]
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
