const FindId = (itemId=null , action) => {
    switch(action.type){
        case 'click-item':
            return action.payload;
        case 'reset-item':
            return action.payload;
        default:
            return itemId;
    }
}

export default FindId;