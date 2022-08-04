<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">{{ Title }}</div>
      <div class="text-subtitle2">{{ Description }}</div>
    </q-card-section>
    <q-card-section>
      <node-variable-bit
        v-for="n in [0,1,2,3,4,5,6,7]"
        :key="n"
        :NodeNumber="store.state.selected_node"
        :VariableIndex=VariableIndex
        :Bit=n
        :learn=learn
        :Name="(n+1).toString()"
      >
      </node-variable-bit>
    </q-card-section>

  </q-card>
</template>

<script setup>
import NodeVariableBit from "components/modules/common/NodeVariableBit"

import { inject } from "vue";
const store = inject('store')

const props = defineProps({
  "VariableIndex": {
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
</script>

<style scoped>

</style>
