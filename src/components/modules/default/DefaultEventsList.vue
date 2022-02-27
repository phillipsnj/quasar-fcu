<template>
  <div class="q-pa-md">
    <q-table
      title="Consumed Events"
      :rows=Object.values(store.state.nodes[store.state.selected_node].consumedEvents)
      :columns="columns"
      row-key="eventIdentifier"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="eventIdentifier" :props="props">{{ props.row.eventIdentifier }}</q-td>
          <q-td key="eventIndex" :props="props">{{ props.row.eventIndex }}</q-td>
          <q-td key="edit" :props="props">
            <q-btn color="primary" flat rounded label="Edit" @click="editEvent(props.row.eventIndex)" no-caps/>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <p v-if="store.state.debug">
      {{ Object.values(store.state.events) }}
    </p>
  </div>
</template>

<script>
import {inject, onBeforeMount} from "vue";
import DefaultEventVariables from "components/modules/default/DefaultEventVariables";

const columns = [
  {name: 'eventIdentifier', field: 'eventIdentifier', required: true, label:'Event', align:'left', sortable: true},
  {name: 'eventIndex', field: 'eventIndex', required: true, label:'Event Index', align:'left', sortable: true},
  {name: 'edit', field: 'edit',required: true, label:'Edit', align:'left', sortable: true}
]

export default {
  name: "DefaultEvents",
  components: {  },
  setup() {
    const store = inject('store')
    onBeforeMount(()=>{
      store.methods.request_all_node_events(store.state.selected_node)
    })
    const editEvent = (eventIndex) => {
      console.log(`editEvent`)
      store.state.selected_event_index = eventIndex
      store.methods.update_event_component("DefaultEventVariables")
    }
    return { store, columns, editEvent }
  }
}
</script>

<style scoped>

</style>
