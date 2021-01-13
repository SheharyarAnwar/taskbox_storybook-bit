import { Story } from "@storybook/react/types-6-0";
import Taskmaker, { TaskmakerProps } from "../Components/Taskmaker/Taskmaker";

const onAddTask = (task: string) => {
  console.log(task);
};

export default {
  title: "Main/Taskmaker",
  component: Taskmaker,
  args: {},
};
const Template: Story<TaskmakerProps> = (args) => <Taskmaker {...args} />;
// export const Default=()=>{<Taskmaker></Taskmaker>}
export const Default = Template.bind({});
Default.args = {
  onAddTask,
};
