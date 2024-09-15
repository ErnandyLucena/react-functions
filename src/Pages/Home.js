import React from 'react';
import Navbar from '../Components/Navbar'; // Importa o componente Navbar
import Card from '../Components/Card';    // Importa o componente Card

// Função principal do componente Home
function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <Card />
      </div>
    </div>
  );
}

export default Home;
