import React from 'react'
import './Item.css'
import {useDispatch} from 'react-redux';
import {deletesItem} from '../../actions/types';


const Item = (props) => {

  const dispatch = useDispatch();
  // () => dispatch({type:'click-item' , payload: props.item._id})

  const handleClick = (itemId) => {
    dispatch({type:"click-item" , payload:itemId});
  }

  const handleDelete = (deleteItem) => {
    dispatch(deletesItem(deleteItem))
  }

  return (
    <div className='card-box'>
        <h2>{props.item.name}</h2>
        <h2>{props.item.email}</h2>
        <button className='delete' onClick={() => handleDelete(props.item._id)}>Delete</button>
        <button className='edit' onClick={() => handleClick(props.item._id)}>Edit</button>
    </div>
  )
}

export default Item