<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
      <v-btn icon to="/">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon to="/about">
        <v-icon>mdi-menu</v-icon>
      </v-btn> 
    </v-toolbar>
  </div>
</template>