<template>
  <div class="q-pa-xs row">
    <q-card>
      <q-card-section class="q-pa-xs">
        <div class="text-subtitle2">Channel {{ Channel }}</div>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <q-select
          v-model="selectedChannel"
          :options="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]"
          map-options
          @update:model-value="select_channel"
        >
        </q-select>
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-xs row">
    <q-card>
      <q-card-section class="q-pa-xs">
        <div class="text-subtitle2">Type</div>
      </q-card-section>
      <q-card-section class="q-pa-xs row">
        <q-select
          v-model="selectedType"
          :options="channelType"
          map-options
          @update:model-value="update_type"
        >
        </q-select>
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-xs row">
    <q-card>
      <q-card-section>
        <div class="text-subtitle2">Type{{ selectedType }}</div>
      </q-card-section>
      <div class=" row items-start q-gutter-xs">
        <q-card v-if="selectedType == 0" class="q-pa-xs row">  <!--Input Channel-->
          <q-card-section>
            <node-variable-bit
              :Bit="0"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Trigger Inverted">
            </node-variable-bit>
            <node-variable-bit
              :Bit="3"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Disable Off">
            </node-variable-bit>
            <node-variable-bit
              :Bit="4"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Toggle">
            </node-variable-bit>
            <node-variable-bit
              :Bit="6"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Event Inverted">
            </node-variable-bit>
          </q-card-section>
          <q-card-section class="q-pa-xs row">
            <div class="q-pa-xs row">
              <node-variable-slider
                :node-variable-index="base_nv(selectedChannel)+2"
                :node-number="store.state.selected_node"
                Title="On Delay"
                Description="On Delay"
                Badge="Duration"
                :BadgeMulti=5
                BadgeUnit="ms">
              </node-variable-slider>
              <node-variable-slider
                :node-variable-index="base_nv(selectedChannel)+3"
                :node-number="store.state.selected_node"
                Title="Off Delay"
                Description="Off Delay"
                Badge="Duration"
                :BadgeMulti=5
                BadgeUnit="ms">
              </node-variable-slider>
            </div>
          </q-card-section>
        </q-card>
        <q-card v-if="selectedType == 1"> <!--Output Channel-->
          <q-card-section>
            <node-variable-bit
              :Bit="0"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Trigger Inverted">
            </node-variable-bit>
            <node-variable-bit
              :Bit="2"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Startup">
            </node-variable-bit>
            <node-variable-bit
              :Bit="3"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Disable Off">
            </node-variable-bit>
            <node-variable-bit
              :Bit="5"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Action Inverted">
            </node-variable-bit>
            <node-variable-bit
              :Bit="6"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Event Inverted">
            </node-variable-bit>
            <node-variable-bit
              :Bit="7"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Action Expedited">
            </node-variable-bit>
          </q-card-section>
          <q-card-section class="q-pa-xs row">
            <node-variable-slider
              :node-variable-index="base_nv(selectedChannel)+2"
              :node-number="store.state.selected_node"
              Title="Pulse Duration"
              Description="Pulse Duration"
              Badge="Duration"
              :BadgeMulti=100
              BadgeUnit="ms">
            </node-variable-slider>
            <node-variable-slider
              :node-variable-index="base_nv(selectedChannel)+3"
              :node-number="store.state.selected_node"
              Title="Flash Duration"
              Description="Flasd Duration"
              Badge="Duration"
              :BadgeMulti=100
              BadgeUnit="ms">
            </node-variable-slider>
          </q-card-section>
        </q-card>
        <q-card v-if="selectedType == 2"> <!--Servo Channel-->
          <q-card-section class="q-pa-xs row">
            <node-variable-bit
              :Bit="0"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Trigger Inverted">
            </node-variable-bit>
            <node-variable-bit
              :Bit="1"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Cut Off">
            </node-variable-bit>
            <node-variable-bit
              :Bit="2"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Startup">
            </node-variable-bit>
            <node-variable-bit
              :Bit="5"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Action Inverted">
            </node-variable-bit>
            <node-variable-bit
              :Bit="6"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Event Inverted">
            </node-variable-bit>
            <node-variable-bit
              :Bit="7"
              :VariableIndex="base_nv(selectedChannel)+1"
              :NodeNumber="store.state.selected_node"
              Name="Action Expedited">
            </node-variable-bit>
          </q-card-section>
          <q-card-section class="q-pa-xs row">
            <node-variable-slider
              :node-variable-index="base_nv(selectedChannel)+2"
              :node-number="store.state.selected_node"
              Title="Off Position"
              Description="Off Position"
              Badge="Position"
              :BadgeMulti=1
              BadgeUnit="">
            </node-variable-slider>
            <node-variable-slider
              :node-variable-index="base_nv(selectedChannel)+3"
              :node-number="store.state.selected_node"
              Title="On Position"
              Description="On Position"
              Badge="Position"
              :BadgeMulti=1
              BadgeUnit="">
            </node-variable-slider>
            <node-variable-slider
              :node-variable-index="base_nv(selectedChannel)+4"
              :node-number="store.state.selected_node"
              Title="Off to On Speed"
              Description="Off to On Speed"
              Badge="Speed"
              :BadgeMulti=20
              BadgeUnit="ms">
            </node-variable-slider>
            <node-variable-slider
              :node-variable-index="base_nv(selectedChannel)+5"
              :node-number="store.state.selected_node"
              Title="On to Off Speed"
              Description="On to Off Speed"
              Badge="Speed"
              :BadgeMulti=20
              BadgeUnit="ms">
            </node-variable-slider>
          </q-card-section>
        </q-card>
        <q-card v-if="selectedType == 3"> <!--Bounce Channel-->
          <q-card-section class="q-pa-xs row">
          <node-variable-bit
            :Bit="0"
            :VariableIndex="base_nv(selectedChannel)+1"
            :NodeNumber="store.state.selected_node"
            Name="Trigger Inverted">
          </node-variable-bit>
          <node-variable-bit
            :Bit="1"
            :VariableIndex="base_nv(selectedChannel)+1"
            :NodeNumber="store.state.selected_node"
            Name="Cut Off">
          </node-variable-bit>
          <node-variable-bit
            :Bit="2"
            :VariableIndex="base_nv(selectedChannel)+1"
            :NodeNumber="store.state.selected_node"
            Name="Startup">
          </node-variable-bit>
          <node-variable-bit
            :Bit="5"
            :VariableIndex="base_nv(selectedChannel)+1"
            :NodeNumber="store.state.selected_node"
            Name="Action Inverted">
          </node-variable-bit>
          <node-variable-bit
            :Bit="6"
            :VariableIndex="base_nv(selectedChannel)+1"
            :NodeNumber="store.state.selected_node"
            Name="Event Inverted">
          </node-variable-bit>
          <node-variable-bit
            :Bit="7"
            :VariableIndex="base_nv(selectedChannel)+1"
            :NodeNumber="store.state.selected_node"
            Name="Action Expedited">
          </node-variable-bit>
          </q-card-section>
          <q-card-section class="q-pa-xs row">
          <node-variable-slider
            :node-variable-index="base_nv(selectedChannel)+2"
            :node-number="store.state.selected_node"
            Title="Upper Position"
            Description="Upper Position"
            Badge="Position"
            :BadgeMulti=1
            BadgeUnit="">
          </node-variable-slider>
          <node-variable-slider
            :node-variable-index="base_nv(selectedChannel)+3"
            :node-number="store.state.selected_node"
            Title="Lower Position"
            Description="Lower Position"
            Badge="Duration"
            :BadgeMulti=1
            BadgeUnit="seconds">
          </node-variable-slider>
          <node-variable-slider
            :node-variable-index="base_nv(selectedChannel)+4"
            :node-number="store.state.selected_node"
            Title="Bounce Coefficient"
            Description="Bounce Coefficient"
            Badge=""
            :BadgeMulti=1
            BadgeUnit="%">
          </node-variable-slider>
          <node-variable-slider
            :node-variable-index="base_nv(selectedChannel)+5"
            :node-number="store.state.selected_node"
            Title="Pull Speed"
            Description="Pull Speed"
            Badge="Speed"
            :BadgeMulti=20
            BadgeUnit="ms">
          </node-variable-slider>
          <node-variable-slider
            :node-variable-index="base_nv(selectedChannel)+6"
            :node-number="store.state.selected_node"
            Title="Pull Pause"
            Description="Pull Pause"
            Badge="Duration"
            :BadgeMulti=20
            BadgeUnit="ms">
          </node-variable-slider>
          </q-card-section>
        </q-card>
      </div>
    </q-card>
  </div>
  <!--  <NodeVariable :node-variable-index="base_nv(selectedChannel) +1"
                  :node-number=store.state.selected_node>
    </NodeVariable>-->
