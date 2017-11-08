<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Characters of Star Wars</h2>
    <h2><a href="#" v-on:click="getLuke()">View</a></h2>

    <ul>
      <li v-for="character in characters">
        <p>{{ character.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      characters: null,
      planets: null
    }
  },
methods: {
    getLuke() {
      axios.get('https://swapi.co/api/people/')
            .then(response => {
              this.characters = response.data.results
            })
            .catch(error => {
              console.log(error)
            })
    },
    getWorld() {
      axios.get(characters.homeworld)
          .then(response => {
            this.planets = response.data.results
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
