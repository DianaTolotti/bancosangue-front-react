import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Relatórios para Banco de Sangue</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/portal/quantidadePorEstado" className="link" activeClassName="active">
          Candidatos à doação por estado
        </NavLink>
        <NavLink to="/portal/IMCMedioPorFaixaDeIdade" className="link" activeClassName="active">
          IMC Médio
        </NavLink>
        <NavLink to="/portal/PercentualObesos" className="link" activeClassName="active">
          Percentual de Obesos
        </NavLink>
        <NavLink to="/portal/MediaIdadePorTipoSanguineo" className="link" activeClassName="active">
          Idade média por tipo sanguíneo
        </NavLink>
        <NavLink to="/portal/CalcularQuantidadePossiveisDoadores" className="link" activeClassName="active">
        Quantidade possíveis doadores
        </NavLink>
      </div>
    </header>
  );
};

export default Header;