</template>

<script setup>
import NodeVariable from "components/modules/common/NodeVariable"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableBit from "components/modules/common/NodeVariableBit"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
import {inject, onBeforeMount, ref, computed, watch} from "vue"

const props = defineProps({
  "NodeNumber": {
    type: Number,
    required: true
  },
  "Channel": {
    type: Number,
    required: true
  }
})

const store = inject('store')
const selectedChannel = ref()
const selectedType = ref()

const channelType = [
  {"label": "Input", "value": 0},
  {"label": "Output", "value": 1},
  {"label": "Servo", "value": 2},
  {"label": "Bounce", "value": 3},
]


const base_nv = (channel) => {
  return (channel * 7) + 9
}

const select_channel = (newValue) => {
  console.log(`cannacc8Channel update_details ${newValue} ${base_nv(newValue)}`)
  selectedChannel.value = newValue
  selectedType.value = store.state.nodes[store.state.selected_node].nodeVariables[base_nv(newValue)]
  store.methods.request_all_node_variables(store.state.selected_node, 7, 20, base_nv(newValue))
}

const update_type = (newValue) => {
  console.log(`cannac8cChannel updateType ${newValue.value}`)
  store.methods.update_node_variable(props.NodeNumber, base_nv(selectedChannel.value), newValue.value)
  store.methods.request_all_node_variables(store.state.selected_node, 7, 20, base_nv(selectedChannel.value))
  selectedType.value = newValue.value
}

onBeforeMount(() => {
  store.methods.request_all_node_variables(store.state.selected_node, 7, 20, base_nv(props.Channel))
  selectedChannel.value = props.Channel
  selectedType.value = store.state.nodes[store.state.selected_node].nodeVariables[base_nv(props.Channel)]
})

</script>

<style scoped>

</style>
