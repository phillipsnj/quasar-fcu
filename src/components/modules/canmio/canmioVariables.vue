<template>
  <q-card class="q-pa-xs">
    <q-card-section>
      <div class="text-h6">CANMIO Variables</div>
      <div class="text-subtitle2">CANMIO Variables</div>
    </q-card-section>
    <div >
    <q-card-section class=" row items-start q-gutter-md">
      <node-variable-slider
        :node-variable-index="1"
        :node-number="store.state.selected_node"
        Title="Produced Startup Event Delay"
        Description="Produced Startup Event Delay"
        Badge="Duration"
        :BadgeMulti=100
        BadgeUnit="ms">
      </node-variable-slider>
      <node-variable-slider
        :node-variable-index="2"
        :node-number="store.state.selected_node"
        Title="Heartbeat Delay"
        Description="Heartbeat Delay"
        Badge="Duration"
        :BadgeMulti=1
        BadgeUnit="seconds">
      </node-variable-slider>
      <node-variable-slider
        :node-variable-index="3"
        :node-number="store.state.selected_node"
        Title="Servo Speed"
        Description="Servo Speed"
        Badge="Speed"
        :BadgeMulti=20
        BadgeUnit="ms">
      </node-variable-slider>
      <node-variable-bit-array
        :VariableIndex="4"
        :learn="true"
        Title="Port B Pull-ups"
        Description="Port B Pull-ups"
      ></node-variable-bit-array>
      <node-variable-slider
        :node-variable-index="2"
        :node-number="store.state.selected_node"
        Title="Time delay between response messages"
        Description="Time delay between response messages"
        Badge="Duration"
        :BadgeMulti=1
        BadgeUnit="ms">
      </node-variable-slider>
    </q-card-section>
    </div>
  </q-card>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">CANMIO Channels</div>
      <div class="text-subtitle2">CANMIO Channels</div>
    </q-card-section>
    <q-card-section>
      <canmio-channel
        :Channel="1"
        :NodeNumber="store.state.selected_node">
      </canmio-channel>
    </q-card-section>
  </q-card>
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
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
import canmioChannel from "components/modules/canmio/canmioChannel"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "CanmioVariables",
  components: {NodeVariableNumber, NodeVariableSlider, NodeVariableBitArray, canmioChannel},
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 20, 1)
    })
    return {store, NodeVariableNumber}
  }
}
</script>

<style scoped>

</style>
