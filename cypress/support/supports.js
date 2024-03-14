import { faker } from "@faker-js/faker";
import { cpf, cnpj } from 'cpf-cnpj-validator';
import Leite from "leite";
const leite = new Leite();

export class Support {
  static getCurrentDate() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2);

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year}--${hours}h${minutes}m`;
  }

  static date({ days = 0, months = 0, years = 0 } = {}) {
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() + days);
    currentDate.setMonth(currentDate.getMonth() + months);
    currentDate.setFullYear(currentDate.getFullYear() + years);

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
    const year = currentDate.getFullYear();

    return `${day}/${month}/${year}`;
    // Testando a função
    // console.log(date()); // Imprime a data atual no formato dd/mm/yyyy
    // console.log(date({days: 10})); // Imprime a data 10 dias à frente no formato dd/mm/yyyy
    // console.log(date({months: 3})); // Imprime a data 3 meses à frente no formato dd/mm/yyyy
    // console.log(date({years: 1})); // Imprime a data 1 ano à frente no formato dd/mm/yyyy
    // console.log(date({days: 10, months: 3, years: 1})); // Imprime a data 10 dias, 3 meses e 1 ano à frente no formato dd/mm/yyyy
  }

  static generateCep() {
    // Lista de CEPs válidos
    const cepsValidos = [
      "01001-000", // São Paulo - Centro
      "20040-000", // Rio de Janeiro - Centro
      "30110-000", // Belo Horizonte - Centro
      "40140-360", // Salvador - Barra
      "69005-000", // Manaus - Centro
      "88010-000", // Florianópolis - Centro
      "90010-000", // Porto Alegre - Centro Histórico
      "50010-000", // Recife - Santo Antônio
      "13010-000", // Campinas - Botafogo
      "41810-000", // Salvador - Pituba
      "22221-000", // Rio de Janeiro - Botafogo
      "04530-000", // São Paulo - Vila Olímpia
      "59012-340", // Natal - Ribeira
      "58010-000", // João Pessoa - Centro
      "66010-000", // Belém - Campina
      "60810-060", // Fortaleza - Aldeota
      "41830-380", // Salvador - Itaigara
      "29161-389", // Serra - Serra Centro
      "14010-000", // Ribeirão Preto - Centro
      "13500-000", // Rio Claro - Centro
    ];

    const indiceAleatorio = Math.floor(Math.random() * cepsValidos.length);
    return cepsValidos[indiceAleatorio];
  }

  static deleteEmoji(string) {
    const regex = /[\u0000-\u007F]+/g;
    return (string.match(regex) || []).join('');
  }

}

export function title(text, callback) {
  describe(`📘 ${text}`, function () {
    callback()
  })
}

export function testing(text, callback) {
  it(`📗 ${text}`, { retries: 5 }, callback)
}

export function action({ text = 'action page', atr = '', screenshots = false, log = Cypress.env('log') }) {

  if (!Cypress.config('isInteractive')) {
    cy.wait(5000)
  }
  verifyCookies()

  searchLoading()

  if (screenshots && !Cypress.config('isInteractive')) {
    screenshot()
  }

  let regex = /^[!@#$%¨&*()_+{}[\]:;<>,.?~\\\/|]/.test(atr)
  let cypress;
  return cy.document({ log: false }).then((doc) => {
    cypress = cy.step(text).wait(1000, { log: false })
    if (typeof atr === 'object') {
      return cypress.get(atr, { log: log })
    }
    if (!atr.startsWith('tag:')) {
      let selector = regex ? atr : `[${atr}]`
      let query = doc.querySelectorAll(selector);
      if (query.length > 0) {
        return cypress.get(query, { log: log })
      } else {
        return searching(atr, regex)
      }
    } else {
      const division = atr.split(':')
      let for_query = doc.querySelectorAll(division[1])
      if (for_query.length > 0) {
        return cypress.get(for_query, { log: log })
      } else {
        return searching(atr, regex)
      }
    }
  })

  function searching(atr, regex, maxAttempts = 7) {
    const searchAttempt = (attempt = 1) => {
      cy.document({ log: false }).then((doc) => {
        const waitTime =
          attempt === 1
            ? 5000
            : attempt === 2
              ? 10000
              : attempt === 3
                ? 15000
                : attempt === 4
                  ? 20000
                  : attempt === 5 ? 30000
                    : attempt === 6 ? 50000
                      : reloadAttemp()


        cy.log(`🔎 searching element ${atr}, ${attempt} tentative...`)
          .wait(waitTime)
          .then(() => {
            if (!atr.startsWith('tag:')) {
              let selector = regex ? atr : `[${atr}]`;
              const query = doc.querySelectorAll(selector);
              if (query.length > 0) {
                return cy.get(query);
              }
            } else {
              const division = atr.split(':');
              let for_query = doc.querySelectorAll(division[1]);
              if (for_query.length > 0) {
                return cy.get(for_query, { log: log });
              }
            }

            // Se a tentativa atual não encontrar o elemento, faça a próxima tentativa
            if (attempt < maxAttempts) {
              searchAttempt(attempt + 1);
            }
          });
      });
    };

    // Inicie a primeira tentativa
    searchAttempt();
  }

  function reloadAttemp() {
    // cy.clearAllCookies()
    // cy.clearAllLocalStorage()
    // cy.clearAllSessionStorage()
    // cy.wait(5000)
    // cy.step('active reload...').reload()
  }

  function verifyCookies() {
    cy.document({ log: false }).then((cookeis) => {
      const findCookies = cookeis.querySelectorAll(`[id=onetrust-banner-sdk]`);
      if (findCookies.length > 0) {
        cy.get('#onetrust-banner-sdk', { log: false }).then(($element) => {
          const style = $element.attr('style');
          if (!style || (!style.includes('display: none') && !style.includes('visibility: hidden'))) {

            $element.attr('style', (style || '') + ' display: none; visibility: hidden; opacity: 0; transition: visibility 0s 400ms, opacity 400ms linear;');
            cy.wait(5000, { log: false })
          }
        });
      }
    })

  }
}

export function screenshot() {
  let with_origin;
  let height_origin;

  cy.get("html", { log: false })
    .invoke("css", "height")
    .then((h) => {
      height_origin = h;
    });
  cy.get("body", { log: false })
    .invoke("css", "height")
    .then((b_h) => {
      with_origin = b_h;
    });

  cy.get("html", { log: false }).invoke("css", "height", "initial");
  cy.get("body", { log: false }).invoke("css", "height", "initial");

  cy.wait(10000, { log: false });

  cy.step('Capturar evidencias').wait(4000, { log: false }).screenshot(
    `${Support.deleteEmoji(Cypress.currentTest.title)} ->  ${Support.getCurrentDate()}`
  );

  cy.get("html", { log: false }).invoke("css", "height", height_origin);
  cy.get("body", { log: false }).invoke("css", "height", with_origin);
}

export function generate_data({
  days = 0,
  months = 0,
  years = 0,
  min = 1000,
  random = 0,
} = {}) {

  return {
    name: function () {
      return faker.person.fullName()
    },
    cnpj: function () {
      return cnpj.generate()
    },
    phone: function () {
      return faker.phone.number("(##) #####-####")
    },
    email: function () {
      return faker.internet.email()
    },
    date_inicial: function (additionalParams = {}) {
      // Combina os parâmetros padrões com os adicionais
      const params = {
        days: days + (additionalParams.days || 0),
        months: months + (additionalParams.months || 0),
        years: years + (additionalParams.years || 0)
      };
      // Chama a função Support.date com os parâmetros combinados
      return Support.date(params);
    },
    date_final: function (additionalParams = {}) {
      // Combina os parâmetros padrões com os adicionais
      const params = {
        days: days + (additionalParams.days || 0),
        months: months + (additionalParams.months || 0),
        years: years + (additionalParams.years || 0)
      };
      // Chama a função Support.date com os parâmetros combinados
      return Support.date(params);
    },
    commerce: function () {
      return faker.commerce.department()
    },
    price: function () {
      return faker.commerce.price({ min: min })
    },
    product: function () {
      return faker.commerce.product()
    },
    description: function () {
      return faker.commerce.productDescription()
    },
    city: function () {
      return faker.location.city()
    },
    country: function () {
      return faker.location.country()
    },
    number: function () {
      return faker.datatype.number({ min: 0, max: 100 })
    },
    value: function () {
      return faker.datatype.number({ min: 1000000, max: 10000000 })
    },
    word: function () {
      return faker.random.words(random)
    },
    cpf: function () {
      return cpf.generate()
    },
    cep: function () {
      return Support.generateCep()
    },
    complement: function () {
      return leite.localizacao.complemento()
    },
    logradouro: function () {
      return leite.localizacao.logradouro()
    },
    rg: function () {
      return leite.pessoa.rg()
    }

  }
}

function searchLoading() {
  function checkAllLoadersHidden() {

    cy.document({ log: false }).then((doc) => {
      if (doc.querySelectorAll(".loader-container.ng-isolate-scope").length > 0) {
        cy.get('.loader-container.ng-isolate-scope').each((element) => {
          if (element.length > 0) {
            if (!element.hasClass('ng-hide')) {
              // Se alguma das divs não tiver a classe 'ng-hide', aguarde 5 segundos e verifique novamente
              cy.wait(5000); // Aguarde 5 segundos
              checkAllLoadersHidden(); // Verifique novamente
            }
          }

        });
      }

    })

  }

  function continueChecking() {
    cy.document({ log: false }).then((doc) => {
      if (doc.querySelectorAll(".loader-container.ng-isolate-scope").length > 0) {
        return cy.get('.loader-container.ng-isolate-scope').then((elements) => {
          const allHidden = Array.from(elements).every((element) =>
            element.classList.contains('ng-hide')
          );

          if (!allHidden) {
            // Se alguma das divs ainda não tiver a classe 'ng-hide', continue verificando a cada 5 segundos
            cy.wait(5000); // Aguarde 5 segundos
            return continueChecking(); // Continue verificando
          }
        });
      }
    })

  }

  function loaderIcon() {
    cy.document({ log: false }).then((doc) => {
      if (doc.querySelectorAll('[class="loader-container"]').length > 0) {
        cy.get('[class="loader-inner"]').then((element) => {
          if (element.length > 0) {
            cy.get('[class="loader-icon"]').then((element_icon) => {
              if (element_icon.length > 0) {
                cy.wait(5000)
                loaderIcon()
              }
            })
          }

        })
      }
    })
  }

  function loadBlock() {
    cy.document({ log: false }).then((doc) => {
      const tabContentElements = doc.querySelectorAll('[class="tab-content"]');
      if (tabContentElements.length > 0) {
        const activeTabPane = doc.querySelectorAll('[class="tab-pane active"]');
        if (activeTabPane.length > 0) {
          const blockOverlay = doc.querySelectorAll('[class="blockUI blockOverlay"]');
          if (blockOverlay.length > 0) {
            cy.wait(5000);
            loadBlock();
          }
        }
      }
    });
  }



  // Loader icon
  loaderIcon()

  // Inicie a verificação inicial
  checkAllLoadersHidden();

  // Continue verificando até que todas as divs tenham a classe ng-hide
  continueChecking()

  // Load GTI
  loadBlock()
}