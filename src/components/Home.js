import React, { useState, useEffect } from 'react';

const Home = () => {
  const [routeChanged, setRouteChanged] = useState(false);
  const items = ['A quantidade de doadores para cada estado brasileiro.',
                 'O IMC médio em cada faixa de idade de dez em dez anos.',
                 'O percentual de obesos entre os homens e entre as mulheres.',
                 'A média de idade para cada tipo sanguíneo.',
                 'A quantidade de possíveis doadores para cada tipo sanguíneo receptor.'];

  // Use useEffect para observar a mudança na rota
  useEffect(() => {
    const handleRouteChange = () => {
      setRouteChanged(true);
    };

    // Adicione um ouvinte de evento para observar as mudanças na rota
    window.addEventListener('popstate', handleRouteChange);

    // Lembre-se de remover o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Agora, você pode usar routeChanged para condicionalmente renderizar conteúdo
  return (
    <div style={{ textAlign: 'center' }}>
    <h4>Doação de sangue</h4>
        <p><i>
          "A doação de sangue é um ato de solidariedade que salva vidas. 
          Seja um herói e faça parte dessa causa!"</i>
        </p><br />
        <p style={{ textAlign: 'justify' }}>Essa página foi criada com o intuito de exibir reatórios sobre os doadores de sangue no Brasil, é possível consultar:</p>
        <ul style={{ textAlign: 'left' }}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
        {routeChanged && <p>A rota mudou!</p>}
    </div>
  );
}

export default Home;