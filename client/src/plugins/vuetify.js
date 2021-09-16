// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#7B1FA2',
                secondary: '#b0bec5',
                anchor: '#fff',
            },
        },
    },
})