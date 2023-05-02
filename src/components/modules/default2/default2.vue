<template>
  <div>
    <node-details></node-details>
  </div>
  <div>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="info" label="Info"/>
      <q-tab name="variables" label="Node Variables" v-if="store.state.nodes[store.state.selected_node].flim"/>
      <q-tab name="events" label="Events" v-if="store.state.nodes[store.state.selected_node].flim"/>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="info" class="bg-white">
        <default2-info/>

      </q-tab-panel>

      <q-tab-panel name="variables" class="bg-white">
        <default2-variables/>
      </q-tab-panel>

      <q-tab-panel name="events" class="bg-white">
        <default2-events/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import Default2Info from "./Default2Info"
import Default2Variables from "./Default2Variables"
import Default2Events from "./Default2Events"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "mergDefault2",
  components: {Default2Info, Default2Variables, Default2Events, NodeDetails},
  setup() {
    const store = inject('store')
 
    return {
      tab: ref('info'),
      store
    }
  }
}
</script>

<style scoped>

</style>
