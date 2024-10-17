import { useRef } from "react";
import './Parrafico.css';
import { cambiarColorParrafo } from "../../biblioteca/biblioteca.js";

const Numericos = () => {
    
    const refe = useRef(null);
   
    return (
        <>
            <div className="elegant-text">
                <button onClick={() =>{
                 cambiarColorParrafo(refe)
                }}>Cambiar Colorico</button>

                <p ref={refe}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                  magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                   quis nostrud exerci tation ullamcorper suscipit lobortis 
                   nisl ut aliquip ex ea commodo consequat. Duis autem vel 
                   eum iriure dolor in hendrerit in vulputate velit esse molestie 
                   consequat, vel illum dolore eu feugiat nulla facilisis at vero 
                   eros et accumsan et iusto odio dignissim qui blandit praesent 
                   luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
        </>
    );
}

export default Numericos;
