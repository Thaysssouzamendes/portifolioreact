import React, {useEffect} from "react";
import vector from "meu/src/assets/vector.png";


function dark() {
    // Obtém uma referência ao elemento <body> do documento
    const darkmode = document.body;
  
    // Alterna a classe 'darkMode' no elemento <body>. 
    // Se 'darkMode' estiver presente, ele será removido; se não estiver, será adicionado.
    darkmode.classList.toggle('darkMode');
  
    // Verifica se o elemento <body> contém a classe 'darkMode'
    if (darkmode.classList.contains('darkMode')) {
      // Se a classe 'darkMode' estiver presente, define o item 'theme' no localStorage como 'dark'
      localStorage.setItem('tema', 'dark');
    } else {
      // Se a classe 'darkMode' não estiver presente, define o item 'theme' no localStorage como 'light'
      localStorage.setItem('tema', 'light');
    }
  }


function Header () {
    
    useEffect(() => {
        // Quando o componente é montado, verifique a preferência no localStorage
        const temaAtual = localStorage.getItem('tema');
        if (temaAtual === 'dark') {
          document.body.classList.add('darkMode');
        } else {
          document.body.classList.remove('darkMode');
        }
      }, []); // A dependência vazia [] significa que este efeito será executado apenas uma vez, similar ao componentDidMount
    
   
    return (
    
    <header>

        <label class="switch" id="mode-switch">
            <input type="checkbox" id="modoSwitch" onClick={dark}/>
            <span class="slider round"></span>
        </label>
   
        <div class="interface">
            <div class="vector">
              <a href="#">
                <img src={vector} alt="vector" className="vector" />
              </a>  
            </div> 


     <nav class="menu-desktop">
           
                <ul>
                    
                    <li><a href="#sobremim">Sobre</a></li>
                    
                    <li><a href="#skills">Skills</a></li>
                    
                    <li><a href="#hobbies">Hobbies</a></li>
                    
                    <li><a href="#formacao">Formações</a></li>
                    
                    <li><a href="#xp">Experiência</a></li>
                    
                    <li><a href="#contato">Contato</a></li>
                    
                </ul>
            </nav>
           
            <div class="btn-contato">
                <a href="#">
                  <button>Contato</button>  
                </a>
            </div>
        </div> 
    </header>

    );
}


export default Header;

