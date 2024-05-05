import React from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="chat Smarter, Not Harder wit Brainwave "
        />
        <div className="flex flex-wrap gap10 mb10 "></div>
      </div>
    </section>
  );
};

export default Benefits;
