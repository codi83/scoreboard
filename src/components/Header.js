import React from "react";
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

export const Header = ({title, players}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
};