/* eslint-disable no-unused-vars */
import * as d3 from "d3";

export function drawMap(countyShapes, stateShapes, dimensions) {
    let path = d3.geoPath()
    //projection used for adding points
    let projection = d3.geoAlbersUsa()
        .translate([487.5, 305])
        .scale(1300)

    const wrapper = d3.select("#wrapper") 
        .append("svg")
            .attr("width", dimensions.width)
            .attr("height", dimensions.height)

    const zoomWrapper = wrapper.append('g')
        .attr("id", "zoomWrapper")

    const bounds = zoomWrapper.append("g")
        .attr("id", "bounds")
        
    let mapPaths = bounds.selectAll(".path")
        .data(countyShapes) //change lines by swapping out
        .join("path")
        .attr("d", path)
        .attr("stroke", "white")
        .attr("stroke-width", .5)
        .attr("fill", "#663399")
        .on('mouseover', handlePathOver)
        .on('mouseout', handlePathOut)
        .on('click', handleClick)

    function handlePathOver(d, i) {
        d3.select(this)
            .transition()
            .duration(150)
            .attr("fill", "orange")
    }

    function handlePathOut(d, i) {
        d3.select(this)
            .transition()
            .duration(1200)
            .attr("fill", "#663399")
    }

    function handleClick(d, i) {
        console.log(d.target.__data__.properties.name)
    }

    var zoom = d3.zoom()
        .scaleExtent([1,10])
        .on('zoom', (e) => {
            mapPaths
                .attr('transform', e.transform)
        })

    wrapper.call(zoom)
}


