import type { TranslationKey } from '../i18n';

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: TranslationKey;
  technologies: string[];
  logo: string;
  darkLogo?: string;
  detailLightLogo: string;
  detailDarkLogo?: string;
  detailLightBackground: string;
  detailDarkBackground?: string;
  usedTechnologies: string[];
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: 'mindmetric',
    title: 'MindMetric',
    description: 'mindmetric-description',
    technologies: ['Next.js', 'Nest.js'],
    logo: '/assets/projects/mindmetric/logo.png',
    detailLightLogo: '/assets/projects/mindmetric/logo.svg?v=20260724-2',
    detailLightBackground: '#ffffff',
    usedTechnologies: [
      'Next.js',
      'Nest.js',
      'Supabase',
      'Supabase Auth',
      'Tailwind',
      'TypeScript',
      'Recharts',
      'Postman',
    ],
    images: [
      {
        src: '/assets/projects/mindmetric/trainerdashboard.png',
        width: 1915,
        height: 867,
        alt: 'MindMetric trainer dashboard',
      },
      {
        src: '/assets/projects/mindmetric/trainerplayerview.png',
        width: 1247,
        height: 900,
        alt: 'MindMetric trainer player view',
      },
      {
        src: '/assets/projects/mindmetric/playerdashboard.png',
        width: 1327,
        height: 861,
        alt: 'MindMetric player dashboard',
      },
      {
        src: '/assets/projects/mindmetric/playerform.png',
        width: 1240,
        height: 415,
        alt: 'MindMetric player check-in form',
      },
    ],
  },
  {
    slug: 'eurconverted',
    title: 'EURConverted',
    description: 'eurconverted-description',
    technologies: ['Vue.js', 'PWA'],
    logo: '/assets/projects/eurconverted/logo.png',
    detailLightLogo: '/assets/projects/eurconverted/logo.svg',
    detailLightBackground: '#fff4f6',
    usedTechnologies: [
      'Vue.js',
      'PWA',
      'TypeScript',
      'Tailwind',
      'Primevue',
      'Vite',
    ],
    images: [
      {
        src: '/assets/projects/eurconverted/full.gif',
        width: 800,
        height: 1777,
        alt: 'EURConverted application demonstration',
      },
    ],
  },
  {
    slug: 'kompas',
    title: 'Kompas',
    description: 'kompas-description',
    technologies: ['.NET', 'React'],
    logo: '/assets/projects/kompas/logo.png',
    detailLightLogo: '/assets/projects/kompas/logo.svg',
    detailLightBackground: '#efeee9',
    usedTechnologies: [
      'C#',
      '.NET 10',
      '.NET Aspire (AppHost)',
      'ClosedXML',
      'CQRS',
      'Swagger',
      'Docker',
      'SQL Server',
      'React',
      'TypeScript',
      'Tailwind',
      'Vite',
    ],
    images: [
      {
        src: '/assets/projects/kompas/studentmanagement.png',
        width: 1916,
        height: 915,
        alt: 'Kompas student management',
      },
      {
        src: '/assets/projects/kompas/exceladdstudent.png',
        width: 972,
        height: 192,
        alt: 'Kompas add students from Excel',
      },
      {
        src: '/assets/projects/kompas/excelmodifystudent.png',
        width: 1457,
        height: 190,
        alt: 'Kompas modify students from Excel',
      },
      {
        src: '/assets/projects/kompas/teachermanagment.png',
        width: 1917,
        height: 912,
        alt: 'Kompas teacher management',
      },
      {
        src: '/assets/projects/kompas/exceladdteacher.png',
        width: 561,
        height: 191,
        alt: 'Kompas add teachers from Excel',
      },
      {
        src: '/assets/projects/kompas/excelmodifyteacher.png',
        width: 845,
        height: 190,
        alt: 'Kompas modify teachers from Excel',
      },
    ],
  },
  {
    slug: 'exit-exe',
    title: 'Exit.exe',
    description: 'exit-exe-description',
    technologies: ['.NET', 'React'],
    logo: '/assets/projects/exit/logolight.png',
    darkLogo: '/assets/projects/exit/logodark.png',
    detailLightLogo: '/assets/projects/exit/logolight.svg',
    detailDarkLogo: '/assets/projects/exit/logodark.svg',
    detailLightBackground: '#f6f7f9',
    detailDarkBackground: '#0e1116',
    usedTechnologies: [
      'C#',
      '.NET 10',
      '.NET Aspire (AppHost)',
      'CQRS',
      'Scalar',
      'SQL Server',
      'React',
      'TypeScript',
      'i18Next',
      'Styled-components',
      'Tailwind',
    ],
    images: [
      {
        src: '/assets/projects/exit/startscreen.png',
        width: 1897,
        height: 912,
        alt: 'Exit.exe start screen',
      },
      {
        src: '/assets/projects/exit/profile.png',
        width: 1917,
        height: 907,
        alt: 'Exit.exe player profile',
      },
      {
        src: '/assets/projects/exit/won.png',
        width: 1897,
        height: 910,
        alt: 'Exit.exe completed game screen',
      },
      {
        src: '/assets/projects/exit/notfound.gif',
        width: 800,
        height: 381,
        alt: 'Exit.exe not-found screen demonstration',
      },
    ],
  },
  {
    slug: 'stuff',
    title: 'Stuff',
    description: 'stuff-description',
    technologies: ['React Native', 'Redux'],
    logo: '/assets/projects/stuff/logo.png',
    detailLightLogo: '/assets/projects/stuff/logo.svg',
    detailLightBackground: '#fffdf7',
    usedTechnologies: [
      'React Native',
      'Expo',
      'Redux Toolkit',
      'React Query',
      'Tanstack',
      'React Navigation',
      'TypeScript',
      'React Native Reanimated',
      'styled components',
      'UIverse',
    ],
    images: [
      {
        src: '/assets/projects/stuff/full.gif',
        width: 800,
        height: 1777,
        alt: 'Stuff mobile application demonstration',
      },
    ],
  },
  {
    slug: 'icedash',
    title: 'IceDash',
    description: 'icedash-description',
    technologies: ['React Native', 'Expo'],
    logo: '/assets/projects/icedash/logo.png',
    detailLightLogo: '/assets/projects/icedash/logo.svg',
    detailLightBackground: '#a4e2fd',
    usedTechnologies: [
      'React Native',
      'Expo',
      'Redux Toolkit',
      'TypeScript',
      'Lottie React Native',
      'React Native Reanimated',
      'React Native Gesture Handler',
      'React Native Snowfall',
    ],
    images: [
      {
        src: '/assets/projects/icedash/gameplay.gif',
        width: 800,
        height: 1777,
        alt: 'IceDash gameplay demonstration',
      },
    ],
  },
];
