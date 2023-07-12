<template>
  <q-card class="q-pa-xs">
    <q-card-section>
      <div class="text-h6">Event Variables</div>
      <div class="text-subtitle2">CANMIO Variables</div>
    </q-card-section>
    <div>
      <q-card-section class=" row items-start q-gutter-md">
      <EventVariable
        name="Number of Stored Variables"
        :eventVariableIndex="0"
        :eventIndex=store.state.selected_event_index
        :nodeNumber="store.state.selected_node"
        :eventName="store.state.nodes[store.state.selected_node].storedEvents[store.state.selected_event_index]"
      >
      </EventVariable>
      <EventVariable
        name="Happenning"
        :eventVariableIndex="1"
        :eventIndex=store.state.selected_event_index
        :nodeNumber="store.state.selected_node"
        :eventName="store.state.nodes[store.state.selected_node].storedEvents[store.state.selected_event_index]"
      >
      </EventVariable>
      </q-card-section>
    </div>
    <div>
      <q-card-section class=" row items-start q-gutter-md">
      <event-variable-select
        :Title="'Action '+(n-1)"
        :options="event_actions"
        :eventVariableIndex="n"
        :eventIndex=store.state.selected_event_index
        :nodeNumber="store.state.selected_node"
        v-for="n in [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
        :key="n">
      </event-variable-select>
      </q-card-section>
    </div>
    <div class="q-pa-xs row">
      <EventVariable
        :eventVariableIndex="n"
        :eventIndex=store.state.selected_event_index
        :nodeNumber="store.state.selected_node"
        :eventName="store.state.nodes[store.state.selected_node].storedEvents[store.state.selected_event_index]"
        v-for="n in store.state.nodes[store.state.selected_node].parameters[5]"
        :key="n">
      </EventVariable>
    </div>
  </q-card>
</template>

<script setup>
import EventVariable from "components/modules/common/EventVariable.vue"
import EventVariableSelect from "components/modules/common/EventVariableSelect"
import {inject, onBeforeMount, ref} from "vue";
//import EventVariable from "components/modules/common/EventVariable";

const store = inject('store')
const label = "Label"
const event_actions = ref([])

onBeforeMount(() => {
  console.log('CanmioEventVariables')
  store.methods.request_event_variable(
    store.state.selected_node,
    store.state.selected_event_index,
    0
  )
  store.methods.request_all_event_variables(
    store.state.selected_node,
    store.state.selected_event_index,
    10,
    store.state.nodes[store.state.selected_node].parameters[5])
  update_event_actions()
})

const update_event_actions = () => {
  console.log(`update_event_actions`)
  event_actions.value = []
  let x = 1
  let y = 8
  event_actions.value.push({"value": 0, "label": "Do Nothing"})
  event_actions.value.push({"value": 1, "label": "Start of Day"})
  event_actions.value.push({"value": 2, "label": "Wait 0.5"})
  event_actions.value.push({"value": 3, "label": "Wait 1"})
  event_actions.value.push({"value": 4, "label": "Wait 2"})
  event_actions.value.push({"value": 5, "label": "Wait 5"})
  for (let i = 16; i <= 121; i = i + 7) { //Get Channel Types

    if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 1) {
      //output = {"id":y, "name":"Ch-" + x +" Changed"}
      event_actions.value.push({"value": y, "label": `Ch-${x} Change`})
      event_actions.value.push({"value": y + 1, "label": `Ch-${x} ON`})
      event_actions.value.push({"value": y + 2, "label": `Ch-${x} OFF`})
      event_actions.value.push({"value": y + 3, "label": `Ch-${x} Flash`})
      event_actions.value.push({"value": y + 4, "label": `Ch-${x} !Changed`})
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 2) {
      event_actions.value.push({"value": y, "label": `Ch-${x} Change`})
      event_actions.value.push({"value": y + 1, "label": `Ch-${x} ON`})
      event_actions.value.push({"value": y + 2, "label": `Ch-${x} OFF`})
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 3) {
      event_actions.value.push({"value": y, "label": `Ch-${x} Change`})
      event_actions.value.push({"value": y + 1, "label": `Ch-${x} ON`})
      event_actions.value.push({"value": y + 2, "label": `Ch-${x} OFF`})
    } else if (store.state.nodes[store.state.selected_node].nodeVariables[i] == 4) {
      event_actions.value.push({"value": y, "label": `Ch-${x} AT1`})
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 1) {
        event_actions.value.push({"value": y + 1, "label": `Ch-${x} AT2`})
      }
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 2) {
        event_actions.value.push({"value": y + 2, "label": `Ch-${x} AT3`})
      }
      if (store.state.nodes[store.state.selected_node].nodeVariables[i + 2] > 3) {
        event_actions.value.push({"value": y + 3, "label": `Ch-${x} AT4`})
      }
    }
    x = x + 1
    y = y + 5
  }
}

</script>

<style scoped>

</style>
