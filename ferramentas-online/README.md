# Ferramentas Online

Este projeto, intitulado "Ferramentas Online", é uma coleção de ferramentas úteis que podem ser acessadas diretamente do navegador. O objetivo é fornecer funcionalidades práticas, como conversão de arquivos e cálculos, tudo hospedado no GitHub Pages.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
ferramentas-online
├── public
│   └── index.html          # Página principal do projeto
├── src
│   ├── assets              # Recursos estáticos (imagens, ícones, etc.)
│   ├── components          # Componentes React
│   │   ├── CalculadoraFerias.js  # Componente para cálculo de férias
│   │   └── AnuncioPlaceholder.js  # Componente para espaço reservado de anúncios
│   ├── styles              # Estilos da aplicação
│   │   └── tailwind.css    # CSS do Tailwind
│   └── main.js             # Ponto de entrada da aplicação
├── package.json            # Configuração do npm
└── README.md               # Documentação do projeto
```

## Funcionalidades

O projeto atualmente inclui as seguintes ferramentas:

- **Cálculo de Férias**: Um componente que permite aos usuários calcular suas férias com base em dados inseridos.
- **Espaço para Anúncios**: Um componente que serve como espaço reservado para anúncios, permitindo a monetização futura da aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **GitHub Pages**: Plataforma para hospedagem do projeto.

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone <URL do repositório>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd ferramentas-online
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e novas funcionalidades.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.