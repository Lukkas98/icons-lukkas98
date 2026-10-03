import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentType } from "react";
import * as UIIcons from "../components/ui";
import type { IconProps } from "../types";

const meta: Meta = {
  title: "Icons/UI Icons",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

const IconGrid = () => {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState("currentColor");

  const icons = Object.entries(UIIcons).map(([name, Component]) => ({
    name,
    Component: Component as ComponentType<IconProps>,
  }));

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ marginBottom: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div>
          <label>
            Size:
            <input
              type="range"
              min="16"
              max="64"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{ marginLeft: "0.5rem" }}
            />
            <span style={{ marginLeft: "0.5rem" }}>{size}px</span>
          </label>
        </div>
        <div>
          <label>
            Color:
            <input
              type="color"
              value={color === "currentColor" ? "#000000" : color}
              onChange={(e) => setColor(e.target.value)}
              style={{ marginLeft: "0.5rem", cursor: "pointer" }}
            />
          </label>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "2rem",
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        {icons.map(({ name, Component }) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
            }}
          >
            <Component size={size} color={color} />
            <span
              style={{
                fontSize: "0.75rem",
                textAlign: "center",
                wordBreak: "break-word",
                maxWidth: "100%",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AllUIIcons: StoryObj = {
  render: () => <IconGrid />,
  args: {},
};

export const SingleIcon: StoryObj = {
  render: (args) => <UIIcons.IconArrowBadgeUp {...args} />,
  args: {
    size: 32,
    color: "currentColor",
  },
  argTypes: {
    size: {
      control: { type: "number", min: 12, max: 96 },
      description: "Size of the icon in pixels",
    },
    color: {
      control: { type: "color" },
      description: "Color of the icon",
    },
  },
};

export const SizeVariations: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <UIIcons.IconArrowBadgeUp size={16} />
      <UIIcons.IconArrowBadgeUp size={24} />
      <UIIcons.IconArrowBadgeUp size={32} />
      <UIIcons.IconArrowBadgeUp size={48} />
      <UIIcons.IconArrowBadgeUp size={64} />
    </div>
  ),
};

export const ColorVariations: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <UIIcons.IconArrowBadgeUp size={32} color="red" />
      <UIIcons.IconArrowBadgeUp size={32} color="blue" />
      <UIIcons.IconArrowBadgeUp size={32} color="green" />
      <UIIcons.IconArrowBadgeUp size={32} color="#ffa500" />
      <UIIcons.IconArrowBadgeUp size={32} color="purple" />
    </div>
  ),
};
