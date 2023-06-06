<template>
  <div class="q-pa-xs row">

    <div v-for="item in nodeVariables" :key="item">
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
                                :Name="item.displayTitle"
      >
      </NodeVariableBitSingle>
      <NodeVariableDual v-if="item.type=='NodeVariableDual'"
                        :NodeVariableIndexLow="item.nodeVariableIndexLow"
                        :NodeVariableIndexHigh="item.nodeVariableIndexHigh"
                        :NodeNumber="store.state.selected_node"
                        :name="item.displayTitle">
      </NodeVariableDual>
      <NodeVariableGroup v-if="item.type=='group'"
                    :configuration = item>
      </NodeVariableGroup>
      <NodeVariableNumber v-if="item.type=='NodeVariableNumber'"
                    :node-number=store.state.selected_node
                    :name="item.displayTitle"
                    :node-variable-index=item.nodeVariableIndex>
      </NodeVariableNumber>
      <NodeVariableSelect v-if="item.type=='NodeVariableSelect'"
                          :nodeVariableIndex="item.nodeVariableIndex"
                          :nodeNumber="store.state.selected_node"
                          :Title="item.displayTitle"
                          :options="item.options">
      </NodeVariableSelect>
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
      <NodeVariableTabs v-if="item.type=='NodeVariableTabs'"
                  :configuration=item>
      </NodeVariableTabs>
      <div v-if="store.state.debug">
        {{ item.type }} - {{ item.nodeVariableIndex}} - {{ item.displayTitle }}
      </div>
    </div>
  </div>
  <h5>Raw View</h5>
  <div class="q-pa-xs row">
    <NodeVariableRaw :node-variable-index="n"
                  :node-number=store.state.selected_node
                  v-for="n in store.state.nodes[store.state.selected_node].parameters[6]"
                  :key="n">
    </NodeVariableRaw>
  </div>
</template>

<script>
import {inject, onBeforeMount, ref} from "vue";
import DefaultInfo from "components/modules/default/DefaultInfo"
import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
import NodeVariableBitSingle from "components/modules/common/NodeVariableBitSingle"
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import NodeVariableGroup from "components/modules/common/NodeVariableGroup"
import NodeVariableNumber from "components/modules/common/NodeVariableNumber"
import NodeVariableRaw from "components/modules/common/NodeVariableRaw"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableTabs from "components/modules/common/NodeVariableTabs"

export default {
  name: "DefaultVariables",
  components: {
    NodeVariableBitArray,
    NodeVariableBitSingle,
    NodeVariableDual,
    NodeVariableGroup,
    NodeVariableNumber,
    NodeVariableRaw,
    NodeVariableSelect,
    NodeVariableSlider,
    NodeVariableTabs
  },
  setup() {
    const store = inject('store')
    const nodeVariables = ref()
    onBeforeMount(() => {
      if (store.state.nodes[store.state.selected_node].variableConfig != undefined) {
        if (store.state.nodes[store.state.selected_node].variableConfig.nodeVariables != undefined){
          nodeVariables.value = store.state.nodes[store.state.selected_node].variableConfig.nodeVariables
        }
      }
      store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
    })
    return {store, nodeVariables}
  }
}
</script>

<style scoped>

</style>
