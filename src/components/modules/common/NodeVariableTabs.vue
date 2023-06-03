<template>
    <div class="q-pa-md">

      <q-tabs v-model="selectedTab">
        <q-tab v-for="tab in tabPanels" :key="tab.displayTitle"
          :label="tab.displayTitle"
          :name="tab.displayTitle"
        />
      </q-tabs>

      <q-tab-panels keep-alive v-model="selectedTab">
        <q-tab-panel v-for="tab in tabPanels" :key="tab.displayTitle" :name="tab.displayTitle" >
          <div class="q-pa-xs row"  style="border:1px solid grey">
            <div v-for="item in tab.items" :key="item">

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
              <node-variable-slider v-if="item.type=='NodeVariableSlider'"
                                  :node-number="store.state.selected_node"
                                  :nodeVariableIndex="item.nodeVariableIndex"
                                  :displayTitle="item.displayTitle"
                                  :description = "item.description"
                                  :displayScale="item.displayScale"
                                  :displayUnits="item.displayUnits"
                                  :displayOffset = "item.displayOffset"
                                  :min = "item.min"
                                  :max = "item.max"
                                  :startBit = "item.startBit"
                                  :endBit = "item.endBit">
              </node-variable-slider>
              <NodeVariableTabGroup v-if="item.type=='group'"
                      :configuration = item>
              </NodeVariableTabGroup>

            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>

    </div>
  </template>
  

  <script>
  
  // composition API - uses ref()

  import { inject, ref, onMounted } from 'vue'
  import NodeVariableBitArray from "components/modules/common/NodeVariableBitArray"
  import NodeVariableBitSingle from "components/modules/common/NodeVariableBitSingle"
  import NodeVariableDual from "components/modules/common/NodeVariableDual"
  import NodeVariableNumber from "components/modules/common/NodeVariableNumber"
  import NodeVariableSelect from "components/modules/common/NodeVariableSelect"
  import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
  import NodeVariableTabGroup from "components/modules/common/NodeVariableTabGroup"

  export default {
    props: {
      configuration: Object
    },
    components: {
      NodeVariableBitArray,
      NodeVariableBitSingle,
      NodeVariableDual,
      NodeVariableNumber,
      NodeVariableSelect,
      NodeVariableSlider,
      NodeVariableTabGroup
    },
    setup (props) {
      const tabPanels = ref()
      const selectedTab = ref()  
      const store = inject('store')
      onMounted(() => {
        console.log('tabs props: ' + JSON.stringify(props))
        tabPanels.value = props.configuration.tabPanels
        console.log('tabs tabPanels: ' + JSON.stringify(tabPanels.value))
        selectedTab.value = tabPanels.value[0].displayTitle
      })

      return {
        store,
        selectedTab,
        tabPanels
      }
    }
  }
  </script>
  