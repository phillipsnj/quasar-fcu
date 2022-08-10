<template>
  <q-card class="q-pa-xs" flat bordered style="max-width: 300px">
    <q-card-section class="q-pa-xs">
      <div class="text-subtitle1">{{ Title }}</div>
      <div class="text-subtitle2">{{ Description }}</div>
    </q-card-section>
    <q-card-section class="q-pa-xs">
    <q-select
      v-model="variable"
      :options="options"
      map-options
      @update:model-value="update_variable"
    >
    </q-select>
    </q-card-section>
  </q-card>
<!--<q-card class="q-pa-md" flat style="max-width: 300px">
    <q-input
      class="bg-white"
      filled
      :label="label"
      :hint="hint"
      v-model="variable"
      outlined
      readonly
    >
    </q-input>
  </q-card>-->
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

//console.log(`Event Variable  Variable : ${props.nodeNumber} ${props.eventIndex}`)
//var variableValue = ref(29)
const label = props.name ? props.name : "Variable" + props.eventVariableIndex
const store = inject('store')
const variable = ref()
let eventIdentifier = store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].eventIdentifier

const variableValue = computed(() =>{
  return store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex]
})

watch(variableValue, () => {
  variable.value = variableValue.value
})

const update_variable = (newValue) => {
  //console.log(`NodeVariableSelect update_variable ${newValue.value}`)
  store.methods.update_event_variable(props.nodeNumber, eventIdentifier, props.eventIndex, props.eventVariableIndex, newValue.value)
}


onMounted(() => {
  //console.log(`EventVariableSelect Mounted`)
  variable.value = variableValue.value
  //variableValue = ref(store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex])
})


</script>

<style scoped>

</style>
