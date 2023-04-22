import { node_args, unit, output } from "./utils.mjs"

let [v] = node_args(parseFloat)

output(unit(v))
