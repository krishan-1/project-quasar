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
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-toolbar class="bg-accent"></q-toolbar>
        <q-item class="bg-grey-3">
          <q-item-section>Links</q-item-section>
          <q-item-section side>
            <CreateTodoBtn flat round size="sm" />
          </q-item-section>
        </q-item>
        <TodoListsList />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import CreateTodoBtn from "src/components/CreateTodoBtn.vue";
import TodoListsList from "src/components/TodoListsList.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: { CreateTodoBtn, TodoListsList },

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
