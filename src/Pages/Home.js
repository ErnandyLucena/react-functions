import React from 'react';
import Navbar from '../Components/Navbar'; // Importa o componente Navbar
import Card from '../Components/Card';    // Importa o componente Card
import Carousel from '../Components/Carousel';
import ExampleBarChart from '../Components/ExampleBarChart';

// Função principal do componente Home
function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <Card />
        <Carousel />
        <ExampleBarChart />
      </div>
    </div>
  );
}

export default Home;
