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
        results: {}
    }

    r.metadata.config.related = r.metadata.config.related.split(",")

    results.forEach((res, i) => {
        if (i < 2) { return /* config and system */ }

        if (res.name in r.results) {
            r.results[res.name][res.version] = res.result
        } else {
            r.results[res.name] = {
                path: res.file_path,
                code: res.code,
                [res.version]: res.result,
            }
        }

    })

    return r
}

export const _outliers = (array) => {
    let arr = [...array]
    arr.sort((a, b) => a - b)

    let q1 = arr[Math.floor((arr.length / 4))]; 
    let q3 = arr[Math.ceil((arr.length * (3 / 4)))];
    let iqr = q3 - q1;

    let max = q3 + iqr * 1.5
    let min = q1 - iqr * 1.5

    return arr.filter(x => x <= max && x >= min)
}

export const _snd = (arr) => {
    arr = _outliers(arr)

    const μ = arr.reduce((a, b) => a + b) / arr.length

    return {
        samples: arr.length,
        mean: μ,
        std: Math.sqrt(arr.map(x => Math.pow(x - μ, 2)).reduce((a, b) => a + b) / arr.length)
    }
}
