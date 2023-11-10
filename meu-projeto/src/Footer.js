import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    // Obtém o elemento pelo ID
    const btnTopElement = document.getElementById('btnTop');

    // Verifica se o elemento existe antes de adicionar o ouvinte de evento
    if (btnTopElement) {
      btnTopElement.addEventListener('click', handleBtnTopClick);
    }

    // Função de limpeza para remover o ouvinte de evento ao desmontar o componente
    return () => {
      if (btnTopElement) {
        btnTopElement.removeEventListener('click', handleBtnTopClick);
      }
    };
  }, []);

  const handleBtnTopClick = () => {
    // Adicione a lógica que você deseja executar quando o botão for clicado
    console.log('Botão Top clicado!');
  };

  return (
    <footer>
      <div id="btnTop">
        <i className="arrow up"></i>
      </div>
      <div className="container">
        <p>Desenvolvido por Thays Mendes</p>
        <p>2023</p>
        <p className="copyright">&copy; Copyright Thays Mendes</p>
      </div>
    </footer>
  );
}

export default Footer;
