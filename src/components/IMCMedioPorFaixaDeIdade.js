import React, { useState, useEffect } from 'react';

const IMCMedioPorFaixaDeIdade = () => {
  const [IMCData, setIMCData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Faça a solicitação HTTP para o endpoint do backend
    fetch('http://localhost:8080/portal/IMCMedioPorFaixaDeIdade', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        return response.json();
      })
      .then(data => {
        setIMCData(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ textAlign: 'justify' }}>
      <p>A tabela exibe o IMC médio dos doadores de sangue em cada faixa de idade de dez em dez anos: 0 a 10; 11 a 20; 21 a 30 e assim sucessivamente.</p>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        <table
          style={{
            margin: '0 auto',
            border: '2px solid blue',
            borderCollapse: 'collapse',
            textAlign: 'center'
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>Faixa etária</th>
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>IMC médio</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(IMCData).map(([faixaetaria, imc]) => (
              <tr key={faixaetaria}>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {faixaetaria}
                </td>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  {imc.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IMCMedioPorFaixaDeIdade;