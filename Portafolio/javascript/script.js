// Estilos de Portafolio //

// Script Header - Botón Menú//

let ButtonMenu = document.getElementById("Menu");
const Nav = document.querySelector("nav");


ContadorMenu = 0 ;

function AñadirMenu()

{
    if(ContadorMenu==0)
    {
        Nav.classList.add("Nav");
        ContadorMenu=-1;
    }

 else
 
    {
        Nav.classList.remove("Nav");
        ContadorMenu=0;}
    }

ButtonMenu.addEventListener("click",AñadirMenu,true);

ContadorOpenClose = 0;

function OpenClose()

{
    if(ContadorOpenClose ==0)
    {
        ButtonMenu.classList.replace("OpenMenu", "CloseMenu");
        ContadorOpenClose = -1;
    }

    else

    {
        ButtonMenu.classList.replace("CloseMenu","OpenMenu");
        ContadorOpenClose = 0;
    }
}

ButtonMenu.addEventListener("click",OpenClose,true);


