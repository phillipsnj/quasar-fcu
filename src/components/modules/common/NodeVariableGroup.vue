<template>
  <div style="border:2px solid grey">
    <div class = "GroupTitle"> {{ name }}</div>
    <div class="q-pa-xs row">
      <div v-for="item in groupItems" :key="item" >
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
                            :name="item.name"
                            :options="item.options">
        </NodeVariableSelect>
      </div>
    </div>

  </div>
</template>


<script>
import {inject, ref, onMounted, computed, watch} from "vue";
import NodeVariable from "components/modules/common/NodeVariable"
import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
import NodeVariableBitSingle from "components/modules/common/NodeVariableBitSingle"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableSlider6Bit from "components/modules/common/NodeVariableSlider6Bit"
import NodeVariableSlider7Bit from "components/modules/common/NodeVariableSlider7Bit"
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"

export default {

  components: {
    NodeVariable,
    NodeVariableBitArray,
    NodeVariableBitSingle,
    NodeVariableSlider,
    NodeVariableSlider6Bit,
    NodeVariableSlider7Bit,
    NodeVariableDual,
    NodeVariableSelect
  },

  props: {
    name: String,
    groupItems: Array
  },
  setup() {
    const store = inject('store')
    onMounted(() => {
      console.log("Group onMounted")
//      console.log(`Group name : ${this.name}`)
//      console.log(`Group items : ${JSON.stringify(groupItems)}`)
      console.log(`Group store selected node : ${JSON.stringify(store.state.selected_node)}`)
//      console.log(`Group store NV: ${JSON.stringify(store.state.nodes[store.state.selected_node].variableConfig.nodeVariables)}`)
    })
    return {store}
  },
  watch: {
    name(newName, oldName) {
      console.log(`Group name : ${newName}`)
    }
  },
  mounted() {
      console.log(`Group name : ${name}`)
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
