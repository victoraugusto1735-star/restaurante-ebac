import React from "react";

const pratos = [
  {
    id: 1,
    nome: "Pizza Margherita",
    descricao: "Pizza com queijo, tomate e manjericão."
  },
  {
    id: 2,
    nome: "Hambúrguer Artesanal",
    descricao: "Pão, carne, queijo, alface e molho especial."
  },
  {
    id: 3,
    nome: "Macarrão ao Molho Branco",
    descricao: "Massa com molho branco cremoso."
  }
];

export default function CardapioApp() {
  function adicionarAoPedido(prato) {
    window.dispatchEvent(
      new CustomEvent("adicionar-prato", {
        detail: prato
      })
    );
  }

  return (
    <div>
      <h2>Cardápio</h2>

      {pratos.map((prato) => (
        <div
          key={prato.id}
          style={{
            border: "1px solid #ddd",
            padding: "16px",
            marginBottom: "12px",
            borderRadius: "8px"
          }}
        >
          <h3>{prato.nome}</h3>
          <p>{prato.descricao}</p>

          <button onClick={() => adicionarAoPedido(prato)}>
            Adicionar ao pedido
          </button>
        </div>
      ))}
    </div>
  );
}