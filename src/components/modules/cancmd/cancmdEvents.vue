<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import CancmdEventsList from "components/modules/cancmd/cancmdEventsList";
import CancmdEventVariables from "components/modules/cancmd/cancmdEventVariables";

export default {
  name: "DefaultEvents",
  components: { CancmdEventsList, CancmdEventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('DefaultEventsList')
      store.methods.update_event_component("CancmdEventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
