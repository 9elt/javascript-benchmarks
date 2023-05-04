import { node_args, output } from "./utils.mjs"

let results = node_args(JSON.parse)

results[0].related = results[0]
  .related?.split(",").filter(v => v != "") ?? []

let r = {
  metadata: {
    config: results[0],
    system: results[1]
  },
  results: {}
}

results.slice(2).forEach(res => {
  res.name in r.results
    ? r.results[res.name][res.version] = res.result
    : r.results[res.name] = {
      path: res.file_path,
      code: res.code,
      [res.version]: res.result,
    }
})

output(JSON.stringify(r, null, 4))
