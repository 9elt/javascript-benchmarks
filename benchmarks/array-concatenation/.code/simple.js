/**
 * the code in this file will be available
 * to all snippets during "simple" benchmark measurments
 * 
 * the code itself won't be measured during the benchmark
 */
let arr_1 = []
let arr_2 = []

for (let i = 0; i < 256; i++) {
    arr_1.push(`arr_1_el_${i}`)
    arr_1.push(`arr_2_el_${i}`)
}