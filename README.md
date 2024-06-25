# DespesasApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

### Introdução

O projeto "despesas-app" é um aplicativo Angular para gerenciar despesas, utilizando diversas bibliotecas e frameworks para fornecer uma experiência rica e responsiva ao usuário.

### Tecnologias Utilizadas

#### Framework e Ferramentas Principais
- **Angular**: Framework para construção de aplicações web.
- **Angular CLI**: Ferramenta de linha de comando para Angular, usada para scaffolding e gestão do projeto.
- **TypeScript**: Linguagem de programação desenvolvida pela Microsoft que é um superconjunto de JavaScript.

#### Dependências de Produção

1. **@angular/animations**: Utilizado para criar animações dentro do aplicativo Angular.
   - Versão: ^17.2.0
2. **@angular/common**: Contém diretivas e serviços comuns usados na aplicação Angular.
   - Versão: ^17.2.0
3. **@angular/compiler**: Responsável pela compilação dos templates Angular.
   - Versão: ^17.2.0
4. **@angular/core**: O núcleo do framework Angular, contendo os módulos principais.
   - Versão: ^17.2.0
5. **@angular/forms**: Módulo Angular para construção e gerenciamento de formulários.
   - Versão: ^17.2.0
6. **@angular/platform-browser**: Necessário para que a aplicação Angular rode no navegador.
   - Versão: ^17.2.0
7. **@angular/platform-browser-dynamic**: Facilita o bootstrap dinâmico da aplicação Angular.
   - Versão: ^17.2.0
8. **@angular/router**: Módulo para gerenciar navegação e roteamento dentro da aplicação Angular.
   - Versão: ^17.2.0
9. **@po-ui/ng-components**: Biblioteca de componentes visuais da Portinari UI, utilizada para criação de interfaces ricas e responsivas.
   - Versão: ^17.11.0
10. **bootstrap**: Framework CSS para desenvolvimento de interfaces responsivas e mobile-first.
    - Versão: ^5.3.3
11. **ngx-bootstrap**: Conjunto de componentes Angular baseados no Bootstrap.
    - Versão: ^12.0.0
12. **rxjs**: Biblioteca para programação reativa usando observáveis, amplamente utilizada no Angular.
    - Versão: ~7.8.0
13. **sweetalert2**: Biblioteca para exibição de alertas estilizados e responsivos.
    - Versão: ^11.11.0
14. **tslib**: Biblioteca de suporte para TypeScript, necessária para economizar tamanho do código gerado.
    - Versão: ^2.3.0
15. **zone.js**: Biblioteca para captura de contexto de execução assíncrona, utilizada pelo Angular para gerenciamento de mudanças.
    - Versão: ~0.14.3

#### Dependências de Desenvolvimento

1. **@angular-devkit/build-angular**: Conjunto de ferramentas de construção Angular.
   - Versão: ^17.2.3
2. **@angular/cli**: Interface de linha de comando para Angular.
   - Versão: ^17.2.3
3. **@angular/compiler-cli**: Ferramentas de compilação de templates Angular para TypeScript.
   - Versão: ^17.2.0
4. **@types/jasmine**: Tipos TypeScript para o Jasmine, facilitando a escrita de testes unitários.
   - Versão: ~5.1.0
5. **jasmine-core**: Framework de teste para JavaScript.
   - Versão: ~5.1.0
6. **karma**: Executor de testes para JavaScript.
   - Versão: ~6.4.0
7. **karma-chrome-launcher**: Adaptador do Karma para o navegador Chrome.
   - Versão: ~3.2.0
8. **karma-coverage**: Plugin do Karma para geração de relatórios de cobertura de código.
   - Versão: ~2.2.0
9. **karma-jasmine**: Adaptador do Karma para o Jasmine.
   - Versão: ~5.1.0
10. **karma-jasmine-html-reporter**: Plugin do Karma para exibição de relatórios de testes em HTML.
    - Versão: ~2.1.0
11. **typescript**: Linguagem de programação que é um superconjunto de JavaScript, usada no desenvolvimento do aplicativo Angular.
    - Versão: ~5.3.2

### Scripts Disponíveis

No arquivo `package.json`, vários scripts estão disponíveis para facilitar o desenvolvimento e a manutenção do projeto:

- **ng**: Atalho para o comando `ng` do Angular CLI.
- **start**: Inicia o servidor de desenvolvimento na porta padrão (geralmente 4200).
- **build**: Compila o projeto para produção, colocando os arquivos resultantes na pasta `dist/`.
- **watch**: Compila o projeto em modo de observação, recompilando automaticamente quando há mudanças no código.
- **test**: Executa os testes unitários utilizando Karma.

### Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/despesas-app.git
   cd despesas-app
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   A aplicação estará disponível em `http://localhost:4200`.

4. **Executar os testes unitários:**
   ```bash
   npm test
   ```

5. **Compilar o projeto para produção:**
   ```bash
   npm build
   ```

### Estrutura de Pastas

- **src/**: Contém o código fonte da aplicação.
  - **app/**: Contém os módulos e componentes Angular.
  - **assets/**: Arquivos estáticos como imagens e estilos.
  - **environments/**: Arquivos de configuração de ambiente.
- **e2e/**: Contém os testes end-to-end.
- **node_modules/**: Contém as dependências instaladas pelo npm.


