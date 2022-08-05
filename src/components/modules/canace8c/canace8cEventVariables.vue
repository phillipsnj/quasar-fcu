<template>
  <h5>Event Variables</h5>
  <div class="q-pa-md row">
  <event-variable-select
    :node-number="store.state.selected_node"
    :event-index="store.state.selected_event_index"
    :event-variable-index="1"
    :options="options"
    Title="Event Mode"
    Description="Set the mode for the Consumed Event"
  >
  </event-variable-select>
  </div>
</template>

<script setup>
import EventVariableSelect from "components/modules/common/EventVariableSelect.vue"
import {inject, onBeforeMount} from "vue";
//import EventVariable from "components/modules/common/EventVariable";

const store = inject('store')
const label = "Label"
const options =[
  {label:"SOD Event", value:0},
  {label:"Route", value:1},
  {label:"DN Input 1", value:8},
  {label:"DN Input 2", value:9},
  {label:"DN Input 3", value:10},
  {label:"DN Input 4", value:11},
  {label:"DN Input 5", value:12},
  {label:"DN Input 6", value:13},
  {label:"DN Input 7", value:14},
  {label:"DN Input 8", value:15}
]
onBeforeMount(() => {
  console.log('DefaultEventVariables')
  store.methods.request_all_event_variables(
    store.state.selected_node,
    store.state.selected_event_index,
    100,
    store.state.nodes[store.state.selected_node].parameters[5])
})

</script>

<style scoped>

</style>

