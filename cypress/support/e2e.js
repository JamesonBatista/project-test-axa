import './commands'
import 'cypress-plugin-steps'
import 'cypress-mochawesome-reporter/register'
// Alternatively you can use CommonJS syntax:
require('./commands')
const styles = {
    backgroundColorDescribe: '#6470f37d',
    backgroundColorDescribeHover: '#1733c7'
}
const app = window.top
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style')
    style.innerHTML = `.command-name-request, .command-name-xhr { display: none };`
    style.setAttribute('data-hide-command-log-request', '')
    app.document.head.appendChild(style)
}

if (!app.document.head.querySelector('[data-hide-command-log-invoke]')) {
    const style = app.document.createElement('style')
    const baseSelector =
        '#unified-reporter > div > div > div.wrap > ul > li > div > div.collapsible-content.runnables-region > ul'
    style.innerHTML = `${baseSelector} .command-name-invoke, ${baseSelector} ul .command-name-invoke, ${baseSelector} ul li .command-name-invoke { display: none }`
    style.setAttribute('data-hide-command-log-invoke', '')
    app.document.head.appendChild(style)
}
if (!app.document.head.querySelector('[data-hide-command-log-it]')) {
    const style = app.document.createElement('style')
    const hoverIT =
        '#unified-reporter > div > div > div.wrap > ul li span.runnable-title'
    const baseSelector =
        '#unified-reporter > div > div > div.wrap > ul > li > div > div.collapsible-content.runnables-region > ul'
    const textBefore =
        '#unified-reporter > div > div > div.wrap > ul > li > div > div.collapsible-content.runnables-region > ul > li > div > div.collapsible-content.runnable-instruments > div > ul > li > div > div.collapsible-content.attempt-content > div > div > ul > li > div > div.collapsible-header-wrapper.hook-header > div > div > span > span'
    const hoverAnimation = `
        background-size: 200% 100%; 
        background-position: 100% 0; 
        animation: slideGradient 1s infinite alternate;
        box-shadow: 0px 0px 15px rgba(192,192,192,0.8), -20px -20px 60px rgba(169,169,169,1);
        cursor: pointer;
    `
    // Definindo a animação personalizada
    const keyframesAnimation = `
        @keyframes slideGradient {
            0% { background-position: 100% 0; }
            100% { background-position: 0 0; }
        }
    `
    style.innerHTML = `
        ${keyframesAnimation}

        ${baseSelector} span.runnable-title {
            color: white;
            font-family: monospace;
            font-size: 12px;
        }
        ${baseSelector} li .collapsible-header-inner {
            padding-left: 20px;
            background-color: #4956e324;
            padding: 10px;
            margin-top:5px;
            margin-bottom: 5px;
            border-radius: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }
        ${baseSelector} li .collapsible-header-inner:hover {
        ${hoverAnimation}
        }
        ${textBefore} {
            color: white;
        }

        ${hoverIT}:hover span { font-size: 14px;}
    `

    style.setAttribute('data-hide-command-log-it', '')
    app.document.head.appendChild(style)
}

if (!app.document.head.querySelector('[data-hide-command-log-des-text]')) {
    const style = app.document.createElement('style')
    const titleSelector =
        '#unified-reporter > div > div > div.wrap > ul > li span.runnable-title'
    style.innerHTML = `
        ${titleSelector} { color:white ; font-size: 13px; letter-spacing:1px; font-family: monospace;}
    `
    style.setAttribute('data-hide-command-log-des-text', '')
    app.document.head.appendChild(style)
}

if (!app.document.head.querySelector('[data-hide-command-log-des-border]')) {
    const style = app.document.createElement('style')
    const titleSelector =
        '#unified-reporter > div > div > div.wrap > ul > li > div > div.collapsible-header-wrapper.runnable-wrapper > div > div'

    const commonStyles = `
        background-color: ${styles.backgroundColorDescribe};
        margin-bottom:5px;
        border-radius: 10px;
        margin-left: 10px;
        margin-right: 10px;
        padding: 10px;
        margin-top:10px;
    `
    const hoverStyles = `
        background: linear-gradient(73deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 13%, rgba(0,212,255,1) 100%) no-repeat;
        background-size: 200% 100%; /* Double the width */
        background-position: 100% 0; /* Start position */
        animation: slideGradient 1s infinite alternate; /* Apply the custom animation */
        box-shadow: 0px 0px 15px rgba(0,212,255,0.7), -20px -20px 70px rgba(0,212,255,0.9); /* Iluminação nas bordas */
        cursor: pointer;
    `
    // Definindo a animação personalizada
    const keyframesAnimation = `
        @keyframes slideGradient {
            0% { background-position: 100% 0; }
            100% { background-position: 0 0; }
        }
    `

    style.innerHTML = `
        ${keyframesAnimation}

        ${titleSelector} { ${commonStyles} }
        ${titleSelector}:hover { ${hoverStyles} }
        ${titleSelector}:hover .runnable-title {   
            font-size: 14px;
        }
    `

    style.setAttribute('data-hide-command-log-des-border', '')
    app.document.head.appendChild(style)
}

if (!app.document.head.querySelector('[data-hide-command-log-body]')) {
    const style = app.document.createElement('style')
    const titleSelector =
        '#resizable-panels-root > div.grow.h-full.bg-gray-100.relative'
    const headerbody = '#spec-runner-header > div'
    style.innerHTML = `
        ${titleSelector} { background-color: #1b1e2e; }
        ${headerbody} { background-color: #1b1e2e; }

    `
    style.setAttribute('data-hide-command-log-body', '')
    app.document.head.appendChild(style)
}

if (!app.document.head.querySelector('[data-hide-command-log-des-svg]')) {
    const style = app.document.createElement('style')
    const titleSelector =
        '#unified-reporter > div > div > div.wrap > ul > li > div > div.collapsible-content.runnables-region > ul > li > div > div > div > div > span > svg'
    style.innerHTML = `
        ${titleSelector} {
margin-right: 5px;
    margin-top: 0px;
    width: 18px;
    height: 18px;
        }
    `
    style.setAttribute('data-hide-command-log-des-svg', '')
    app.document.head.appendChild(style)
}

// alterar texto para o nome do Projeto
const spanElement = app.document.querySelector(
    '#unified-reporter > div > div > div.runnable-header > span'
)
const spanElement2 = app.document.querySelector(
    '#unified-reporter > div > header > span > button > span'
)

if (spanElement) {
    spanElement.innerText = 'Tests Cypress 💻'
}

if (spanElement2) {
    spanElement2.innerText = 'AXA Acsel-e Regressão automatizado'
}

if (!app.document.head.querySelector('[data-hover-black-background]')) {
    const style = app.document.createElement('style')

    style.innerHTML = `
        #unified-reporter > div > div > div.runnable-header > span:hover,
        #unified-reporter > div > header > span > button > span:hover {
            text-shadow: 0px 0px 10px white;
            background-color: #2b6b7096; /* fundo preto */
            padding: 5px; /* adicionar padding para dar espaço ao fundo */
            border-radius: 5px; /* arredondar os cantos se desejar */
            letter-spacing: 2px;
        }
    `

    style.setAttribute('data-hover-black-background', '')
    app.document.head.appendChild(style)
}
