<template>
    <q-checkbox min-width="100"
                v-model="checked"
                :label="Name"
                @click = "update_checked"
                right-label
    ></q-checkbox>
</template>

<script setup>
import {inject, ref, onMounted, computed, watch } from "vue";

const props = defineProps({
  "NodeNumber": {
    type: Number,
    required: true
  },
  "VariableIndex": {
    type: Number,
    required: true
  },
  "Bit": {
    type: Number,
    required: true
  },
  "Name": {
    type: String,
    required: false
  },
  "hint": {
    type: String,
    default: ""
  },
  "learn": {
    type: Boolean,
    default: false
  }
})

console.log(`Node Variable Bit : ` + props.NodeNumber)
//var variableValue = ref(29)
const label = props.Name ? props.Name : "Variable" + props.VariableIndex
const store = inject('store')
const checked = ref(false)
//const bitValue = 0
const bitArray = {0: 1, 1: 2, 2: 4, 3: 8, 4: 16, 5: 32, 6: 64, 7: 128}

const variableValue = computed({
  get() {
    return store.state.nodes[props.NodeNumber].nodeVariables[props.VariableIndex]
  },
  set(newValue) {
    //console.log(`NewValue : ${newValue}`)
    //store.methods.update_node_variable(props.NodeNumber, props.VariableIndex, newValue)
    if (props.learn) {
      store.methods.update_node_variable_in_learn_mode(props.NodeNumber, props.VariableIndex, newValue)
    } else {
      store.methods.update_node_variable(props.NodeNumber, props.VariableIndex, newValue)
    }
  }
})

watch(variableValue, (newValue, oldValue) => {
  //console.log(newValue, oldValue)
  checked.value = store.state.nodes[props.NodeNumber].nodeVariables[props.VariableIndex] & bitArray[props.Bit] ? true : false
})

const update_checked = () => {
  console.log('NodeVariableBit update_checked')
  let byteValue = variableValue.value
  if (checked.value) {
    byteValue = byteValue | bitArray[props.Bit]										// set bit by 'or-ing' bit value
    console.log(`bit ${bitArray[props.Bit]} set, new byte value ${byteValue}`)
  } else {
    byteValue = byteValue & ~bitArray[props.Bit]									// clear bit by 'and-ing' inverse bit value
    console.log(`bit ${bitArray[props.Bit]} cleared, new byte value ${byteValue}`)
  }
  //store.methods.update_node_variable(props.NodeNumber, props.VariableIndex, byteValue)
  if (props.learn) {
    store.methods.update_node_variable_in_learn_mode(props.NodeNumber, props.VariableIndex, byteValue)
  } else {
    store.methods.update_node_variable(props.NodeNumber, props.VariableIndex, byteValue)
  }

}

onMounted(() => {
  //console.log(`NodeVariableBit onMounted: `+store.state.nodes[props.NodeNumber].nodeVariables[props.VariableIndex])
  const checked_value = store.state.nodes[props.NodeNumber].nodeVariables[props.VariableIndex] & bitArray[props.Bit] ? true : false
  //this.checked.set( store.state.nodes[props.NodeNumber].nodeVariables[props.VariableIndex] & bitArray[props.Bit] ? true : false)
  console.log(`NodeVariableBit onMounted: Checked`+checked_value)
  checked.value = checked_value
})

</script>

<style scoped>

</style>
