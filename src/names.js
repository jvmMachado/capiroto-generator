const names = [
  '25 De Março Na Véspera',
  'Abadá Justo',
  'Abre A Porta De Cueca',
  'Acabou O Enroladinho',
  'Agonia de Domingo',
  'Água De Danone',
  'Água De Salsicha',
  "Ah, Vai Tomar Dez Baldes D'Água",
  'Alma Gêmea',
  'Amigo Do Kléber',
  'Amigo Ladrão',
  'Aponta O Salgado E Pergunta Qual O Sabor Dele',
  'Aquele Que A Jujuba Não Gruda No Céu Da Boca',
  'Arco-Íris Da Noite',
  'Arnica Na Queimadura',
  'Arranha-Lousa',
  'Arroz Com Passas',
  'Assento Do Meio',
  'Assobio Da Samsung',
  'Assovio No Banheiro',
  'Assusta Gato',
  'Atualização Do Java',
  'Atualizador Do Java',
  'Baby Talk Do Inferno',
  'Baidu',
  'Balão Trágico',
  "Ballantine's",
  'Bananinha',
  'Banda Pop Que Faz Comercial De Fanta',
  'Banhado A Ouro',
  'Banho De Fanta',
  'Baphomet',
  'Barata Com Asa',
  'Batata Show',
  'Bate Coração',
  'Bebê Macabro',
  'Bedel Na Porta',
  'Belzeboss E Sua Banda',
  'Beto Gambiarra',
  'Bico De Corvo No Lugar Dos Olhos',
  'Bicho Piruleta',
  'Bielzebueno',
  'Bigode Sujo',
  'Bode Com Três Patas',
  'Boi Do Cu Branco',
  'Bolo De Batata',
  'Bolo de São Paulo',
  'Bolo Do Mal',
  'Bolota Suspeita',
  'Bombado Que Geme',
  'Borracheiro Fechado',
  'Botão Russo Pra Download',
  'Briga De Galo',
  'Brinquedo Sem Pilha',
  'Cabeça De Grulha',
  'Cabeça De Morcego',
  'Cabrunco',
  'Cadreel',
  'Caduzinho Do 8º',
  'Caganito De Coelho',
  'Caimbra Dormindo',
  'Calota De Fusca',
  'Cancela Uber',
  'Canhoto',
  'Caniggia',
  'Canta Junto',
  'Cão',
  'Capa De Gordura',
  'Capa Verde',
  'Capa Preta',
  'Capeta',
  'Capiroto',
  'Cara Branca',
  'Cara Que Arranha Um Violão E Comprou Um Ukulele',
  'Cara Que Fuma No Carro Compartilhado',
  'Carbúnculo',
  'Carnaval Em Curitiba',
  'Carnaval Fora De Época',
  'Carne E Unha',
  'Cartucho Fotográfico',
  'Cê Tá Gordo',
  'Chama Elevador No 1º Andar',
  'Chama Formiga',
  'Chama Porteiro',
  'Chapéu De Couro',
  'Cheira Espirro',
  'Cheiro De Prova',
  'Chifre Rosa',
  'Chocolate Sensação Duro',
  'Chuta Retrovisor',
  'Chuva Bem Na Hora',
  'Cinzeiro Com Água',
  'Coisa Ruim',
  'Colherada Na Marmita',
  'Comercial De Site De Hotel',
  'Comida De Avião',
  'Condição Sine Qua Non',
  'Confere O Óleo',
  'Contrarregra Que Faltou',
  'Conversa Sobre O Clima',
  'Conversa Sobre Política',
  'Convida O Padre',
  'Corote Azul',
  'Corte Abrupto Em Esqueceram De Mim',
  'Corte Com Papel',
  'Cortininha De Plástico',
  'Cotonete Genérico',
  'Cover Do Roupa Nova',
  'Cramuñón',
  'Crédito Rotativo',
  'Crítica Da Razão Pura',
  'Cuzão',
  'Dá Sabonete',
  'Dá Skip No Anúncio',
  'Dá Spoiler',
  'Dentista 24 Horas',
  'Dentista Novato',
  'Derruba Arnaldo',
  'Descasca Calcanhar',
  'Desgracento',
  'Desvia Verba',
  'Deus Da Mesopotâmia',
  'Deus Lagarto',
  'Dever De Casa Na Sexta-Feira',
  'Diabrete',
  'Discurso Epistemológico',
  'Dona Neuza',
  'Dona Rita Ritmo De Quarta',
  'Dona Rosalva Engana Velho',
  'Double U',
  'E As Namoradinhas?',
  'Eclipse Parcial',
  'Embrulho Molenga',
  'Emoticon Safado',
  'Escolhe Feijão',
  'Espirro De Grilo',
  'Espirro Reverso',
  'Essência De Banana',
  'Estampou Calango',
  'Estraga Suruba',
  'Esvazia Piscina',
  'Etcheverry',
  'Explica Piada',
  'Extrapola Orçamento',
  'Exu',
  'Exu Caveira',
  'Família Alemã',
  'Fanhoso',
  'Fanhoso Fake',
  'Fanta Com Cerveja',
  'Fanta Diet',
  'Fanta Sem Gás',
  'Farofa Doce',
  'Fatia Grosso',
  'Faz Compilação',
  'Faz Favor',
  'Febre Do Rato',
  'Fiapo De Manga No Aparelho',
  'Filho Do Melado Molhado',
  'Flor De Jorge Tadeu',
  'Fogo Bacteriano',
  'Formiga Rainha',
  'Frango Ou Pasta',
  'Fungo na Panela',
  'Fura Linguiça',
  'Furadeira À Meia-Noite',
  'Furta Cebolas',
  'Ganga Macaco',
  'Garantia Estendida',
  'Gasolina Azul',
  'Gato Mia',
  'Gelo E Limão',
  'Gemidão Do Zap',
  'Gerente Guimarães',
  'Gerson De Parobé',
  'Gilmar Mendes',
  'Goleiro-Linha',
  'Goycochea',
  'Grade Na Chaminé',
  'Guarda-Chuvinha De Chocolate',
  'Guardião 30 Horas',
  'Guaxinim De Miami',
  'Halloween De Apartamento',
  'Harpa Paraguaia',
  'Helicóptero Passando Perto De Casa',
  'Hemograma Completo',
  'Hera Venenosa',
  'História Repetida',
  'Homem Planta',
  'Ifrit',
  'Inimigo Do Gerente',
  'Inseto No Ouvido',
  'Inventor Do Java',
  'Já Posso Apagar?',
  'Janela Do Skype',
  'Joga Futebol No Recreio E Volta Suado Pra Classe',
  'Juan Zúñiga',
  'Jura De Maldição',
  'Juros Do Cartão',
  'Kevin Dos Backstreet Boys',
  'Kit Da Avon',
  'Lança Pedrisco',
  'Lasanha De Frango',
  'Lembrancinha',
  'Leva Amigo',
  'Leva Casaquinho',
  'Limpa Trilho',
  'Linguiça De Rena',
  'Link Quebrado',
  'Louça Suja Seca',
  'Lupa Na Formiga',
  'Macaco De Asa',
  'Madeirite Molhada',
  'Malte 90',
  'Manda Áudio',
  'Manhoso',
  'Manhoso Fake',
  'Manteiga Rançosa',
  'Maradona',
  'Marceneiro De Confiança',
  'Márcia Do Mal',
  'Margarina Amarelada',
  'Margarina Na Maçaneta',
  'Mastema',
  'Maurício Mattar',
  'Médico Sem Luva',
  'Mefistinho',
  'Mefisto',
  'Mel C. Das Spice Girls',
  'Mel No Presunto',
  'Meu Pagamento Que Não Chega',
  'Mochila De Criança',
  'Mocinho Ali De Baixo',
  'Mofo Vermelho',
  'Morde Língua',
  'Música Do Fantástico',
  'Não Emenda',
  'Nariz Entupido De Um Lado Só',
  'Nélson Gonçalves',
  'Nem Convida Pro Réveillon',
  'Nietzsche',
  'Nissan Batido',
  'Noel Magro',
  'Noite Infeliz',
  'Noz Mole',
  'Noz Podre',
  'O Que Já Percebeu Que O Guga Tá Lendo Títulos De Músicas do Fábio Júnior Faz Três-Quatro Rodadas.',
  'Oficial De Justiça',
  'Oração Subordinada Completiva Do Inferno',
  'Padrão Da Tomada',
  'Paga Meia',
  'Pai Da Mentira',
  'Pão Amassado',
  'Pão Murcho',
  'Pão Seco',
  'Papai Do Chão',
  'Papai Noel De Agosto',
  'Papai Noel De Regata',
  'Papelão Molhado',
  'Parabéns Ao Contrário',
  'Passa Minâncora',
  'Passo Largo',
  'Pastilha Valda Sem Açúcar',
  'Pata De Bode',
  'Pau Bosta',
  'Paulo Leminski',
  'Pazuzu',
  'Pé De Bode',
  'Pé De Cobra',
  'Pé De Gancho',
  'Pé De Moça',
  'Pé De Ovelha',
  'Pé Sujo',
  'Pedra De Bingo',
  'Pedreiro Bonsai',
  'Pega-Coxa',
  'Peido Alemão',
  'Pelé Calado',
  'Pele De Milho Na Gengiva',
  'Pele Vermelha Do Cão',
  'Pelinha De Unha',
  'Pergunta No Final Da Aula',
  'Peru Ressecado',
  'Peste Cubano',
  'Piada Do Peru',
  'Picolé Genérico',
  'Ping Vôlei',
  'Pinha Pintada',
  'Pipoca Murcha',
  'Plastiquinho Do CD Novo',
  'Playstation 3',
  'Polenta No Churrasco',
  'Precisamos Conversar',
  'Predinho Na Vila Mariana',
  'Presente Só De Manhã',
  'Presépio De Biscuit',
  'Professora De Inglês Que Fica Lendo Receita De Bolo Durante A Aula',
  'Programa Do Imposto De Renda',
  'Prova Oral Surpresa',
  'Prova Surpresa',
  'Pudim Com Ameixa',
  'Quebra-Molas Quadrado',
  'Quebra-Taça',
  'Quer Que Embrulha?',
  'Quina De Mesa',
  'Rabanete Do Asfalto',
  'Rasta Bananeira',
  'Renderiza Maldade',
  'Repórter Do Datena',
  'Repórter Na Chuva',
  'Respira-Giz',
  'Restinho De Comida Molhado No Ralo',
  'Reunião Com Advogado',
  'Ringtone',
  'Rolê De Humanas',
  'Rolê De Magia',
  'Rodo De Plástico',
  'Rolê Piruleta',
  'Ronald McDonald',
  'Rotina De Pássaro',
  'Rouba No Bingo',
  'Roupa Branca',
  'Rum Sabor Maçã Verde',
  'Sabão Azul Ressecado',
  'Sacola Paga',
  'Sagu De Sobremesa',
  'Sai Fanta Pelo Nariz',
  'Saleiro da Morte',
  'Sarnento',
  'Satã',
  'Schopenhauer',
  'Sem Teto Gelado',
  'Sem Teto Geraldo',
  'Sem Valor',
  'Senha Inválida',
  'Senta Com Pratinho No Colo',
  'Serralheira Na Gravação',
  'Serviço De Proteção Ao Crédito',
  'Sete Estrelas',
  'Sete Pele',
  'Sete Peles Falsas',
  'Seu Mé',
  'Shorts De Nylon',
  'Siga A Toca Negra',
  'Simeris',
  'Sinteco Gelado',
  'Skype',
  'Só Lê O Título E Já Vai Comentar',
  'Só Mais Um',
  'Sr. Los Angeles',
  'Street Locker',
  'Sub-Reptício',
  'Suflair Esbranquiçado',
  'Sujeira De Umbigo',
  'Supermercados Pierim',
  'Sushi De Queijo',
  'Taça De Plástico',
  'Tang De Uva Na Garrafa Pet',
  'Tapa-Tomada',
  'Tapete Molhado',
  'Te Convida Pro Réveillon',
  'Tem Na Netflix',
  'Tinder Fake Do Sexo Oposto',
  'Tinhoso',
  'Tinta Fresca',
  'Tio Do Caixão',
  'Tio Do Churrasco',
  'Tio Do Pavê',
  'Toma Fanta',
  'Tomada De Três Pinos',
  'Tranca Rua',
  'Trem Da Agonia',
  'Três Dentes',
  'Três Volantes',
  'Tridente De Plástico',
  'Trismegisto',
  'Tutu De Guaianazes',
  'Uh Lalá',
  'Uncle Jack',
  'Último Botão Do Colarinho',
  'Vale CD No Amigo Secreto',
  'Vassoura De Bruxa',
  'Vaza Fralda',
  'Verificação De Disco',
  'Versão Pagode De Noite Feliz',
  'Vinho Enlatado',
  'Vivarina',
  'Vizinho Alegrão',
  'Vocalista De Metal',
  'Vou Passar Um Filme',
  'Weverson',
  'Wi-Fi De Hospital',
  'X-Calango',
  'Zé Canhoto',
  'Zé Pelintra',
  'Zilda Rouba-Caneta',
];

export default names;
