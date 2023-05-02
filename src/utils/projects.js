import eSurat from '../assets/e-surat.png';
import forumApp from '../assets/forum-app.png';
import catatApp from '../assets/catat-app.png';

const projects = [
  {
    id: 1,
    title: 'Aplikasi E-Surat Desa Kadilangu',
    image: eSurat,
    body: 'Aplikasi ini saya kembangkan untuk memenuhi salah satu syarat kelulusan perkuliahan saya di STMIK Sinar Nusantara. Aplikasi ini dibangun menggunakan ReactJS pada sisi Front End, ExpressJS pada sisi Back End dan menggunakan database MySQL serta Sequelize sebagai ORM.',
    source: {
      url: 'https://github.com/yugmade13/e-surat',
      name: 'Source Code',
    },
  },
  {
    id: 2,
    title: 'Aplikasi Dicoding Forum',
    image: forumApp,
    body: 'Aplikasi ini saya kembangkan sebagai submission atau syarat kelulusan kelas Expert React Developer di Dicoding Academy.',
    source: {
      url: 'https://forum-app-beta.vercel.app/',
      name: 'Demo Aplikasi',
    },
  },
  {
    id: 3,
    title: 'Aplikasi Catat',
    image: catatApp,
    body: 'Aplikasi ini saya kembangkan sebagai submission atau syarat kelulusan kelas Fundamental React Developer di Dicoding Academy.',
    source: {
      url: 'https://catat-app.vercel.app/',
      name: 'Demo Aplikasi',
    },
  },
];

export default projects;
