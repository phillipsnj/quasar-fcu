<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import Canled64EventsList from "components/modules/canled64/canled64EventsList";
import Canled64EventVariables from "components/modules/canled64/canled64EventVariables";

export default {
  name: "Canled64Events",
  components: { Canled64EventsList, Canled64EventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('Canled64EventsList')
      store.methods.update_event_component("Canled64EventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
