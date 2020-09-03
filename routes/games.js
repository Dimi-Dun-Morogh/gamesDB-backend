const express = require('express');
const router = express.Router();
const gamesServices = require('../services/games');
const games = [
  [
    {
      _id: '5f4bec99b03e2ca86d3a50ba',
      index: 0,
      guid: 'aa25873b-88ed-4d03-ba47-f0f1aa3b76e4',
      isActive: true,
      balance: '$1,009.33',
      picture: 'http://placehold.it/32x32',
      age: 36,
      eyeColor: 'green',
      name: 'Guerrero Miranda',
      gender: 'male',
      company: 'NETPLODE',
      email: 'guerreromiranda@netplode.com',
      phone: '+1 (944) 442-2190',
      address: '864 Seacoast Terrace, Ripley, Arizona, 9970',
      about:
        'Officia labore fugiat mollit ex consequat est in qui. Laborum enim nostrud nulla eu dolore consectetur veniam est. Pariatur incididunt dolor exercitation eiusmod amet nisi labore.\r\n',
      registered: '2017-12-09T11:39:14 -03:00',
      latitude: 50.087105,
      longitude: -75.392171,
      tags: [
        'pariatur',
        'excepteur',
        'do',
        'magna',
        'excepteur',
        'aute',
        'sunt',
      ],
      friends: [
        {
          id: 0,
          name: 'Simmons Morton',
        },
        {
          id: 1,
          name: 'Roberson Nielsen',
        },
        {
          id: 2,
          name: 'Parks Rivers',
        },
      ],
      greeting: 'Hello, Guerrero Miranda! You have 9 unread messages.',
      favoriteFruit: 'banana',
    },
    {
      _id: '5f4bec9969e4963bb6d5649c',
      index: 1,
      guid: '25c4538f-83c1-4ac4-b49f-3302a1ff2723',
      isActive: false,
      balance: '$2,401.13',
      picture: 'http://placehold.it/32x32',
      age: 20,
      eyeColor: 'brown',
      name: 'Barker Duran',
      gender: 'male',
      company: 'DIGIAL',
      email: 'barkerduran@digial.com',
      phone: '+1 (811) 403-3999',
      address: '388 Conduit Boulevard, Chaparrito, Maryland, 4956',
      about:
        'Reprehenderit voluptate exercitation incididunt magna excepteur eu sint nisi excepteur cupidatat mollit officia cillum mollit. Commodo ex aliqua amet ea cupidatat magna proident sit sunt. Exercitation consectetur officia et tempor. Duis laborum excepteur id labore elit ullamco ex laborum fugiat voluptate velit excepteur veniam consectetur. Laborum sit cupidatat veniam sit est sunt aliquip veniam id irure cillum tempor. Sunt deserunt aliqua cillum in aliquip non nisi adipisicing ut officia.\r\n',
      registered: '2016-03-09T01:58:44 -03:00',
      latitude: 20.337038,
      longitude: 46.398578,
      tags: [
        'laboris',
        'aliquip',
        'eiusmod',
        'magna',
        'incididunt',
        'nostrud',
        'aliquip',
      ],
      friends: [
        {
          id: 0,
          name: 'Dina Juarez',
        },
        {
          id: 1,
          name: 'Calhoun Welch',
        },
        {
          id: 2,
          name: 'Cornelia Ballard',
        },
      ],
      greeting: 'Hello, Barker Duran! You have 7 unread messages.',
      favoriteFruit: 'banana',
    },
    {
      _id: '5f4bec9926cdb751cd31b8ed',
      index: 2,
      guid: 'daa67e09-1837-47ac-ac86-64d4bbb88208',
      isActive: false,
      balance: '$2,090.88',
      picture: 'http://placehold.it/32x32',
      age: 34,
      eyeColor: 'blue',
      name: 'Sears Horne',
      gender: 'male',
      company: 'CALCULA',
      email: 'searshorne@calcula.com',
      phone: '+1 (812) 431-3787',
      address: '392 Tampa Court, Otranto, Colorado, 632',
      about:
        'Lorem officia exercitation dolore laboris consequat occaecat commodo nulla et fugiat. Eu mollit do officia magna culpa cupidatat pariatur cillum sunt culpa fugiat minim aliquip. Magna sunt elit consequat eu in voluptate culpa laboris ad labore irure sunt elit. Sint qui amet fugiat nisi culpa esse ut cupidatat enim. Consequat aliquip ut sit cupidatat mollit amet sit eu do pariatur irure sint deserunt et. Ullamco culpa eu nulla pariatur elit pariatur deserunt sit ex.\r\n',
      registered: '2018-06-18T07:56:46 -03:00',
      latitude: 39.23386,
      longitude: -145.850426,
      tags: ['mollit', 'enim', 'nostrud', 'aliqua', 'sunt', 'eu', 'occaecat'],
      friends: [
        {
          id: 0,
          name: 'Geraldine Dalton',
        },
        {
          id: 1,
          name: 'Maddox Bishop',
        },
        {
          id: 2,
          name: 'Carole Howard',
        },
      ],
      greeting: 'Hello, Sears Horne! You have 10 unread messages.',
      favoriteFruit: 'apple',
    },
    {
      _id: '5f4bec997b1cc5c86470bfaa',
      index: 3,
      guid: '2d5f74fd-c259-49c5-88fa-cc8c7fe65388',
      isActive: false,
      balance: '$3,658.61',
      picture: 'http://placehold.it/32x32',
      age: 35,
      eyeColor: 'green',
      name: 'Alexis Mcgee',
      gender: 'female',
      company: 'ERSUM',
      email: 'alexismcgee@ersum.com',
      phone: '+1 (957) 456-3982',
      address: '297 Rewe Street, Southview, New Hampshire, 3623',
      about:
        'Et amet aute fugiat cupidatat tempor voluptate pariatur aute aute dolore minim ipsum commodo et. Ullamco incididunt reprehenderit commodo culpa ipsum irure excepteur ad consequat nostrud. Nostrud culpa quis elit esse eu enim dolore aute mollit mollit Lorem.\r\n',
      registered: '2017-03-26T03:09:01 -03:00',
      latitude: -59.14309,
      longitude: -79.763975,
      tags: [
        'dolore',
        'eiusmod',
        'consequat',
        'proident',
        'pariatur',
        'enim',
        'dolor',
      ],
      friends: [
        {
          id: 0,
          name: 'Evelyn Fitzpatrick',
        },
        {
          id: 1,
          name: 'Logan Castro',
        },
        {
          id: 2,
          name: 'Stanley Gilliam',
        },
      ],
      greeting: 'Hello, Alexis Mcgee! You have 4 unread messages.',
      favoriteFruit: 'apple',
    },
    {
      _id: '5f4bec99403e90ca14a107c1',
      index: 4,
      guid: '3d464cf3-fc38-4bec-803a-a4aca9ea7b85',
      isActive: true,
      balance: '$3,540.87',
      picture: 'http://placehold.it/32x32',
      age: 25,
      eyeColor: 'blue',
      name: 'Jordan Malone',
      gender: 'male',
      company: 'FIBRODYNE',
      email: 'jordanmalone@fibrodyne.com',
      phone: '+1 (892) 483-2257',
      address: '378 Stillwell Avenue, Glenville, Delaware, 936',
      about:
        'Deserunt ullamco quis pariatur deserunt non minim esse labore consequat. Dolore consequat aliquip Lorem laborum labore ea exercitation reprehenderit sit qui. Do fugiat commodo deserunt nisi occaecat eu esse. Dolor adipisicing nostrud proident exercitation voluptate culpa reprehenderit.\r\n',
      registered: '2016-11-21T07:12:18 -03:00',
      latitude: -74.69721,
      longitude: 20.880032,
      tags: [
        'nostrud',
        'consectetur',
        'nulla',
        'laborum',
        'officia',
        'labore',
        'do',
      ],
      friends: [
        {
          id: 0,
          name: 'Dean Hayden',
        },
        {
          id: 1,
          name: 'Ophelia Benton',
        },
        {
          id: 2,
          name: 'Hunt Horton',
        },
      ],
      greeting: 'Hello, Jordan Malone! You have 4 unread messages.',
      favoriteFruit: 'banana',
    },
    {
      _id: '5f4bec99a12a1b532c8da4fc',
      index: 5,
      guid: '806d8ccb-fcc7-4c48-b3f0-f19676780807',
      isActive: false,
      balance: '$3,083.08',
      picture: 'http://placehold.it/32x32',
      age: 37,
      eyeColor: 'brown',
      name: 'Long Bailey',
      gender: 'male',
      company: 'CYTREX',
      email: 'longbailey@cytrex.com',
      phone: '+1 (868) 448-3186',
      address: '661 Irwin Street, Derwood, Alabama, 1925',
      about:
        'Excepteur tempor ad magna aute duis excepteur. Do voluptate eiusmod nisi mollit in elit minim consectetur excepteur dolore qui sit anim est. Occaecat laborum reprehenderit cupidatat est elit minim est incididunt. Ad magna irure anim cillum occaecat ut ullamco qui. Officia deserunt veniam in in sit velit ad nulla amet aliquip elit officia labore velit. Tempor proident excepteur quis mollit irure sunt aute pariatur deserunt eiusmod deserunt mollit consectetur aute.\r\n',
      registered: '2014-08-12T07:18:53 -03:00',
      latitude: -42.972884,
      longitude: -69.445341,
      tags: ['irure', 'laborum', 'ea', 'qui', 'velit', 'incididunt', 'duis'],
      friends: [
        {
          id: 0,
          name: 'Angela Berger',
        },
        {
          id: 1,
          name: 'Fernandez Graves',
        },
        {
          id: 2,
          name: 'Tammy Middleton',
        },
      ],
      greeting: 'Hello, Long Bailey! You have 3 unread messages.',
      favoriteFruit: 'strawberry',
    },
    {
      _id: '5f4bec997c262aabed8bf184',
      index: 6,
      guid: 'cfcccb62-fcb5-48c3-9c39-8969e6583f59',
      isActive: true,
      balance: '$3,790.87',
      picture: 'http://placehold.it/32x32',
      age: 37,
      eyeColor: 'blue',
      name: 'Bond Carver',
      gender: 'male',
      company: 'RODEOLOGY',
      email: 'bondcarver@rodeology.com',
      phone: '+1 (873) 600-2959',
      address: '398 Kay Court, Fredericktown, Northern Mariana Islands, 6234',
      about:
        'Consectetur eiusmod in ea nulla eu non consequat veniam proident dolor. Anim elit labore sit sit ut. Aute ut reprehenderit sunt nulla laboris consectetur irure cillum occaecat quis ad. Dolore mollit elit non culpa amet adipisicing minim. Aliqua qui nulla quis elit pariatur veniam et deserunt incididunt amet veniam et pariatur. Dolore quis tempor deserunt cillum proident deserunt cillum consequat. Aliquip consequat reprehenderit ut consequat minim minim incididunt ut sit.\r\n',
      registered: '2018-03-17T05:10:35 -03:00',
      latitude: 35.276071,
      longitude: -154.783012,
      tags: ['esse', 'reprehenderit', 'dolor', 'duis', 'ex', 'aliqua', 'velit'],
      friends: [
        {
          id: 0,
          name: 'Mosley Ford',
        },
        {
          id: 1,
          name: 'Beverly Odom',
        },
        {
          id: 2,
          name: 'Guthrie Carroll',
        },
      ],
      greeting: 'Hello, Bond Carver! You have 6 unread messages.',
      favoriteFruit: 'banana',
    },
  ],
];

// games/
router.get('/', async (req, res) => {
  console.log('route /games', req.originalUrl);
  try {
    const data = await gamesServices.getGames(req.originalUrl);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
