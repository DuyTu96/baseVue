<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" src="/images/logo/logo.png" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">PHP Developer</h6>
      <h4 class="card-title">{{ userDetail.name }}</h4>
      <md-list>
        <md-list-item>
          <md-icon>cake</md-icon>
          <span class="md-list-item-text">{{ userDetail.date_of_birth }}</span>
        </md-list-item>

        <md-list-item>
          <md-icon>home_work</md-icon>
          <span class="md-list-item-text">{{ userDetail.address }}</span>
        </md-list-item>

        <md-list-item>
          <md-icon>phone</md-icon>
          <span class="md-list-item-text">{{ userDetail.phone }}</span>
        </md-list-item>

        <md-list-item>
          <md-icon>device_hub</md-icon>
          <span class="md-list-item-text">Division 3</span>
        </md-list-item>

        <md-list-item>
          <md-icon>description</md-icon>
          <span class="md-list-item-text">Description</span>
        </md-list-item>
      </md-list>

      <button type="button" class="md-button md-round md-success md-theme-default">
        <div class="md-ripple">
          <div class="md-button-content">Follow</div>
        </div>
      </button>
    </md-card-content>
  </md-card>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "user-card",
  props: ['userDetail'],
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
