````md
# Restaurante Micro Frontends

Projeto desenvolvido com React e Webpack Module Federation para praticar Micro Frontends.

## Aplicações

- `container` → aplicação principal
- `cardapio` → lista de pratos
- `pedido` → itens adicionados ao pedido

---

# Como rodar

Abra 3 terminais.

## 1. Cardápio

```bash
cd cardapio
npm install
npm start
```

Roda em:

```bash
http://localhost:3001
```

---

## 2. Pedido

```bash
cd pedido
npm install
npm start
```

Roda em:

```bash
http://localhost:3002
```

---

## 3. Container

```bash
cd container
npm install
npm start
```

Roda em:

```bash
http://localhost:3000
```

---

# Comunicação entre os micros

A comunicação foi feita usando eventos globais do navegador.

O micro `cardapio` dispara um evento:

```js
window.dispatchEvent(
  new CustomEvent("adicionar-prato", {
    detail: prato
  })
);
```

O micro `pedido` escuta esse evento:

```js
window.addEventListener("adicionar-prato", receberPrato);
```

Assim, quando um prato é adicionado no cardápio, ele aparece automaticamente no pedido.

---

# Tecnologias

- React
- JavaScript
- Webpack 5
- Module Federation
- Babel
````
