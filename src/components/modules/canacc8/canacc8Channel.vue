<template>
  <div class="q-pa-md row">
    <q-card>
      <q-card-section>
        <div class="text-subtitle2">Channel {{ Channel }}</div>
      </q-card-section>
      <q-card-section>
        <q-badge color="secondary">
          {{ type }} {{ timeRef * 10 }} ms
        </q-badge>
        <q-slider
          v-model="timeRef"
          :max=127
          :min=0
          @change="update_variable"
        >
        </q-slider>
        <q-checkbox min-width="100"
                    v-model="flash"
                    label="Flash"
                    @click="update_flash"
                    Name="Flash"
                    left-label
                    v-bind:class="{ disabled: flashDisabled }">
        </q-checkbox>
        <node-variable-bit
          :Bit="Channel-1"
          :VariableIndex="11"
          :NodeNumber="store.state.selected_node"
          Name="Respond to SOD">
        </node-variable-bit>
        <node-variable-bit
          :Bit="Channel-1"
          :VariableIndex="10"
          :NodeNumber="store.state.selected_node"
          Name="Send Off instead of Saved Event">
        </node-variable-bit>
      </q-card-section>
    </q-card>
    <NodeVariable :node-variable-index="Channel"
                  :node-number=store.state.selected_node>
    </NodeVariable>
  </div>
</template>

<script setup>
import NodeVariable from "components/modules/common/NodeVariable"
import NodeVariableSlider from "components/modules/common/NodeVariableSlider"
import NodeVariableBit from "components/modules/common/NodeVariableBit"
import {inject, onBeforeMount, ref, computed, watch} from "vue"

const props = defineProps({
  "NodeNumber": {
    type: Number,
    required: true
  },
  "Channel": {
    type: Number,
    required: true
  }
})

const store = inject('store')
const timeRef = ref()
const type = ref('')
const flash = ref(false)
const flashDisabled = ref(true)

const variableValue = computed(() => {
  return store.state.nodes[props.NodeNumber].nodeVariables[props.Channel]
})

watch(variableValue, () => {
  update_details()
})

const update_variable = (newValue) => {
  console.log(`cannacc8Channel update_variable ${flash.value} ${newValue}`)
  if (newValue == 0) {
    flashDisabled.value = true
    flash.value == false
    store.methods.update_node_variable(props.NodeNumber, props.Channel, 0)
  } else {
    flashDisabled.value = false
    if (flash.value == false) {
      store.methods.update_node_variable(props.NodeNumber, props.Channel, newValue)
    } else {
      store.methods.update_node_variable(props.NodeNumber, props.Channel, newValue + 127)
    }
  }
}

const update_pulse = () => {
  console.log(`cannacc8Channel update_pulse`)
}

const update_flash = () => {
  console.log(`cannacc8Channel update_flash ${flash.value} ${flashDisabled.value}`)
  if (variableValue.value == 0) {
    flashDisabled.value = true
    flash.value = false
    store.methods.update_node_variable(props.NodeNumber, props.Channel, 0)
  } else {
    flashDisabled.value = false
    if (flash.value == false) {
      store.methods.update_node_variable(props.NodeNumber, props.Channel, variableValue.value - 127)
    } else {
      store.methods.update_node_variable(props.NodeNumber, props.Channel, variableValue.value + 127)
    }
  }
}

const update_details = () => {
  console.log(`cannacc8Channel update_details ${variableValue.value} ${flash.value}`)
  if (variableValue.value == 0) {
    type.value = 'On'
    flash.value = false
    timeRef.value = 0
    flashDisabled.value = true
  } else if (variableValue.value > 127) {
    timeRef.value = variableValue.value - 127
    type.value = 'Flash'
    flash.value = true
    flashDisabled.value = false
  } else {
    timeRef.value = variableValue.value
    type.value = 'Pulse'
    flash.value = false
    flashDisabled.value = false
  }
}

onBeforeMount(() => {
  store.methods.request_all_node_variables(store.state.selected_node, store.state.nodes[store.state.selected_node].parameters[6], 100, 1)
  update_details()
})

</script>

<style scoped>

</style>
