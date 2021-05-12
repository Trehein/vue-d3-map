<template>
    <div id="wrapper">
    
    </div>
</template>

<script>
    import { drawMap } from './map'

    export default {
        name: 'MapV3',
        props: { 
            countyShapes: Array,
            stateShapes: Array,
            stateApportionmentData: Array,
            albersTopo: Object,
            dimensions: Object
        },
        mounted() {
            this.calcBoundingBox()
            this.drawMap()
            // this.displayData()
        },
        methods: {
            drawMap: function() {
                return drawMap(this.countyShapes, this.stateShapes, this.dimensions)
            },
            calcBoundingBox() {
                const bindWidth = this.dimensions.width - this.dimensions.margin.left - this.dimensions.margin.right
                this.dimensions.boundedWidth = bindWidth  
                const bindHeight = this.dimensions.height - this.dimensions.margin.top - this.dimensions.margin.bottom
                this.dimensions.boundedHeight = bindHeight
            },
            // displayData() {
                // console.log(this.stateShapes)
                // console.log(this.countyShapes)
                // console.log(this.dimensions)
            // },
        },
    }
</script>

<style scoped>
    #wrapper {
        margin: 0px auto;
    }
</style>