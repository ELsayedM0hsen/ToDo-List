import { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import TaskList from "../List/taskList";
import { useGetUserID } from "../auth/getUserId.js";
import { useCookies } from "react-cookie";

const Home = () =>{
  const userId = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    user: userId,
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/list`,
        {
          headers: { authorization: cookies.access_token },
        });
        console.log("this",response);
        setList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getList();
    console.log("gitlist launched");
  }, []);



  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/list",
        newTask,
        {
          headers: { authorization: cookies.access_token },
        }
      );

      setList([...list, response.data]);
      setNewTask(prevValue => {
        return {
          ...prevValue,
          title:""
        }
      });

      console.log("added task ", newTask, list);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/list/${taskId}`,
      {
        headers: { authorization: cookies.access_token },
      });
      setList(list.filter((task) => task._id !== taskId));
      console.log("deleteTask");
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
              value={newTask.title}
              name="title"
              onChange={(e)=> {
                const {name, value} = e.target;
                setNewTask(prevValue => {
                  return {
                    ...prevValue,
                    [name]:value
                  }
                })
                }}
            />
            <button onClick={addTask}>+</button>
          </div>
          {newTask.title}
          <ul className="list">
            {list.map((task) => (
              <TaskList key={task._id} task={task} onDelete={deleteTask}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
