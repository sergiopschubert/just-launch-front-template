import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './';
import { BadgeColor } from '@/app/shared/@JustLaunch/domain/enums/BadgeColor';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    color: BadgeColor.Primary,
    children: 'Primary Badge',
  },
};

export const Red: Story = {
  args: {
    color: BadgeColor.Red,
    children: 'Red Badge',
  },
};

export const Orange: Story = {
  args: {
    color: BadgeColor.Orange,
    children: 'Orange Badge',
  },
};

export const Amber: Story = {
  args: {
    color: BadgeColor.Amber,
    children: 'Amber Badge',
  },
};

export const Yellow: Story = {
  args: {
    color: BadgeColor.Yellow,
    children: 'Yellow Badge',
  },
};

export const Lime: Story = {
  args: {
    color: BadgeColor.Lime,
    children: 'Lime Badge',
  },
};

export const Green: Story = {
  args: {
    color: BadgeColor.Green,
    children: 'Green Badge',
  },
};

export const Emerald: Story = {
  args: {
    color: BadgeColor.Emerald,
    children: 'Emerald Badge',
  },
};

export const Teal: Story = {
  args: {
    color: BadgeColor.Teal,
    children: 'Teal Badge',
  },
};

export const Cyan: Story = {
  args: {
    color: BadgeColor.Cyan,
    children: 'Cyan Badge',
  },
};

export const Sky: Story = {
  args: {
    color: BadgeColor.Sky,
    children: 'Sky Badge',
  },
};

export const Blue: Story = {
  args: {
    color: BadgeColor.Blue,
    children: 'Blue Badge',
  },
};

export const Indigo: Story = {
  args: {
    color: BadgeColor.Indigo,
    children: 'Indigo Badge',
  },
};

export const Violet: Story = {
  args: {
    color: BadgeColor.Violet,
    children: 'Violet Badge',
  },
};

export const Purple: Story = {
  args: {
    color: BadgeColor.Purple,
    children: 'Purple Badge',
  },
};

export const Fuchsia: Story = {
  args: {
    color: BadgeColor.Fuchsia,
    children: 'Fuchsia Badge',
  },
};

export const Pink: Story = {
  args: {
    color: BadgeColor.Pink,
    children: 'Pink Badge',
  },
};

export const Rose: Story = {
  args: {
    color: BadgeColor.Rose,
    children: 'Rose Badge',
  },
};

export const Zinc: Story = {
  args: {
    color: BadgeColor.Zinc,
    children: 'Zinc Badge',
  },
};
