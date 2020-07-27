<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
            <button
              type="button"
              class="md-button md-just-icon md-theme-default btn-import-data"
              @click="showDialog = true"
            >
              <div class="md-ripple">
                <div class="md-button-content">
                  <md-icon>cloud_download</md-icon>
                </div>
              </div>
            </button>
            <button
              type="button"
              class="md-button md-just-icon md-theme-default btn-add-user md-primary"
              @click="goUserCreate()"
            >
              <div class="md-ripple">
                <div class="md-button-content">
                  <md-icon>add</md-icon>
                </div>
              </div>
            </button>
          </md-card-header>
          <md-card-content>
            <user-table></user-table>
          </md-card-content>
        </md-card>
      </div>
      <modal-import v-if="showDialog" @close-modal="hiddenDialog"></modal-import>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "../pages";
import UserTable from "../components/Tables/UserTable";
import ModalImport from './UserProfile/ModalImport'

export default {
  components: {
    EditProfileForm,
    UserCard,
    UserTable,
    ModalImport
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    hiddenDialog(params) {
      this.showDialog = params;
    },
    goUserCreate() {
      this.$router.push({name: "User Create"})
    }
  },
};
</script>
