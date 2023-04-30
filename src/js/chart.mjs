import { node_args } from "./utils.mjs";

let [data] = node_args(JSON.parse)

const n = (str) => str.replace("-", " ").replace("_", " ")
const c = (str) => str[0].toUpperCase() + str.slice(1)

let max = Object.values(data.results).map(v => v.edge_case.mean)

let mx = 0
max.forEach(v => { if (v > mx) { mx = v } })

let y = (v) => 44 - ((40 * v) / mx)
let h = (v) => ((40 * v) / mx)

let svg = `
<svg class="chart" view-box="0 0 128 48" xmlns="http://www.w3.org/2000/svg">
  <style>
    .chart .bg {
      fill: #eee;
    }
    .chart .w {
      fill: none;
      stroke: #000;
      stroke-width: 0.1;
    }
    .chart .c {
      fill: #1af;
    }
    .chart path {
      fill: none;
      stroke: #1af;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  </style>

  <rect class="bg" width="128" height="48" rx="0.25"/>
  <rect class="w" x="2" y="2" width="66" height="44" rx="0.25"/>

  ${Object.values(data.results).map((v, i) => `
  <rect 
    class="c" 
    x="${(i * 5 + i * 30) + 5}" 
    y="${y(v.simple.mean)}" 
    height="${h(v.simple.mean)}" 
    width="5" 
    rx="0.25"
  />

  <rect 
    class="c" 
    x="${(i * 5 + i * 30) + 15}" 
    y="${y(v.realistic.mean)}" 
    height="${h(v.realistic.mean)}" 
    width="5"
    rx="0.25"
  />

  <rect 
    class="c" 
    x="${(i * 5 + i * 30) + 25}" 
    y="${y(v.edge_case.mean)}" 
    height="${h(v.edge_case.mean)}"
    width="5"
    rx="0.25"
  />`)}

  ${Object.values({}).map(v => `

  <path d="
    M4,${y(v.simple.mean)}
    34,${y(v.realistic.mean)}
    64,${y(v.edge_case.mean)}"
  />

  `)}

</svg>

`

console.log(svg)