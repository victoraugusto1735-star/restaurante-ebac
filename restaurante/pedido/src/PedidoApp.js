import React, { useEffect, useState } from "react";

export default function PedidoApp() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        function receberPrato() {
            setItem(() => [...itensAtuais, event.detail]);
        }

        window.addEventListener("prato-adicionado", receberPrato);

        return () => {
            window.removeEventListener("prato-adicionado", receberPrato);
        }
    },[]);

    return (
        <div>
            <h2>Pedido</h2>
            
            {item.length === 0 ? (
                <p>Nenhum prato adicionado</p>
            ) : (
                <ul>
                    {item.map((item, index) => (
                        <li key={index}>{item.nome}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}