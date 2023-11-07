import React, { useState, useEffect } from 'react';

const QuantidadePorEstado = () => {
  const [estadoData, setEstadoData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Faça a solicitação HTTP para o endpoint do backend
    fetch('http://localhost:8080/portal/quantidadePorEstado', {
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
        setEstadoData(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ textAlign: 'justify' }}>
      <p>A tabela exibe a quantidade de doadores de sangue por estado.</p>
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
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>Estado</th>
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>Quantidade de pessoas</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(estadoData).map(([estado, quantidade]) => (
              <tr key={estado}>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {estado}
                </td>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  {quantidade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuantidadePorEstado;