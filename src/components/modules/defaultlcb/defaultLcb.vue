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
      <q-tab name="variables" label="Variables" v-if="store.state.nodes[store.state.selected_node].flim"/>
      <q-tab name="events" label="Events" v-if="store.state.nodes[store.state.selected_node].flim"/>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="info" class="bg-white">
        <default-lcb-info/>

      </q-tab-panel>

      <q-tab-panel name="variables" class="bg-white">
        <default-lcb-variables/>
      </q-tab-panel>

      <q-tab-panel name="events" class="bg-white">
        <default-lcb-events/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import DefaultLcbInfo from "components/modules/defaultlcb/DefaultLcbInfo"
import DefaultLcbVariables from "components/modules/defaultlcb/DefaultLcbVariables"
import DefaultLcbEvents from "components/modules/defaultlcb/DefaultLcbEvents"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "mergLcbDefault",
  components: {DefaultLcbInfo, DefaultLcbVariables, DefaultLcbEvents, NodeDetails},
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
