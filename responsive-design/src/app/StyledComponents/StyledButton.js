import React from "react";
import { StyledIconButton } from "./Styled";

const StyledButton = ({ label, variant }) => {
  return (
    <StyledIconButton
      color="secondary"
      variant={variant}
      disableFocusRipple
      disableElevation
      size="medium"
    >
      {label}
    </StyledIconButton>
  );
};

export default StyledButton;
