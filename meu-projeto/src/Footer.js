import React from 'react';


//Scroll

const btn= document.getElementById("btnTop")

btn.addEventListener("click",function () {
    window.scrollTo(0,0);
})


function Footer() {
    return (
        <footer>

     <div id="btnTop">
        <i class="arrow up"></i>
     </div>

        <div class="container">
            <p>Desenvolvido por Thays Mendes</p>
            <p>2023</p>
            <p class="copyright">&copy; Copyright Thays Mendes</p>
        </div>
    </footer>

    );
}

export default Footer; 