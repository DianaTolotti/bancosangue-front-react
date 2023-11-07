import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import QuantidadePorEstado from '../components/QuantidadePorEstado'; 
import IMCMedioPorFaixaDeIdade from '../components/IMCMedioPorFaixaDeIdade';
import PercentualObesos from '../components/PercentualObesos';
import CalcularQuantidadePossiveisDoadores from '../components/CalcularQuantidadePossiveisDoadores';
import MediaIdadePorTipoSanguineo from '../components/MediaIdadePorTipoSanguineo';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">       
          <Switch>
            <Route component={Home} path="/" exact={true} />
            <Route component={QuantidadePorEstado} path="/portal/quantidadePorEstado"/> 
            <Route component={IMCMedioPorFaixaDeIdade} path="/portal/IMCMedioPorFaixaDeIdade"/> 
            <Route component={PercentualObesos} path="/portal/percentualObesos" />
            <Route component={MediaIdadePorTipoSanguineo} path="/portal/mediaIdadePorTipoSanguineo" />
            <Route component={CalcularQuantidadePossiveisDoadores} path="/portal/calcularQuantidadePossiveisDoadores" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;