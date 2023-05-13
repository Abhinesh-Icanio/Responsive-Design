import { Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../../Logo.svg";
import { StyledAppBar } from "../StyledComponents/Styled";
import StyledButton from "../StyledComponents/StyledButton";
import StyledLink from "../StyledComponents/StyledLink";

const LayoutAppBar = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Grid
          container
          justifyContent={"space-around"}
          justifyItems={"flex-end"}
          alignItems={"center"}
          rowSpacing={8}
        >
          <Grid item>
            <img src={logo} alt={<Typography>Nexcent</Typography>} />
          </Grid>
          <Grid item>
            <StyledLink />
          </Grid>
          <Grid item display={"flex"} justifyContent={"flex-end"}>
            <StyledButton label={"Login"} />
            <StyledButton label={"Signup"} variant="contained" />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default LayoutAppBar;
