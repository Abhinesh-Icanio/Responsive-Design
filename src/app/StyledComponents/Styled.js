import styled from "@emotion/styled";
import { AppBar, Button } from "@mui/material";

export const StyledIconButton = styled(Button)(({ theme, variant }) => ({
  color:
    variant === "contained"
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  borderRadius: 6,
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  position: "static",
  top: 0,
  width: "100%",
}));
