<template>
  <q-card class="q-pa-md" flat style="max-width: 300px">
    <q-input
      :label="props.Name"
      v-model="props.Value"
      outlined
      readonly
    >
    </q-input>
  </q-card>
</template>

<script>
import {onMounted} from "vue";

export default {
  name: "NodeParameter",
  props: ["Name", "Value"],
  setup(props) {
    /*onMounted(() => {
      console.log(`node-parameter mounted ` + props.Value)
    })*/
    return {props}
  }
}
</script>

<style scoped>

</style>
