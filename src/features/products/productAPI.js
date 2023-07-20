const fetchAllProducts = () =>{
    return new Promise(async (resolve) =>{
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        resolve({data});
    })
}

const fetchProductsByFilters = (filter, sort) =>{
    // filter ={ "category" : ["smartphone","laptops"]}
    // sort ={ _sort:"price",_order="desc"}
    console.log(filter)
    let queryString = "";
    for(let key in filter){
        const categoryValues = filter[key];
        if(categoryValues.length){
            const lastCategoryvalue = categoryValues[categoryValues.length-1];
            queryString += `${key}=${lastCategoryvalue}&`;
        }
    }
    for (let key in sort){
        queryString+=`${key}=${sort[key]}&`;
    }
    return new Promise(async (resolve) =>{
        const response = await fetch('http://localhost:8080/products?'+queryString);
        const data = await response.json();
        resolve({data});
    })
}
export { fetchAllProducts,fetchProductsByFilters };