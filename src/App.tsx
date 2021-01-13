import React, { useEffect, useState } from "react";

import Taskmaker from "./Components/Taskmaker/Taskmaker";
import Tasklist from "@bit/sheharyaranwar.taskbox.tasklist";
import { TaskboxProps } from "@bit/sheharyaranwar.taskbox.taskbox";

const apiMock = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data: TaskboxProps[] = new Array(6).fill(null).map((val, i) => {
      return {
        id: i + 1,
        status: i <= 1 ? "Pinned" : i > 2 && i < 4 ? "Archived" : "Default",
        title: `Task ${i + 1}`,
      };
    });
    return resolve(data);
  }, 1000);
});

function App() {
  const [data, setData] = useState<TaskboxProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const onPinned = (id: number) => {
    setData((prev) =>
      prev.map((val) => {
        let transformedData = val;
        if (val.id === id) {
          const status = val.status === "Pinned" ? "Default" : "Pinned";
          transformedData = { ...transformedData, status };
        }
        return transformedData;
      })
    );
  };
  const onArchived = (id: number) => {
    setData((prev) =>
      prev.map((val) => {
        let transformedData = val;
        if (val.id === id) {
          transformedData = { ...transformedData, status: "Archived" };
        }
        return transformedData;
      })
    );
  };
  const taskAdded = (title: string) => {
    setData((prev) => [
      ...prev,
      { title, status: "Default", id: prev.length + 1 },
    ]);
  };
  useEffect(() => {
    setLoading(true);
    apiMock.then((data) => {
      console.log(data);
      setData(data as TaskboxProps[]);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Taskmaker onAddTask={taskAdded} />
      <Tasklist
        data={data}
        loading={loading}
        onPinned={onPinned}
        onArchived={onArchived}
      />
    </>
  );
}

export default App;
