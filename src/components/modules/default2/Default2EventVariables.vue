<template>
  <h5>Event Variables</h5>
  <div class="q-pa-md row">
    <EventVariable :eventVariableIndex="n"
                   :eventIndex = store.state.selected_event_index
                   :nodeNumber="store.state.selected_node"
                   Title = "myTitle3"
                   name = "myName3"
                   :eventName="store.state.nodes[store.state.selected_node].consumedEvents[store.state.selected_event_index]"
                   v-for="n in store.state.nodes[store.state.selected_node].parameters[5]"
                   :key="n">
    </EventVariable>
  </div>
</template>

<script setup>
import EventVariable from "components/modules/common/EventVariable.vue"
import {inject, onBeforeMount} from "vue";
//import EventVariable from "components/modules/common/EventVariable";

const store = inject('store')
const label = "Label"
onBeforeMount(() => {
  console.log('Default2EventVariables')
  store.methods.request_all_event_variables(
    store.state.selected_node,
    store.state.selected_event_index,
    100,
    store.state.nodes[store.state.selected_node].parameters[5])
})

</script>

<style scoped>

</style>
