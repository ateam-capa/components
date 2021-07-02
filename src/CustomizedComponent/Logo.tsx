import React from "react";
import * as Logos from "../assets";
import clsx from "clsx";

export interface LogoProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  type?: "client" | "partner";
  color?: "black" | "white" | "primary";
  className?: string;
}

const Logo = (props: LogoProps) => {
  const selectedType = props.type === "partner" ? "Partner" : "Client";
  const selectedColor =
    props.color === "primary"
      ? "Primary"
      : props.color === "black"
      ? "Black"
      : "White";
  const selectedLogo =
    Logos[`${selectedType}${selectedColor}` as keyof typeof Logos] ||
    Logos.ClientPrimary;

  return (
    <img
      {...props}
      className={clsx(["capa-logo", props.className])}
      src={selectedLogo}
      alt={`${selectedType}${selectedColor}`}
    />
  );
};

export default Logo;
