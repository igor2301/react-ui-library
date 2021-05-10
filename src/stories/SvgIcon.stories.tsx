import React from "react";
import SvgIcon from "../components/SvgIcon";
import { Icon } from "../components/SvgIcon/SvgIcon";
import { Story } from "@storybook/react";

export default {
  title: "Components/SvgIcon",
  component: SvgIcon,
  argTypes: {
    name: {
      options: [
        Icon.Arrow,
        Icon.Chart,
        Icon.Comment,
        Icon.Hide,
        Icon.Menu,
        Icon.NoUser,
        Icon.Report,
        Icon.Save,
        Icon.Share,
        Icon.Trash,
      ],
      control: { type: "select" },
    },
  },
};

const Template: Story<any> = (args) => <SvgIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: Icon.Arrow,
};
