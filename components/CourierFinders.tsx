"use client"
import React, { useState } from 'react';
import { Search, Package } from 'lucide-react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const CourierFinders: React.FC = () => {
  const [tracking, setTracking] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = (): void => {
    setIsSearching(true);
    // Aquí iría la lógica de búsqueda real
    setTimeout(() => setIsSearching(false), 2000);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-black-600 mb-2">CourierFinders</h1>
          <p className="text-gray-600">Rastrea tu paquete en cualquier parte del mundo</p>
        </header>

        <div className="flex items-center space-x-4">
          <Input
            type="text"
            placeholder="Ingresa tu número de tracking"
            value={tracking}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTracking(e.target.value)}
            className="flex-grow text-lg p-4"
          />
          <Button
            onClick={handleSearch}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-all duration-300 ease-in-out ${
              isSearching ? 'animate-pulse' : ''
            }`}
            disabled={isSearching}
            variant='black'
          >
            {isSearching ? 'Buscando...' : 'Buscar'}
            <Search className="ml-2" />
          </Button>
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Package className="mr-2" /> Resultados del Tracking
          </h2>
          <p className="text-gray-600">
            Los resultados de tu búsqueda aparecerán aquí.
          </p>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-600">
        © 2024 CourierFinders. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default CourierFinders;