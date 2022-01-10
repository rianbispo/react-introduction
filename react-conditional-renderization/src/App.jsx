import React from "react";
import "./styles.css";

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false;

const App = () => {
  const renderShowHistory = () => (
    <div>
      <p>Clique para exibir o histórico dos clientes</p>
      {buttonA}
    </div>
  )

  const renderRegisterCustumer = () => (
    <div>
      <p>Clique para cadastrar um cliente</p>
      {buttonB}
    </div>
  )

  const custumer = "Rian Bispo";

  const showCustumer = () => {
    if(!hasCustomer) return null

    return (
      <div>
        <h2>Nome do cliente: {custumer}</h2>
      </div>
    )
  }

  return (
    <div>
      <p>Condional Renderizarion:</p>
      {hasCustomer ? renderShowHistory() : renderRegisterCustumer()}
      <div>
        {showCustumer()}
      </div>
    </div>
  );
};

export default App;