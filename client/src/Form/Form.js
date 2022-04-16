import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from 'react-redux';
import './Form.css'
import {createsItem , updatesItem} from '../actions/types';

const Form = () => {

    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.FindId);
    const data = useSelector((state) => currentId ? state.ItemsData.find((p) => p._id===currentId) : null);
    const [datas , setDatas] = useState({
        name:"",
        email:"",
        password:""
    })

    useEffect(()=>{
        if(currentId){
            setDatas(data);
        }
    },[data,currentId]);

    const handleInput = (e) => {
        setDatas({...datas , [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatesItem(currentId , datas));
            dispatch({type:'reset-item',payload:null});
        }else{
            dispatch(createsItem(datas));
        }
        setDatas({name:'',email:'',password:''});
    }

  return (
    <div className='form-container'>
        <h2>Create Item</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={datas.name} name="name" onChange={handleInput} placeholder="Enter Name :" autoComplete='off'/>
            <input type="email" value={datas.email} name="email" onChange={handleInput} placeholder="Enter Email :" autoComplete='off'/>
            <input type="password" value={datas.password} name="password" onChange={handleInput} placeholder="Enter Password :" autoComplete='off' />
            <button type='submit' className='form-submit'>submit</button>
        </form>
    </div>
  )
}

export default Form