import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

const CardapioApp = React.lazy(() => import("cardapio/CardapioApp"));
const PedidoApp = React.lazy(() => import("pedido/PedidoApp"));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "20px"
        }}
      >
        <div>
          <h1>Cardápio</h1>
          <CardapioApp />
        </div>

        <div>
          <h1>Pedido</h1>
          <PedidoApp />
        </div>
      </div>
    </Suspense>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);