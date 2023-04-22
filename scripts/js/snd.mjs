import { node_args, rnd, output } from "./utils.mjs"

const snd = (arr) => {
  const μ = arr.reduce((a, b) => a + b) / arr.length
  return {
    mean: μ,
    std: Math.sqrt(arr.map(x => Math.pow(x - μ, 2)).reduce((a, b) => a + b) / arr.length)
  }
}

let normal_distr = snd(node_args(parseInt))

output(
  rnd(normal_distr.mean),
  rnd(normal_distr.std),
)
