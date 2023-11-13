import { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import ItemList from "../List/ItemList";

function Home() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const getList = async () => {
    try {
      const response = await axios.get("http://localhost:8000/items/list");
      setList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const addItem = async () => {
    try {
      const response = await axios.post("http://localhost:8000/items/", {
        title: newItem,
      });
      setNewItem("");
      setList([...list, response.data]);
      console.log("added item ");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/items/${itemId}`);
      setList(list.filter((item) => item._id !== itemId));
      console.log("deleteItem");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="container">
        <div className="todo-app">
          <div className="app-title">
            <h2>Today's Tasks</h2>
          </div>
          <div className="text-area">
            <input
              type="text"
              id="input-box"
              placeholder="add your tasks"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>+</button>
          </div>
          <ul className="list">
            {list.map((item) => (
              <ItemList key={item._id} item={item} onDelete={deleteItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
