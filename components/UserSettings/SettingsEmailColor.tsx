import { UserPreferenceContext } from "@/context/UserPreferenceContext";
import React, { useContext, useEffect } from "react";
import { Hue, Saturation, useColor } from "react-color-palette";
import "react-color-palette/css";
import { toast } from "react-toastify";
import { CustomButton } from "..";
import { SettingsEmailColorProps } from "@/types/user-preference";

const SettingsEmailColor = ({ setColor, color }: SettingsEmailColorProps) => {
  const { emailColor, changeEmailColor } = useContext(UserPreferenceContext);
  const [colorPalette, setColorPalette] = useColor(emailColor);

  useEffect(() => {
    setColor(colorPalette.hex);
  }, [colorPalette]);

  const submitColor = async () => {
    changeEmailColor(color);
    toast.success("Color was changed");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-[300px]">
        <Saturation
          height={200}
          color={colorPalette}
          onChange={setColorPalette}
        />
        <Hue color={colorPalette} onChange={setColorPalette} />
      </div>

      <CustomButton
        title={"Submit"}
        handleClick={submitColor}
        containerStyles="btn-upload mt-6  "
      />
    </div>
  );
};

export default SettingsEmailColor;
