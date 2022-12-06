import Vue from 'vue';
import Vuerify from "vuetify";
import Popup from "../pages/popup.vue"
import 'vuetify/dist/vuetify.css'
import '../styles/popup.css';

function initPopup() {
    try {
        initVue();
    } catch (e) {
        throw new Error(`?? Error Initializing Settings | ${e}`)
    }
}

function initVue() {
    Vue.use(Vuerify, {});
    new Vue({
        el: "#app",
        render:(h)=>h(Popup)
    })
}

initPopup();
