import React from 'react';
import github from "./assets/Github.png";
import linkedin from "./assets/linkedin circle.png"; 
import instagram from "./assets/instagram.png";
import curriculo from "./assets/cv.png";
import thays from "./assets/Thays.png.jpeg";
import html5 from "./assets/HTML5.png";
import javascript from "./assets/Javascript.png";
import figma from "./assets/Figma.png";
import node from "./assets/Nodejs.png";
import reactimagem from "./assets/react_icon.png";
import css from "./assets/css_icon.png";
import running from "./assets/running.png";
import gym from "./assets/Gym.png";
import headphones from "./assets/headphones_icon.png";
import tv from "./assets/tv_icon.png";
import swimmer from "./assets/swimmer.png";
import logoupe from "./assets/logoUpe.png";
import alura from "./assets/Alura.png"; 
import softex from "./assets/softex_pernambuco.png";
import santander from "./assets/santander.png"; 
import decodificador from "./assets/Decodificador.png";
import forca from "./assets/Jogo da Forca.png";
import calculadoranormal from "./assets/calculadoraThays - Normal.png";
import calculadoraimc from "./assets/calculadora imc Thays - Projeto.png";




  
function Main() {
   return (

<main>
   <section class="topo-do-site">
      <div class="interface">
          <div class="flex">
              <div class="txt-topo-site">
                  <h1>Olá, meu nome é</h1>
                  <h3>Thays Mendes</h3>
                  <p>Eu sou formada em Odontologia (UPE) e estou em transição de carreira, atualmente participando no projeto Oracle ONE na Alura.</p>
                  <div class="minhas__redes">
                         <ul>
                              <li class="minhas__redes"><a href="#github">Github <img src= {github} alt="Github" className="github"/></a></li>
                              <li class="minhas__redes"><a href="#linkedln">LinkedIn <img src= {linkedin} alt="Linkedin" className="linkedin"/></a></li>
                              <li class="minhas__redes"><a href="#instagram">Instagram <img src= {instagram} alt="Instagram" className="instagram"/></a></li>
                              <li class="minhas__redes"><a href="#curriculo">Currículo <img src= {curriculo} alt="Curriculo" className="curriculo"/></a></li>  
                          </ul>
                      </div> 
                  </div> 
              <div class="img-topo-site">
                  <img src= {thays} alt="Thays" className="thays"/>
              </div> 
          </div> 
      </div> 
   </section> 
   
   <section class="skills">
          <div class="interface">
              <h2 class="titulo">Skills</h2>
              <div class="flex">
                    <div class="skills__img">
                          <ul>
                              <li class="skills__img"><img src={html5} alt="HTML5" className="html5"/></li>
                              <li class="skills__img"> <img src={javascript} alt="Javascript" className="javascript"/></li>
                              <li class="skills__img"> <img src={figma} alt="Figma" className="figma"/></li>
                              <li class="skills__img"><img src={node} alt="Node" className="node"/></li>
                              <li class="skills__img"> <img src={reactimagem} alt="React" className="reactimagem"/> </li>
                              <li class="skills__img"> <img src={css} alt="CSS" className="css"/> </li>
                          </ul>
                      </div>
              </div>
          </div>
      </section> 
     
      <section class="hobbies"> 
          <div class="interface">
              <h2 class="titulo">Hobbies</h2>
          <div class="flex">
              <div class="hobbies__img">
                  <ul>
                      <li class="hobbies__img"><img src={running} alt="Running" className="running"/></li>
                      <li class="hobbies__img"> <img src={gym} alt="Gym" className="gym"/></li>
                      <li class="hobbies__img"> <img src={headphones} alt="Headphones" className="headphone"/></li>
                      <li class="hobbies__img"><img src={tv} alt="TV" className="tv"/></li>
                      <li class="hobbies__img"> <img src={swimmer} alt="Swimmer" className="swimmer"/> </li>
                  </ul>
              </div>
          </div>
          </div>
      </section>
   
   
      <section class="formacao">
          <div class="interface">
              <h2 class="titulo">Formação Acadêmica</h2>
      <div class="flex">
           
              <ul>
                      <i><img src={logoupe} alt="LogoUpe" className="logoupe"/></i>
                      <h4>Odontologia</h4>
                      <p>2022 - UPE</p>
                  </ul>
         
                  <ul> 
                      <i><img src={alura} alt="Alura" className="alura"/></i>
                      <h4>Formação Front End</h4>
                      <p>2023 - Challenge Alura + ONE</p>
                  </ul>
             
                  <ul>
                      <i><img src={softex} alt="Softex" className="softex"/></i>
                      <h4>Front End</h4>
                      <p>Em andamento</p>
                      <p>Softex Pernambuco</p>
                  </ul>
   
   
                  <ul>
                      <i><img src={santander} alt="Santander" className="santander"/></i>
                     <h4>Bootcamp Java + Angular</h4>
                     <p>Em andamento</p>
                      <p>Santander + Dio</p>
                  </ul>    
               </div>
          </div>
      </section>
   
   
   
   
   
     
      <section class="xp">
          <div class="interface">
          <h2 class="titulo">Experiência Profissional</h2>
       <div class="flex">
      <div class="side-by-side">
          
          <div class="Decodificador">
              <i><img src={decodificador} alt="Decodificador" className="decodificador"/></i>
              <h3>Decodificador de texto</h3>
              <p>Challenge Alura Codificador</p>
              <div class="btn-description">
                  <a href="#"><button>Repositório</button></a>
                 <a href="#"><button>Ver demo</button></a>
              </div>
          </div>  
         
          <div class="Jogo">
             
              <i><img src={forca} alt="Forca" className="forca"/></i>
              <h3>Jogo criado com HTML, CSS e JavaScript</h3>
              <p>Challenge Oracle</p>
              <div class="btn-description">
                  
                  <a href="#"><button>Repositório</button></a>
                  <a href="#"><button>Ver demo</button></a>
              </div>
          </div>
      </div>
      
   <div class="side-by-side">     
      <div class="calculadoraNormal">
              
              <i><img src={calculadoranormal} alt="CalculadoraNormal" className="calculadoranormal"/></i>
              <h3>Calculadora Normal</h3>
              <p>Softex Pernambuco</p>
              <div class="btn-description">
                  
                  <a href="#"><button>Repositório</button></a>
                  <a href="#"><button>Ver demo</button></a>
              </div>
          </div>
   
          <div class="calculadoraIMC">
             
              <i><img src={calculadoraimc} alt="calculadoraimc" className="calculadoraimc"/></i>
              <h3>Calculadora IMC</h3>
              <p>Softex Pernambuco</p>
              <div class="btn-description">
                  
                  <a href="https://github.com/Thaysssouzamendes/calculadoraThays.git"><button>Repositório</button></a>
                  <a href="#"><button>Ver demo</button></a>
              </div>
          </div>
   </div>      
               
      </div>
          </div>
      </section>
    
   </main>
    );
}

export default Main; 
