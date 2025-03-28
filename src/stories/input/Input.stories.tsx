import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "@repo/ui/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    inputSize: {
      description: "The size of the input field.",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    error: {
      description: "Error message to display below the input.",
      control: "text",
    },
    icon: {
      description: "Icon to display inside the input field.",
      control: "text",
    },
    placeholder: {
      description: "Placeholder text for the input field.",
      control: "text",
    },
    disabled: {
      description: "Disables the input field.",
      control: "boolean",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `Input` component is used to capture user input. It supports different sizes, states, and configurations.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

/**
 * Template for creating input stories.
 */
const Template: Story = {
  render: (args) => <Input {...args} />,
};

/**
 * Default Input Story
 */
export const Default: Story = {
  ...Template,
  args: {
    placeholder: "Enter text",
    inputSize: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "The default input field with a placeholder.",
      },
      source: {
        code: `<Input placeholder="Enter text" inputSize="md" />`,
      },
    },
  },
};

/**
 * Small Input Story
 */
export const Small: Story = {
  ...Template,
  args: {
    placeholder: "Small Input",
    inputSize: "sm",
  },
  parameters: {
    docs: {
      description: {
        story: "A small-sized input field.",
      },
      source: {
        code: `<Input placeholder="Small Input" inputSize="sm" />`,
      },
    },
  },
};

/**
 * Large Input Story
 */
export const Large: Story = {
  ...Template,
  args: {
    placeholder: "Large Input",
    inputSize: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "A large-sized input field.",
      },
      source: {
        code: `<Input placeholder="Large Input" inputSize="lg" />`,
      },
    },
  },
};

/**
 * Input with Error Story
 */
export const WithError: Story = {
  ...Template,
  args: {
    placeholder: "Enter text",
    error: "This field is required.",
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with an error message.",
      },
      source: {
        code: `<Input placeholder="Enter text" error="This field is required." />`,
      },
    },
  },
};

/**
 * Input with Icon Story
 */
export const WithIcon: Story = {
  ...Template,
  args: {
    placeholder: "Search",
    icon: (
      <svg
        className="w-4 h-4 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M12.9 14.32a8 8 0 111.41-1.41l4.39 4.39a1 1 0 01-1.42 1.42l-4.38-4.4zM8 14a6 6 0 100-12 6 6 0 000 12z" />
      </svg>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with a search icon.",
      },
      source: {
        code: `<Input placeholder="Search" icon={<svg>...</svg>} />`,
      },
    },
  },
};

/**
 * Disabled Input Story
 */
export const Disabled: Story = {
  ...Template,
  args: {
    placeholder: "Disabled Input",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled input field.",
      },
      source: {
        code: `<Input placeholder="Disabled Input" disabled />`,
      },
    },
  },
};
