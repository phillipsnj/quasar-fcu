<template>
  <div class="q-pa-none row">

    <div v-for="item in eventVariables" :key="item">
      <EventVariableGroup v-if="item.type=='EventVariableGroup'"
                    :configuration = item>
      </EventVariableGroup>
      <EventVariableBitArray v-if="item.type=='EventVariableBitArray'"
                            :nodeNumber = "store.state.selected_node"
                            :eventIndex = store.state.selected_event_index
                            :eventVariableIndex=item.eventVariableIndex
                            :bitCollection = item.bitCollection
                            :displayTitle="item.displayTitle"
                            :displaySubTitle="item.displaySubTitle">
      </EventVariableBitArray>
      <EventVariableBitSingle v-if="item.type=='EventVariableBitSingle'"
                            :nodeNumber = "store.state.selected_node"
                            :eventIndex = store.state.selected_event_index
                            :eventVariableIndex=item.eventVariableIndex
                            :bit = "item.bit"
                            :displayTitle="item.displayTitle"
                            :displaySubTitle="item.displaySubTitle">
      </EventVariableBitSingle>
      <EventVariableNumber v-if="item.type=='EventVariableNumber'"
                  :node-number=store.state.selected_node
                  :eventIndex = store.state.selected_event_index
                  :eventVariableIndex= "item.eventVariableIndex"
                  :displayTitle="item.displayTitle"
                  :displaySubTitle="item.displaySubTitle"
                  :startBit = "item.startBit"
                  :endBit = "item.endBit"
                  :displayOffset = "item.displayOffset"
                  :min = "item.min"
                  :max = "item.max"
                  :configuration = item>
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
                            :displaySubTitle = "item.displaySubTitle"
                            :displayScale="item.displayScale"
                            :displayUnits="item.displayUnits"
                            :displayOffset = "item.displayOffset"
                            :min = "item.min"
                            :max = "item.max"
                            :startBit = "item.startBit"
                            :endBit = "item.endBit">
      </EventVariableSlider>
      <EventVariableTabs v-if="item.type=='EventVariableTabs'"
                  :configuration=item>
      </EventVariableTabs>
    </div>
  </div>
  <div class="q-pa-none row">
    <h6>Raw View</h6>
  </div>
  <div class="q-pa-none row">
    <EventVariableRaw :eventVariableIndex="n"
    :nodeNumber="store.state.selected_node"
                  :eventIndex = store.state.selected_event_index
                  v-for="n in store.state.nodes[store.state.selected_node].parameters[5]"
                  :key="n">
    </EventVariableRaw>
  </div>
</template>

<script>
import {inject, onBeforeMount, ref} from "vue";
import EventVariableBitArray from "components/modules/common/EventVariableBitArray"
import EventVariableBitSingle from "components/modules/common/EventVariableBitSingle"
import EventVariableGroup from "components/modules/common/EventVariableGroup"
import EventVariableNumber from "components/modules/common/EventVariableNumber"
import EventVariableRaw from "components/modules/common/EventVariableRaw"
import EventVariableSelect from "components/modules/common/EventVariableSelect"
import EventVariableSlider from "components/modules/common/EventVariableSlider"
import EventVariableTabs from "components/modules/common/EventVariableTabs"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "DefaultVariables",
  components: {
    EventVariableBitArray,
    EventVariableBitSingle,
    EventVariableGroup,
    EventVariableNumber,
    EventVariableRaw,
    EventVariableSelect,
    EventVariableSlider,
    EventVariableTabs
  },
  setup() {
    const store = inject('store')
    const eventVariables = ref()
    onBeforeMount(() => {
      console.log('Default2EventVariables')
      if (store.state.nodes[store.state.selected_node].variableConfig != undefined) {
        if (store.state.nodes[store.state.selected_node].variableConfig.eventVariables != undefined){
          eventVariables.value = store.state.nodes[store.state.selected_node].variableConfig.eventVariables
        }
      }
      store.methods.request_all_event_variables(
        store.state.selected_node,
        store.state.selected_event_index,
        100,
        store.state.nodes[store.state.selected_node].parameters[5]
      )
      console.log(`Default2EventVariables: ` + JSON.stringify(store.state.nodes[store.state.selected_node].consumedEvents[store.state.selected_event_index]))
      console.log(`Default2EventVariables: config: ` + JSON.stringify(eventVariables.value))
      console.log(`Default2EventVariables: number of event variables: ` + JSON.stringify(store.state.nodes[store.state.selected_node].parameters[5]))
    })
      
    return {store, EventVariableRaw, eventVariables}
  }
}
</script>

<style scoped>

</style>
