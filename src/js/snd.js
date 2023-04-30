const _snd = (arr) => {
  const μ = arr.reduce((a, b) => a + b) / arr.length
  return {
    mean: μ,
    std: Math.sqrt(arr.map(x => Math.pow(x - μ, 2)).reduce((a, b) => a + b) / arr.length)
  }
}
