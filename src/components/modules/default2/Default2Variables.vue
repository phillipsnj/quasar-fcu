<template>
  <h5>Default 2 Variables</h5>
  <div class="q-pa-xs row">

    <div v-for="item in store.state.nodes[store.state.selected_node].variableConfig.nv" :key="item">
      <Default2Group v-if="item.type=='group'"
                    :name="item.displayName"
                    :groupItems=item.groupItems>
      </Default2Group>
      <NodeVariable v-if="item.type=='NodeVariable'"
                    :node-number=store.state.selected_node
                    :name="item.title"
                    :node-variable-index=item.nodeVariableIndex>
      </NodeVariable>
      <NodeVariableBitArray v-if="item.type=='NodeVariableBitArray'"
                            :VariableIndex=item.nodeVariableIndex
                            :Title="item.title"
                            :Description="item.description"
                            :learn="false"
      ></NodeVariableBitArray>
      <NodeVariableBitSingle v-if="item.type=='NodeVariableBitSingle'"
                                :NodeNumber="store.state.selected_node"
                                :VariableIndex=item.nodeVariableIndex
                                :Title="item.title"
                                :Description="item.description"
                                :Bit=item.bit
                                :Name="item.title"
      >
      </NodeVariableBitSingle>
      <node-variable-slider v-if="item.type=='NodeVariableSlider'"
                            :node-variable-index="item.nodeVariableIndex"
                            :node-number="store.state.selected_node"
                            :Title="item.title"
                            :Description="item.description"
                            Badge="Duration"
                            :BadgeMulti=1
                            BadgeUnit="seconds">
      </node-variable-slider>
      <NodeVariableDual v-if="item.type=='NodeVariableDual'"
                        :NodeVariableIndexLow="item.nodeVariableIndexLow"
                        :NodeVariableIndexHigh="item.nodeVariableIndexHigh"
                        :NodeNumber="store.state.selected_node"
                        :name="item.title">
      </NodeVariableDual>
      <NodeVariableSelect v-if="item.type=='NodeVariableSelect'"
                          :nodeVariableIndex="item.nodeVariableIndex"
                          :nodeNumber="store.state.selected_node"
                          :name="item.name"
                          :options="item.options">
      </NodeVariableSelect>
      <div v-if="store.state.debug">
        {{ item.type }} - {{ item.nodeVariableIndex}} - {{ item.title }}
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
import NodeVariableDual from "components/modules/common/NodeVariableDual"
import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
import DefaultInfo from "components/modules/default/DefaultInfo"
import Default2Group from "components/modules/default2/Default2Group"

export default {
  name: "DefaultVariables",
  components: {
    NodeVariable,
    NodeVariableBitArray,
    NodeVariableBitSingle,
    NodeVariableSlider,
    NodeVariableDual,
    NodeVariableSelect,
    Default2Group
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
