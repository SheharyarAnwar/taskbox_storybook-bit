import React from "react";
import classes from "./index.module.css";
import StarIcon from "./Assets/starsvg";
export interface TaskboxProps {
  id: number;
  title: string;
  status: "Archived" | "Pinned" | "Default";
  width?: string | number | (string & {});
  height?: string | number | (string & {});
  onArchived?: (id: number) => void;
  onPinned?: (id: number) => void;
}

const Index: React.FC<TaskboxProps> = ({
  id,
  onArchived,
  onPinned,
  title,
  status,
  width,
  height,
}) => {
  return (
    <div className={classes.root} style={{ width, height }}>
      <div className={classes.display}>
        <input
          type="checkbox"
          defaultChecked={status === "Archived"}
          disabled={status === "Archived"}
          onChange={() => onArchived!(id)}
        />
        <p>{title}</p>
      </div>
      {status !== "Archived" ? (
        <StarIcon
          onClick={() => onPinned!(id)}
          width={20}
          className={status === "Pinned" ? classes.blue : undefined}
        />
      ) : (
        <span style={{ width: "20px" }}></span>
      )}
    </div>
  );
};

export default Index;
