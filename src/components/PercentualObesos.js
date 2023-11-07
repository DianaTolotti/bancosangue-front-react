import React, { useState, useEffect } from 'react';

const PercentualObesos = () => {
  const [percentualObesosData, setPercentualObesosData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:8080/portal/percentualObesos', {
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
        setPercentualObesosData(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ textAlign: 'justify' }}>
      <p>A tabela exibe o percentual de obesos entre os homens e entre as mulheres. Considerando que é obeso quem tem IMC maior que 30.</p>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        <table
          style={{
            margin: '0 auto',
            border: '2px solid blue',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>Sexo</th>
              <th style={{ border: '2px solid #4682B4', padding: '10px' }}>Percentual de Obesos</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(percentualObesosData).map(([sexo, percentual]) => (
              <tr key={sexo}>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {sexo}
                </td>
                <td
                  style={{
                    border: '2px solid #4682B4',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  {percentual}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PercentualObesos;