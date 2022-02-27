<template>
  <q-card class="q-pa-md" flat style="max-width: 300px">
    <q-input
      :label="props.parameterName"
      v-model="props.parameterValue"
      outlined
    >
    </q-input>
  </q-card>
</template>

<script>
import {onMounted} from "vue";

export default {
  name: "NodeParameter",
  props: ["parameterName", "parameterValue"],
  setup(props) {
    onMounted(() => {
      console.log(`node-parameter mounted` + props.parameterValue)
    })
    return {props}
  }
}
</script>

<style scoped>

</style>
