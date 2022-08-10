<template>
  <q-card class="q-pa-xs" flat bordered style="max-width: 300px">
    <q-card-section>
      <div class="text-h6">{{ Title }}</div>
      <div class="text-subtitle2">{{ Description }}</div>
    </q-card-section>
    <q-card-section>
    <q-select
      v-model="variable"
      :options="options"
      map-options
      @update:model-value="update_variable"
    >
    </q-select>
    </q-card-section>
  </q-card>
<!--<q-card class="q-pa-sm" style="max-width: 300px">
    <q-input
      class="bg-white"
      :label="label"
      :hint="hint"
      v-model="variable"
      outlined
      readonly
    >

    </q-input>
  </q-card>-->
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
  "options": {
    required: true
  },
  "hint": {
    type: String,
    default: ""
  },
  "Title": {
    type: String,
    default: ""
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

console.log(`Node Variable : ` + props.nodeNumber)
const label = props.name ? props.name : "Variable" + props.nodeVariableIndex
const store = inject('store')
const variable = ref()

const variableValue = computed(() =>{
  return store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex]
})

watch(variableValue, () => {
  variable.value = variableValue.value
})

const update_variable = (newValue) => {
  console.log(`NodeVariableSelect update_variable ${newValue.value}`)
  store.methods.update_node_variable(props.nodeNumber, props.nodeVariableIndex, newValue.value)
}


onMounted(() => {
  //console.log(`NodeVariableSelect`)
  variable.value = variableValue.value
  //variableValue = ref(store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex])
})


</script>

<style scoped>

</style>
