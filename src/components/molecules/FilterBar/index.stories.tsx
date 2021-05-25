import React from "react";
import { withKnobs, text, array } from "@storybook/addon-knobs";
import FilterBar from "./index";

export default {
  title: "Molecules / FilterBar",
  decorator: [withKnobs],
};

export const general: React.FC = () => {
  const data = array("itemList", ["추천순", "인기순", "신상품순"]);
  return <FilterBar itemList={data} />;
};
