import { Grid, Typography } from "@mui/material";
import React from "react";

const linkArr = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

const StyledLink = () => {
  return (
    <Grid container spacing={8} justifyContent={"center"}>
      {linkArr?.map((link) => (
        <Grid item>
          <Typography variant="inherit" color="inherit">
            {link}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default StyledLink;
