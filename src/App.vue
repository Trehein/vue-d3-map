<template>
  <div id="app">
    <!-- v-if ensures all data was loaded before rendering Map -->
    <MapV3
      :countyShapes="countyShapes"
      :stateShapes="stateShapes" 
      :dimensions="dimensions"
      v-if="countyShapes && stateShapes"
    />
  </div>
</template>

<script>
import MapV3 from './components/MapV3.vue'
import * as d3 from "d3";
import * as topojson from "topojson-client";

export default {
  name: 'App',
  components: {
    MapV3
  },
  data() {
    return {
      countyShapes: null,
      stateShapes: null,
      stateApportionmentData: [],
      albersTopo: null,
      dimensions: {
        width: window.innerWidth * 0.7,
        height: window.innerHeight * 0.9,
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }
      }
    }
  },

  mounted() {
    this.fetchMapData()
    console.log("clean load")
  },

  methods: {
    async fetchMapData() {
      const us = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json")
        .then(response => response)
        .catch(error => console.log(error)) 
      
      const states = topojson.feature(us, us.objects.states).features.sort((a, b) => +a.id - +b.id)
      this.stateShapes = states

      const counties = topojson.feature(us, us.objects.counties).features.sort((a, b) => +a.id - +b.id)
      this.countyShapes = counties
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
