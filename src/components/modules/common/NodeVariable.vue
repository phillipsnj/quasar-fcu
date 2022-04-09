<template>
  <q-card class="q-pa-md" flat style="max-width: 300px">
    <q-input
      class="bg-white"
      filled
      :label="label"
      :hint="hint"
      v-model="variableValue"
      outlined
      :error-message="error_message"
      :error="error"
      @change = "update_variable"
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

console.log(`Node Variable : ` + props.nodeNumber)
//var variableValue = ref(29)
const label = props.name ? props.name : "Variable" + props.nodeVariableIndex
const store = inject('store')
const error = ref(false)
const error_message = ref('')



const variableValue = computed({
  get() {
    return store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex]
  },
  set(newValue) {
    console.log(`NewValue : ${newValue}`)
    if (newValue <= props.max && newValue >= props.min) {
      console.log(`update_variable : ${newValue}`)
      error.value = false
      error_message.value = ''
      store.methods.update_node_variable(props.nodeNumber, props.nodeVariableIndex, newValue)
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
}

onMounted(() => {
  console.log(`NodeVariable`)
  //variableValue = ref(store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex])
})


</script>

<style scoped>

</style>
