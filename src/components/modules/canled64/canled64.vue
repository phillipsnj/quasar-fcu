<template>
  <div class="q-pa-md q-gutter-sm">
    <node-details></node-details>
  </div>
  <div class="q-pa-md">
    <div>
        <q-tabs
          v-model="tab"
          dense
          class="text-white"
          active-color="black"
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
            <canled64-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <canled64-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
import {inject, ref} from "vue";
import DefaultInfo from "components/modules/default/DefaultInfo"
import canled64Variables from "components/modules/canled64/canled64Variables"
import canled64Events from "components/modules/canled64/canled64Events"
import NodeDetails from "components/modules/common/NodeDetails"

export default {
  name: "canled64",
  components: {DefaultInfo, canled64Variables, canled64Events, NodeDetails},
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
