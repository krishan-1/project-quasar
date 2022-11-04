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
      <q-list bordered>
        <q-item>
          <q-item-section side>
            <q-checkbox :model-value="true"></q-checkbox>
          </q-item-section>
          <q-item-section> Shopping </q-item-section>
          <q-item-section side>
            <q-btn flat round icon="delete"></q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <div class="col-xs-3 add-sec">
      <q-toolbar class="bg-accent">
        <q-btn flat round color="white" class="bg-secondary q-ml-md" icon="add"></q-btn>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

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

.add-sec{
  button {
    margin-bottom: -3rem;
  }
}
</style>
