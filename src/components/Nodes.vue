<template>
  <div class="bg-primary">
<!--    <div class="q-pa-md q-gutter-sm">
      <q-btn color="negative" label="Check Nodes" @click="store.methods.QNN()" no-caps/>
    </div>-->
    <div class="q-pa-md">
      <q-table
        title="Nodes"
        :rows=Object.values(store.state.nodes)
        :columns="columns"
        :filter="filter"
        row-key="nodeNumber"
      >
        <template v-slot:top="">
          <div class="col-2 q-table__title">Nodes</div>
          <q-space />
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-space />
          <q-btn color="negative" label="Check Nodes" @click="store.methods.QNN()" no-caps/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="nodeNumber" :props="props">{{ props.row.nodeNumber }}</q-td>
            <q-td key="module" :props="props">{{ props.row.module }}</q-td>
            <q-td key="component" :props="props">{{ props.row.component }}</q-td>
            <q-td key="status" :props="props">
              <q-chip color="white" text-color="green" v-if="props.row.status">OK</q-chip>
              <q-chip color="white" text-color="red" v-else>Error</q-chip>
            </q-td>
            <q-td key="status" :props="props">
              <q-btn color="primary" flat rounded label="Edit"
                     @click="editNode(props.row.nodeNumber, props.row.component)" no-caps/>
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <p v-if="store.state.debug">
        {{ Object.values(store.state.nodes) }}
      </p>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

const columns = [
  {name: 'nodeNumber', field: 'nodeNumber', required: true, label: 'Node Number', align: 'left', sortable: true},
  {name: 'module', field: 'module', required: true, label: 'Module', align: 'left', sortable: true},
  {name: 'component', field: 'component', required: true, label: 'component', align: 'left', sortable: true},
  {name: 'status', field: 'status', required: true, label: 'Status', align: 'left', sortable: true}
]

export default {
  name: "Nodes",
  setup() {
    const store = inject('store')
    const filter = ref('')
    const editNode = (nodeId, component) => {
      store.state.selected_node = nodeId
      store.state.display_component = "node"
    }
    return {
      store, columns, editNode, filter
    }
  }
}
</script>

<style scoped>

</style>
