import React from "react";
import '../hojas-de-estilo/Pantalla.css'
//definir funcion como funcionFlecha 
//=> retorna el componente
const Pantalla = ({ input }) => (
    <div className="input">
        {input}

    </div>
);
export default Pantalla;