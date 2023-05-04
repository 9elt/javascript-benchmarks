import { node_args, output, unit_ns, pct } from "./utils.mjs"

let results = node_args(JSON.parse)

let config = results.shift()

output(results.map(data =>
  unit_ns(data.result.mean) 
  + " σ" + unit_ns(data.result.std)
).join(","))
