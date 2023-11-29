import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import CarritoList from "./components/CarritoList";
import CarritoForm from "./components/CarritoForms";
import ButtonAppBar from "./components/AppBar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { LineChartComponent } from "./components/LineChart";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CarritoList />
          </Grid>
          <Grid item xs={4}>
            <CarritoForm />
          </Grid>
          <Grid item xs={6}>
            <LineChartComponent chartTitle="Temperatura" dataType="temperatura"/>
          </Grid>
          <Grid item xs={6}>
            <LineChartComponent  chartTitle="Distancia" dataType="distancia"/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
