<template>
  <div class="text-left">This is expand slot for row above: {{ props.eventIdentifier }}</div>
  <q-card class="q-pa-md" flat style="max-width: 300px">
    <q-input
      outlined
      v-model="eventName"
      label="Event Name"
      hint="Name of Event"
      maxlength="30"
      @change="update_event">
    </q-input>
    <q-select
      outlined
      v-model="eventColour"
      :options="store.state.colours"
      label="Event Colour"
      hint="Colour of Event"
      maxlength="30"
      @update:model-value="update_event">
    </q-select>
    <q-input
      outlined
      v-model="eventGroup"
      label="Event Group"
      hint="Group of Event"
      maxlength="30">
    </q-input>
  </q-card>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";

const props = defineProps({
  "eventIdentifier": {
    type: String,
    required: true
  }
})

const eventName = ref('')
const eventColour = ref('')
const eventGroup = ref('')

const store = inject('store')

onMounted(() => {
  //console.log(`Event Details Mounted ${props.eventIdentifier})`)
  if ( props.eventIdentifier in store.state.layout.eventDetails) {
    //console.log(`Event Layout`)
    eventName.value = store.state.layout.eventDetails[props.eventIdentifier].name
    eventColour.value = store.state.layout.eventDetails[props.eventIdentifier].colour
    eventGroup.value = store.state.layout.eventDetails[props.eventIdentifier].group
  } else {
    //console.log(`Event No Layout ${props.eventIdentifier}`)
    eventName.value = props.eventIdentifier
    eventColour.value = "black"
    eventGroup.value = ""
  }
})

const update_event = () => {
  //console.log(`Event Details Update Event`)
  if ( props.eventIdentifier in store.state.layout.eventDetails === false) {
    store.state.layout.eventDetails[props.eventIdentifier] = {}
  }
  store.state.layout.eventDetails[props.eventIdentifier].name = eventName.value
  store.state.layout.eventDetails[props.eventIdentifier].colour = eventColour.value
  store.state.layout.eventDetails[props.eventIdentifier].group = eventGroup.value
  store.methods.update_layout()

}

</script>

<style scoped>

</style>
