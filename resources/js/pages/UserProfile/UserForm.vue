<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"></edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card :userDetail="userDetail"></user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "../../pages";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    EditProfileForm,
    UserCard
  },
  data() {
    return {
      id: this.$route.params.id,
      userDetail: {}
    };
  },
  computed: {
    ...mapState("userStore", {
      user: state => state.user
    })
  },
  created() {
    this.getUserDetail();
  },
  methods: {
    ...mapActions("userStore", ["getUser"]),

    async getUserDetail() {
      await this.getUser(this.id);
      this.userDetail = this.user.data;
    }
  },
};
</script>
