const addToCart = (item)=>{
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        // TODO: on server it will only return some info of user (not password)
        resolve({ data });
      });
}

const fetchItemsByUserId = (userId) =>{
    return new Promise(async (resolve) =>{
        //TODO: we will not hard-code server URL here
        const response = await fetch('http://localhost:8080/cart?user='+userId) 
        const data = await response.json()
        resolve({data})
})
}

const updateCart = (update) =>{
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart/'+update.id, {
          method: 'PATCH',
          body: JSON.stringify(update),
          headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        // TODO: on server it will only return some info of user (not password)
        resolve({ data });
      });
}

const deleteItemFromCart = (itemId) =>{
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart/'+itemId, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        // TODO: on server it will only return some info of user (not password)
        resolve({ data:{id:itemId} });
      });
}
const resetCart = (userId) =>{
  return new Promise(async (resolve) => {
      const respone = await fetchItemsByUserId(userId);
      const items = respone.data;
      for(let item of items){
        await deleteItemFromCart(item.id);
      }
      resolve({status:"success"})
  })
}

export { addToCart, fetchItemsByUserId, updateCart, deleteItemFromCart, resetCart };