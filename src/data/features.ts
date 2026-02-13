export interface Feature {
  title: string;
  description: string;
  isMain?: boolean;
}

export const features: Feature[] = [
  {
    title: 'Why\nChoosing Us',
    description: 'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
    isMain: true,
  },
  {
    title: 'Luxury facilities',
    description: 'Experience premium amenities and world-class services designed for your comfort and productivity.',
  },
  {
    title: 'Affordable Price',
    description: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
  },
  {
    title: 'Many Choices',
    description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
  },
];
