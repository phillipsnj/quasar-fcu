<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">{{ Title }}</div>
      <div class="text-subtitle2">{{ Description }}</div>
    </q-card-section>
    <q-card-section>
       <event-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :nodeNumber=nodeNumber
        :eventVariableIndex=eventVariableIndex
        :eventIndex=eventIndex
        :bit=n
        :learn=learn
        :Name="(n+1).toString()"
      >
      </event-variable-bit>
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
})


</script>

<style scoped>

</style>
