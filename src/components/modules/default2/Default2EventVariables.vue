<template>
  <div class="q-pa-xs row">
    <div v-if="store.state.nodes[store.state.selected_node].variableConfig.eventVariables">
      <div v-for="item in store.state.nodes[store.state.selected_node].variableConfig.eventVariables" :key="item">
        <EventVariableBitArray v-if="item.type=='EventVariableBitArray'"
                              :nodeNumber = "store.state.selected_node"
                              :eventIndex = store.state.selected_event_index
                              :eventVariableIndex=item.eventVariableIndex
                              :bits = item.bits
                              :Title="item.displayTitle"
                              :Description="item.description"
                              :learn="false"
        ></EventVariableBitArray>
      </div>
    </div>
  </div>
  <h5>Raw View</h5>
  <div class="q-pa-xs row">
      <EventVariable :eventVariableIndex="n"
                    :eventIndex = store.state.selected_event_index
                    :nodeNumber="store.state.selected_node"
                    v-for="n in store.state.nodes[store.state.selected_node].parameters[5]"
                    :key="n">
      </EventVariable>
  </div>
</template>

<script>
import {inject, onBeforeMount} from "vue";
import EventVariable from "components/modules/common/EventVariable"
import EventVariableBitArray from "components/modules/common/EventVariableBitArray"
import DefaultInfo from "components/modules/default/DefaultInfo"

export default {
  name: "DefaultVariables",
  components: {
    EventVariable,
    EventVariableBitArray
  },
  setup() {
    const store = inject('store')
    onBeforeMount(() => {
      console.log('Default2EventVariables')
      store.methods.request_all_event_variables(
        store.state.selected_node,
        store.state.selected_event_index,
        100,
        store.state.nodes[store.state.selected_node].parameters[5])
        console.log(`Default2EventVariables: ` + JSON.stringify(store.state.nodes[store.state.selected_node].consumedEvents[store.state.selected_event_index]))
        console.log(`Default2EventVariables: config: ` + JSON.stringify(store.state.nodes[store.state.selected_node].variableConfig.eventVariables))
        console.log(`Default2EventVariables: number of event variables: ` + JSON.stringify(store.state.nodes[store.state.selected_node].parameters[5]))
      })
    return {store, EventVariable}
  }
}
</script>

<style scoped>

</style>
