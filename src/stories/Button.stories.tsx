import { Button } from "@repo/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = { component: Button };
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: { variant: "primary", children: "Primary" },
};
export const Secondary: StoryObj<typeof Button> = {
  args: { variant: "secondary", children: "Secondary" },
};
export const Ghost: StoryObj<typeof Button> = {
  args: { variant: "ghost", children: "Ghost" },
};

export const Outline: StoryObj<typeof Button> = {
  args: { variant: "outline", children: "Outline" },
};

export const Danger: StoryObj<typeof Button> = {
  args: { variant: "danger", children: "Danger" },
};

export const Link: StoryObj<typeof Button> = {
  args: { variant: "link", children: "Link" },
};
