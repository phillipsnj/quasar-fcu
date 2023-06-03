<template>
    <div class="q-pa-xs">

      <q-tabs v-model="selectedTab">
        <q-tab v-for="tab in tabPanels" :key="tab.displayTitle"
          :label="tab.displayTitle"
          :name="tab.displayTitle"
        />
      </q-tabs>

      <q-tab-panels keep-alive v-model="selectedTab">
        <q-tab-panel v-for="tab in tabPanels" :key="tab.displayTitle" :name="tab.displayTitle" >

          <div class="q-pa-md row"  style="border:1px solid grey">
            <div v-for="item in tab.items" :key="item">

              <EventVariableBitArray v-if="item.type=='EventVariableBitArray'"
                              :nodeNumber = "store.state.selected_node"
                              :eventIndex = store.state.selected_event_index
                              :eventVariableIndex=item.eventVariableIndex
                              :bitCollection = item.bitCollection
                              :Title="item.displayTitle"
                              :Description="item.description">
              </EventVariableBitArray>
              <EventVariableBitSingle v-if="item.type=='EventVariableBitSingle'"
                            :nodeNumber = "store.state.selected_node"
                            :eventIndex = store.state.selected_event_index
                            :eventVariableIndex=item.eventVariableIndex
                            :bit = "item.bit"
                            :title="item.displayTitle">
              </EventVariableBitSingle>
              <EventVariableNumber v-if="item.type=='EventVariableNumber'"
                  :node-number=store.state.selected_node
                  :eventIndex = store.state.selected_event_index
                  :eventVariableIndex= "item.eventVariableIndex"
                  :startBit = "item.startBit"
                  :endBit = "item.endBit"
                  :displayOffset = "item.displayOffset"
                  :name="item.displayTitle"
                  :min = "item.min"
                  :max = "item.max">
              </EventVariableNumber>
              <EventVariableSelect v-if="item.type=='EventVariableSelect'"
                          :nodeNumber="store.state.selected_node"
                          :eventIndex = "store.state.selected_event_index"
                          :eventVariableIndex= "item.eventVariableIndex"
                          :bitMask = "item.bitMask"
                          :Title= "item.displayTitle"
                          :options= "item.options">
              </EventVariableSelect>
              <EventVariableSlider v-if="item.type=='EventVariableSlider'"
              :node-number="store.state.selected_node"
                            :eventIndex = "store.state.selected_event_index"
                            :eventVariableIndex= "item.eventVariableIndex"
                            :displayTitle="item.displayTitle"
                            :description = "item.description"
                            :displayScale="item.displayScale"
                            :displayUnits="item.displayUnits"
                            :displayOffset = "item.displayOffset"
                            :min = "item.min"
                            :max = "item.max"
                            :startBit = "item.startBit"
                            :endBit = "item.endBit">
              </EventVariableSlider>
              <EventVariableTabGroup v-if="item.type=='EventVariableGroup'"
                    :configuration = item>
              </EventVariableTabGroup>

            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>

    </div>
  </template>
  

  <script>
  
  // composition API - uses ref()

  import { inject, ref, onMounted } from 'vue'
  import EventVariableBitArray from "components/modules/common/EventVariableBitArray"
  import EventVariableBitSingle from "components/modules/common/EventVariableBitSingle"
  import EventVariableNumber from "components/modules/common/EventVariableNumber"
  import EventVariableSelect from "components/modules/common/EventVariableSelect"
  import EventVariableSlider from "components/modules/common/EventVariableSlider"
  import EventVariableTabGroup from "components/modules/common/EventVariableTabGroup"

  export default {
    props: {
      configuration: Object
    },
    components: {
      EventVariableBitArray,
      EventVariableBitSingle,
      EventVariableNumber,
      EventVariableSelect,
      EventVariableSlider,
      EventVariableTabGroup
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
  