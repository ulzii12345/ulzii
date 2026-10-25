import { Project, InterestItem, LearningGoal } from '../types';

export const TEMPLATE_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_135039_b04d00db-6ee2-4e2a-a7f5-b2dfd3d24fd2.mp4';

export const DEFAULT_NETLIFY_SUBDOMAIN = '[НЕТЛИФАЙ]';

export const USER_INFO = {
  name: 'Өлзийтогтох',
  latinName: 'Ulziitogtokh',
  age: 16,
  role: 'Вэб хөгжүүлэгч сурагч',
  summary:
    '16 настай, орчин үеийн вэб технологиуд, интерфэйс дизайн болон алгоритм сонирхон суралцаж буй залуу хөгжүүлэгч.',
  photoUrl: 'https://[НЕТЛИФАЙ].netlify.app/my-photo.png',
  fallbackAvatar: '/src/assets/images/developer_avatar_portrait_1792301937491.jpg',
  baseNetlifyUrl: 'https://[НЕТЛИФАЙ].netlify.app',
};

export const RAW_PROJECTS: Omit<Project, 'fullUrl'>[] = [
  {
    id: 'dream-job',
    title: 'Мөрөөдлийн ажил',
    originalSlug: 'dream-job.html',
    category: 'Мэргэжил ба ирээдүй',
    description:
      'Өөрийн ирээдүйд эзэмшихийг хүсэж буй технологийн мэргэжил, давуу талууд болон зорилгын тухай интерактив танилцуулга вэб хуудас.',
    highlights: ['Мэргэжлийн танилцуулга', 'Ирээдүйн алсын хараа', 'Вэб бүтэц'],
    icon: 'briefcase',
    previewImage: '/src/assets/images/project_dream_job_1792301937996.jpg',
    accentColor: '#38bdf8',
  },
  {
    id: 'my-youtube',
    title: 'Миний YouTube',
    originalSlug: 'my-youtube.html',
    category: 'Медиа & Сувгийн хуудас',
    description:
      'Өөрийн дуртай бичлэгүүд, технологийн хичээлүүд болон YouTube видеонуудыг эмхэтгэн байрлуулсан хувийн медиа төсөл.',
    highlights: ['Видео жагсаалт', 'Медиа холбоосууд', 'Цэвэр зохион байгуулалт'],
    icon: 'youtube',
    previewImage: '',
    accentColor: '#f43f5e',
  },
];

export const INTERESTS_DATA: InterestItem[] = [
  {
    id: 'hobby-code',
    title: 'Хобби: Код бичих',
    type: 'Технологи ба бүтээлч сэтгэлгээ',
    description:
      'Чөлөөт цагаараа вэбийн HTML, CSS, JavaScript бичиж шинэ санаа, интерактив хуудсууд турших дуртай.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb',
    fallbackImage: '/src/assets/images/project_dream_job_1792301937996.jpg',
    meta: 'Өдөр бүр код бичих дадлага · Логик сэтгэлгээ',
  },
  {
    id: 'movie-avengers',
    title: 'Дуртай кино: Avengers',
    type: 'Кино урлаг & Шинжлэх ухааны уран зөгнөл',
    description:
      'Marvel кино ертөнцийн супер баатрууд, дэвшилтэт технологи болон багийн хамтын ажиллагаатай өрнүүн бүтээлүүдэд маш их дуртай.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGZHfuN2pA5MvCnTfDCIPP9jmzL_f3quTD-oInAbWzyt1po5bVfY-b7k&s=10',
    fallbackImage: '',
    meta: 'Өшөө авагчид · Төсөөлөл ба урам зориг',
  },
  {
    id: 'food-sushi',
    title: 'Дуртай хоол: Sushi (Сүши)',
    type: 'Амтат хоол & Соёл',
    description:
      'Японы уламжлалт сүши, шинэ загас, цагаан будааны нарийн ур хийцтэй зоог бол миний хамгийн дуртай амт.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmpO9Y9VWil0wFTtNkxgler4MUAYQ9TCZQ5JyPDUPqZL-xuCEv-SwLq8&s=10',
    fallbackImage: '/src/assets/images/hobby_sushi_culinary_1792301938988.jpg',
    meta: 'Япон хоол · Эрүүл бөгөөд амттай',
  },
];

export const LEARNING_GOALS: LearningGoal[] = [
  {
    number: '01',
    title: 'Вэб сайт хийж сурах',
    description:
      'Вэб хөгжүүлэлтийн үндэс болох бүтэц, орчин үеийн загварчлал, дасан зохицох UI болон динамик харилцан үйлчлэлийг бие даан төгс эзэмших.',
    details: [
      'HTML5 ба Семантик бүтэц',
      'Орчин үеийн CSS ба хариу үйлдэлтэй зохион байгуулалт',
      'JavaScript интерактив логик',
    ],
    icon: 'globe',
  },
  {
    number: '02',
    title: 'AI-д зөв даалгавар өгөх',
    description:
      'Хиймэл оюун ухааны загваруудад үнэн зөв, тодорхой хүрээтэй prompt боловсруулж, код болон санаагаа илүү хурдан чанартай бодит болгох аргад суралцах.',
    details: [
      'Оновчтой үүрэг, контекст өгөх',
      'Кодын алдаа засах, код сайжруулах удирдамж',
      'Хиймэл оюуныг бүтээлч туслах болгон ашиглах',
    ],
    icon: 'sparkles',
  },
  {
    number: '03',
    title: 'Бие даасан төслүүд бүтээх',
    description:
      '16 насандаа олон төрлийн бүтээл хийж, өөрийн портфолиог баяжуулан ирээдүйн программ хангамжийн мэргэжилдээ бат бөх суурь бэлтгэх.',
    details: [
      'Хэрэглэгчдэд ээлтэй хөнгөн сайтууд',
      'Тоглоом ба бүтээлч медиа хуудсууд',
      'Байнгын суралцах тасралтгүй өсөлт',
    ],
    icon: 'target',
  },
];
