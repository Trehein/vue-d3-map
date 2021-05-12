# vue-d3-map
A Vue application utilizing a D3.js generated svg map with interaction and zoom

![mapDemo](https://user-images.githubusercontent.com/18636420/117899659-3092ec00-b28d-11eb-9c0d-c4a77f9d6d77.jpg)
# Project Setup
- npm install
- npm run serve

## Resources
- [Vue.js v3](https://vuejs.org/)
- [D3.js v6.7](https://d3js.org/)
- [TopoJson Library](https://github.com/topojson)
- [U.S. Atlas TopoJson](https://github.com/topojson/us-atlas)

## Methodology
Don't try to force D3 into Vue components. Create a div in a Vue component template to anchor d3.select() on and away you go. Just wire in your regular old .js file with your vanilla D3 and call it in the Vue component's mounted() cycle. 

### Todo
Explore the difference between using Vue's watch hook to re-render the D3 element or just using D3's internal update pattern to control the relevant DOM elements. Probably best done in another project.
