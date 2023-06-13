<template>
  <div class="q-pa-md" >
    <q-banner inline-actions>
      <div class="text-h6">
        Service Index {{nodeService.ServiceIndex}} : {{nodeService.ServiceName}}
      </div>
      <template v-slot:action>
        <q-btn color="negative" label="<Back" @click="showServicesList()" no-caps/>
      </template>
    </q-banner>
  </div>
  
  <div class="full-width" >
    <q-table
      title="Diagnostics"
      :rows=rows
      :columns="columns"
      row-key="diagnosticCode"
      virtual-scroll
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="diagnosticCode" :props="props">{{ props.row.diagnosticCode }}</q-td>
          <q-td key="diagnosticValue" :props="props">{{ props.row.diagnosticValue}}</q-td>
          <q-td key="diagnosticName" :props="props">{{ props.row.diagnosticName}}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import {inject, onBeforeMount, computed, watch, ref} from "vue";
import Default2NodeServicesList from "components/modules/default2/Default2NodeServicesList";

console.log(`Default2ServiceDiagnostics:`)

const columns = [
  {name: 'diagnosticCode', field: 'diagnosticCode', required: true, label: 'Diagnostic Code', align: 'left', sortable: true},
  {name: 'diagnosticValue', field: 'diagnosticValue', required: false, label: 'Diagnostic Value', align: 'left', sortable: true},
  {name: 'diagnosticName', field: 'diagnosticName', required: true, label: 'Name', align: 'left', sortable: true}
]

const store = inject('store')
const rows = ref([])

const nodeServiceDiagnostics = computed(() =>{
  return Object.values(store.state.nodes[store.state.selected_node].services[store.state.selected_service_index].diagnostics)
})

watch(nodeServiceDiagnostics, () => {
  update_rows()
})

const nodeService = store.state.nodes[store.state.selected_node].services[store.state.selected_service_index]
console.log(`Default2ServiceDiagnostics: Service: ${JSON.stringify(nodeService)}`)

const update_rows = () => {
  rows.value = []
  nodeServiceDiagnostics.value.forEach(diagnostic => {
    let output = {}
      output['diagnosticCode'] = diagnostic.DiagnosticCode
      output['diagnosticValue'] = diagnostic.DiagnosticValue
      output['diagnosticName'] = diagnostic.DiagnosticName
      rows.value.push(output)
  })
}

onBeforeMount(() => {
  update_rows()
  console.log(`Default2ServiceDiagnostics: OnBeforeMount`)
})

const showServicesList = () => {
  console.log(`showServicesList`)
  store.methods.update_services_component("Default2NodeServicesList")
}


</script>

<style scoped>

</style>
