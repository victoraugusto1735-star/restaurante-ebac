import React from "react";
import { createRoot } from "react-dom/client";
import CardapioApp from "./CardapioApp";
import("./bootstrap");

createRoot(document.getElementById("root")).render(<CardapioApp />);