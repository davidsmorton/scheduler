import React from "react";
import {render} from "@testing-library/react"
import Application from "components/Application"

describe("Appointment", () => { 
  
  it("renders without crasing", () => {
  render(<Application />);
  });
}); 

//Stretch - should add unit tests here Dec 2020



