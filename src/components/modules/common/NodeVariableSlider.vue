<template>
  <q-card class="q-pa-xs" style="width: 300px">
    <q-card-section>
      <div class="text-h6">{{ Title }}</div>
      <div class="text-subtitle2">{{ Description }}</div>
    </q-card-section>
    <q-card-section>
      <q-badge color="secondary">
        {{ Badge }} {{ variableValue * BadgeMulti }} {{ BadgeUnit }}
      </q-badge>
      <q-slider
        v-model="variableValue"
        :max="max"
        :min="min"
        @change="update_variable"
      >
      </q-slider>
    </q-card-section>
  </q-card>
</template>

<script setup>
import {inject, ref, onMounted, computed} from "vue";

const props = defineProps({
  "nodeNumber": {
    type: Number,
    required: true
  },
  "nodeVariableIndex": {
    type: Number,
    required: true
  },
  "Title": {
    type: String,
    required: false
  },
  "Description": {
    type: String,
    required: false
  },
  "Badge": {
    type: String,
    default: ''
  },
  "BadgeMulti": {
    type: Number,
    default: 1
  },
  "BadgeUnit": {
    type: String,
    default: ""
  },
  "max": {
    type: Number,
    default: 255
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

console.log(`Node Variable : ` + props.nodeNumber)
//var variableValue = ref(29)
const label = props.name ? props.name : "Variable" + props.nodeVariableIndex
const store = inject('store')
const error = ref(false)
const error_message = ref('')


const variableValue = computed({
  get() {
    return store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex]
  },
  set(newValue) {
    console.log(`NewValue : ${newValue}`)
    if (newValue <= props.max && newValue >= props.min) {
      console.log(`update_variable : ${newValue}`)
      error.value = false
      error_message.value = ''
      if (props.learn) {
        store.methods.update_node_variable_in_learn_mode(props.nodeNumber, props.nodeVariableIndex, newValue)
      } else {
        store.methods.update_node_variable(props.nodeNumber, props.nodeVariableIndex, newValue)
      }
    } else {
      console.log(`Invalid Value : ${newValue}`)
      error_message.value = 'Invalid Value'
      error.value = true
    }
  }
})

const update_variable = (newValue) => {
  if (error.value) {
    console.log(`Invalid Value : ${newValue}`)
  } else {
    console.log(`update_variable : ${newValue}`)
  }
  /*if (newValue <= props.max && newValue >= props.min) {
    console.log(`update_variable : ${newValue}`)
    error.value = false
    error_message.value = ''
    store.methods.update_node_variable(props.nodeNumber, props.nodeVariableIndex, newValue)
  } else {
    console.log(`Invalid Value : ${newValue}`)
    error_message.value = 'Invalid Value'
    error.value = true
  }*/
}

onMounted(() => {
  console.log(`NodeVariableSlider`)
  //variableValue = ref(store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex])
})


</script>

<style scoped>

</style>
