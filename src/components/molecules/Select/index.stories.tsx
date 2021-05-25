import React from "react";
import { withKnobs, text, array } from "@storybook/addon-knobs";
import Select from "./index";

export default {
  title: "Molecules / Select",
  decorator: [withKnobs],
};

export const general: React.FC = () => {
  const data = array("colorList", [
    "빨강",
    "노랑",
    "파랑",
    "분홍",
    "알아서 해주세요",
  ]);

  return (
    <Select
      labelProps={{
        name: text("labelName", "꽃색상"),
      }}
      selectList={data}
    />
  );
};
