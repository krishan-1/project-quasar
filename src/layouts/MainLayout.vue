<template>
  <q-layout class="r" view="hHh Lpr lFf">
    <q-header class="bg-accent">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <!-- <router-link to="/">Home</router-link> -->
        </q-toolbar-title>
        <q-btn side flat round icon="logout"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-toolbar class="bg-accent"></q-toolbar>
        <q-item class="bg-grey-3">
          <q-item-section>Links</q-item-section>
          <q-item-section side>
            <q-btn icon="add" size="sm" flat round></q-btn>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section side>
            <q-icon name="local_mall" />
          </q-item-section>
          <q-item-section>Shopping List</q-item-section>
          <q-item-section side>11</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
