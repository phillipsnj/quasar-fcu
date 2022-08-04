<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="text-h4 text-white">
      <node-details></node-details>
    </div>
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
            <canace8c-variables/>
          </q-tab-panel>

          <q-tab-panel name="events" class="bg-white">
            <canace8c-events/>
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script setup>
import {inject, ref} from "vue";
//import Canace8cInfo from "components/modules/canace8c/canpanInfo.vue"
import DefaultInfo from "components/modules/default/DefaultInfo"
import Canace8cVariables from "components/modules/canace8c/canace8cVariables.vue"
import Canace8cEvents from "components/modules/canace8c/canace8cEvents.vue"
import NodeDetails from "components/modules/common/NodeDetails"

const store = inject('store')
const tab = ref('info')

</script>

<style scoped>

</style>
