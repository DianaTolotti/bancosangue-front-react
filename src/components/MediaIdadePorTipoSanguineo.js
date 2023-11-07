import React, { useState, useEffect } from 'react';

const MediaIdadePorTipoSanguineo = () => {
  const [MediaTipoSanguineoData, setMediaTipoSanguineoData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Faça a solicitação HTTP para o endpoint do backend
    fetch('http://localhost:8080/portal/mediaIdadePorTipoSanguineo', {
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
        // Ordenar os dados por Tipo Sanguíneo
        const sortedData = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));
        setMediaTipoSanguineoData(sortedData.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}));
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ textAlign: 'justify' }}>
      <p>A tabela exibe a média de idade dos doadores de sangue pelo tipo sanguíneo.</p>
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
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>Tipo Sanguíneo</th>
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>Média de idade (anos)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(MediaTipoSanguineoData).map(([tiposanguineo, mediaidade]) => (
              <tr key={tiposanguineo}>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {tiposanguineo}
                </td>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  {mediaidade.toFixed(0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MediaIdadePorTipoSanguineo;