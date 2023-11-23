import axios from "axios";
import { useState } from "react";
import "../styles/Home.css";
import { useCookies } from "react-cookie";

const TaskList = ({ task, onDelete }) => {
  const [completed, setCompleted] = useState(task.complete);
  const [cookies, _] = useCookies(["access_token"]);
  const checkBoxClick = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/user/list/${task._id}`,
        { complete: !completed },
        {
          headers: { authorization: cookies.access_token },
        }
      );
      setCompleted(!completed);
      console.log("is completed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li key={task._id}>
      <input type="checkbox" onChange={checkBoxClick} checked={completed} />
      <span id="item">{task.title}</span>
      <span id="delete" onClick={() => onDelete(task._id)}>
        x
      </span>
    </li>
  );
};

export default TaskList;
