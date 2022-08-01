<template>
  <div class="bg-primary q-pa-md">
    <div class="q-pa-md q-mr-sm rounded-borders">
      <div class="text-h4 text-white">Elements Page</div>
      <q-card>
        <div class="q-pa-md row">
          <q-input class="q-pa-md" v-model="name" label="Name"></q-input>
          <q-input class="q-pa-md" v-model="nodeNumber" label="Node Number"></q-input>
          <q-input class="q-pa-md" v-model="nodeVariableIndex" label="Variable Number"></q-input>
        </div>
        <div class="q-pa-md row">
          <node-variable :node-variable-index="nodeVariableIndex"
                         :node-number="nodeNumber"
                         :name="name">
          </node-variable>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import NodeVariable from "components/modules/common/NodeVariable"

import {inject, ref} from "vue";

const store = inject('store')

const label = ref("Variable")
const error = ref(false)
const error_message = ref('Error Message')
const nodeNumber = ref(256)
const nodeVariableIndex = ref(1)
const name = ref("Variable")


</script>
