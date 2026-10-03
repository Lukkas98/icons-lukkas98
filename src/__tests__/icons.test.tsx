import { describe, it, expect } from "vitest";
import { IconArrowBadgeDown } from "../components/ui/ArrowBadgeDown";
import { IconJavascript } from "../components/brands/Javascript";

describe("Icon Components", () => {
  it("should render IconArrowBadgeDown", () => {
    const component = IconArrowBadgeDown({});
    expect(component).toBeDefined();
    expect(component.type).toBe("svg");
  });

  it("should accept className prop", () => {
    const component = IconArrowBadgeDown({ className: "w-8 h-8" });
    expect(component.props.className).toBe("w-8 h-8");
  });

  it("should render IconJavascript", () => {
    const component = IconJavascript({});
    expect(component).toBeDefined();
  });

  it("should accept style prop", () => {
    const style = { color: "red" };
    const component = IconArrowBadgeDown({ style });
    expect(component.props.style).toEqual(style);
  });

  it("should apply size to width and height", () => {
    const component = IconArrowBadgeDown({ size: 32 });
    expect(component.props.width).toBe(32);
    expect(component.props.height).toBe(32);
  });

  it("should allow explicit dimensions to override size", () => {
    const component = IconArrowBadgeDown({ size: 32, width: 48 });
    expect(component.props.width).toBe(48);
    expect(component.props.height).toBe(32);
  });
});
