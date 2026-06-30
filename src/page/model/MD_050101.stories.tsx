import type { Meta, StoryObj } from "@storybook/react";
import { MD_050101 } from "./MD_050101";

const meta: Meta<typeof MD_050101> = {
  title: "Pages/Model/MD_050101 모델 탐색",
  component: MD_050101,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cT3BEonDHEGYmWQjId4wNm/jd-%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8-%EC%88%98%EC%97%85%EC%9E%90%EB%A3%8C--Copy-?node-id=18615-7021",
    },
  },
};
export default meta;

type Story = StoryObj<typeof MD_050101>;

export const Default: Story = {};
