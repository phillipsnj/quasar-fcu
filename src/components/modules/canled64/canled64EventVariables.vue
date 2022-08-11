<template>
  <h5>Event Variables</h5>
  <div class="q-pa-xs row items-start q-gutter-md">
  <q-card>
    <q-card-section class="q-pa-xs">
      <div class="Active LEDs">Switch Actions</div>
      <div class="Select to Activate LED">Select to Activate</div>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="1"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+1).toString()
      >
      </event-variable-bit>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="2"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+9).toString()
      >
      </event-variable-bit>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="3"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+17).toString()
      >
      </event-variable-bit>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="4"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+25).toString()
      >
      </event-variable-bit>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="5"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+33).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="6"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+41).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="7"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+49).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="8"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+57).toString()
        >
        </event-variable-bit>
      </q-card-section>
    </q-card-section>
  </q-card>
  </div>
  <div class="q-pa-xs row items-start q-gutter-md">
  <q-card>
    <q-card-section class="q-pa-xs">
      <div class="Polarity">Switch Actions</div>
      <div class="Select to Polarity for LED">Select to Activate</div>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="9"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+1).toString()
      >
      </event-variable-bit>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="10"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+9).toString()
      >
      </event-variable-bit>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="11"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+17).toString()
      >
      </event-variable-bit>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :event-variable-index="12"
        :event-index="store.state.selected_event_index"
        :node-number="store.state.selected_node"
        :bit=n
        :name=(n+25).toString()
      >
      </event-variable-bit>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="13"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+33).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="14"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+41).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="15"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+49).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section class="q-pa-xs">
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="16"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+57).toString()
        >
        </event-variable-bit>
      </q-card-section>
    </q-card-section>
  </q-card>
    <q-card>
      <q-card-section class="q-pa-xs">
        <event-variable-select
          :node-number="store.state.selected_node"
          :event-index="store.state.selected_event_index"
          :event-variable-index="17"
          :options="optionsEV17"
          Title="LED Action"
          Description="Set the mode when LEDS are activated"
        >
        </event-variable-select>
      </q-card-section>

  </q-card>
  </div>
  <div class="q-pa-ms row">
    <EventVariable :eventVariableIndex="n"
                   :eventIndex=store.state.selected_event_index
                   :nodeNumber="store.state.selected_node"
                   :eventName="store.state.nodes[store.state.selected_node].consumedEvents[store.state.selected_event_index]"
                   v-for="n in store.state.nodes[store.state.selected_node].parameters[5]"
                   :key="n">
    </EventVariable>
  </div>
</template>

<script setup>
import EventVariable from "components/modules/common/EventVariable.vue"
import {inject, onBeforeMount} from "vue";
import EventVariableBit from "components/modules/common/EventVariableBit"
import EventVariableSelect from "components/modules/common/EventVariableSelect"

const store = inject('store')
const label = "Label"
const optionsEV17 = [
  {label: "On/Off", value: 255},
  {label: "On Only", value: 254},
  {label: "Off Only", value: 253},
  {label: "Flash", value: 248},
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
