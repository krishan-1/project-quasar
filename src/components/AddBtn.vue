<template>
  <div>
    <q-btn
      flat
      round
      color="white"
      class="bg-secondary q-ml-md"
      icon="add"
      @click="handleBtnClicked"
    ></q-btn>
  </div>
</template>

<script>
export default {

  methods: {
    handleBtnClicked(){
      this.$q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text'
        }
      }).onOk(this.createTodo)
    },
    createTodo(data){
      this.$q.notify({
        message: "Todo Created",
        icon: 'check',
        color: 'positive'
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
