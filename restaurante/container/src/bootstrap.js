import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

const CardapioApp = React.lazy(() => import("cardapio/CardapioApp"));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div>
        <h1>Container</h1>

        <CardapioApp />
      </div>
    </Suspense>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);