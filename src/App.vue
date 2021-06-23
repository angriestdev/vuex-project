<template>
  <div id="app">
    <div id="nav">
      <v-navigation-drawer app nav left class="elevation-2" width="55px">
        <v-list class="mt-12">
          <v-list-item to="/" class="dashboard">
            <v-icon> mdi-view-dashboard-outline </v-icon>
          </v-list-item>

          <v-list-item to="/Quiz">
            <v-icon> mdi-file </v-icon>
          </v-list-item>

          <v-list-item link>
            <v-icon> mdi-google </v-icon>
          </v-list-item>

          <v-list-item link>
            <v-icon> mdi-tools </v-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
