<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">{{ displayTitle }}</div>
      <div class="text-subtitle2">{{ displaySubTitle }}</div>
      <div v-for="item in bitCollection" :key="item">
        <node-variable-bit
          :NodeNumber="store.state.selected_node"
          :VariableIndex=VariableIndex
          :Bit=item.bitPosition
          :Name=item.label
        ></node-variable-bit>
      </div>
    </q-card-section>

  </q-card>
</template>

<script setup>
import NodeVariableBit from "components/modules/common/NodeVariableBit"

import { inject, onMounted } from "vue";
const store = inject('store')

const props = defineProps({
  "VariableIndex": {
    type: Number,
    required: true
  },
  "bitCollection": {
    required: true
  },
  "displayTitle": {
    type: String,
    required: false
  },
  "displaySubTitle": {
    type: String,
    default: ""
  }
})

onMounted(() => {
  console.log(`NodeVariableBitArray onMounted:`)
  console.log(`NodeVariableBitArray: props: ${JSON.stringify(props)}`)
})

</script>

<style scoped>

</style>
