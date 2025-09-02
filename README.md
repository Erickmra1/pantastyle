Um projeto moderno em HTML utilizando Tailwind CSS para construir aplicações web responsivas com configuração mínima.

🚀 Funcionalidades

HTML5 - Estrutura moderna em HTML seguindo boas práticas

Tailwind CSS - Framework CSS baseado em utilitários para desenvolvimento rápido de UI

Componentes Personalizados - Classes de componentes pré-construídas para botões e containers

NPM Scripts - Comandos fáceis de usar para desenvolvimento e build

Design Responsivo - Abordagem mobile-first para todos os tamanhos de tela

📋 Pré-requisitos

Node.js (v12.x ou superior)

npm ou yarn

🛠️ Instalação

Instalar dependências:

npm install
# ou
yarn install


Iniciar o servidor de desenvolvimento:

npm run dev
# ou
yarn dev

📁 Estrutura do Projeto
html_app/
├── css/
│   ├── tailwind.css   # Arquivo fonte do Tailwind com utilitários personalizados
│   └── main.css       # CSS compilado (gerado)
├── pages/             # Páginas HTML
├── index.html         # Ponto de entrada principal
├── package.json       # Dependências e scripts do projeto
└── tailwind.config.js # Configuração do Tailwind CSS

🎨 Estilização

Este projeto utiliza Tailwind CSS para estilização. Classes utilitárias personalizadas incluem:

🧩 Personalização

Para personalizar a configuração do Tailwind, edite o arquivo tailwind.config.js:

📦 Build para Produção

Gerar o CSS para produção:

npm run build:css
# ou
yarn build:css

📱 Design Responsivo

O app foi construído com design responsivo usando os breakpoints do Tailwind CSS:

sm: 640px ou mais

md: 768px ou mais

lg: 1024px ou mais

xl: 1280px ou mais

2xl: 1536px ou mais

- Built with [Rocket.new](https://rocket.new)
- Powered by HTML and Tailwind CSS

Built with ❤️ on Rocket.new
