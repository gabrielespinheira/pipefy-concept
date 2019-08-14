export function loadLists() {
  return [
    {
      title: 'Aguardando',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Desenvolver Aplicação ReactJs',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Criar Endpoint API Rest',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/1.png'
        },
        {
          id: 3,
          content: 'Refactor',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/2.png'
        },
        {
          id: 4,
          content: 'Configurar banco de dados Redis',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/100/3.png'
        },
        {
          id: 5,
          content: 'Salvar informações na Cache',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/100/4.png'
        },
      ]
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Atualizar projetos no GitHub',
          labels: [],
          user: 'https://api.adorable.io/avatars/100/5.png'
        }
      ]
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Testes Unitários',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/6.png'
        },
        {
          id: 8,
          content: 'Validação de Issues',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/100/7.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca',
          labels: [],
        }
      ]
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Front end em ReactJs',
          labels: [],
        },
        {
          id: 12,
          content: 'Estruturar ambiente utilizando Docker',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Criar repositório privado no GitHub',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}