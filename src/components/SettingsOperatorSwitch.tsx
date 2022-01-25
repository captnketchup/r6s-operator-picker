import { useState } from "react";

type SettingsOperatorSwitchProps = {
  name: string;
  icon: string;
};

export function SettingsOperatorSwitch({
  name,
  icon,
}: SettingsOperatorSwitchProps) {
  let defaultValue: boolean = false;
  const tempLocal = localStorage.getItem(name);
  if (tempLocal !== null) {
    defaultValue = JSON.parse(tempLocal);
  }

  const [isOwned, setIsOwned] = useState(defaultValue);
  return (
    <div
      onClick={() => {
        setIsOwned(!isOwned);
        localStorage.setItem(name, (!isOwned).toString());
      }}
      className="cursor-pointer flex flex-row gap-2 items-center justify-between bg-myRed rounded-full px-8 py-2"
    >
      <img src={icon} className="h-24" />
      <p className="text-white font-bold">{name}</p>
      <input
        className="h-8 w-8"
        type={"checkbox"}
        checked={isOwned}
        onChange={() => {
          setIsOwned(!isOwned);
          localStorage.setItem(name, (!isOwned).toString());
        }}
      />
    </div>
  );
}
