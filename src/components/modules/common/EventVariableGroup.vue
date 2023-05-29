<template>
  <div style="border:2px solid grey">

    <div class = "GroupTitle"> {{ configuration.displayTitle }}</div>

    <div class="q-pa-xs row">
      <div v-for="item in configuration.groupItems" :key="item" >

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
      <EventVariableTabs v-if="item.type=='EventVariableTabs'"
                  :configuration=item>
      </EventVariableTabs>
 
      </div>
    </div>
   </div>
</template>


<script>
import {inject, ref, onMounted, computed, watch} from "vue";
import EventVariableBitArray from "components/modules/common/EventVariableBitArray"
import EventVariableBitSingle from "components/modules/common/EventVariableBitSingle"
import EventVariableNumber from "components/modules/common/EventVariableNumber"
import EventVariableSelect from "components/modules/common/EventVariableSelect"
import EventVariableSlider from "components/modules/common/EventVariableSlider"
import EventVariableTabs from "components/modules/common/EventVariableTabs"

export default {

  components: {
    EventVariableBitArray,
    EventVariableBitSingle,
    EventVariableNumber,
    EventVariableSelect,
    EventVariableSlider,
    EventVariableTabs
  },

  props: {
    configuration: Object
  },
  setup(props) {
    const store = inject('store')
    onMounted(() => {
      console.log("Event Group onMounted")
      console.log('Event Group props: ' + JSON.stringify(props))
    })
    return {store }
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
