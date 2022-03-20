<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" >
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="nodes" label="Nodes"/>
          <q-tab name="events" label="Events"/>
          <q-tab name="settings" label="settings"/>
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="nodes">
            <div class="text-h6">Nodes</div>

            <pre>
              {{ store.state.nodes }}
            </pre>
          </q-tab-panel>

          <q-tab-panel name="events">
            <div class="text-h6">Events</div>
            <pre>
              {{ store.state.events }}
            </pre>
          </q-tab-panel>

          <q-tab-panel name="settings">
            <div class="text-h6">Settings</div>
            <pre>
            {{ store.state.layout }}
            </pre>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <!--      <VueJsonPretty :data="store.state.nodes"
                           collapsedOnClickBrackets=True
                           deepCollapseChildren=True
                           :deep="1">
            </VueJsonPretty>-->
    </div>
  </div>
</template>

<script>
import {ref, inject} from 'vue'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  name: "JSON",
  // components: {VueJsonPretty},
  setup() {
    const store = inject('store')
    return {
      tab: ref('nodes'),
      store
    }
  }
}
</script>

<style scoped>

</style>
