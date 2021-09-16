<template>
  <div class="">
    <v-toolbar
        color="primary"
        dark
        fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><router-link to="/" class="text-decoration-none">TabTracker</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-3 mt-2" to="/login" v-if="user == ''">
        <v-icon>mdi-login</v-icon>
        login
      </v-btn>
      <v-btn class="mt-2" to="/signup" v-if="user == ''">
        <v-icon>mdi-login-variant</v-icon>
        signup
      </v-btn>
      <v-menu
          v-if="user != ''"
          bottom
          min-width="200px"
          rounded
          offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
              icon
              x-large
              v-on="on"
          >
            <v-avatar>
              <img
                  :src="user.avatar"
                  alt="John"
              >
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar>
                <img
                    :src="user.avatar"
                    alt="John"
                >
              </v-avatar>
              <h3>{{ user.name }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  depressed
                  rounded
                  text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  depressed
                  rounded
                  text
              >
                <v-icon>mdi-logout-variant</v-icon>
                logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        fixed
    ></v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    //user: '',
    user: {
      avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
      name: 'John Doe',
      email: 'john.doe@doe.com',
    },
  }),
}
</script>

<style scoped>

</style>