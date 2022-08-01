<template>
  <div class="bg-primary q-pa-md">
    <div class="q-pa-md bg-white rounded-borders">
      <div class="text-h4">Settings</div>
      <q-card class="q-pa-md" flat>
        <q-input
          label="Title"
          hint="hint"
          outlined
          v-model="store.state.layout.layoutDetails.title"
          @change="store.methods.update_layout()">
        </q-input>
      </q-card>
      <q-card class="q-pa-md" flat>
        <q-input
          label="Sub Title"
          hint="hint"
          outlined
          v-model="store.state.layout.layoutDetails.subTitle"
          @change="store.methods.update_layout()">
        </q-input>
        <q-checkbox v-model="store.state.debug" label="Debug"></q-checkbox>
        <q-checkbox v-model="store.state.advanced" label="Advanced"></q-checkbox>
        <q-checkbox v-model="store.state.develop" label="Develop"></q-checkbox>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import {inject} from "vue";

const store = inject('store')

</script>

<style scoped>

</style>
