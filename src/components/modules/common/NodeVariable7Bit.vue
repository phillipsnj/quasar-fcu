<template>
  <q-card class="q-pa-xs" flat style="max-width: 300px">
    <q-input
      mask="###"
      class="bg-white"
      filled
      :label="label"
      debounce="1000"
      :hint="hint"
      v-model="variable"
      outlined
      :error-message="error_message"
      :error="error"
      @change="update_variable"
    >
    </q-input>
  </q-card>
</template>

<script setup>
import {inject, ref, onMounted, computed, watch} from "vue";

const props = defineProps({
  "nodeNumber": {
    type: Number,
    required: true
  },
  "nodeVariableIndex": {
    type: Number,
    required: true
  },
  "name": {
    type: String,
    required: false
  },
  "max": {
    type: Number,
    default: 127
  },
  "min": {
    type: Number,
    default: 0
  },
  "hint": {
    type: String,
    default: ""
  },
  "learn": {
    type: Boolean,
    default: false
  }
})

const label = props.name ? props.name : "Variable" + props.nodeVariableIndex
const store = inject('store')
const error = ref(false)
const error_message = ref('')
const variable = ref()

const variableValue = computed(() =>{
    return store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex]
})

watch(variableValue, () => {
	// don't want the top bit
  variable.value = variableValue.value & 0x7F
})

const update_variable = (newValue) => {
  console.log(`New : ${newValue} old : ${variableValue.value} `)
  if (newValue < props.min || newValue > props.max) {
    //console.log(`Invalid Value : ${newValue}`)
    error.value = true
    error_message.value = 'Invalid Value'
  } else {
    //console.log(`Value Ok : ${newValue}`)
    error.value = false
    error_message.value = ''
	// keep top bit of previous value
	newValue = (newValue & 0x7F) | (variableValue.value & 0x80)
    store.methods.update_node_variable(props.nodeNumber, props.nodeVariableIndex, newValue)
  }
}

onMounted(() => {
  console.log(`NodeVariable7Bit Mounted`)
  variable.value = variableValue.value & 0x7F
})


</script>

<style scoped>

</style>
