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
                            :displayTitle="item.displayTitle"
                            :displaySubTitle="item.displaySubTitle"
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
                            :node-number="store.state.selected_node"
                            :nodeVariableIndex="item.nodeVariableIndex"
                            :displayTitle="item.displayTitle"
                            :displaySubTitle = "item.displaySubTitle"
                            :displayScale="item.displayScale"
                            :displayUnits="item.displayUnits"
                            :displayOffset = "item.displayOffset"
                            :min = "item.min"
                            :max = "item.max"
                            :startBit = "item.startBit"
                            :endBit = "item.endBit">
        </node-variable-slider>
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
        <NodeVariableTabs v-if="item.type=='NodeVariableTabs'"
                    :configuration=item>
        </NodeVariableTabs>

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
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
import NodeVariableTabs from "components/modules/common/NodeVariableTabs"

export default {

  components: {
    NodeVariableNumber,
    NodeVariableBitArray,
    NodeVariableBitSingle,
    NodeVariableSlider,
    NodeVariableDual,
    NodeVariableSelect,
    NodeVariableTabs
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
