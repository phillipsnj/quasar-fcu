<template>
  <div class="q-pa-md row">
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
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "canled64Variables",
  components: {NodeVariableNumber},
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
