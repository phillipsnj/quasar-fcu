<template>
  <div class="q-pa-md">
    <q-table
      title="Events"
      :rows=Object.values(store.state.events)
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="eventIdentifier" :props="props">{{ props.row.id }}</q-td>
          <q-td key="nodeNumber" :props="props">{{ props.row.nodeNumber }}</q-td>
          <q-td key="eventNumber" :props="props">{{ props.row.eventNumber }}</q-td>
          <q-td key="status" :props="props">
            <q-chip color="white" text-color="green" v-if="props.row.status=='on'">ON</q-chip>
            <q-chip color="white" text-color="red" v-else>OFF</q-chip>
          </q-td>
          <q-td key="type" :props="props">{{ props.row.type }}</q-td>
          <q-td key="count" :props="props">{{ props.row.count }}</q-td>
<!--          <q-td key="status" :props="props">
            <q-btn color="primary" flat rounded label="Edit"
                   @click="editNode(props.row.nodeNumber, props.row.component)" no-caps/>
          </q-td>-->
        </q-tr>
      </template>
    </q-table>
  </div>
  <div>
    <p v-if="store.state.debug">
      {{ Object.values(store.state.events) }}
    </p>
  </div>
</template>

<script setup>
import {inject} from "vue";

const columns = [
  {name: 'eventIdentifier', field: 'id', required: true, label: 'Event Identifier', align: 'left', sortable: true},
  {name: 'nodeNumber', field: 'nodeNumber', required: true, label: 'Node Number', align: 'left', sortable: true},
  {name: 'eventNumber', field: 'eventNumber', required: true, label: 'Event Number', align: 'left', sortable: true},
  {name: 'status', field: 'status', required: true, label: 'Status', align: 'left', sortable: true},
  {name: 'type', field: 'type', required: true, label: 'Type', align: 'left', sortable: true},
  {name: 'count', field: 'count', required: true, label: 'Count', align: 'left', sortable: true}
]
const store = inject('store')
</script>

<style scoped>

</style>
