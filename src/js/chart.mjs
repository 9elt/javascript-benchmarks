import { node_args } from "./utils.mjs";

let [data] = node_args(JSON.parse)

const n = (str) => str.replace("-", " ").replace("_", " ")
const c = (str) => str[0].toUpperCase() + str.slice(1)
let values = Object.values(data.results)
let max = values.map(v => v.edge_case.mean)

let mx = 0
max.forEach(v => { if (v > mx) { mx = v } })

let y = (v) => (32 - 4) - (((32 - 8) * v) / mx)
let h = (v) => (((32 - 8) * v) / mx)

let svg = `
<svg class="chart" viewBox="0 0 128 32" xmlns="http://www.w3.org/2000/svg">
  <style>
    .chart .bg {
      fill: #eee5;
    }
    .chart .w {
      fill: none;
      stroke: #eee5;
      stroke-width: 0.1;
    }
    .chart .c {
      fill: #1af;
    }
    .chart .t {
      font-size: 2px;
      fill: #1af;
    }
    .chart path {
      fill: none;
      stroke: #1af;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  </style>

  <!--<rect class="bg" width="128" height="32" rx="0.15"/>-->
  <rect 
    class="w"
    x="2"
    y="2"
    width="${(8 * 3) * values.length - 5}"
    height="28"
    rx="0.15"
  />

  ${values.map((v, i) => `

  <text x="${(i * 5 + i * 18) + 3}" y="30" class="t">${n(Object.keys(data.results)[i])}</text>

  <rect 
    class="c" 
    x="${(i * 5 + i * 18) + 3}" 
    y="${y(v.simple.mean)}" 
    height="${h(v.simple.mean)}" 
    width="5" 
    rx="0.25"
  />

  <rect 
    class="c" 
    x="${(i * 5 + i * 18) + 9}" 
    y="${y(v.realistic.mean)}" 
    height="${h(v.realistic.mean)}" 
    width="5"
    rx="0.25"
  />

  <rect 
    class="c" 
    x="${(i * 5 + i * 18) + 15}" 
    y="${y(v.edge_case.mean)}" 
    height="${h(v.edge_case.mean)}"
    width="5"
    rx="0.25"
  />`).join("")}

</svg>
`

console.log(svg)