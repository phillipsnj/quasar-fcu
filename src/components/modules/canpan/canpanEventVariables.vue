<template>
  <h5>Event Variables</h5>
  <div class="q-pa-xs row items-start q-gutter-md">
    <event-variable
      :event-variable-index="1"
      :event-index="store.state.selected_event_index"
      :node-number="store.state.selected_node"
      name="Event Type"
    >
    </event-variable>
    <event-variable
      :event-variable-index="2"
      :event-index="store.state.selected_event_index"
      :node-number="store.state.selected_node"
      name="Switch Number"
    >
    </event-variable>
  </div>
  <div class="q-pa-xs row items-start q-gutter-md">
    <q-card>
      <q-card-section>
        <div class="text-subtitle1">Switch Actions</div>
        <div class="text-subtitle2">
        </div>
      </q-card-section>
      <div class="q-pa-xs row">
        <q-card-section>
          <event-variable-bit
            :event-variable-index="3"
            :event-index="store.state.selected_event_index"
            :node-number="store.state.selected_node"
            :bit=0
            name="On/Off"
          >
          </event-variable-bit>
        </q-card-section>
        <q-card-section>
          <event-variable-bit
            :event-variable-index="3"
            :event-index="store.state.selected_event_index"
            :node-number="store.state.selected_node"
            :bit=1
            name="Reverse Polarity"
          >
          </event-variable-bit>
        </q-card-section>
        <q-card-section>
          <event-variable-bit
            :event-variable-index="3"
            :event-index="store.state.selected_event_index"
            :node-number="store.state.selected_node"
            :bit=2
            name="On Only"
          >
          </event-variable-bit>
        </q-card-section>
        <q-card-section>
          <event-variable-bit
            :event-variable-index="3"
            :event-index="store.state.selected_event_index"
            :node-number="store.state.selected_node"
            :bit=3
            name="Toggle"
          >
          </event-variable-bit>
        </q-card-section>
        <q-card-section>
          <event-variable-bit
            :event-variable-index="3"
            :event-index="store.state.selected_event_index"
            :node-number="store.state.selected_node"
            :bit=4
            name="Send own LEDs"
          >
          </event-variable-bit>
        </q-card-section>
        <q-card-section>
          <event-variable-bit
            :event-variable-index="3"
            :event-index="store.state.selected_event_index"
            :node-number="store.state.selected_node"
            :bit=5
            name="Send Short Event"
          >
          </event-variable-bit>
        </q-card-section>
      </div>
    </q-card>
  </div>
  <div class="q-pa-xs row items-start q-gutter-md">
    <q-card>
      <q-card-section>
        <div class="text-subtitle1">Active LEDs</div>
        <div class="text-subtitle2">Select to Activate LED</div>
      </q-card-section>
      <q-card-section>
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="5"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+1).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section>
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="6"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+9).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section>
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="7"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+17).toString()
        >
        </event-variable-bit>
      </q-card-section>
      <q-card-section>
        <event-variable-bit
          v-for="n in [0,1,2,3,4,5,6,7]"
          :key="n"
          :event-variable-index="8"
          :event-index="store.state.selected_event_index"
          :node-number="store.state.selected_node"
          :bit=n
          :name=(n+25).toString()
        >
        </event-variable-bit>
      </q-card-section>

    </q-card>

    <q-card>
      <q-card-section>
        <div class="text-subtitle1">Polarity</div>
        <div class="text-subtitle2">SChange Polarity of LED</div>
      </q-card-section>
      <q-card-section>
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
      <q-card-section>
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
      <q-card-section>
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
      <q-card-section>
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
      </q-card-section>
    </q-card>
    <q-card bordered>
      <event-variable-select
        :node-number="store.state.selected_node"
        :event-index="store.state.selected_event_index"
        :event-variable-index="13"
        :options="optionsEV13"
        Title="LED Action"
        Description="Set the mode when LEDS are activated"
      >
      </event-variable-select>
    </q-card>
  </div>

</template>

<script setup>
import EventVariableSelect from "components/modules/common/EventVariableSelect.vue"
import {inject, onBeforeMount} from "vue";
import EventVariable from "components/modules/common/EventVariable";
import EventVariableBit from "components/modules/common/EventVariableBit";

const store = inject('store')
const label = "Label"
const optionsEV13 = [
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

