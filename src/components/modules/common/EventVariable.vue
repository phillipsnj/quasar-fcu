<template>
  <q-card class="q-pa-md" flat>
    <p>Event Variable</p>
    <q-input
      :label="name"
      :hint="hint"
      v-model="eventVariableValue"
      outlined
      :rules="[value => value <= props.max || 'Number to High',
            value => value >= props.min || 'Number to Low']"
      @change="update_event_variable">
    </q-input>
  </q-card>
</template>

<script setup>
import {inject, ref, onMounted} from "vue";

//name: "EventVariable"
const props = defineProps({
  "nodeNumber":{
    type:Number,
    required:true
  },
  "eventIndex":{
    type:Number,
    required:true
  },
  "eventVariableIndex":{
    type:Number,
    required:true
  },
  "name":{
    type:String,
    required:false
  },
  "max":{
    type:Number,
    default:255
  },
  "min":{
    type:Number,
    default:0
  },
  "hint":{
    type:String,
    default:""
  }
})
console.log(`EventVariable`+props.nodeNumber+' : '+props.eventIndex+' : '+props.eventVariableIndex)
const store = inject('store')
let eventVariableValue = ref(store.state.nodes[props.nodeNumber].consumedEvents[props.eventIndex].variables[props.eventVariableIndex])

console.log(`EventVariable`+eventVariableValue.value)

const update_event_variable = () => {
  if (eventVariableValue.value >= props.min && eventVariableValue.value <= props.max) {
    console.log("Variable has been updated " + eventVariableValue.value)
  } else {
    console.log("Variable has not been updated " + eventVariableValue.value)
  }
}
onMounted(() => {
  console.log(`EventVariable - onMounted`)
  //const variableValue = store.state.nodes[props.nodeNumber].consumedEvents[props.nodeVariableIndex]
})

</script>

<style scoped>

</style>
