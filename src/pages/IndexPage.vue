<template>
  <q-page class="row">
    <!-- <router-link class="link q-pa-md" to="/q-card">Q-Card</router-link> -->
    <q-card class="col-xs-9">
      <q-toolbar class="">
        <q-input
          borderless
          dense
          class="full-width"
          :model-value="search"
          placeholder="search here"
        >
          <template #append>
            <q-icon flat round name="search" />
          </template>
        </q-input>
      </q-toolbar>
      <q-list bordered><TodoList /> </q-list>
    </q-card>

    <div class="col-xs-3 add-sec">
      <q-toolbar class="bg-accent">
        <AddBtn />
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import AddBtn from "components/AddBtn.vue";
import TodoList from "components/TodoList.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    AddBtn,
    TodoList,
  },

  data() {
    return {
      search: "",
    };
  },
});
</script>
<style lang="scss">
.link {
  display: inline-block;
}

.add-sec {
  button {
    margin-bottom: -3rem;
  }
}
</style>
