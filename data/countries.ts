export type Country = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export const countries: Country[] = [
  {
    id: 1,
    name: 'Japan',
    image: '/assets/Japan.svg',
    description:
      'Discover unparalleled education in Japan, a hub of innovation and tradition. Study in world-class institutions, immerse yourself in a rich culture, and unlock global career opportunities.',
  },
  {
    id: 2,
    name: 'India',
    image: '/assets/india.png',
    description:
      'Embark on your academic journey in India, where innovation and creativity come alive. Explore top universities, tap into global research, and immerse yourself in a thriving culture.',
  },
  {
    id: 3,
    name: 'Canada',
    image: '/assets/canada.png',
    description:
      'Experience top-tier education in Canada, known for its diverse culture, welcoming environment, and globally recognized institutions. Study in Canada and pave the way for a bright future.',
  },
  {
    id: 4,
    name: 'Australia',
    image: '/assets/australia.png',
    description:
      'Study in Australia, home to world-renowned universities and a vibrant, multicultural community. Enjoy high-quality education, stunning landscapes, and endless opportunities for global success.',
  },
  {
    id: 5,
    name: 'The United Kingdom',
    image: '/assets/uk.png',
    description:
      'Unlock your potential with a world-class education in the UK. Study in historic institutions, experience rich cultural heritage, and access limitless career opportunities in a global hub.',
  },
  {
    id: 6,
    name: 'USA',
    image: '/assets/usa.png',
    description:
      'Unlock your potential with a world-class education in the USA. Study in historic institutions, experience rich cultural heritage, and access limitless career opportunities in a global hub.',
  },
  {
    id: 7,
    name: 'South Korea',
    image: '/assets/korea.jpg',
    description:
      'Unlock your potential with a world-class education in South Korea. Study in historic institutions, experience rich cultural heritage, and access limitless career opportunities in a global hub.',
  },
];
