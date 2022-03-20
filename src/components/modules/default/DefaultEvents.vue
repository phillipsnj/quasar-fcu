<template>
  <div class="q-pa-md">
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import DefaultEventsList from "components/modules/default/DefaultEventsList";
import DefaultEventVariables from "components/modules/default/DefaultEventVariables";

export default {
  name: "DefaultEvents",
  components: { DefaultEventsList, DefaultEventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      console.log('DefaultEventsList')
      store.methods.update_event_component("DefaultEventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
