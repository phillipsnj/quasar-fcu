<template>
  <div class="q-pa-md row">
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
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "canled64Variables",
  components: {NodeVariable},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
    })
    return {store, NodeVariable}
  }
}
</script>

<style scoped>

</style>
