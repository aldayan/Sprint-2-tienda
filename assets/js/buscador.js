document.addEventListener("keyup",  e=>{

    if(e.target.matches("#buscador")){

        if (e.key === "Escape")e.target.value="";

            document.querySelectorAll(".articulo").forEach(motos =>{
                 motos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                     ?motos.classList.remove("filtro")
                         :motos.classList.add("filtro")

});

    };


});