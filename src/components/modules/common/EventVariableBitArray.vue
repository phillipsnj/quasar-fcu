<template>
  <q-card class="q-pa-md">

    <q-card-section>
      <div class="text-h6">{{ Title }}</div>
      <div class="text-subtitle2">{{ Description }}</div>
    </q-card-section>

     <q-card-section>
      <div v-for="item in bitCollection" :key="item">
        <event-variable-bit
          :nodeNumber=nodeNumber
          :eventVariableIndex=eventVariableIndex
          :eventIndex=eventIndex
          :bit=item.bitPosition
          :name=item.label
        ></event-variable-bit>
      </div>
     </q-card-section>
 
  </q-card>
</template>

<script setup>
import EventVariableBit from "components/modules/common/EventVariableBit"

import { inject, onMounted } from "vue";
const store = inject('store')

const props = defineProps({
  "nodeNumber": {
    type: Number,
    required: true
  },
  "eventIndex": {
    type: Number,
    required: true
  },
  "eventVariableIndex": {
    type: Number,
    required: true
  },
  bitCollection: {
    required: true
  },
  "Title": {
    type: String,
    required: false
  },
  "Description": {
    type: String,
    default: ""
  },
  "learn": {
    type: Boolean,
    default: false
  }
})



onMounted(() => {
  console.log(`EventVariableBitArray onMounted:`)
  console.log(`EventVariableBitArray: props: ${JSON.stringify(props)}`)
})


</script>

<style scoped>

</style>
