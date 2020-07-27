<template>
  <div class="md-layout-item md-small-size-100 md-size-75">
    <form class="formProfile">
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Edit Profile</h4>
          <p class="category">Complete your profile</p>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>First Name</label>
                <md-input v-model="first_name" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Last Name</label>
                <md-input v-model="last_name" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>User Name</label>
                <md-input v-model="name" type="text" disabled></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Email Address</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Phone Number</label>
                <md-input v-model="phone" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Password</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Confirm Password</label>
                <md-input v-model="repassword" type="password"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Adress</label>
                <md-input v-model="address" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Birthday</label>
                <md-input type="date" v-model="date_of_birth"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label class="label-slc">Birthday</label>
                <select name class="slc-md">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3" selected>3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Postal Code</label>
                <md-input type="number"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field maxlength="5">
                <label>About Me</label>
                <md-textarea v-model="aboutme"></md-textarea>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <button type="button" class="md-button md-raised md-success md-theme-default">
                <div class="md-ripple">
                  <div class="md-button-content">Update Profile</div>
                </div>
              </button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "user-create",
  data() {
    return {
      first_name: "",
      last_name: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      repassword: "",
      address: "",
      date_of_birth: "1999-01-01",
      aboutme: ""
    }
  },
};
</script>
<style>
</style>
