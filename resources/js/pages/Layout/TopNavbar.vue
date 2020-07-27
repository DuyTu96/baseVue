<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
              <label>Search...</label>
            </md-autocomplete>
          </div>
          <md-list>
            <li href="#/" class="md-list-item">
              <a
                mdripple="true"
                href="#/"
                class="md-list-item-link md-list-item-container md-button-clean"
              >
                <div class="md-list-item-content md-ripple">
                  <i class="material-icons">dashboard</i>
                </div>
              </a>
            </li>
            <li class="md-list-item">
              <a
                href="#/notifications"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <div class="dropdown open show">
                    <button
                      type="button"
                      class="md-button md-button md-just-icon md-simple md-theme-default"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <div class="md-ripple">
                        <div class="md-button-content">
                          <i class="md-icon md-icon-font md-theme-default">notifications</i>
                          <span class="notification">5</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </a>
            </li>

            <li href="#/user" class="md-list-item">
              <a
                mdripple="true"
                href="#/user"
                class="md-list-item-link md-list-item-container md-button-clean"
              >
                <div class="md-list-item-content md-ripple">
                  <i class="material-icons">person</i>
                </div>
              </a>
            </li>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
};
</script>

<style lang="css"></style>
