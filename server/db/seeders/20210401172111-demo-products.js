'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
    name: "Café com leite",
    price: 7,
    type: "café da manhã",
    sub_type: "café da manhã",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Misto quente",
    price: 10,
    type: "café da manhã",
    sub_type: "café da manhã",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Suco de fruta natural",
    price: 7,
    type: "café da manhã",
    sub_type: "café da manhã",
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    name: "Hambúrguer simples",
    price: 10,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hambúrguer simples frango",
    price: 12,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hambúrguer simples vegano soja",
    price: 12,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hambúrguer simples vegano grão-de-bico",
    price: 15,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hambúrguer duplo",
    price: 15,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hambúrguer duplo frango",
    price: 16,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hambúrguer duplo vegano soja",
    price: 16,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hambúrguer duplo vegano grão-de-bico",
    price: 16,
    type: "almoço/janta",
    sub_type: "lanche",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
		name: "Batata frita",
		price: 5,
		type: "almoço/janta",
		sub_type: "acompanhamento",
    createdAt: new Date(),
    updatedAt: new Date()
	},
	{
		name: "Anéis de cebola",
		price: 5,
		type: "almoço/janta",
		sub_type: "acompanhamento",
    createdAt: new Date(),
    updatedAt: new Date()
	},
	{
		name: "Água 500mL",
		price: 5,
		type: "almoço/janta",
		sub_type: "bebida",
    createdAt: new Date(),
    updatedAt: new Date()
	},
	{
		name: "Água 750mL",
		price: 7,
		type: "almoço/janta",
		sub_type: "bebida",
    createdAt: new Date(),
    updatedAt: new Date()
	},
	{
		name: "Refrigerante 500mL",
		price: 5,
		type: "almoço/janta",
		sub_type: "bebida",
    createdAt: new Date(),
    updatedAt: new Date()
	},
	{
		name: "Refrigerante 750mL",
		price: 7,
		type: "almoço/janta",
		sub_type:"bebida",
    createdAt: new Date(),
    updatedAt: new Date()
	},
  {
		name: "Brigadeiro",
		price: 4,
		type: "almoço/janta",
		sub_type:"sobremesa",
    createdAt: new Date(),
    updatedAt: new Date()
	}
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
};
