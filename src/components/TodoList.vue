<template>
  <q-list>
    <q-item>
      <q-item-section side>
        <UpdateTodoCheckbox :model-value="true" />
      </q-item-section>
      <q-item-section> Shopping </q-item-section>
      <q-item-section side>
        <DeleteTodoBtn />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import UpdateTodoCheckbox from "components/UpdateTodoCheckbox.vue";
import DeleteTodoBtn from "components/DeleteTodoBtn.vue";

export default {
  components: {
    UpdateTodoCheckbox,
    DeleteTodoBtn,
  },
};
</script>

<style lang="scss" scoped></style>
