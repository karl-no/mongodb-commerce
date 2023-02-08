// Remova o campo curtidas do item Big Mac
// Para isso, escreva no arquivo desafio30.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do campo curtidas do item Big Mac.

// Crie uma query que retorne o nome para todos os documentos e curtidas (exceto para Big Mac).
db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $unset: {
      curtidas: "",
    },
  },
);
db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });