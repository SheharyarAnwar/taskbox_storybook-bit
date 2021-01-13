import { Story } from "@storybook/react/types-6-0";
import { TaskboxProps } from "../Components/Taskbox/Taskbox";

import TaskList, { TasklistProps } from "../Components/Tasklist/Tasklist";

const data: TaskboxProps[] = new Array(9).fill(null).map((val, i) => {
  return {
    id: i + 1,
    status: i <= 3 ? "Pinned" : i > 3 && i < 6 ? "Archived" : "Default",
    title: `Task ${i + 1}`,
  };
});
const onArchived = (num: number) => {
  console.log(num);
};
const onPinned = (num: number) => {
  console.log(num);
};
export default {
  title: "Main/Tasklist",
  component: TaskList,
  args: {
    data: data,
    onArchived,
    onPinned,
  },
};

const Template: Story<TasklistProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
// Default.args = {
// };
