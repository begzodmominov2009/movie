"use client";

import React, { useState } from "react";
import Containers from "../../ui/Containers";
import HomeMoviesCard from "./components/HomeMovies/HomeMoviesCard";

const HomeMovies = () => {
  return (
    <Containers className="mt-6">
      <HomeMoviesCard />
    </Containers>
  );
};

export default HomeMovies;
