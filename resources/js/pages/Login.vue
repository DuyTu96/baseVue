<template>
  <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
      <label for="tab-1" class="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up" />
      <label for="tab-2" class="tab">Sign Up</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <label for="email" class="label">Email</label>
            <input id="email" type="text" class="input" v-model="email" />
          </div>
          <div class="group">
            <label for="pass" class="label">Password</label>
            <input id="pass" type="password" class="input" data-type="password" v-model="password" />
          </div>
          <div class="group">
            <input id="check" type="checkbox" class="check" checked />
            <label for="check">
              <span class="icon"></span> Keep me Signed in
            </label>
          </div>
          <div class="group">
            <input @click="login()" type="submit" class="button" value="Sign In" />
          </div>
          <div class="hr"></div>
          <div class="foot-lnk">
            <a href="#forgot">Forgot Password?</a>
          </div>
        </div>
        <sing-up></sing-up>
      </div>
    </div>
  </div>
</template>

<script>
import SingUp from "./SingUp";
export default {
  components: {
    SingUp
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>
<style>
</style>