<template>
  <div id="app">
    <header>
      <span>Tech Em Enrollment site sans Rails</span>
    </header>
    <main>
      <h2>Upcoming Clases</h2>
      <div class="wrapper">
        <div class="row">
          <div v-for="section in sections" :key="section.id">
          <router-link :to="{ name: 'Section', params: { id: section.id }}">
          <div class="col-md-4 cards">
           <div>
              <h3>{{ section.id }}</h3>
              <p>{{ section.description }}</p>
              <p>{{ section.start_time }}</p>
            </div>
          </div>
          </router-link>
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
      selected_loading: false,
      selected_section: false
    }
  },
  created: function () {
    this.loading = true
    if (this.sections.length === 0) {
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
    }
  },
  methods: {
    getSection: function (section) {
      this.selected_loading = true
      axios.get('https://j5ul824zvb.execute-api.us-east-1.amazonaws.com/dev/api/sections/' + section.id)
        .then((response) => {
          this.selected_loading = false
          this.selected_section = response.data
        }, (err) => {
          if (err) {
            console.log(err.stack)
          }
          this.selected_loading = false
        })
    }
  }
}
</script>

<style>
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
  text-align: center;
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
  height:150px;
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
    //height: 40px;
}
</style>
