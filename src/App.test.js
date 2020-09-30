import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

import { Country } from "./Country/Country";
const simulateChange = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", { target: { value: newValue } });
  return wrapper.find(inputSelector);
};
configure({ adapter: new Adapter() });
describe("<App/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Should render 0 countries", () => {
    expect(wrapper.find(<Country />)).toHaveLength(0);
  });
});
