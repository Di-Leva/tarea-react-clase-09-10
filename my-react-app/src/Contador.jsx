import { useState } from "react"

function Contador(){

    const [contador, setContador] = useState(0);

    return(
        <>
            <p>
                Hiciste click: {contador} veces
            </p>
            <button onClick={() => setContador(contador + 1)}
                style={{margin: "0 auto"}}
                >
                Sumar
            </button>
        </>
    )
}

export default Contador