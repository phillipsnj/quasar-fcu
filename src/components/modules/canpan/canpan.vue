<template>
  <div>
    <div class="text-h4 text-black">
      <node-details></node-details>
    </div>
  </div>
  <div>
    <div>
        <q-tabs
          v-model="tab"
          dense
          class="text-black"
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
            <canpan-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <canpan-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script setup>
import {inject, ref} from "vue";
//import CanpanInfo from "components/modules/canpan/canpanInfo.vue"
import DefaultInfo from "components/modules/default/DefaultInfo"
import CanpanVariables from "components/modules/canpan/canpanVariables.vue"
import CanpanEvents from "components/modules/canpan/canpanEvents.vue"
import NodeDetails from "components/modules/common/NodeDetails"

const store = inject('store')
const tab = ref('info')

</script>

<style scoped>

</style>
