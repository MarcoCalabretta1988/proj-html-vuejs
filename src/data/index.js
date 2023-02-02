const mainNavLinks = ['homes', 'pages', 'blog', 'shop', 'events', 'elements']
const specialtiesOption = [
    {
        id: 1,
        title: 'Knowing',
        text: 'Loremipsum dolor sit amet,quis consenct'
    },
    {
        id: 2,
        title: 'Selling',
        text: 'Loremipsum dolor sit amet,quis consenct'
    },
    {
        id: 3,
        title: 'Learning',
        text: 'Loremipsum dolor sit amet,quis consenct'
    },
    {
        id: 4,
        title: 'Contact',
        text: 'Loremipsum dolor sit amet,quis consenct'
    },
]

const skills = [
    {
        name: 'Mentorship',
        perc: '78%',
        skill: 'mentorship'
    },
    {
        name: 'Education',
        perc: '95%',
        skill: 'education'
    },
    {
        name: 'Learning',
        perc: '65%',
        skill: 'learning'
    },
    {
        name: 'Motivation',
        perc: '83%',
        skill: 'motivation'
    },
]

const footerData = [
    {
        title: 'About',
        links: [],
        text: 'we created EverLoad to effectively become the stepping stone towards meeting all your goals &achieving business succes',

    },
    {
        title: 'Twitter',
        links: [
            {
                id: 1,
                icon: 'fa-brands fa-twitter',
                text: '@aliasadadm Hi @aliasadadm, can you please submit a ticket at https://t.co/JLV61aXG7d and one of our support agent...https://t.co/yk57k1S9bS',
            },
            {
                id: 2,
                icon: 'fa-brands fa-twitter',
                text: '@HenrySefaBoaky1 Check out our theme Gioia which has all necessary elements to build a multi vendor marketplace https://t.co//c9BlYxZBIl',
            },
        ],
        text: '',
        markup: ''
    },
    {
        title: 'Import links',
        links: [
            {
                id: 1,
                icon: '',
                text: 'About me',
            },
            {
                id: 2,
                icon: '',
                text: 'About us',
            },
            {
                id: 3,
                icon: '',
                text: 'Language packs',
            },
            {
                id: 4,
                icon: '',
                text: 'Become a coach',
            },
            {
                id: 5,
                icon: '',
                text: 'Monthly events',
            },
        ],
        text: '',
        markup: ''
    },
    {
        title: 'Contact me',
        links: [
            {
                id: 1,
                icon: 'fa-solid fa-location-dot',
                text: '457 BigBlue Street, NY 10013',
            },
            {
                id: 2,
                icon: 'fa-solid fa-phone',
                text: '(315) 5512-2579',
            },
            {
                id: 3,
                icon: 'fa-regular fa-envelope',
                text: 'everlead@mikado.com',
            },],
        text: '',
    },
]

const events = [
    {
        id: 1,
        day: 7,
        month: 'Jan',
        year: 2022,
        location: 'Melbourne',
        adress: 'Cambrige, Ma 02138 USA',
        start: '9:00 am',
        end: '5:00 pm'
    },
    {
        id: 2,
        day: 11,
        month: 'Jan',
        year: 2022,
        location: 'New York',
        adress: 'Cambrige, Ma 02138 USA',
        start: '9:00 am',
        end: '5:00 pm'
    },
    {
        id: 3,
        day: 21,
        month: 'Jan',
        year: 2022,
        location: 'London',
        adress: 'Cambrige, Ma 02138 USA',
        start: '9:00 am',
        end: '5:00 pm'
    },
]

const news = [
    {
        id: 1,
        img: {
            top: 2,
            bottom: 3,
            label: 'Business, Leading'
        },
        date: 'May 5,2019',
        author: 'Amanda Doe',
        title: 'Next investment',
        text: 'Lorem ipsum dolor sit amet,consectetur adipscing elit,sed eius mas tellus dolor',

    },
    {
        id: 2,
        img: {
            top: 3,
            bottom: 4,
            label: 'Business, Leading'
        },
        date: 'May 5,2019',
        author: 'Amanda Doe',
        title: 'Team building',
        text: 'Lorem ipsum dolor sit amet,consectetur adipscing elit,sed eius mas tellus dolor',

    },
    {
        id: 3,
        img: {
            top: 4,
            bottom: 1,
            label: 'Business, Leading'
        },
        date: 'May 5,2019',
        author: 'Amanda Doe',
        title: 'New Business Day',
        text: 'Lorem ipsum dolor sit amet,consectetur adipscing elit,sed eius mas tellus dolor',

    },
]



export { mainNavLinks, news, footerData, specialtiesOption, events, skills }