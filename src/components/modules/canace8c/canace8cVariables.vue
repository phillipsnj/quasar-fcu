<template>
  <node-variable-bit-array
    :VariableIndex="1"
    :learn="true"
    Title="On Only"
    Description="Select outputs for On only"
  >
  </node-variable-bit-array>
  <node-variable-bit-array
    :VariableIndex="2"
    :learn="true"
    Title="Inverted"
    Description="Select outputs for On only"
  >
  </node-variable-bit-array>
  <node-variable-bit-array
    :VariableIndex="6"
    :learn="true"
    Title="Toggle"
    Description="Select outputs to Toggle between On & Off"
  >
  </node-variable-bit-array>
  <node-variable-bit-array
    :VariableIndex="3"
    :learn="true"
    Title="Delay"
    Description="Input must be active for duration of the Delay"
  >
  </node-variable-bit-array>
  <node-variable-bit-slider
    :node-variable-index="4"
    :node-number="store.state.selected_node"
    Title="On Delay"
    Description="On delay time shown in 10ms">
  </node-variable-bit-slider>
  <node-variable
    :node-variable-index="4"
    :node-number="store.state.selected_node"
    name="On Delay"
    hint="On delay time shown in 10ms">
  </node-variable>
  <node-variable
    :node-variable-index="5"
    :node-number="store.state.selected_node"
    name="Off Delay"
    hint="Off delay time shown in 10ms"
  >
  </node-variable>
  <node-variable-bit-array
    :VariableIndex="7"
    :learn="true"
    Title="Route Setting"
    Description="Select Outputs Route Options"
  ></node-variable-bit-array>
  <node-variable-bit-array
    :VariableIndex="8"
    :learn="true"
    Title="Disable SOD"
    Description="Select Outputs to disable Start of Day"
  ></node-variable-bit-array>
  <div class="q-pa-md row">
    <NodeVariable :node-variable-index="n"
                  :node-number=store.state.selected_node
                  :learn=true
                  v-for="n in store.state.nodes[store.state.selected_node].parameters[6]"
                  :key="n">
    </NodeVariable>
  </div>
</template>

<script>
import {inject, onBeforeMount} from "vue";
import NodeVariable from "components/modules/common/NodeVariable"
import NodeVariableBit from "components/modules/common/NodeVariableBit"
import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
import NodeVariableBitSlider from "components/modules/common/NodeVariableSlider"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "DefaultVariables",
  components: { NodeVariable, NodeVariableBitArray, NodeVariableBitSlider},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
    })
    return {store, NodeVariable, NodeVariableBit}
  }
}
</script>

<style scoped>

</style>
