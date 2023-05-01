import { node_args, unit, pct } from "./utils.mjs";

let [data] = node_args(JSON.parse)

const n = (str) => str.replaceAll("-", " ").replaceAll("_", " ")
const c = (str) => str[0]?.toUpperCase() + str.slice(1)

let results = Object.values(data.results)

let samples = data.metadata.config.samples
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

## Results

<table>
<thead>
<tr>
<th>tested code</th>
<th><a href=".code/simple.js">simple</a></th>
<th><a href=".code/realistic.js">realistic</a></th>
<th><a href=".code/edge-case.js">edge case</a></th>
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
    <b>${unit(data.results[key].simple.mean)} </b><br>
    (std. ${unit(data.results[key].simple.std)}, o. ${pct(samples - data.results[key].simple.samples, samples)
        }%)
</td>

<td>
    <b>${unit(data.results[key].realistic.mean)} </b><br>
    (std. ${unit(data.results[key].realistic.std)}, o. ${pct(samples - data.results[key].realistic.samples, samples)
        }%)
</td>

<td>
    <b>${unit(data.results[key].edge_case.mean)} </b><br>
    (std. ${unit(data.results[key].edge_case.std)}, o. ${pct(samples - data.results[key].edge_case.samples, samples)
        }%)
</td>

</tr>`).join("")}

</tbody>
</table>

**std.** standard deviation, **o.** outliers 

## Chart

<img src=".data/chart.svg" width="100%"/>

## Metadata

#### benchmark

<sup>normal distrubution is calculated without outliers</sup>
<br>
<b>Normal distribution samples: </b> ${samples}
<br>
<b>Average outliers percentage: </b> ${pct(samples - actual_samples, samples)}%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> ${data.metadata.config.iterations} iterations

#### system

<b>Node: </b> ${data.metadata.system.node_version}
<br>
<b>CPU: </b> ${data.metadata.system.cpu}
`

console.log(readme)