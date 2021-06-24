<template>
  <div class="quiz">
    <v-row class="ma-12">
      <h2 class="">Quizzes & Exams</h2>
      <v-spacer></v-spacer>
      <v-btn
        elevation="5"
        class="pa-6 ma-1 white--text text-capitalize"
        color="#31B573"
        rounded
      >
        <v-icon left> mdi-plus-circle-outline </v-icon>
        Create
      </v-btn>
    <v-tabs color="#31B573">
      <v-tab class="text-capitalize">All</v-tab>
      <v-tab class="text-capitalize">Drafts</v-tab>
      <v-tab class="text-capitalize">Published</v-tab>
    </v-tabs>
    </v-row>
  </div>
</template>
