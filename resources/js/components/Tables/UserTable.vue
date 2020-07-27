<template>
  <div id="user-table">
    <loading v-if="showLoading"></loading>
    <md-table v-model="listUsers" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item, index }">
        <md-table-cell md-label="#">{{ index }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Birthday">{{ item.date_of_birth }}</md-table-cell>
        <md-table-cell md-label="Option" width="8%">
          <button
            type="button"
            class="md-button md-just-icon md-simple md-primary md-theme-default"
            @click="userDetail(item)"
          >
            <div class="md-ripple">
              <div class="md-button-content">
                <i class="md-icon md-icon-font md-theme-default">edit</i>
              </div>
            </div>
          </button>
          <button type="button" class="md-button md-just-icon md-simple md-danger md-theme-default">
            <div class="md-ripple">
              <div class="md-button-content">
                <i class="md-icon md-icon-font md-theme-default">close</i>
              </div>
            </div>
          </button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loading from "../../pages/Layout/Loading";
export default {
  name: "user-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  components: {
    Loading
  },
  data() {
    return {
      selected: [],
      listUsers: [],
      showLoading: false
    };
  },

  computed: {
    ...mapState("userStore", {
      users: state => state.users
    })
  },
  created: function() {
    this.getListUser();
  },
  methods: {
    ...mapActions("userStore", ["getUsers"]),

    async getListUser() {
      this.showLoading = true;
      try {
        await this.getUsers();
        this.listUsers = this.users.data;
        setTimeout(() => {
          this.showLoading = false;
        }, 1000);
      } catch (e) {
        setTimeout(() => {
          this.showLoading = false;
        }, 1000);
        return;
      }
    },
    userDetail(item) {
      this.$router.push({ name: "User Detail", params: { id: item.id } });
    }
  }
};
</script>
