<template>
  <v-app id="app">
    <div id="toolbar">
      <v-toolbar class="elevation-1" height="50px"></v-toolbar>
    </div>
    <div id="nav">
      <v-navigation-drawer app nav left class="elevation-2" width="55px">
        <v-list class="mt-12">
          <v-list-item to="/">
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
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Poppins;
  color: #2c3e50;
}
</style>
