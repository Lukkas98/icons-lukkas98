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
});
