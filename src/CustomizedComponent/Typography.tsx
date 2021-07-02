import React from "react";
import {
  Typography as MaterialTypography,
  TypographyProps,
  TypographyTypeMap,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface Props extends TypographyProps {
  fontWeight?:
    | "100"
    | "300"
    | "400"
    | "500"
    | "700"
    | "900"
    | "bold"
    | "normal";
  gutterBottoms?: number;
  component?: string;
}

const Typography: React.FC<Props> = (props) => {
  const { fontWeight, gutterBottoms, ...rest } = props;
  let styled: any = Object.assign(
    {},
    { fontWeight: fontWeight, marginBottom: gutterBottoms, ...rest }
  );

  return (
    <MaterialTypography {...rest} style={{ ...styled, ...rest.style }}>
      {props.children}
    </MaterialTypography>
  );
};

export default Typography;
