import React from "react";
import { shallow } from "enzyme";
import VideoGridHeader from "../VideoGridheader";

describe("VideoGridHeader", () => {
  test("renders without props", () => {
    const wrapper = shallow(<VideoGridHeader />);
    expect(wrapper).toMatchSnapshot();
  });
  test("test with empty string header", () => {
    const wrapper = shallow(<VideoGridHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders with title ", () => {
    const wrapper = shallow(<VideoGridHeader title="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });
});
