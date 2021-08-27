import React from "react";
import renderer from "react-test-renderer";
import ChooseButton from "../../src/components/ChooseButton";
import EditScreen from "../../src/screens/EditScreen";

describe("ChooseButton Render", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<ChooseButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("given an image selected from library, display it to the screen", () => {
    const { getByText } = render(<ChooseButton />);
    fireEvent.press(getByText("Choose"));
    expect();
  });
});
