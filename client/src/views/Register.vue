<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup Here</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="mdi-account" v-model="credential.username" name="username" label="username" type="text"></v-text-field>
                  <v-text-field prepend-icon="mdi-account-key" v-model="credential.email" name="email" label="email" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="mdi-lock-alert" v-model="credential.password" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register">Create</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data: () => ({
    drawer: null,
    credential:{
      username:'',
      email:'',
      password:''
    }
  }),
  props: {
    source: String
  },
  methods:{
    async register(){
      const response = await AuthenticationService.register(this.credential)
      console.log(response);
    }
  }
}
</script>

<style scoped>

</style>