/**
 * this code will run isolated and will not be measured
 */
let object_keys = Object.keys(object)
let unexpected_k = keys.find(k => !object_keys.includes(k))
if (unexpected_k) {
    throw new Error(`found unexpected key: ${unexpected_k}`)
}