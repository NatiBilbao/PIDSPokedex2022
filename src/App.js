import "./App.css";
import React, { useState, useEffect } from "react";
import { LoginFormik } from "./components/LoginFormik";
import API from "./config/api";

function App() {
  const [trainer, setTrainer] = useState();
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/2`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  //return <>{trainer && <PokeCard idPokemon={trainer.id_pokemon}></PokeCard>}</>;
  return <><LoginFormik/></>
}

export default App;
