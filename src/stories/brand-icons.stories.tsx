import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as BrandIcons from "../components/brands";
import type { IconProps } from "../types";

const meta: Meta = {
  title: "Icons/Brand Icons",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

const BrandIconGrid = () => {
  const [size, setSize] = useState(48);

  const icons = Object.entries(BrandIcons).map(([name, Component]) => ({
    name,
    Component: Component as React.ComponentType<IconProps>,
  }));

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <label>
          Size:
          <input
            type="range"
            min="24"
            max="96"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{ marginLeft: "0.5rem" }}
          />
          <span style={{ marginLeft: "0.5rem" }}>{size}px</span>
        </label>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
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
            <Component
              size={size}
              style={{
                backgroundColor:
                  name === "IconExpressjs" || name === "IconGithub" ? "#24292f" : "transparent",
              }}
            />
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

export const AllBrandIcons: StoryObj = {
  render: () => <BrandIconGrid />,
  args: {},
};

export const SingleIcon: StoryObj = {
  render: (args) => <BrandIcons.IconReact {...args} />,
  args: {
    size: 48,
  },
  argTypes: {
    size: {
      control: { type: "number", min: 24, max: 96 },
      description: "Size of the icon in pixels",
    },
  },
};

export const SizeVariations: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <BrandIcons.IconReact size={32} />
      <BrandIcons.IconReact size={48} />
      <BrandIcons.IconReact size={64} />
      <BrandIcons.IconTypescript size={32} />
      <BrandIcons.IconTypescript size={48} />
      <BrandIcons.IconTypescript size={64} />
    </div>
  ),
};

export const PopularBrands: StoryObj = {
  render: () => (
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <BrandIcons.IconReact size={48} />
        <span style={{ fontSize: "0.75rem" }}>React</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <BrandIcons.IconTypescript size={48} />
        <span style={{ fontSize: "0.75rem" }}>TypeScript</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <BrandIcons.IconNextjs size={48} />
        <span style={{ fontSize: "0.75rem" }}>Next.js</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <BrandIcons.IconNodejs size={48} />
        <span style={{ fontSize: "0.75rem" }}>Node.js</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <BrandIcons.IconTailwindcss size={48} />
        <span style={{ fontSize: "0.75rem" }}>Tailwind</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <BrandIcons.IconGithub size={48} />
        <span style={{ fontSize: "0.75rem" }}>GitHub</span>
      </div>
    </div>
  ),
};
