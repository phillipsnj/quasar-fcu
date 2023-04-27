<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>
    <q-card-section>
      <EventVariableBit
        :nodeNumber="store.state.selected_node"
        :eventIndex=eventIndex
        :eventVariableIndex=eventVariableIndex
        :bit=bit
        :name="name"
      >
      </EventVariableBit>
    </q-card-section>

  </q-card>
</template>

<script setup>
import EventVariableBit from "components/modules/common/EventVariableBit"

import {inject} from "vue";
import {onMounted} from "vue";

const store = inject('store')

const props = defineProps({
  "eventIndex": {
    type: Number,
    required: true
  },
  "eventVariableIndex": {
    type: Number,
    required: true
  },
  "title": {
    type: String,
    required: false
  },
  "bit": {
    type: Number,
    required: true
  },
  "name": {
    type: String,
    required: false
  }
})

onMounted(() => {
//  console.log(`EventVariableBit onMounted`)
})

</script>

<style scoped>

</style>
