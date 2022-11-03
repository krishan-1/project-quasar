<template>
  <q-page class="">
    <router-link class="link q-pa-md" to="/q-card">Q-Card</router-link>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
<style lang="scss">
.link {
  display: inline-block;
}
</style>
