# Contribuindo

## Requisitos

- [Chave SSH configurada e adicionada à sua conta do GitHub](https://help.github.com/articles/generating-ssh-keys/)
- [`nvm` (Node Version Manager)](https://github.com/creationix/nvm) para instação e uso do
  `Node 12` e do `npm`;

Contributing to zilla requires that you can run this repo locally on
your computer.

Contribuições para esse projeto requerem que você baixe esse repositório na sua máquina.

## Começando a contribuir

### 1. Clone o repositório

Vá para a página inicial do repositório ([manifest](https://github.com/b1tsplease/manifest)) e clique no botão `Clone`, localizado no canto superior direito e copie a URL da opção `Clone with SSH`. Ela deve começar com `git@github.com...`.

No seu terminal:

```sh
git clone git@github.com:b1tsplease/manifest.git
cd manifest
```

### 2. Trabalhe em uma branch

Qualquer modificação no projeto deve ser feita em uma branch separada, **não** commite diretamente na branch `develop`, muito menos na master.

- Sempre trabalhe em uma branch separada (de preferência seguindo o padrão [Gitflow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow))
- Crie PRs da sua branch para a branch `develop`
- Todos os commits nas branches `develop` e `master` **DEVEM** seguir os padrões descritos [aqui](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/)

### 3. Lerna

Para facilitar o gerenciamento do projeto, decidimos criar ele como um [Monorepo](https://en.wikipedia.org/wiki/Monorepo), usando o [Lerna](https://lerna.js.org/).

#### Instale o Lerna

```sh
npm install -g lerna
```

#### Instale as dependências

```sh
lerna bootstrap
```

---

É isso, você está pronto pra contribuir no projeto. Basta fazer as mudanças na sua branch e abrir um Pull Request.

### 5. Atualizando um Pull Request

Mantenha as atividades no seu Pull Request atualizadas, os responsáveis pelo projeto estarão fazendo _review_ no seu trabalho, fazendo comentários, tirando dúvidas e sugerindo mudanças antes que você possa mergear ele.

Assim que seu PR for aprovado, você poderá mergear ele na branch `develop`.
