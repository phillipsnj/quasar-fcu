<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import Canacc8EventsList from "components/modules/canacc8/canacc8EventsList";
import Canacc8EventVariables from "components/modules/canacc8/canacc8EventVariables";
import Canacc8 from "components/modules/canacc8/canacc8";

export default {
  name: "DefaultEvents",
  components: { Canacc8EventsList, Canacc8EventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('DefaultEventsList')
      store.methods.update_event_component("Canacc8EventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
