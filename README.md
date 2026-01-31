# 🧠 Memory Game — SvelteKit

Jogo da memória desenvolvido com **SvelteKit** como projeto prático para estudo de frontend moderno, lógica de jogo e organização de código.

O objetivo do jogo é encontrar todos os pares de cartas no menor número de tentativas possível, exercitando memória e atenção.

---

## 🎮 Demonstração

> Projeto executado localmente via Vite (modo desenvolvimento).

📍 **URL padrão:**
```
http://localhost:5173
```

---

## 🛠️ Tecnologias Utilizadas

- **Svelte 4**
- **SvelteKit 2**
- **Vite**
- **TypeScript**
- **CSS puro**
- **ESLint + Prettier** (padronização de código)

---

## 📂 Estrutura do Projeto
```text
MemoryGame/
├─ src/
│  ├─ +layout.svelte
│  ├─ +page.svelte
│  └─ ...
├─ static/
│  └─ assets do jogo (cartas/imagens)
├─ memory.css
├─ package.json
├─ svelte.config.js
├─ vite.config.ts
└─ README.md
```

| Pasta/Arquivo | Descrição |
|---------------|-----------|
| `src/` | Código principal da aplicação |
| `static/` | Imagens e recursos estáticos |
| `memory.css` | Estilos específicos do jogo |
| `+page.svelte` | Página principal do jogo |

---

## 🧩 Funcionalidades

- ✅ Embaralhamento dinâmico das cartas
- ✅ Sistema de virar cartas
- ✅ Verificação de pares
- ✅ Controle de jogadas
- ✅ Bloqueio de interação durante validação
- ✅ Interface simples e intuitiva

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Passo a passo

1. **Clone o repositório:**
```bash
   git clone https://github.com/HatusLuiz/MemoryGame.git
```

2. **Acesse a pasta do projeto:**
```bash
   cd MemoryGame
```

3. **Instale as dependências:**
```bash
   npm install
```

4. **Rode o projeto em modo desenvolvimento:**
```bash
   npm run dev
```

5. **Abra no navegador:**
```
   http://localhost:5173
```

---

## 📦 Build para Produção (opcional)

Para gerar o build do projeto:
```bash
npm run build
```

Para visualizar o build localmente:
```bash
npm run preview
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- 🎓 Praticar SvelteKit na prática
- 🧠 Trabalhar lógica de jogo em frontend
- 📐 Organizar um projeto real com boas práticas
- 💼 Criar um projeto simples, mas bem estruturado para portfólio

---

## 📝 Observações

> **Nota:** O projeto não possui backend — toda a lógica é executada no frontend.

- 🔹 Ideal para estudos e experimentação
- 🔹 Evolução futura: ranking, cronômetro, níveis de dificuldade, etc.

---

## 👨‍💻 Autor

Desenvolvido por **Luiz Fernando**

[![GitHub](https://img.shields.io/badge/GitHub-LuizAbreu777-181717?style=for-the-badge&logo=github)](https://github.com/LuizAbreu777)

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

---

<div align="center">
  <strong>⭐ Se este projeto foi útil, considere dar uma estrela no repositório!</strong>
</div>
