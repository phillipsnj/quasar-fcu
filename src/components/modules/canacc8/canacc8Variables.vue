<template>
  <div class="q-pa-md row">
    <canacc8-channel
      v-for="n in [1,2,3,4,5,6,7,8]"
      :key="n"
    :NodeNumber="store.state.selected_node"
    :Channel = "n"
    ></canacc8-channel>

    <NodeVariableNumber :node-variable-index="n"
                  :node-number=store.state.selected_node
                  v-for="n in store.state.nodes[store.state.selected_node].parameters[6]"
                  :key="n">
    </NodeVariableNumber>
  </div>
</template>

<script>
import {inject, onBeforeMount} from "vue";
import NodeVariableNumber from "components/modules/common/NodeVariableNumber"
//import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
//import NodeVariableBit from "components/modules/common/NodeVariableBit"
import DefaultInfo from "components/modules/default/DefaultInfo"
import Canacc8Channel from "components/modules/canacc8/canacc8Channel";

export default {
  name: "canacc8Variables",
  components: {Canacc8Channel, NodeVariableNumber},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
    })
    return {store, NodeVariableNumber}
  }
}
</script>

<style scoped>

</style>
