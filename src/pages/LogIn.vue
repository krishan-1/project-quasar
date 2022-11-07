<template>
  <q-page class="flex flex-center">
    <div class="full-width form-sec">
      <h5 class="q-my-md text-center">Login</h5>

      <q-card>
        <q-card-section>
          <q-form>
            <q-input
              filled
              label="email"
              placeholder="email@example.com"
              class="q-mb-md"
            />

            <q-input
              filled
              label="password"
              placeholder="*******"
              class="q-mb-md"
            />
            <q-checkbox label="Remember Me" :model-value="true" />
            <q-btn
              label="login"
              class="full-width bg-primary text-white"
            ></q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.form-sec {
  max-width: 400px;
}
</style>
