<template>
  <q-card class="q-pa-xs row">
    <q-card-section class="q-pa-xs">
      <node-variable-bit-array
        :VariableIndex="1"
        :learn="true"
        Title="On Only"
        Description="Select outputs for On only"
      >
      </node-variable-bit-array>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <node-variable-bit-array
        :VariableIndex="2"
        :learn="true"
        Title="Inverted"
        Description="Select outputs for On only"
      >
      </node-variable-bit-array>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <node-variable-bit-array
        :VariableIndex="6"
        :learn="true"
        Title="Toggle"
        Description="Select outputs to Toggle between On & Off"
      >
      </node-variable-bit-array>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <node-variable-bit-array
        :VariableIndex="3"
        :learn="true"
        Title="Delay"
        Description="Input must be active for duration of the Delay"
      >
      </node-variable-bit-array>
    </q-card-section>
  </q-card>
  <q-card class="q-pa-xs row">
    <q-card-section class="q-pa-xs">
      <node-variable-slider
        :node-variable-index="4"
        :node-number="store.state.selected_node"
        Title="On Delay"
        Description="On delay time shown in 10ms"
        Badge="Delay"
        :BadgeMulti=10
        BadgeUnit="ms">
      </node-variable-slider>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <node-variable-slider
        :node-variable-index="5"
        :node-number="store.state.selected_node"
        Title="Off Delay"
        Description="Off delay time shown in 10ms"
        Badge="Delay"
        :BadgeMulti=10
        BadgeUnit="ms">
      </node-variable-slider>
    </q-card-section>
  </q-card>

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
  <!--  <div class="q-pa-md row">
      <NodeVariableNumber :node-variable-index="n"
                    :node-number=store.state.selected_node
                    :learn=true
                    v-for="n in store.state.nodes[store.state.selected_node].parameters[6]"
                    :key="n">
      </NodeVariableNumber>
    </div>-->
</template>

<script>
import {inject, onBeforeMount} from "vue";
//import NodeVariableNumber from "components/modules/common/NodeVariableNumber"
import NodeVariableBit from "components/modules/common/NodeVariableBit"
import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "DefaultVariables",
  components: {NodeVariableBitArray, NodeVariableSlider},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
    })
    return {store, NodeVariableBit}
  }
}
</script>

<style scoped>

</style>
