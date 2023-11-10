import React from 'react';
import mobile from "./assets/Mobile application.png";


function Contact () {
    return(

<section class="contato">
          <div class="interface">
          <h2 class="titulo">Contato</h2>
          <h3>Quer entrar em contato comigo?</h3>
          <h4>Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</h4>
         
         
              <form action="#">
                          <input id="" type="" name="" required placeholder="Seu nome:"/>
                         
         
                          <input  id="" type="" name="" required placeholder="Seu email:"/>
                         
                     
                          <input  id="" type="text" name="" required placeholder="Assunto:"/>
                         
                     
                          <textarea  name="" id="" required placeholder="Mensagem:"></textarea>
                         
                     
                      <div class="btn-enviar">
                          <input type="submit" value="Enviar"/>
                      </div>
                     
                      <div class="imagem-de-contato">
                          <img src={mobile} alt="Mobile" className="mobile"/>
                      </div>
              </form>
      </div>
      </section>
    );
}

export default Contact;