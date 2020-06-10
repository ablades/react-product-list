
import data from './data.json'

const categories = data.map( (item) => {
    return item.category
})

const setCategories = new Set(categories) 
const categoriesUnique = Array.from(setCategories) 

const categoryCounts = data.reduce(( items, category) => {
    if (items[category]) {
        items[category] += 1
    } else {
        items[category] = 1
    }

    return items
}, {})

//arr is empty
const objInventory = categoriesUnique.reduce((arr, category) => {

    // TODO: FIX
    return arr
}, [])


console.log(objInventory)
console.log(categoriesUnique)
console.log(categoryCounts)
console.log(categories)

export default data;
export { categoriesUnique, categoryCounts, objInventory}