<template>
  <div style="border:2px solid grey">
    <div class = "GroupTitle"> {{ configuration.displayTitle }}</div>
    <div class="q-pa-xs row">
      <div v-for="item in configuration.groupItems" :key="item" >
        <NodeVariableNumber v-if="item.type=='NodeVariableNumber'"
                      :node-number=store.state.selected_node
                      :name="item.displayTitle"
                      :node-variable-index=item.nodeVariableIndex>
        </NodeVariableNumber>
        <NodeVariableBitArray v-if="item.type=='NodeVariableBitArray'"
                            :VariableIndex=item.nodeVariableIndex
                            :bitCollection = item.bitCollection
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
                                  :Name="item.displayTitle">
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
      </div>
    </div>

  </div>
</template>


<script>
import {inject, ref, onMounted, computed, watch} from "vue";
import NodeVariableNumber from "components/modules/common/NodeVariableNumber"
import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
import NodeVariableBitSingle from "components/modules/common/NodeVariableBitSingle"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableSlider6Bit from "components/modules/common/NodeVariableSlider6Bit"
import NodeVariableSlider7Bit from "components/modules/common/NodeVariableSlider7Bit"
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"

export default {

  components: {
    NodeVariableNumber,
    NodeVariableBitArray,
    NodeVariableBitSingle,
    NodeVariableSlider,
    NodeVariableSlider6Bit,
    NodeVariableSlider7Bit,
    NodeVariableDual,
    NodeVariableSelect
  },

  props: {
    configuration: Object
  },
  setup(props) {
    const store = inject('store')
    onMounted(() => {
      console.log("Group onMounted")
      console.log('Node Group props: ' + JSON.stringify(props))
    })
    return {store}
  }
}
</script>


<style scoped>
.GroupTitle {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
