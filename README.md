# Consulta DDD - React com CSS Puro

Este projeto é uma aplicação React completa desenvolvida com **React**, **Vite** e **CSS puro** (sem bibliotecas de estilização) que consome a API Brasil API para consultar informações sobre DDDs brasileiros.

## 🚀 Funcionalidades

- ✅ Busca de informações por DDD
- ✅ Validação de entrada (DDD entre 11 e 99)
- ✅ Exibição do estado correspondente
- ✅ Listagem de todas as cidades em formato de tags
- ✅ Loading spinner durante a busca
- ✅ Mensagens de erro amigáveis
- ✅ Design moderno com gradientes e sombras
- ✅ Animações suaves em CSS puro
- ✅ Totalmente responsivo (mobile e desktop)
- ✅ Componentização React
- ✅ Suporte a Enter para buscar

## 📁 Estrutura do Projeto

```
ddd-react-app/
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── SearchBox.jsx
│   │   ├── Loading.jsx
│   │   ├── Resultado.jsx
│   │   ├── Erro.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilização CSS pura
│   └── main.jsx         # Ponto de entrada
├── index.html           # HTML base
├── package.json         # Dependências
└── vite.config.js       # Configuração Vite
```

## 🛠️ Tecnologias Utilizadas

- **React 19.2.0**: Biblioteca JavaScript para interfaces
- **Vite 7.2.6**: Build tool e dev server
- **Axios 1.13.2**: Cliente HTTP para requisições
- **CSS3 Puro**: Estilização completa sem frameworks

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- pnpm, npm ou yarn

### Passo a passo

1. **Instale as dependências**

```bash
pnpm install
# ou: npm install
# ou: yarn install
```

2. **Execute o projeto**

```bash
pnpm dev
# ou: npm run dev
# ou: yarn dev
```

3. **Acesse no navegador**

```
http://localhost:5173
```

## 🏗️ Build para Produção

```bash
pnpm build
pnpm preview
```

## 🔌 API Utilizada

**Brasil API** - `https://brasilapi.com.br/api/ddd/v1/{ddd}`

## 📝 Exemplo de Uso

Digite um DDD válido (ex: 11, 21, 85) e clique em "Buscar".

---

**Desenvolvido com React e CSS puro** ❤️
