<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import CanmioEventsList from "components/modules/canmio/canmioEventsList";
import CanmioEventVariables from "components/modules/canmio/canmioEventVariables";

export default {
  name: "CanmioEvents",
  components: { CanmioEventsList, CanmioEventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('CanmioEventsList')
      store.methods.update_event_component("CanmioEventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
