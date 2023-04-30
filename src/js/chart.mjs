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
      fill: #2f81f7;
    }
    .chart .t {
      font-size: 2px;
      font-weight: bold;
      fill: #2f81f7;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }
    .chart path {
      fill: none;
      stroke: #2f81f7;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  </style>

  <!--<rect class="bg" width="128" height="32" rx="0.15"/>-->
  <rect 
    class="w"
    x="0"
    y="2"
    width="${(8 * 3) * values.length - 6}"
    height="29"
    rx="0.1"
  />

  ${values.map((v, i) => `

  <text x="${(i * 5 + i * 18) + 1}" y="30" class="t">${n(Object.keys(data.results)[i])}</text>

  <rect 
    class="c" 
    x="${(i * 5 + i * 18) + 1}" 
    y="${y(v.simple.mean)}" 
    height="${h(v.simple.mean)}" 
    width="5" 
    rx="0.1"
  />

  <rect 
    class="c" 
    x="${(i * 5 + i * 18) + 6 + 1}" 
    y="${y(v.realistic.mean)}" 
    height="${h(v.realistic.mean)}" 
    width="5"
    rx="0.1"
  />

  <rect 
    class="c" 
    x="${(i * 5 + i * 18) + 12 + 1}" 
    y="${y(v.edge_case.mean)}" 
    height="${h(v.edge_case.mean)}"
    width="5"
    rx="0.1"
  />`).join("")}

</svg>
`

console.log(svg)