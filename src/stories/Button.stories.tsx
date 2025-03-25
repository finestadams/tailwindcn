import { Button } from "@repo/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      description: "The variant of the button",
      control: {
        type: "select",
        options: [
          "primary",
          "alternative",
          "ghost",
          "outline",
          "link",
          "danger",
          "dark",
          "light",
          "gradientMonochrome",
          "gradientDuotone",
          "gradientOutline",
          "colorShadow",
        ],
      },
    },
    size: {
      description: "The size of the button",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    fullWidth: {
      description:
        "If true, the button will take the full width of its container",
      control: "boolean",
    },
    iconOnly: {
      description: "If true, the button will only display an icon",
      control: "boolean",
    },
    pill: {
      description: "If true, the button will have rounded corners",
      control: "boolean",
    },
    asChild: {
      description: "If true, the button will render as a child component",
      control: "boolean",
    },
    icon: {
      description: "The icon to display in the button",
      control: "text",
    },
    children: {
      description: "The content of the button",
      control: "text",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", size: "md", children: "Primary" },
};

export const Alternative: Story = {
  args: { variant: "alternative", size: "md", children: "Alternative" },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "md", children: "Ghost" },
};

export const Outline: Story = {
  args: { variant: "outline", size: "md", children: "Outline" },
};

export const Danger: Story = {
  args: { variant: "danger", size: "md", children: "Danger" },
};

export const Link: Story = {
  args: { variant: "link", size: "md", children: "Link" },
};

export const Dark: Story = {
  args: { variant: "dark", size: "md", children: "Dark" },
};

export const GradientMonochrome: Story = {
  args: {
    variant: "gradientMonochrome",
    size: "md",
    children: "Gradient Monochrome",
  },
};

export const GradientDuotone: Story = {
  args: {
    variant: "gradientDuotone",
    size: "md",
    children: "Gradient Duotone",
  },
};

export const ColorShadow: Story = {
  args: { variant: "colorShadow", size: "md", children: "Color Shadow" },
};

export const Pill: Story = {
  args: { variant: "primary", size: "md", pill: true, children: "Pill Button" },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    size: "md",
    fullWidth: true,
    children: "Full Width Button",
  },
};

export const IconOnly: Story = {
  args: { variant: "primary", size: "md", iconOnly: true, icon: "⭐" },
};

export const Small: Story = {
  args: { variant: "primary", size: "sm", children: "Small Button" },
};

export const Medium: Story = {
  args: { variant: "primary", size: "md", children: "Medium Button" },
};

export const Large: Story = {
  args: { variant: "primary", size: "lg", children: "Large Button" },
};
