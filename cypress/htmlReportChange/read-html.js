const fs = require('fs');

// Função para renomear um arquivo
function renameFile(oldName, newName) {
  fs.rename(oldName, newName, function (err) {
  });
}

// Usar a função
renameFile('cypress/reports/html/index.html', 'cypress/reports/report.html');