import { node_args, unit } from "./utils.mjs";

let [data] = node_args(JSON.parse)

const n = (str) => str.replaceAll("-", " ").replaceAll("_", " ")
const c = (str) => str[0]?.toUpperCase() + str.slice(1)

let values = Object.values(data.results)
let names = Object.keys(data.results)

let max = values.map(v => v.edge_case.mean)

let mx = 0
max.forEach(v => { if (v > mx) { mx = v } })

let y = (v) => (32 - 2) - (((32 - 4) * v) / mx)
let h = (v) => (((32 - 4) * v) / mx)

let qrt = (32 - 2) / 4
/** number of columns groups */
let ng = values.length
/** column width */
let cw = 2
/** column left margin */
let cl = 0.25
/** column occupied space */
let coc = cw + cl
/** column group occupied space */
let goc = coc * 3
/** spacing between columns groups */
let cs = Math.floor((96 - (coc * ng)) / (coc * ng))
/** chart left start offset */
let start = 0
/** chart end */
let end = (ng * goc) + ((ng + 1) * cs)

let svg = `
<svg class="chart" viewBox="0 0 96 32" xmlns="http://www.w3.org/2000/svg">
  <style>
    .chart .bg {
      fill: #eee5;
    }
    .chart .w {
      fill: none;
      stroke: #808080;
      stroke-width: 0.075;
    }
    .chart .t {
      font-size: 1.4px;
      font-weight: bold;
      fill: #808080;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Costartr Emoji", "Segoe UI Emoji";
      transform: rotate(90deg);
      transform-box: fill-box;
      transform-origin: left;
    }
    .chart .un {
      font-size: 1.4px;
      font-weight: bold;
      fill: #2f81f7;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Costartr Emoji", "Segoe UI Emoji";
    }
    .chart path {
      fill: none;
      stroke: #2f81f7;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  </style>

  <!--<rect class="bg" width="128" height="32" rx="0.15"/>
  <rect 
    class="w"
    x="0"
    y="2"
    width="${(values.length * 6.75) + ((values.length + 1) * cs)}"
    height="29"
    rx="0.1"
  />-->

  <text class="un" x="${end + 1}" y="${qrt * 1}" >${unit(mx / 4 * 3)}</text>
  <text class="un" x="${end + 1}" y="${qrt * 2}" >${unit(mx / 4 * 2)}</text>
  <text class="un" x="${end + 1}" y="${qrt * 3}" >${unit(mx / 4 * 1)}</text>

  <path class="w" d="
    M${start},0 ${start},30 ${end},30
    M${start},${qrt * 1} ${end},${qrt * 1}
    M${start},${qrt * 2} ${end},${qrt * 2}
    M${start},${qrt * 3} ${end},${qrt * 3}
  "/>

  ${values.map((v, i) => `

  <text x="${(i * goc) + ((i + 1) * cs) + start - (coc)}" y="1" class="t">
    ${n(names[i])}
  </text>

  <rect 
    fill="#5b9cfb" 
    x="${(i * goc) + (coc * 0) + ((i + 1) * cs) + start}" 
    y="${y(v.simple.mean)}" 
    height="${h(v.simple.mean)}" 
    width="${cw}" 
    rx="0.1"
  />

  <rect 
    fill="#2f81f7"
    x="${(i * goc) + (coc * 1) + ((i + 1) * cs) + start}" 
    y="${y(v.realistic.mean)}" 
    height="${h(v.realistic.mean)}" 
    width="${cw}"
    rx="0.1"
  />

  <rect 
    fill="#286aca"
    x="${(i * goc) + (coc * 2) + ((i + 1) * cs) + start}" 
    y="${y(v.edge_case.mean)}" 
    height="${h(v.edge_case.mean)}"
    width="${cw}"
    rx="0.1"
  />`).join("")}

</svg>
`

console.log(svg)