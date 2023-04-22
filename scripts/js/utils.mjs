export const rnd = (f, p = 1) => (f).toFixed(p)

export const unit = (ms) => ms < 1_000 ? `${rnd(ms)} ms` : `${rnd(ms / 1_000, 2)} s`

export const output = (...args) => console.log(args.join(" "))

export const node_args = (as = (v) => v) => process.argv.slice(2).map(v => as(v))