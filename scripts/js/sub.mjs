import { node_args, rnd, output } from "./utils.mjs"

let [a, b] = node_args(parseFloat)

output(rnd(a - b))
