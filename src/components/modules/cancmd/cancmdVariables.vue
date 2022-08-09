<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">User Flags</div>
      <div class="text-subtitle2">User Flags</div>
    </q-card-section>
    <q-card-section>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=0
        Name="Silent"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=1
        Name="Permit Steal"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=2
        Name="Permit Share"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=2
        Name="Permit Event Reset"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=3
        Name="Permit Event Reset"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=4
        Name="Map Event"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=5
        Name="Stop on Timeout"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=6
        Name="Start of Day"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=2
        :Bit=7
        Name="Enable Shuttles"
      >
      </node-variable-bit>
    </q-card-section>
  </q-card>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">Operation Flags</div>
      <div class="text-subtitle2">Operation Flags</div>
    </q-card-section>
    <q-card-section>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=3
        :Bit=0
        Name="Jumper Control"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=3
        :Bit=1
        Name="Main Output on board"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=3
        :Bit=2
        Name="Analogue Detection"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=3
        :Bit=3
        Name="ZTC mode"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=3
        :Bit=4
        Name="Track Off with Stop All"
      >
      </node-variable-bit>
    </q-card-section>
  </q-card>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">Debug Flags</div>
      <div class="text-subtitle2">Debug Flags</div>
    </q-card-section>
    <q-card-section>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=4
        :Bit=0
        Name="Priority Packets"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=4
        :Bit=1
        Name="Refresh Speed Packets"
      ></node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=4
        :Bit=2
        Name="Refresh Function Packets"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=4
        :Bit=3
        Name="service Mode Packets"
      >
      </node-variable-bit>
      <node-variable-bit
        :NodeNumber="store.state.selected_node"
        :VariableIndex=4
        :Bit=4
        Name="Accessory Packets"
      >
      </node-variable-bit>
    </q-card-section>
  </q-card>
  <div class="q-pa-md row">
    <node-variable-slider
      :node-variable-index="5"
      :node-number="store.state.selected_node"
      Title="Walkabout Timeout"
      Description="Walkabout Timeout"
      Badge="Duration"
      :BadgeMulti=1
      BadgeUnit="seconds">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="6"
      :node-number="store.state.selected_node"
      Title="Main Current Limit"
      Description="Main Current Limit"
      Badge=""
      :BadgeMulti=1
      BadgeUnit="">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="7"
      :node-number="store.state.selected_node"
      Title="Service Current Limit"
      Description="Service Current Limit"
      Badge=""
      :BadgeMulti=1
      BadgeUnit="">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="8"
      :node-number="store.state.selected_node"
      Title="Current Multiplier"
      Description="Current Multiplier"
      Badge=""
      :BadgeMulti=1
      BadgeUnit="">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="9"
      :node-number="store.state.selected_node"
      Title="Increase for ACK Pulses"
      Description="Increase for ACK Pulses"
      Badge=""
      :BadgeMulti=1
      BadgeUnit="">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="10"
      :node-number="store.state.selected_node"
      Title="Shoot through delay"
      Description="Shoot through delay"
      Badge=""
      :BadgeMulti=1
      BadgeUnit="">
    </node-variable-slider>
    <NodeVariableDual
      :NodeVariableIndexLow="12"
      :NodeVariableIndexHigh="11"
      :NodeNumber="store.state.selected_node"
      name="Mapped Node">

    </NodeVariableDual>
    <node-variable-slider
      :node-variable-index="13"
      :node-number="store.state.selected_node"
      Title="Send Current Interval"
      Description="Send Current Interval"
      Badge="Duration"
      :BadgeMulti=1
      BadgeUnit="seconds">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="14"
      :node-number="store.state.selected_node"
      Title="SOD Delay"
      Description="Start of Day Delay"
      Badge="Time"
      :BadgeMulti=1
      BadgeUnit="seconds">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="15"
      :node-number="store.state.selected_node"
      Title="Shuttle Honk Interval"
      Description="Shuttle Honk Interval"
      Badge="Duration"
      :BadgeMulti=1
      BadgeUnit="seconds">
    </node-variable-slider>
    <node-variable-slider
      :node-variable-index="16"
      :node-number="store.state.selected_node"
      Title="Maximum Speed"
      Description="Over 127 has no affect"
      Badge="Speed"
      :BadgeMulti=1
      BadgeUnit="">
    </node-variable-slider>
  </div>
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
import NodeVariableBit from "components/modules/common/NodeVariableBit"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "DefaultVariables",
  components: {NodeVariable, NodeVariableBit, NodeVariableSlider, NodeVariableDual},
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
