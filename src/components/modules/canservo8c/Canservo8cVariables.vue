<template>
  <div class=" row items-start q-gutter-md">
  <node-variable-bit-array
    :VariableIndex="1"
    Title="Cut Off"
    Description="Cut off output when final position reached"
    :learn="true"
  ></node-variable-bit-array>
  <node-variable-bit-array
    :VariableIndex="2"
    Title="Set position on startup"
    Description="Set the position on startup"
    :learn="true"
  ></node-variable-bit-array>
  <node-variable-bit-array
    :VariableIndex="3"
    Title="Move position on startup"
    Description="Move the position on startup"
    :learn="true"
  ></node-variable-bit-array>
  <node-variable-bit-array
    :VariableIndex="4"
    Title="Move Sequentially"
    Description="Move while or after other servos"
    :learn="true"
  ></node-variable-bit-array>
  <canservo8c-channel
    v-for="n in [1,2,3,4,5,6,7,8]"
    :key="n"
    :Channel="n"
    :NodeNumber="store.state.selected_node"
    >
  </canservo8c-channel>
  </div>
  <div class="q-pa-xs row">
    <NodeVariable :node-variable-index="n"
                  :node-number=store.state.selected_node
                  v-for="n in store.state.nodes[store.state.selected_node].parameters[6]"
                  :key="n">
    </NodeVariable>
  </div>
</template>

<script>
import {inject, onBeforeMount} from "vue";
import NodeVariable from "components/modules/common/NodeVariable"
import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
import Canservo8cChannel from "components/modules/canservo8c/canservo8cChannel"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "Canservo8cVariables",
  components: {NodeVariable, NodeVariableBitArray, Canservo8cChannel},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
    })
    return {store, NodeVariable, NodeVariableBitArray, Canservo8cChannel}
  }
}
</script>

<style scoped>

</style>
