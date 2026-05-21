# Restaurante Micro Frontends

Projeto desenvolvido com React e Webpack Module Federation para praticar conceitos de Micro Frontends.

## Estrutura

```bash
restaurante/
├── container/
├── cardapio/
└── pedido/
```

---

# Aplicações

## Container

Aplicação principal responsável por carregar os micros frontends.

Porta:

```bash
http://localhost:3000
```

---

## Cardápio

Micro frontend responsável por listar os pratos disponíveis.

Porta:

```bash
http://localhost:3001
```

---

## Pedido

Micro frontend responsável por mostrar os itens adicionados ao pedido.

Porta:

```bash
http://localhost:3002
```

---

# Como rodar o projeto

Abra 3 terminais.

## 1. Rodar o Cardápio

```bash
cd cardapio
npm install
npm start
```

---

## 2. Rodar o Pedido

```bash
cd pedido
npm install
npm start
```

---

## 3. Rodar o Container

```bash
cd container
npm install
npm start
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

# Tecnologias utilizadas

- React
- JavaScript
- Webpack 5
- Module Federation
- Babel
