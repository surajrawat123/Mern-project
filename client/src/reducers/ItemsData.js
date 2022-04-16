const ItemsData = (items=[],action) => {
    switch(action.type){
        case 'all-items':
            return action.payload;
        case 'create-item':
            return [...items , action.payload];
        case 'delete-item':
            return items.filter((item) => item._id!==action.payload);
        case 'update-item':
            return items.map((item)=> item._id===action.payload._id ? action.payload : item);
        default:
            return items;
    }
} 

export default ItemsData;