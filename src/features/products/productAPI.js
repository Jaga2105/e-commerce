const fetchAllProducts = () =>{
    return new Promise(async (resolve) =>{
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        resolve({data});
    })
}
const fetchProductById = (id) =>{
    return new Promise(async (resolve) =>{
        //TODO: we will not hard-code server URL here
        const response = await fetch('http://localhost:8080/products/'+id) 
        const data = await response.json()
        resolve({data})
      }
      );
}

const fetchProductsByFilters = (filter, sort,pagination) =>{
    // filter ={ "category" : ["smartphone","laptops"]}
    // sort ={ _sort:"price",_order="desc"}
    // pagination = {_page:1, _limit=10}
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
    for(let key in pagination){
        queryString += `${key}=${pagination[key]}&`
    }
    return new Promise(async (resolve) =>{
        const response = await fetch('http://localhost:8080/products?'+queryString);
        const data = await response.json();
        const totalItems = await response.headers.get("X-Total-Count");
        resolve({data:{products:data, totalItems:totalItems}});
    })
}

const fetchCategories = () => {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/categories') 
      const data = await response.json()
      resolve({data})
    }
    );
  }

const fetchBrands = () => {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/brands') 
      const data = await response.json()
      resolve({data})
    }
    );
  }

  const createProduct = (product) => {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/products/', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }

  const updateProduct = (update) => {
    return new Promise(async (resolve) => {
      const response = await fetch(
        'http://localhost:8080/products/' + update.id,
        {
          method: 'PATCH',
          body: JSON.stringify(update),
          headers: { 'content-type': 'application/json' },
        }
      );
      const data = await response.json();
      // TODO: on server it will only return some info of user (not password)
      resolve({ data });
    });
  }

export { fetchAllProducts,fetchProductsByFilters,fetchCategories,fetchBrands, fetchProductById, createProduct,updateProduct };