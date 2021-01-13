import { Story } from "@storybook/react/types-6-0";
import Taskbox, { TaskboxProps } from "../Components/Taskbox/Taskbox";

export default {
  title: "Main/Taskbox",
  component: Taskbox,
  args: {
    title: "Do the Chores",
  },
};
const Template: Story<TaskboxProps> = (args) => <Taskbox {...args} />;
// export const Default=()=>{<Taskbox></Taskbox>}
export const Default = Template.bind({});
Default.args = {
  status: "Default",
};
export const Pinned = Template.bind({});
Pinned.args = {
  status: "Pinned",
};
export const Archived = Template.bind({});
Archived.args = {
  status: "Archived",
};
