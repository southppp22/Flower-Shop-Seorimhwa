import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import InputForm from "./index";

export default {
  title: "Molecules / InputForm",
  decorators: [withKnobs],
};

export const general: React.FC = () => {
  return (
    <InputForm
      labelProps={{
        name: text("labelName", "이메일"),
      }}
      inputProps={{
        name: text("inputName", "입력"),
        placeholder: text("placeholder", "입력해주세요"),
        invalid: boolean("invalid", false),
        disabled: boolean("disabled", false),
      }}
    />
  );
};
