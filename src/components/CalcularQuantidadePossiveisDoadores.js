import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BloodTypeData from './BloodTypeData';

const CalcularQuantidadePossiveisDoadores = () => {
    const [bloodData, setBloodData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/portal/calcularQuantidadePossiveisDoadores');
          setBloodData(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <p>A quantidade de possíveis doadores para cada tipo sanguíneo receptor:</p>
      <BloodTypeData data={bloodData} />
    </div>
  );
};

export default CalcularQuantidadePossiveisDoadores;