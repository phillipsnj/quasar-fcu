<template>
  <q-card class="q-pa-md" flat style="max-width: 300px">
    <q-card-section>
      <div class="text-h6">{{ Title }}</div>
      <div class="text-subtitle2">{{ Description }}</div>
    </q-card-section>
    <q-card-section>
    <q-select
      v-model="variableValue"
      :options="options"
      map-options
    >
    </q-select>
    </q-card-section>
  </q-card>
<q-card class="q-pa-md" flat style="max-width: 300px">
    <q-input
      class="bg-white"
      filled
      :label="label"
      :hint="hint"
      v-model="variableValue"
      outlined
    >

    </q-input>
  </q-card>
</template>

<script setup>
import {inject, ref, onMounted, computed} from "vue";

const props = defineProps({
  "nodeNumber": {
    type: Number,
    required: true
  },
  "nodeVariableIndex": {
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
  "learn": {
    type: Boolean,
    default: false
  }
})

console.log(`Node Variable : ` + props.nodeNumber)
//var variableValue = ref(29)
const label = props.name ? props.name : "Variable" + props.nodeVariableIndex
const store = inject('store')
//const error = ref(false)
const error_message = ref('')
//const options = {0:'Send all Events',1:'Do Nothing', 3:'Set all states on'}



const variableValue = computed({
  get() {
    return store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex]
  },
  set(newValue) {
    console.log(`NewValue : ${newValue.value}`)
    if (props.learn) {
        store.methods.update_node_variable_in_learn_mode(props.nodeNumber, props.nodeVariableIndex, newValue.value)
      } else {
        store.methods.update_node_variable(props.nodeNumber, props.nodeVariableIndex, newValue.value)
      }
  }
})

/*const update_variable = (newValue) => {
  if (error.value) {
    console.log(`Invalid Value : ${newValue}`)
  } else {
    console.log(`update_variable : ${newValue}`)
  }*/
  /*if (newValue <= props.max && newValue >= props.min) {
    console.log(`update_variable : ${newValue}`)
    error.value = false
    error_message.value = ''
    store.methods.update_node_variable(props.nodeNumber, props.nodeVariableIndex, newValue)
  } else {
    console.log(`Invalid Value : ${newValue}`)
    error_message.value = 'Invalid Value'
    error.value = true
  }*/
// }

onMounted(() => {
  console.log(`NodeVariableSlider`)
  //variableValue = ref(store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex])
})


</script>

<style scoped>

</style>
