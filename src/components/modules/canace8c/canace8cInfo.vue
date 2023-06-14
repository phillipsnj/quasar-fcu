<template>
  <div class="q-pa-md row">
    <node-parameter Name="Node Number"
                    :Value="store.state.nodes[store.state.selected_node].nodeNumber">
    </node-parameter>
    <node-parameter Name="Manufacturer"
                    :Value="store.state.nodes[store.state.selected_node].moduleManufacturerName">
    </node-parameter>
    <node-parameter Name="Module"
                    :Value="store.state.nodes[store.state.selected_node].moduleName">
    </node-parameter>
    <node-parameter Name="Component"
                    :Value="store.state.nodes[store.state.selected_node].component">
    </node-parameter>
    <node-parameter Name="Node Variables"
                    :Value="store.state.nodes[store.state.selected_node].parameters[6]">
    </node-parameter>
    <node-parameter Name="Event Variables"
                    :Value="store.state.nodes[store.state.selected_node].parameters[5]">
    </node-parameter>
    <node-parameter Name="Events Stored"
                    :Value="store.state.nodes[store.state.selected_node].eventCount">
    </node-parameter>
  </div>
</template>

<script>
import {inject, onBeforeMount} from "vue"
import NodeParameter from "components/modules/common/NodeParameter"

export default {
  name: "canace8cInfo",
  components: {NodeParameter},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_parameters(store.state.selected_node, 20, 100)
    })
    return {store}
  }
}
</script>

<style scoped>

</style>
