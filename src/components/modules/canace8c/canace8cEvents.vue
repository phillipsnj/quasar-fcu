<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import Canace8cEventsList from "components/modules/canace8c/canace8cEventsList";
import Canace8cEventVariables from "components/modules/canace8c/canace8cEventVariables";

export default {
  name: "canEvents",
  components: { Canace8cEventsList, Canace8cEventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('Canace8cEventsList')
      store.methods.update_event_component("Canace8cEventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
