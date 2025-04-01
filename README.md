# 📘 Sistema de Gestão de Funcionários - Startup DevTech

Este projeto foi desenvolvido como parte do estudo de caso da disciplina Técnicas de Construção de Software do professor [@danielcs-prof](https://github.com/danielcs-prof).  
Ele simula um sistema de gestão de funcionários para uma startup fictícia de tecnologia, permitindo cadastrar, editar, excluir, listar e gerar relatórios usando JavaScript puro no navegador.

---

## ✅ Funcionalidades Implementadas

### 🔹 Exercício 1: Cadastro e Listagem de Funcionários

- Cadastro de funcionário com os campos:
  - Nome
  - Idade
  - Cargo
  - Salário
- Armazenamento em um array de objetos da classe `Funcionario`
- Listagem em tabela HTML com os dados inseridos
- Classe `Funcionario` com:
  - Construtor
  - Métodos de acesso (get/set)
  - Método `toString()`

### 🔹 Exercício 2: Edição e Exclusão

- Botão "Excluir" para remover funcionários
- Botão "Editar" para carregar os dados no formulário
- Atualização dos dados após edição
- Uso de eventos com funções anônimas e métodos da classe `Funcionario`

### 🔹 Exercício 3: Refatoração com Arrow Functions

- Uso de funções anônimas (`function() {}`) nos eventos
- Substituição por **arrow functions** (`()=>`) nas ações de cadastro, edição e exclusão
- Manipulação do array com funções modernas

### 🔹 Exercício 4: Relatórios com Métodos de Array

- Relatórios dinâmicos usando programação funcional:
  - Lista de funcionários com salário > R$ 5000
  - Média salarial dos funcionários
  - Cargos únicos (sem repetição)
  - Lista de nomes em maiúsculo
- Uso de `filter`, `map`, `reduce` e `Set`

---

## 🧪 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Docker (para containerizar a aplicação)
- Git + GitHub (para versionamento e colaboração)

---

## 🐳 Como Rodar com Docker

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gestao-funcionarios-lista02.git
cd gestao-funcionarios-lista02
```

2. Construa a imagem Docker:

```bash
docker build -t gestao-funcionarios-lista02 .
```

3. Rode o contêiner:

```bash
docker run -d -p 8081:80 gestao-funcionarios-lista02
```

4. Acesse no navegador:

```
http://localhost:8081
```

---

## 📝 Histórico de Versões

- **v2.0.0** — Primeira versão completa com cadastro, classe, eventos e relatórios
- [Ver todas as tags](https://github.com/soares2107/Lista02-Gestao-de-funcionarios/tags)

---

## 👨‍💻 Autor

**João Gabriel Soares**  
[GitHub](https://github.com/soares2107)

---

## ⚖️ Licença

Este projeto está licenciado sob a licença MIT.
