// database.js
const database = {
    cidades: [
      {
        id: 1,
        nome: 'São Paulo',
        aeroportos: [
          { id: 101, nome: 'Aeroporto Internacional de Guarulhos' },
          { id: 102, nome: 'Aeroporto de Congonhas' },
        ],
      },
      {
        id: 2,
        nome: 'Campinas',
        aeroportos: [
          { id: 201, nome: 'Aeroporto Internacional de Viracopos' },
        ],
      },
      // Adicione mais cidades e aeroportos conforme necessário
    ],
  };
  
  export default database;
  