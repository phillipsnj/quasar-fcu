<template>
  <div class="q-pa-md row">
    <node-details :nodeNumber="store.state.selected_node"></node-details>
    <node-parameter parameter-name="Node Number"
                    :parameter-value="store.state.nodes[store.state.selected_node].nodeNumber">
    </node-parameter>
    <node-parameter parameter-name="Manufacturer"
                    :parameter-value="store.state.nodes[store.state.selected_node].moduleManufacturerName">
    </node-parameter>
    <node-parameter parameter-name="Module"
                    :parameter-value="store.state.nodes[store.state.selected_node].module">
    </node-parameter>
    <node-parameter parameter-name="Component"
                    :parameter-value="store.state.nodes[store.state.selected_node].component">
    </node-parameter>
    <node-parameter parameter-name="Node Variables"
                    :parameter-value="store.state.nodes[store.state.selected_node].parameters[6]">
    </node-parameter>
    <node-parameter parameter-name="Event Variables"
                    :parameter-value="store.state.nodes[store.state.selected_node].parameters[5]">
    </node-parameter>
    <node-parameter parameter-name="Events Stored"
                    :parameter-value="store.state.nodes[store.state.selected_node].eventCount">
    </node-parameter>
  </div>
</template>

<script>
import {inject, onBeforeMount} from "vue"
import NodeParameter from "components/modules/common/NodeParameter"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "DefaultInfo",
  components: {NodeDetails, NodeParameter},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_parameters(store.state.selected_node, 20, 100)
    })
    return {store, NodeParameter}
  }
}
</script>

<style scoped>

</style>
