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
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="md">Primary</Button>`,
      },
    },
  },
};

export const Alternative: Story = {
  args: { variant: "alternative", size: "md", children: "Alternative" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="alternative" size="md">Alternative</Button>`,
      },
    },
  },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "md", children: "Ghost" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="ghost" size="md">Ghost</Button>`,
      },
    },
  },
};

export const Outline: Story = {
  args: { variant: "outline", size: "md", children: "Outline" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="outline" size="md">Outline</Button>`,
      },
    },
  },
};

export const Danger: Story = {
  args: { variant: "danger", size: "md", children: "Danger" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="danger" size="md">Danger</Button>`,
      },
    },
  },
};

export const Link: Story = {
  args: { variant: "link", size: "md", children: "Link" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="link" size="md">Link</Button>`,
      },
    },
  },
};

export const Dark: Story = {
  args: { variant: "dark", size: "md", children: "Dark" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="dark" size="md">Dark</Button>`,
      },
    },
  },
};

export const GradientMonochrome: Story = {
  args: {
    variant: "gradientMonochrome",
    size: "md",
    children: "Gradient Monochrome",
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="gradientMonochrome" size="md">Gradient Monochrome</Button>`,
      },
    },
  },
};

export const GradientDuotone: Story = {
  args: {
    variant: "gradientDuotone",
    size: "md",
    children: "Gradient Duotone",
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="gradientDuotone" size="md">Gradient Duotone</Button>`,
      },
    },
  },
};

export const ColorShadow: Story = {
  args: { variant: "colorShadow", size: "md", children: "Color Shadow" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="colorShadow" size="md">Color Shadow</Button>`,
      },
    },
  },
};

export const Pill: Story = {
  args: { variant: "primary", size: "md", pill: true, children: "Pill Button" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="md" pill>Pill Button</Button>`,
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    size: "md",
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="md" fullWidth>Full Width Button</Button>`,
      },
    },
  },
};

export const IconOnly: Story = {
  args: { variant: "primary", size: "md", iconOnly: true, icon: "⭐" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="md" iconOnly icon="⭐" />`,
      },
    },
  },
};

export const Small: Story = {
  args: { variant: "primary", size: "sm", children: "Small Button" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="sm">Small Button</Button>`,
      },
    },
  },
};

export const Medium: Story = {
  args: { variant: "primary", size: "md", children: "Medium Button" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="md">Medium Button</Button>`,
      },
    },
  },
};

export const Large: Story = {
  args: { variant: "primary", size: "lg", children: "Large Button" },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="lg">Large Button</Button>`,
      },
    },
  },
};
