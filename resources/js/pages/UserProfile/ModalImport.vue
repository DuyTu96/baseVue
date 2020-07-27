<template>
  <div class="custom-modal">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
      <md-card>
        <md-card-header data-background-color="blue">
          <h4 class="title">Employees Stats</h4>
          <p class="category">New employees on 15th September, 2016</p>
          <button
            type="button"
            class="md-button md-just-icon md-theme-default btn-import-data"
            @click="closeModal()"
          >
            <div class="md-ripple">
              <div class="md-button-content">
                <md-icon>close</md-icon>
              </div>
            </div>
          </button>
        </md-card-header>
        <md-card-content style="border-bottom: 1px #bdbdbd solid; text-align: center;">
          <input
            type="file"
            id="fileImport"
            style="display:none"
            accept=".xls, .xlsx"
            @change="importExcel()"
          />
          <button v-if="!listUsers" id="btn-upload" for="fileImport" @click="importFile()">
            <md-icon style="font-size: 150px !important; margin: 60px;" for="file">cloud_upload</md-icon>
          </button>

          <md-table
            v-else
            v-model="listUsers"
            table-header-color="green"
            style="text-align: center"
          >
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
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="md-icon md-icon-font md-theme-default">edit</i>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  class="md-button md-just-icon md-simple md-danger md-theme-default"
                >
                  <div class="md-ripple">
                    <div class="md-button-content">
                      <i class="md-icon md-icon-font md-theme-default">close</i>
                    </div>
                  </div>
                </button>
              </md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
        <md-card-actions style="text-align: right; display: inline;">
          <button
            type="button"
            class="md-button md-raised md-theme-default float-right mar10-20"
            @click="closeModal()"
          >
            <div class="md-ripple">
              <div class="md-button-content">Close</div>
            </div>
          </button>
          <button
            type="button"
            class="md-button md-raised md-success md-theme-default float-right mar10-20"
          >
            <div class="md-ripple">
              <div class="md-button-content" @click="importExcelToData()">Save</div>
            </div>
          </button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      listUsers: null
    };
  },
  methods: {
    ...mapActions("userStore", ["importExcelToDB"]),

    closeModal() {
      this.$emit("close-modal", false);
    },
    importFile() {
      document.getElementById("fileImport").click();
    },
    importExcel() {
      let selectedFile = event.target.files[0];

      let filePath = selectedFile.name;
      var allowedExtensions = /(\.xls|\.xlsx)$/i;
      if (!allowedExtensions.exec(filePath)) {
        alert(
          "Please upload file having extensions .xls .xlsx."
        );
        return false;
      } else {
        if (selectedFile) {
          let fileReader = new FileReader();
          fileReader.readAsBinaryString(selectedFile);
          fileReader.onload = event => {
            let workbook = XLSX.read(event.target.result, { type: "binary" });
            workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(
                workbook.Sheets[sheet]
              );
              this.listUsers = rowObject;
            });
          };
        }
      }
    },
    async importExcelToData() {
      await this.importExcelToDB(this.listUsers);
    }
  }
};
</script>

<style>
</style>