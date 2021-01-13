import React, { useState } from "react";
import classes from "./index.module.css";
export interface TaskmakerProps {
  onAddTask: (task: string) => void;
}
const Index: React.FC<TaskmakerProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  return (
    <div className={classes.container}>
      <h4>Add Task</h4>
      <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
      <button
        onClick={() => {
          onAddTask(title);
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default Index;
