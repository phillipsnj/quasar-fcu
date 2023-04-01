<template>
  <div>
    <component v-bind:is="store.state.events_component"></component>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
import DefaultLcbEventsList from "components/modules/defaultlcb/DefaultLcbEventsList";
import DefaultLcbEventVariables from "components/modules/defaultlcb/DefaultLcbEventVariables";

export default {
  name: "DefaultLcbEvents",
  components: { DefaultLcbEventsList, DefaultLcbEventVariables},
  setup() {
    const store = inject('store')
    onBeforeMount(()=> {
      //console.log('DefaultEventsList')
      store.methods.update_event_component("DefaultLcbEventsList")
    })
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
