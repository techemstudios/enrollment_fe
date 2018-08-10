<template>
  <div id="app">
    <header>
      <span>Handling Ajax Request with Axios in Vue</span>
    </header>
    <main>
        <h2>Click the button to get Sections</h2>
        <button id="btn" class="" v-on:click="getSections">Get Upcoming Classes</button>
        <br />
        <div v-if="loading">
          <img src="../src/assets/loader.gif"/>
          Loading...
        </div>
      <div class="wrapper">
        <div class="row">
          <div v-for="section in sections" :key="section.id">
          <div class="col-md-4 cards" v-on:click="getSection(section)">
           <img v-show="selected_section.id==section.id" src="../src/assets/spaghett.jpg" class="img-responsive" alt="Random images placeholder">
           <div>
              <h3>{{ section.id }}</h3>
              <p>{{ section.description }}</p>
              <p>{{ section.start_time }}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      sections: [],
      loading: false,
      selected_section: false
    }
  },
  methods: {
    getSections: function () {
      this.loading = true
      axios.get('https://j5ul824zvb.execute-api.us-east-1.amazonaws.com/dev/api/sections')
        .then((response) => {
          this.loading = false
          this.sections = response.data
        }, (err) => {
          if (err) {
            console.log(err.stack)
          }
          this.loading = false
        })
    },
    getSection: function (section) {
      this.loading = true
      axios.get('https://j5ul824zvb.execute-api.us-east-1.amazonaws.com/dev/api/sections/' + section.id)
        .then((response) => {
          this.loading = false
          this.selected_section = response.data
        }, (err) => {
          if (err) {
            console.log(err.stack)
          }
          this.loading = false
        })
    }
  }
}
</script>

<style>
  body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  text-align: center;
  margin-top: 40px;
}
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
button {
  background: #51B767;
  color: #ffffff;
  padding: 15px;
  border-radius: 0;
  font-weight: bold;
  font-size: 15px;
  border: 0;
}
.cards {
  background: #F5F5F5;
  height:100px;
}
 .cards:hover {
  transform: translateY(-0.5em);
  background: #EBEBEB;
}
.cards {
  column-count: 1;
  column-gap: 1em;
  margin-top: 70px;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
