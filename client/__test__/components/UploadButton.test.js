import React from "react";
import renderer from "react-test-renderer";
import UploadButton from "../../src/components/UploadButton";
import EditScreen from "../../src/screens/EditScreen";

describe("UploadButton Render", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<UploadButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("given an image selected from library, display it to the screen", () => {
    const { getByText } = render(<UploadButton />);
    fireEvent.press(getByText("Upload"));
    expect();
  });
});
