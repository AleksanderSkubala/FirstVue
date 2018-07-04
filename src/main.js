// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

Vue.config.productionTip = false;

const MojeVue = {
  name: "MojeVue",
  data() {
    return {
      input: {
        border: "none",
        borderBottom: "1.5px solid",
        background: "none"
      },
      opis: {
        color: "black"
      }
    };
  },
  template: `
  <div>
    <h3 :style="opis">Aleksander to moje ulubione imię</h3>
    <input :style="input" name="color" placeholder="Wpisz tu kolor." v-model="opis.color"/>
  </div>
  `
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    name: "Olek",
    tvnStyle: {
      color: "#3f99ff"
    },
    button: {
      backgroundColor: "#3f99ff",
      width: "60px",
      height: "40px",
      border: "0px solid",
      borderRadius: "5%",
      margin: "20px"
    },
    container: {
      width: "50%",
      backgroundColor: "#e3e5e5",
      padding: "30px",
      borderRadius: "3%",
      textAlign: "center",
      margin: "auto"
    }
  },
  components: {
    MojeVue
  },
  methods: {
    eventHandler() {
      alert("Hello " + this.name + "!");
    }
  },
  template: `
    <div :style="container">
      <h1 :style="tvnStyle">Hello {{ name }}</h1>
      <MojeVue/>
      <button :style="button" @click="eventHandler">Pokaż</button>
    </div>
  `
});

//v-bind: === :
//v-on: === @
