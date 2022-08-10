<template>
  <div class=" row items-start q-gutter-md">
    <node-variable-select
      :node-number="store.state.selected_node"
      :node-variable-index="1"
      :options="options"
      Title="Startup Options"
      Description="Startup Options for Start of Day"
    >
    </node-variable-select>
  </div>
</template>

<script setup>
import {inject, onBeforeMount} from "vue";
//import NodeVariable from "components/modules/common/NodeVariable"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
//import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
//import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
//import DefaultInfo from "components/modules/default/DefaultInfo"

const store = inject('store')

const options = [
  {label: "Send all Event states", value: 0},
  {label: "Do Nothing", value: 1},
  {label: "Set all States to ON", value: 2}
]

onBeforeMount(() => {
  store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
})

</script>

<style scoped>

</style>
