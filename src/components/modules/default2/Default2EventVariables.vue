<template>
  <div class="q-pa-none row">

    <div v-for="item in eventVariables" :key="item">
      <EventVariableBitArray v-if="item.type=='EventVariableBitArray'"
                            :nodeNumber = "store.state.selected_node"
                            :eventIndex = store.state.selected_event_index
                            :eventVariableIndex=item.eventVariableIndex
                            :bitCollection = item.bitCollection
                            :Title="item.displayTitle"
                            :Description="item.description">
      </EventVariableBitArray>
      <EventVariableNumber v-if="item.type=='EventVariableNumber'"
                  :node-number=store.state.selected_node
                  :eventIndex = store.state.selected_event_index
                  :eventVariableIndex= "item.eventVariableIndex"
                  :startBit = "item.startBit"
                  :endBit = "item.endBit"
                  :displayOffset = "item.displayOffset"
                  :name="item.displayTitle">
      </EventVariableNumber>
      <EventVariableSelect v-if="item.type=='EventVariableSelect'"
                        :nodeNumber="store.state.selected_node"
                        :eventIndex = "store.state.selected_event_index"
                        :eventVariableIndex= "item.eventVariableIndex"
                        :bitMask = "item.bitMask"
                        :Title= "item.displayTitle"
                        :options= "item.options">
      </EventVariableSelect>
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
import EventVariableNumber from "components/modules/common/EventVariableNumber"
import EventVariableRaw from "components/modules/common/EventVariableRaw"
import EventVariableSelect from "components/modules/common/EventVariableSelect"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "DefaultVariables",
  components: {
    EventVariableRaw,
    EventVariableBitArray,
    EventVariableNumber,
    EventVariableRaw,
    EventVariableSelect
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
