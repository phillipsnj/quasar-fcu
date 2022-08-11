<template>
  <div>
    <node-details></node-details>
  </div>
  <div>
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
          <q-tab name="variables" label="Variables"/>
          <q-tab name="events" label="Events"/>
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="info" class="bg-white">
            <default-info/>

          </q-tab-panel>

          <q-tab-panel name="variables" class="bg-white">
            <canacc8-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <canacc8-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import defaultInfo from "components/modules/default/DefaultInfo"
import canacc8Variables from "components/modules/canacc8/canacc8Variables"
import canacc8Events from "components/modules/canacc8/canacc8Events"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "canacc8",
  components: {defaultInfo, canacc8Variables, canacc8Events, NodeDetails},
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
