<template>
  <div class="q-pa-md">
    <q-table
      title="Events"
      :rows=Object.values(store.state.events)
      :columns="columns"
      :filter="filter"
      row-key="id"
      virtual-scroll
      v-model:pagnation="pagnation"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
    >
      <template v-slot:top="">
        <div class="col-2 q-table__title text-h4">Events</div>
        <q-space />
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td key="eventName" :props="props">
            <div class="text-pre-wrap">Event Name</div>
          </q-td>
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
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.id }}.</div>
          </q-td>
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
import {inject, ref } from "vue";

const columns = [
  {name: 'eventName', field: 'name', required: true, label: 'Event Name', align: 'left', sortable: true},
  {name: 'eventIdentifier', field: 'id', required: true, label: 'Event Identifier', align: 'left', sortable: true},
  {name: 'nodeNumber', field: 'nodeNumber', required: true, label: 'Node Number', align: 'left', sortable: true},
  {name: 'eventNumber', field: 'eventNumber', required: true, label: 'Event Number', align: 'left', sortable: true},
  {name: 'status', field: 'status', required: true, label: 'Status', align: 'left', sortable: true},
  {name: 'type', field: 'type', required: true, label: 'Type', align: 'left', sortable: true},
  {name: 'count', field: 'count', required: true, label: 'Count', align: 'left', sortable: true}
]
const store = inject('store')
const filter = ref('')
const pagnation = { rowsPerPage: 0 }
</script>

<style scoped>

</style>
