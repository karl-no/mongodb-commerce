// Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo
// Para isso, escreva no arquivo desafio13.js duas queries, nesta ordem:

// Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.

// Crie uma query que retorne o nome e criadoPor de todos os produtos.
db.produtos.updateMany(
  {},
  {
    $set: {
      criadoPor: "Ronald McDonald",
    },
  },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, criadoPor: 1 },
);