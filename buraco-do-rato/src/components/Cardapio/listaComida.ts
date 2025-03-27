const listaComida = [
    {
        id: '1',
        nome: 'Hambúrguer Clássico',
        descricao: 'Pão macio, carne suculenta, queijo derretido e alface fresca.',
        preco: 19.99,
        imagemUrl: require("../../../assets/images/hamburguer.jpeg")
    },
    {
        id: '2',
        nome: 'Pizza Margherita',
        descricao: 'Massa fina, molho de tomate, queijo mussarela e manjericão fresco.',
        preco: 29.99,
        imagemUrl:  require("../../../assets/images/pizza.jpeg")
    },
    {
        id: '3',
        nome: 'Salada Caesar',
        descricao: 'Alface crocante, croutons temperados, frango grelhado e molho Caesar.',
        preco: 15.99,
        imagemUrl: require("../../../assets/images/salada.jpeg")
    },
    {
        id: '4',
        nome: 'Coca-Cola',
        descricao: 'Lata de Coca-Cola bem gelada.',
        preco: 7.00,
        imagemUrl: require("../../../assets/images/download.jpeg"), // Usando require
    }
];

export default listaComida;