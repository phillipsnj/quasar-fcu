<template>
  <q-card class="q-pa-md" flat style="max-width: 300px">
    <q-input
      :label="label"
      :hint="hint"
      v-model="variableValue"
      outlined
      :rules="[value => value <= props.max || 'Number to High',
            value => value >= props.min || 'Number to Low']"
      @change="update_node_variable">
    </q-input>
  </q-card>
</template>

<script>
import {inject, ref, onMounted} from "vue";

export default {
  name: "NodeVariable",
  props: {
    "nodeNumber":{
      type:Number,
      required:true
    },
    "nodeVariableIndex":{
      type:Number,
      required:true
    },
    "name":{
      type:String,
      required:false
    },
    "max":{
      type:Number,
      default:255
    },
    "min":{
      type:Number,
      default:0
    },
    "hint":{
      type:String,
      default:""
    }
  },
  setup(props){
    console.log(props.nodeNumber)
    //var variableValue = ref(29)
    const label = props.name? props.name : "Variable"+props.nodeVariableIndex
    const store = inject('store')
    let variableValue = ref(store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex])
    const update_node_variable = () => {
      if (variableValue.value >= props.min && variableValue.value <= props.max) {
        console.log("Variable has been updated " + variableValue.value)
      } else {
        console.log("Variable has not been updated " + variableValue.value)
      }
    }
    onMounted(() =>{
      const variableValue = store.state.nodes[props.nodeNumber].nodeVariables[props.nodeVariableIndex]
    })
    return {variableValue, props, update_node_variable, label}
  }
}
</script>

<style scoped>

</style>
