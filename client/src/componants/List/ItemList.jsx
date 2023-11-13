import axios from "axios";
import { useState } from "react";
import "../styles/Home.css";

const ItemList = ({ item, onDelete }) => {
  const [completed, setCompleted] = useState(item.complete);

  const checkBoxClick = async () => {
    try {
      await axios.put(`http://localhost:8000/items/${item._id}`, {
        complete: !completed,
      });
      setCompleted(!completed);
      console.log("is completed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li key={item._id} >
      <input type="checkbox" onChange={checkBoxClick} checked={completed}/>
      <span id="item">{item.title}</span>
      <span id="delete" onClick={() => onDelete(item._id)}>x</span>
    </li>
  );
};

export default ItemList;
