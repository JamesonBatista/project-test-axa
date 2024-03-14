# Introdução ao Cypress para Iniciantes

## 📄Índice

- [Pré-requisitos](#📄pré-requisitos)
- [Criando seu primeiro projeto](#📄criando-seu-primeiro-projeto)
- [Guia para criar um arquivo de teste estruturado](#📄guia-para-criar-um-arquivo-de-teste-estruturado)
- [Execute seu arquivo de teste criado](#📄execute-seu-arquivo-de-teste-criado)
- [Documentação do Cypress](#📄documentação-do-cypress)

### 🛠Estrutura dos arquivos

- [cypress.env.js](#🛠cypress-env-json)
- [data.json](#🛠data-json)
- [supports.js](#🛠supports-js)

## 📌Funções de Suporte

- [screenshot](#📌screenshot)
- [action](#📌action)
- [generate_data](#📌generate_data)

## 💻Como criar um teste

- [exemplo](#💻exemplo)

<br>

### **📄Pré-requisitos**

Tenha instalado `Visual Studio Code` e o `Node.js` na sua máquina.

<br>

### **📄Criando seu primeiro projeto**

`Observação`: Por padrão, subpastas serão criadas dentro do diretório `e2e` de acordo com o tipo de teste que você está realizando.

Siga os passos abaixo para criar seu primeiro arquivo de teste Cypress:

1. **Navegue até o Diretório de Testes**

   Vá até o diretório `cypress/e2e` dentro do projeto. Este é o local padrão onde o Cypress espera encontrar seus arquivos de teste.

   ```bash
   caminhoDoProjeto/cypress/e2e/subpastas
   ```

2. **Crie o Arquivo de Teste**

   Crie um novo arquivo com a extensão `.cy.js`. O nome do arquivo deve descrever o que o teste vai abordar. Por exemplo:

   ```bash
   meu_primeiro_teste.cy.js
   ```

<br>
                                                                    
### **📄Guia para criar um arquivo de teste estruturado**

Neste guia, exploraremos como estruturar e criar rapidamente seu arquivo de teste em Cypress com os snippets personalizados do projeto AXA.

### **📍Teste completo**

Utilize o snippet `test_complete` para gerar uma estrutura completa de teste.

**Observação: test_complete + ENTER**

```javascript
//AXA Project
// import para funções usadas nos testes
import {
  title,
  testing,
  action,
  screenshot,
  generate_data,
} from "../../support/commands";

// title = describe
// testing = it
// action = cy.get

title("📌 - TC001 - digite o texto aqui", function () {
  before(() => {
    cy.setupTest();
  });

  testing(
    "📑 - UC001 - <- altere a sequencia de numeros 001, 002",
    function () {
      action({ atr: "atributo" });
    }
  );
});

export let inspect = {
  // user: 'id='nome_user''
};
```

### **📍Título e teste**

Utilize o snippet `title` para gerar rapidamente um bloco de título e teste.

**Observação: title + ENTER**

```javascript
title('📌 - TC001 - digite o texto aqui', function () {
​
before(() => {
cy.setupTest()
});
​
testing('📑 - UC001 - digite o texto aqui', function () {
​
action({ atr: 'atributo' })
​
});
});
```

### **📍Bloco de teste**

Para um bloco de teste individual, use o snippet `testing`.

**Observação: testing + ENTER**

```javaScript
testing('📑 - UC001 - <- altere a sequencia de numeros 001, 002', function () {
​
action({ atr: 'atributo' })
​
});
```

<br>

### **📄Execute seu arquivo de teste criado**

Existem duas formas principais de executar seus testes com Cypress: usando o comando `npx cypress open` para abrir a interface gráfica ou o comando `npx cypress run` para executar os testes no terminal. Abaixo estão detalhes sobre ambos os métodos.

- <u>**Interface Gráfica (GUI)**</u>

1. Abra o terminal no diretório do seu projeto.
2. Execute o comando:

   ```bash
   npx cypress open
   ```

3. O Cypress abrirá uma janela mostrando todos os arquivos de teste disponíveis. Clique no seu arquivo de teste para executá-lo. Este modo é mais interativo e permite que você veja os testes sendo executados, bem como qualquer saída ou erro.

- <u>**Linha de Comando (CLI)**</u>

1. Abra o terminal no diretório do seu projeto.
2. Execute o comando:

   ```bash
   npm test
   ```

3. O Cypress executará todos os testes no terminal, sem abrir uma janela gráfica. Esse modo é útil para integração contínua e para executar todos os testes de uma só vez sem interação do usuário.

<br>

### **📄Documentação do Cypress**

Para aprender mais sobre como usar o Cypress, visite a [Documentação Oficial](https://docs.cypress.io/).

<br>

### **🛠cypress-env-json**

O arquivo `cypress.env.json` é usado para armazenar variáveis de ambiente que podem ser diferentes entre ambientes de teste (como QA, Desenvolvimento, Produção, etc.). Isso é útil para configurar URLs específicas.

`Exemplo`:

```json
{
  "run": "qa",
  "qa": {
    "url": "https://kit-corretor-axa-pre-prod-2.onibusiness.com.br/#!/login/admin",
    "session_login": "https://kit-corretor-axa-pre-prod-2.onibusiness.com.br/#!/home"
  },
  "dev": {
    "url": "https://kit-corretor-axa-pre-prod-2.onibusiness.com.br/#!/login/admin",
    "session_login": "https://kit-corretor-axa-pre-prod-2.onibusiness.com.br/#!/home"
  },
  "log": true
}
```

**Observação**: **Para mudar de ambiente basta apenas mudar o `run`, para `qa` ou para `dev`.**

<br>

### **🛠data-json**

O arquivo `data.json` foi criado para guardar os valores como **login** e **senha**, onde é acessado pelo arquivo **commands.js** .Caso for acessar outro usuário basta apenas trocar o `user` e o `pass` para o que desejar.

`Exemplo`:

```json
{
  "user": "pilotonois",
  "pass": "Mudar#123"
}
```

<br>

### **🛠supports-js**

O arquivo `Support.js` que contém a class `Support` onde á uma série de funções utilitárias para auxiliar nos testes. Este arquivo faz uso de várias bibliotecas para gerar dados fictícios, capturas de tela e realizar outras tarefas comuns.

**Observação**: Utilize o snippet `test_complete` para gerar uma estrutura completa de teste, incluindo o import da class support.

```javascript
//AXA Project
// import para funções usadas nos testes
import { title, testing, action, screenshot, generate_data } from '../../support/commands';
​
// title = describe
// testing = it
// action = cy.get
​
title('📌 - TC001 - digite o texto aqui', function () {
​
before(() => {
cy.setupTest()
});
​
testing('📑 - UC001 - <- altere a sequencia de numeros 001, 002', function () {
​
action({ atr: 'atributo' })
​
});
​
});
​
export let inspect = {
​
// user: 'id='nome_user''
​
}
```

<br>

### **📌screenshot**

Esta função realiza uma captura de tela da página atual e salva com um nome que contém o título do teste atual e a data/hora. Além disso, ela restaura a altura original do html e body após a captura de tela. Para usar essa função em seus testes, utilize o snippet `screenshot`. Veja como usar a seguir:

`Exemplo`:

**Observação: screenshot + ENTER**

```javascript
//AXA Project
// import para funções usadas nos testes
import {
  title,
  testing,
  action,
  screenshot,
  generate_data,
} from "../../support/commands";

// title = describe
// testing = it
// action = cy.get

title("📌 - TC001 - digite o texto aqui", function () {
  before(() => {
    cy.setupTest();
  });

  testing(
    "📑 - UC001 - <- altere a sequencia de numeros 001, 002",
    function () {
      // seu codigo

      // snippets screenshot + ENTER
      screenshot();
    }
  );
});

export let inspect = {
  // user: 'id='nome_user''
};
```

<br>

### **📌action**

Esta função é uma extensão personalizada do comando `cy.get()` do Cypress, amplamente utilizado para selecionar um ou mais elementos DOM em testes end-to-end. A ideia por trás da função action é proporcionar testes mais descritivos e fáceis de compreender. Aqui está um guia rápido sobre como usar a função:

`Parâmetros`:

- `text`: Uma descrição ou mensagem sobre a ação que está sendo realizada. Isso opcional. Por padrão o `text` é **action page**
- `atr`: **[atributo]** Este é o mesmo tipo de seletor que você usaria com a função cy.get() padrão do Cypress. Esse atributo sempre vem depois de uma tag de elemento, são essas **input**, **button**, **h3**, **h1**, **id**, **placeholder**, **tabIndex**, **ng-model**, **div**.

`Exemplo`:

**Observação: action + ENTER**

```javaScript
//AXA Project
// import para funções usadas nos testes
import { title, testing, action, screenshot, generate_data } from '../../support/commands';

// title = describe
// testing = it
// action = cy.get

title('📌 - TC001 - digite o texto aqui', function () {

    before(() => {
        cy.setupTest()
    });

    testing('📑 - UC001 - <- altere a sequencia de numeros 001, 002', function () {

      // seu codigo...

      // snippet: action + ENTER
        action({ atr: 'atributo' })

    });

});

export let inspect = {

    // user: 'id='nome_user''

}
```

<br>

### **📌generate_data**

Esta função retorna um objeto contendo vários tipos de dados gerados aleatoriamente usando a biblioteca faker. É útil para fornecer dados fictícios para os testes. Para usar essa função em seus testes, utilize o snippet `generate_data`. Veja como usar a seguir:

`Exemplos`:

**Observação: generate_data + ENTER**

1- Utilizando o snippet `generate_data` ✅

```javascript
// import para funções usadas nos testes
import {
  _cy,
  title,
  testing,
  action,
  screenshot,
  generate_data,
} from "../../support/commands";

title("📌 - TC001 - Digite a descrição do seu teste aqui", function () {
  test("📑 - UC001 - Digite o que vai ser feito no teste aqui", function () {
    //Seu código aqui

    //Snippet generate_data + ENTER
    let data = generate_data();
  });
});
// restante do codigo
```

2- Gerar números aleatórios ✅

```javascript
// import para funções usadas nos testes
import {
  title,
  testing,
  action,
  screenshot,
  generate_data,
} from "../../support/commands";

title("📌 - TC001 - Digite a descrição do seu teste aqui", function () {
  // Usando o snippets generate_data + ENTER
  let data = generate_data();

  testing("📑 - UC001 - Digite o que vai ser feito no teste aqui", function () {
    //Gerar números aleatórios e preenchendo um campo
    action({ atr: "atributo" }).type(data.number);
  });
});
// restante do codigo
```

3- Gerar um cnpj ✅

```javascript
// import para funções usadas nos testes
import {
  title,
  testing,
  action,
  screenshot,
  generate_data,
} from "../../support/commands";

title("📌 - TC001 - Digite a descrição do seu teste aqui", function () {
  // Usando o snippets generate_data + ENTER
  let data = generate_data();

  testing("📑 - UC001 - Digite o que vai ser feito no teste aqui", function () {
    //Gerar um cnpj e preenchendo um campo
    action({ atr: "atributo" }).type(data.cnpj);
  });
});
// restante do codigo
```

4- Gerar uma data atual ✅

```javascript
// import para funções usadas nos testes
import {
  title,
  testing,
  action,
  screenshot,
  generate_data,
} from "../../support/commands";

title("📌 - TC001 - Digite a descrição do seu teste aqui", function () {
  // Usando o snippets generate_data + ENTER
  let data = generate_data();

  testing("📑 - UC001 - Digite o que vai ser feito no teste aqui", function () {
    //Gerando uma data atual e preenchendo um campo
    action({ atr: "atributo" }).type(data.date_inicial);
  });
});
// restante do codigo
```

5- Gerar um cep ✅

```javascript
// import para funções usadas nos testes
import {
  title,
  testing,
  action,
  screenshot,
  generate_data,
} from "../../support/commands";

title("📌 - TC001 - Digite a descrição do seu teste aqui", function () {
  // Usando o snippets generate_data + ENTER
  let data = generate_data();

  testing("📑 - UC001 - Digite o que vai ser feito no teste aqui", function () {
    //Gerar um cep e preenchendo um campo
    action({ atr: "atributo" }).type(data.cep);
  });
});
// restante do codigo
```

**Observação:**
Existe uma variedade de formas. Para ver outros tipos de dados que pode ser gerado pelo `generate_data` deve consutar a função que está no caminho **cypress/support/supports.js**.

<br>

### **💻exemplo**

Veja como criar um teste, e interagir com os elementos de uma página a seguir:

<u>Abordagem:</u>

1. Utilize o snippet [test_complete](#📍teste-completo) para gerar uma estrutura completa de teste. **test_complete + ENTER**.

2. Utilize o snippet [testing](#📍bloco-de-teste) para um bloco de teste individual. **testing + ENTER**

3. Utilize o snippet [action](#📌action) para gerar uma estrutura `cy.get`. **action + ENTER**.

4. **this.login.user** e **this.login.pass**. Estas são referências que permitem acessar os dados armazenados no arquivo [data.json](#🛠data-json). Que são os caminhos para obter o valor user e senha durante a execução do teste.

5. O `export let inspect` foi criado como uma central de seletores CSS. A ideia é organizar de forma clara e descritiva os principais elementos da página web que serão interagidos durante os testes.

<br>

**Observaão**: Use o botão direito do mouse e inspecionar sobre o campo que deseja inspecionar da página.

<br>

`1- Exemplo` 📌

` HTML da página`:

```html
<input
  type="text"
  id="nome_user"
  class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
  ng-model="login.loginData.username"
  autofocus=""
  required=""
  placeholder="Nome de usuário"
  tabindex="1"
  style=""
/>
```

`Uso`: Observe que no HTML da página tem um **input** com um atributo **id="nome_user"**, lembre-se esse atributo deve ser único, pois se tiver mais algum campo da página com o mesmo valor pode ocorrer um erro.

`Construção do código`: Imagine que seja para preencher um campo login do site, usando o comando `type` para isso.

```javascript
//AXA Project
// import para funções usadas nos testes
import { title, testing, action, screenshot, generate_data } from '../../support/commands';
​
// title = describe
// testing = it
// action = cy.get
​
title('📌 - TC001 - digite o texto aqui', function () {
​
before(() => {
cy.setupTest()
});
​
testing('📑 - UC001 - <- altere a sequencia de numeros 001, 002', function () {
​
// 2º PASSO: PASSAR NO ACTION ESSE ATRIBUTO
action({ atr: inspect.user })
.type(this.login.user)
​
});
​
});
​
export let inspect = {
​// 1º PASSO: COLOCAR O VALOR DO ATRIBUTO AQUI
user: 'id="nome_user"'
​
}
```

<br>

`2- Exemplo` 📌

`HTML da página`:

```html
<input
  type="password"
  class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
  ng-model="login.loginData.password"
  required=""
  placeholder="Senha"
  tabindex="2"
  style=""
/>
```

`Uso`: Observe que no HTML da página tem um **input** com um atributo **ng-model="login.loginData.password""**, lembre-se esse atributo deve ser único, pois se tiver mais algum campo da página com o mesmo valor pode ocorrer um erro.

`Construção do código`: Imagine que seja para preencher um campo senha do site, usando o comando `type` para isso.

```javascript
//AXA Project
// import para funções usadas nos testes
import { title, testing, action, screenshot, generate_data } from '../../support/commands';
​
// title = describe
// testing = it
// action = cy.get
​
title('📌 - TC001 - digite o texto aqui', function () {
​
before(() => {
cy.setupTest()
});
​
testing('📑 - UC001 - <- altere a sequencia de numeros 001, 002', function () {
​
action({ atr: inspect.user })
.type(this.login.user)

// 2º PASSO: PASSAR NO ACTION ESSE ATRIBUTO
action({ atr: inspect.pass })
.eq(0) // ESSE COMANDO INDICA O ÍNDECE PARA LOCALIZAR O ELEMENTO (POIS NESSE CASO EXISTE DOIS ELEMENTO COM O MESMO VALOR )
.type(this.login.pass)​

});
​
});
​
export let inspect = {
user: 'id="nome_user"',

​// 1º PASSO: COLOCAR O VALOR DO ATRIBUTO AQUI
pass: 'ng-model="login.loginData.password"'
​
}
```

<br>

`3- Exemplo` 📌

`HTML da página`:

```html
<div class="texto">
  <h3 class="titulo p-bottom-m">Faça uma cotação</h3>
  <p>Jeito simples, rápido e fácil de cotar.</p>
  <a href="#!/servicos-cotacoes">Clique aqui</a>
</div>
```

`Uso`: Observe que no HTML da página tem um **div** com um atributo **href="#!/servicos-cotacoes"**, lembre-se esse atributo deve ser único, pois se tiver mais algum campo da página com o mesmo valor pode ocorrer um erro.

`Construção do código`: Imagine que seja para da um click em campo, usando o comando `click` para isso.

```javascript
//AXA Project
// import para funções usadas nos testes
import { title, testing, action, screenshot, generate_data } from '../../support/commands';
​
// title = describe
// testing = it
// action = cy.get
​
title('📌 - TC001 - digite o texto aqui', function () {
​
before(() => {
cy.setupTest()
});
​
testing('📑 - UC001 - <- altere a sequencia de numeros 001, 002', function () {
​
// 2º PASSO: PASSAR NO ACTION ESSE ATRIBUTO​
action({ atr: inspect.button })
.click()
});
​
});
​
export let inspect = {
​// 1º PASSO: COLOCAR O VALOR DO ATRIBUTO AQUI​
button: 'href="#!/servicos-cotacoes"',

}
```

<br>

`4- Exemplo` 📌

`HTML da página`:

```html
<select
  class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
  ng-model="itensCotacao[itemCotacaoAtivo].dados.tipoPlano"
  ng-options="lst as lst.nome for lst in tipo_plano_front track by lst.id"
  ng-change="onChangedTipoPlano(itemCotacaoAtivo)"
  ng-disabled="flg_campanha_plano"
  required=""
  style=""
>
  <option value="" class="" selected="selected">Selecione</option>
  <option label="OBRAS NOVAS/ AMPLIAÇÕES" value="1">
    OBRAS NOVAS/ AMPLIAÇÕES
  </option>
  <option label="REFORMA SEM ALTERAÇÃO ESTRUTURAL" value="2">
    REFORMA SEM ALTERAÇÃO ESTRUTURAL
  </option>
  <option label="INSTALAÇÃO DE PLACA SOLAR" value="3">
    INSTALAÇÃO DE PLACA SOLAR
  </option>
</select>
```

`Uso`: Observe que no HTML da página tem um **select** com os atributo **label="OBRAS NOVAS/ AMPLIAÇÕES"**, **label="REFORMA SEM ALTERAÇÃO ESTRUTURAL"**, **label="INSTALAÇÃO DE PLACA SOLAR"**, lembre-se esse atributo deve ser único, pois se tiver mais algum campo da página com o mesmo valor pode ocorrer um erro.

`Construção do código`: Imagine que seja para selecionar o campo **REFORMA SEM ALTERAÇÃO ESTRUTURAL**, usando o comando `select` para isso.

```javascript
//AXA Project
// import para funções usadas nos testes
import { title, testing, action, screenshot, generate_data } from '../../support/commands';
​
// title = describe
// testing = it
// action = cy.get
​
title('📌 - TC001 - digite o texto aqui', function () {
​
before(() => {
cy.setupTest()
});
​
testing('📑 - UC001 - <- altere a sequencia de numeros 001, 002', function () {
​
// 2º PASSO: PASSAR NO ACTION ESSE ATRIBUTO​
action({ atr: inspect.select_planos })
.select('REFORMA SEM ALTERAÇÃO ESTRUTURAL')
});
​
});
​
export let inspect = {
​// 1º PASSO: COLOCAR O VALOR DO ATRIBUTO AQUI​
select_planos_tipo: 'REFORMA SEM ALTERAÇÃO ESTRUTURAL'

}
```
