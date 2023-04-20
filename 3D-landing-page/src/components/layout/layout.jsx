import React from "react";
import { Grid, Left, Sub } from "./layout.styles";

export default function Layout() {
  return (
    <Grid>
      <Left>
        <div>
          Savor the sweetness <br /> with Sting's <br /> Stout Beer <br />{" "}
          delight
        </div>
        <Sub />
      </Left>
    </Grid>
  );
}
