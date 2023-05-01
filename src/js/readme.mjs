import { node_args, unit } from "./utils.mjs";

let [data] = node_args(JSON.parse)

const n = (str) => str.replaceAll("-", " ").replaceAll("_", " ")
const c = (str) => str[0]?.toUpperCase() + str.slice(1)

let results = Object.values(data.results)

let actual_samples = 0;

results.forEach(v => {
    actual_samples += ((v.simple.samples + v.realistic.samples + v.edge_case.samples) / 3)
})

actual_samples = Math.floor(actual_samples / results.length)

let readme = `# ${c(n(data.metadata.config.name))}
${data.metadata.config.description}

${data.metadata.config.related?.[0] != "" ?
    `> related: ${data.metadata.config.related.map(rel => `[**${c(n(rel))}**](/benchmarks/${rel})`).join(", ")}` : ""
  }

### Results table

<table>
<thead>
<tr>
<th>tested code</th>
<th><a href="available-code/simple.js">simple</a></th>
<th><a href="available-code/realistic.js">realistic</a></th>
<th><a href="available-code/edge-case.js">edge case</a></th>
</tr>
</thead>
<tbody>

${Object.keys(data.results).map((key) => `
<tr></tr><tr>

<td>

[**${n(key)}**](${data.results[key].path})

\`\`\`javascript
${data.results[key].code}
\`\`\`

</td>

<td>
    <b>${unit(data.results[key].simple.mean)} </b>
    (std. ${unit(data.results[key].simple.std)})
</td>

<td>
    <b>${unit(data.results[key].realistic.mean)} </b>
    (std. ${unit(data.results[key].realistic.std)})
</td>

<td>
    <b>${unit(data.results[key].edge_case.mean)} </b>
    (std. ${unit(data.results[key].edge_case.std)})
</td>

</tr>`).join("")}

</tbody>
</table>


### Chart

<img src=".data/chart.svg" width="100%"/>

<sub>
config
<br>
<b>Normal Distribution Samples: </b> ${actual_samples} / ${data.metadata.config.samples}
<br>
<b>Measured iterations: </b> ${data.metadata.config.iterations}
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> ${data.metadata.system.node_version}
<br>
<b>CPU: </b>${data.metadata.system.cpu}
</sub>
`
console.log(readme)