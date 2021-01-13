import React from "react";
import Taskbox, { TaskboxProps } from "../Taskbox/Taskbox";
import classes from "./index.module.css";
export interface TasklistProps {
  data: TaskboxProps[];
  width?: string | number | (string & {});
  height?: string | number | (string & {});
  loading: boolean;
  onPinned: (id: number) => void;
  onArchived: (id: number) => void;
}
const Index: React.FC<TasklistProps> = ({
  data,
  width,
  height,
  loading,
  onPinned,
  onArchived,
}) => {
  const events = {
    onArchived,
    onPinned,
  };
  const task = data.map((val) => {
    return <Taskbox key={val.id} {...val} {...events} width="100%" />;
  });
  return (
    <div
      className={classes.container}
      style={{ width, height, justifyContent: loading ? "center" : "unset" }}
    >
      {loading ? <div className={classes.loader}>Loading...</div> : task}
    </div>
  );
};

export default Index;
