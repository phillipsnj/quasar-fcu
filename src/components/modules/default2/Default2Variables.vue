<template>
  <div class="q-pa-xs row">

    <div v-for="item in store.state.nodes[store.state.selected_node].variableConfig.nodeVariables" :key="item">
      <NodeVariableGroup v-if="item.type=='group'"
                    :name="item.displayTitle"
                    :groupItems=item.groupItems>
      </NodeVariableGroup>
      <NodeVariable v-if="item.type=='NodeVariable'"
                    :node-number=store.state.selected_node
                    :name="item.displayTitle"
                    :node-variable-index=item.nodeVariableIndex>
      </NodeVariable>
      <NodeVariableBitArray v-if="item.type=='NodeVariableBitArray'"
                            :VariableIndex=item.nodeVariableIndex
                            :Title="item.displayTitle"
                            :Description="item.description"
                            :learn="false"
      ></NodeVariableBitArray>
      <NodeVariableBitSingle v-if="item.type=='NodeVariableBitSingle'"
                                :NodeNumber="store.state.selected_node"
                                :VariableIndex=item.nodeVariableIndex
                                :Title="item.displayTitle"
                                :Description="item.description"
                                :Bit=item.bit
                                :Name="item.displayTitle"
      >
      </NodeVariableBitSingle>
      <node-variable-slider v-if="item.type=='NodeVariableSlider'"
                            :node-variable-index="item.nodeVariableIndex"
                            :node-number="store.state.selected_node"
                            :Title="item.displayTitle"
                            :Description="item.description"
                            Badge=""
                            :BadgeMulti="item.displayScale"
                            :BadgeUnit="item.displayUnits">
      </node-variable-slider>
      <node-variable-slider-6Bit v-if="item.type=='NodeVariableSlider6Bit'"
                            :node-variable-index="item.nodeVariableIndex"
                            :node-number="store.state.selected_node"
                            :Title="item.displayTitle"
                            :Description="item.description"
                            Badge=""
                            :BadgeMulti="item.displayScale"
                            :BadgeUnit="item.displayUnits">
      </node-variable-slider-6Bit>
      <node-variable-slider-7Bit v-if="item.type=='NodeVariableSlider7Bit'"
                            :node-variable-index="item.nodeVariableIndex"
                            :node-number="store.state.selected_node"
                            :Title="item.displayTitle"
                            :Description="item.description"
                            Badge=""
                            :BadgeMulti="item.displayScale"
                            :BadgeUnit="item.displayUnits">
      </node-variable-slider-7Bit>
      <NodeVariableDual v-if="item.type=='NodeVariableDual'"
                        :NodeVariableIndexLow="item.nodeVariableIndexLow"
                        :NodeVariableIndexHigh="item.nodeVariableIndexHigh"
                        :NodeNumber="store.state.selected_node"
                        :name="item.displayTitle">
      </NodeVariableDual>
      <NodeVariableSelect v-if="item.type=='NodeVariableSelect'"
                          :nodeVariableIndex="item.nodeVariableIndex"
                          :nodeNumber="store.state.selected_node"
                          :Title="item.displayTitle"
                          :options="item.options">
      </NodeVariableSelect>
      <div v-if="store.state.debug">
        {{ item.type }} - {{ item.nodeVariableIndex}} - {{ item.displayTitle }}
      </div>
    </div>
  </div>
  <h5>Raw View</h5>
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
import NodeVariableBitSingle from "components/modules/common/NodeVariableBitSingle"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableSlider6Bit from "components/modules/common/NodeVariableSlider6Bit"
import NodeVariableSlider7Bit from "components/modules/common/NodeVariableSlider7Bit"
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
import DefaultInfo from "components/modules/default/DefaultInfo"
import NodeVariableGroup from "components/modules/common/NodeVariableGroup"

export default {
  name: "DefaultVariables",
  components: {
    NodeVariable,
    NodeVariableBitArray,
    NodeVariableBitSingle,
    NodeVariableSlider,
    NodeVariableSlider6Bit,
    NodeVariableSlider7Bit,
    NodeVariableDual,
    NodeVariableSelect,
    NodeVariableGroup
  },
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
    })
    return {store, NodeVariable, NodeVariableBitArray}
  }
}
</script>

<style scoped>

</style>
