/* eslint-disable */

// import Studio from '../../assets/studio.png';
// import Knowledge from '../../assets/knowledge.jpg';
// import Chargemaster from '../../assets/bp.png';
import Cognitive from '../../../assets/cognitive.png';
import Girls from '../../../assets/girlswhochange.JPG';
import GirlsWhoCode from '../../../caseStudies/girlswhocode';
import GithubPages from '../../../caseStudies/githubpages';

export const caseStudies = [
  {
    title: 'Technology mentor for student team',
    image: Girls,
    tldr: 'Millisande created a simple AI based web application to support 13/15 year old students learn to write their own tool',
    tags: [
      {
        text: 'NodeJS',
      },
      {
        text: 'Google Cloud',
        type: 'cloud',
      },
    ],
    links: [
      {
        text: 'Github',
        url: 'https://github.com/millisande/starter-google-text-scanner'
      },
      {
        text: 'Tutorial video',
        url: 'https://youtu.be/DltlsDjJqCI?si=PbjrvhfJap5IvdM7'
      }
    ],
    content: <GirlsWhoCode />
  },
  {
    title: 'Internal target tracking tool',
    image: Cognitive,
    tldr: 'Millisande used github pages to deliver a static website to a client with no infrastructure',
    tags: [
      {
        text: 'Vue.js'
      }
    ],
    content: <GithubPages />
  }
]

// export const data = [
//   {
//     title: 'TOBi Virtual Agent',
//     info:
//       'Millisande was the SME on the IBM Watson Assistant technology, designing and implementing the user experience through behaviour trees in the aforementioned technology. She independently trained a six person team to extend and maintain the service',
//     image:
//       'https://www.vodafone.co.uk/business/media/image/1508879294652/img_1200x630_ebu_og.jpg',
//     tags: [
//       {
//         text: 'Watson Assistant',
//       },
//     ],
//   },
//   {
//     title: 'Image recognition search',
//     info:
//       "Using pair programming methodology throughout, Millisande collaborated on a proof of concept using IBM's Visual Recognition APIs to search a database for similar photographs, or search the photo database by visual features. She collaborated on the express Node.JS server and the Vue.js front end",
//     image: Studio,
//     tags: [
//       {
//         text: 'Vue.js',
//       },
//       {
//         text: 'NodeJS',
//       },
//       {
//         text: 'IBM Cloud',
//         type: 'cloud',
//       },
//     ],
//   },
//   {
//     title: 'Data mining and knowledge management tool',
//     info:
//       "Millisande was a senior developer and eventually team leader for a large development team. The team were tasked with building a React web application which used IBM technologies to find insights in data across the web and in the client's own files. Millisande worked across the front end React and the backend in NodeJS",
//     image: Knowledge,
//     tags: [
//       {
//         text: 'React',
//       },
//       {
//         text: 'NodeJS',
//       },
//       {
//         text: 'IBM Cloud',
//         type: 'cloud',
//       },
//     ],
//   },
//   {
//     title: 'Car charging application',
//     info:
//       'Millisande was a senior full stack developer building a React Native application working on key features of a consumer mobile app for managing electric car charging.',
//     image: Chargemaster,
//     tags: [
//       {
//         text: 'React-Native',
//       },
//       {
//         text: 'Typescript',
//       },
//       {
//         text: 'NodeJS',
//       },
//       {
//         text: 'AWS',
//         type: 'cloud',
//       },
//     ],
//   },
//   {
//     title: 'Static sales tracker',
//     info:
//       'Millisande assessed the available architectural decisions to deliver a static website which delivered on the non-functional requirements of the client. She then worked independently to build a static webpage to a design using Vue.js',
//     image: Cognitive,
//     tags: [
//       {
//         text: 'HTML',
//       },
//       {
//         text: 'Github Pages',
//         type: 'cloud',
//       },
//     ],
//   },
// ];
