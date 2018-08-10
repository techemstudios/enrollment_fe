<template>
  <div id="app">
    <header>
      <span>Section Details</span>
    </header>
    <main>
        <h2>{{ section.description }}</h2>
        <img v-if="loading" src="../assets/loader.gif">
        <img v-else src="../assets/spaghett.jpg" alt="Random images placeholder">
           <div>
              <h3>{{ section.id }}</h3>
              <p>{{ section.start_time }}</p>
           </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Section',
  data () {
    return {
      section: [],
      loading: true
    }
  },
  created: function () {
    this.loading = true
    axios.get('https://j5ul824zvb.execute-api.us-east-1.amazonaws.com/dev/api/sections/' + this.$route.params.id)
      .then((response) => {
        this.loading = false
        this.section = response.data
      }, (err) => {
        if (err) {
          console.log(err.stack)
        }
        this.loading = false
      })
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
  text-align: center;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    //height: 200px;
}
</style>
