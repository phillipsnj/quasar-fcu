<template>
  <h5>Event Variables</h5>
  <q-card>
    <q-card-section>
      <div class="text-subtitle2">Switch Actions</div>
    </q-card-section>
    <q-card-section>
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="1"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name="(n+1).toString()"
      >
      </event-variable-bit>
    </q-card-section>
  </q-card>
  <q-card>
    <q-card-section>
      <div class="text-subtitle2">Polarity</div>
    </q-card-section>
    <q-card-section>
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="2"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name="(n+1).toString()"
      >
      </event-variable-bit>
    </q-card-section>
  </q-card>
  <div class="q-pa-md row">
    <EventVariable :eventVariableIndex="n"
                   :eventIndex = store.state.selected_event_index
                   :nodeNumber="store.state.selected_node"
                   :eventName="store.state.nodes[store.state.selected_node].consumedEvents[store.state.selected_event_index]"
                   v-for="n in store.state.nodes[store.state.selected_node].parameters[5]"
                   :key="n">
    </EventVariable>
  </div>
</template>

<script setup>
import EventVariable from "components/modules/common/EventVariable.vue"
import EventVariableBit from "components/modules/common/EventVariableBit.vue"
import {inject, onBeforeMount} from "vue";

const store = inject('store')
const label = "Label"
onBeforeMount(() => {
  console.log('canacc8EventVariables')
  store.methods.request_all_event_variables(
    store.state.selected_node,
    store.state.selected_event_index,
    100,
    store.state.nodes[store.state.selected_node].parameters[5])
})

</script>

<style scoped>

</style>
