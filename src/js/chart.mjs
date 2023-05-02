import { node_args, unit, map, name, output } from "./utils.mjs"

let [data] = node_args(JSON.parse)

let names = Object.keys(data.results)
let values = Object.values(data.results)

/** benchmark max value */
let max = Math.max(...values.map(
  v => Math.max(v.edge_case.mean, v.simple.mean, v.realistic.mean)
))
/** chart viewbox height */
let ch = 32
/** chart bottom margin */
let bm = 2
/** chart actula height */
let ah = ch - bm
/** quarter chart height */
let qrt = ah / 4
/** quarter chart line y */
let ly = (n) => qrt * n
/** quarter chart value */
let lv = (n) => unit(max / 4 * (4 - n))
/** col h from value */
let h = (v) => (((ch - 4) * v) / max)
/** col y from value */
let y = (v) => (ch - 2) - h(v)
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
/** column x pos */
let cx = (i, n) => (i * goc) + (coc * n) + ((i + 1) * cs) + start
/** title x pos */
let tx = (i) => (i * goc) + ((i + 1) * cs) + start - (coc)

output(`
<svg viewBox="0 0 96 ${ch}" xmlns="http://www.w3.org/2000/svg">

  <style>

    path {
      fill: none;
      stroke: #808080;
      stroke-width: 0.075;
      stroke-linejoin: round;
      stroke-linecap: round;
    }

    text {
      font-size: 1.4px;
      font-weight: bold;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
        Helvetica, Arial, sans-serif, "Apple Costartr Emoji", "Segoe UI Emoji";
    }

    .names {
      fill: #808080;
      transform: rotate(90deg);
      transform-box: fill-box;
      transform-origin: left;
    }

    .labels {
      fill: #2f81f7;
    }

  </style>

  <!-- chart labels -->
  <text class="labels" x="${end + 1}" y="${ly(1)}">${lv(1)}</text>
  <text class="labels" x="${end + 1}" y="${ly(2)}">${lv(2)}</text>
  <text class="labels" x="${end + 1}" y="${ly(3)}">${lv(3)}</text>

  <!-- chart axis -->
  <path d="
    M${start},${ly(0)} ${start},${ah} ${end},${ah}
    M${start},${ly(1)} ${end},${ly(1)}
    M${start},${ly(2)} ${end},${ly(2)}
    M${start},${ly(3)} ${end},${ly(3)}
  "/>

  ${map(values, (v, i) => `

  <!-- benchmark name -->
  <text 
    class="names"
    x="${tx(i)}" 
    y="1"
  >
    ${name(names[i])}
  </text>

  <!-- simple -->
  <rect 
    fill="#5b9cfb" 
    x="${cx(i, 0)}" 
    y="${y(v.simple.mean)}" 
    height="${h(v.simple.mean)}" 
    width="${cw}" 
    rx="0.1"
  />

  <!-- realistic -->
  <rect 
    fill="#2f81f7"
    x="${cx(i, 1)}" 
    y="${y(v.realistic.mean)}" 
    height="${h(v.realistic.mean)}" 
    width="${cw}"
    rx="0.1"
  />

  <!-- edge case -->
  <rect 
    fill="#286aca"
    x="${cx(i, 2)}" 
    y="${y(v.edge_case.mean)}" 
    height="${h(v.edge_case.mean)}"
    width="${cw}"
    rx="0.1"
  />`)}

</svg>`)
