import React, { useState, useEffect } from "react";
import Item from "./Item/Item";
import "./items.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllItems } from "../actions/types";

// const data = [
//     {
//       name:"suraj",
//       email:"suraj@gmail.com"
//     },
// ]

const Items = () => {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.FindId);
  
  const state = useSelector((state) => state.ItemsData);

  useEffect(() => {
    dispatch(getAllItems());
  },[dispatch , currentId]);

  return (
    <div className="items-data">
      {state.map((e) => (
        <>
          <Item item={e} />
        </>
      ))}
    </div>
  );
};

export default Items;
