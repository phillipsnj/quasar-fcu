<template>
  <div style="border:2px solid grey">
    <div class = "GroupTitle"> {{ configuration.displayTitle }}</div>
    <div class="q-pa-xs row">
      <div v-for="item in configuration.groupItems" :key="item" >
        <NodeVariableNumber v-if="(item.type=='NodeVariableNumber') && (isVisible(item))"
                      :node-number=store.state.selected_node
                      :displayTitle="item.displayTitle"
                      :displaySubTitle = "item.displaySubTitle"
                      :node-variable-index=item.nodeVariableIndex>
        </NodeVariableNumber>
        <NodeVariableBitArray v-if="(item.type=='NodeVariableBitArray') && (isVisible(item))"
                            :VariableIndex=item.nodeVariableIndex
                            :bitCollection = item.bitCollection
                            :Title="item.displayTitle"
                            :Description="item.description"
                            :learn="false"
        ></NodeVariableBitArray>
        <NodeVariableBitSingle v-if="(item.type=='NodeVariableBitSingle') && (isVisible(item))"
                                  :NodeNumber="store.state.selected_node"
                                  :VariableIndex=item.nodeVariableIndex
                                  :displayTitle="item.displayTitle"
                                  :displaySubTitle="item.displaySubTitle"
                                  :Bit=item.bit>
        </NodeVariableBitSingle>
        <node-variable-slider v-if="(item.type=='NodeVariableSlider') && (isVisible(item))"
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
        <NodeVariableDual v-if="(item.type=='NodeVariableDual') && (isVisible(item))"
                          :NodeVariableIndexLow="item.nodeVariableIndexLow"
                          :NodeVariableIndexHigh="item.nodeVariableIndexHigh"
                          :NodeNumber="store.state.selected_node"
                          :displayTitle="item.displayTitle"
                          :displaySubTitle="item.displaySubTitle">
        </NodeVariableDual>
        <NodeVariableSelect v-if="(item.type=='NodeVariableSelect') && (isVisible(item))"
                            :nodeVariableIndex="item.nodeVariableIndex"
                            :nodeNumber="store.state.selected_node"
                            :displayTitle="item.displayTitle"
                            :displaySubTitle="item.displaySubTitle"
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
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
import {parseNodeVariableLogic} from "components/modules/common/CommonLogicParsers.js";

export default {

  components: {
    NodeVariableNumber,
    NodeVariableBitArray,
    NodeVariableBitSingle,
    NodeVariableSlider,
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

    function isVisible(item){
      var result = true
      if (item.visibilityLogic) {
        result = parseNodeVariableLogic(item.visibilityLogic, store)
      }
      console.log(`isVisible: ` + result + ' ' + item.type)
      return result
    }

    return {store, isVisible}
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
