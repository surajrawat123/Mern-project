import * as api from '../api/allApi';

export const getAllItems = () => async (dispatch) => {
    const {data} = await api.fetchAllItems();
    dispatch({type:'all-items', payload: data});
}

export const createsItem = (item) => async (dispatch) => {
    const {data} = await api.createItem(item);
    console.log(item);
    console.log(data);
    dispatch({type:'create-item',payload:data});
}

export const updatesItem = (id,item) => async (dispatch) => {
    const {data} = await api.updateItem(id,item);
    dispatch({type:'update-item',payload:data});
}

export const deletesItem = (id) => async (dispatch) => {
    await api.deleteItem(id);
    dispatch({type:'delete-item',payload:id});
}