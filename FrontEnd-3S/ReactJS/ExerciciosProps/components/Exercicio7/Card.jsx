// 07) Crie um componente chamado Card utilizando props.children. O componente deve criar uma caixa estilizada
//  e mostrar qualquer conteúdo dentro dela.

import './Card.css';

const MeuCard = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default MeuCard;