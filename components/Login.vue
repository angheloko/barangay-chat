<template>
  <div class="text-center">
    <button
      @click="signIn"
    >
      <img src="/images/facebook-login-button.png" width="300" class="mx-auto">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    signIn () {
      const provider = new this.$firebase.auth.FacebookAuthProvider()
      this.$firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>

<style scoped>

</style>
