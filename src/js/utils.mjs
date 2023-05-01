export const rnd = (f, p = 1) => (f).toFixed(p)

export const pct = (n, d) => rnd((n / d) * 100,0)

export const unit = (ms) => {
    if (ms < 1) {
        return `${rnd(ms * 1000, 0)} μs`
    }

    if (ms < 1000) {
        return `${rnd(ms, 2)} ms`
    }

    return `${rnd(ms / 1000, 2)} s`
}

export const output = (...args) => console.log(args.join(" "))

export const node_args = (as = (v) => v) => process.argv.slice(2).map(v => as(v))

export const parse_results = () => {
    let results = node_args(JSON.parse)
    let r = {
        metadata: {
            config: results[0],
            system: results[1]
        },
        results: {

        }
    }

    r.metadata.config.related = r.metadata.config.related.split(",")

    results.forEach((res, i) => {
        if (i < 2) { return }

        if (res.name in r.results) {
            r.results[res.name][res.version] = res.result
        } else {
            r.results[res.name] = {
                path: res.file_path,
                code: res.code,
                [res.version]: res.result,
            }
        }

    });

    return r
}
