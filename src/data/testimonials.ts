export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Bang Upin',
    role: 'Pedagang Asongan',
    content: 'Terinsip banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
    rating: 5,
    image: '/3.jpg',
    avatar: '/7.png',
  },
  {
    id: 2,
    name: 'Ibuk Sukijan',
    role: 'Ibu Rumah Tangga',
    content: 'Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah',
    rating: 3,
    image: '/5.jpg',
    avatar: '/10.png',
  },
  {
    id: 3,
    name: 'Mpok Ina',
    role: 'Karyawan Swasta',
    content: 'Sangat terjangkau untuk kantong saya yang tidak terlalu banyak',
    rating: 3,
    image: '/9.jpg',
    avatar: '/12.png',
  },
  {
    id: 4,
    name: 'Bapak Surya',
    role: 'Wiraswasta',
    content: 'Kualitas furniture Panto sangat baik, rumah saya terlihat lebih elegan.',
    rating: 5,
    image: '/2.jpg',
    avatar: '/7.png',
  },
  {
    id: 5,
    name: 'Ibu Dewi',
    role: 'Guru',
    content: 'Pelayanan ramah dan barang sampai dengan aman. Sangat recommended!',
    rating: 5,
    image: '/6.jpg',
    avatar: '/10.png',
  },
  {
    id: 6,
    name: 'Mas Andi',
    role: 'Karyawan',
    content: 'Desain minimalis dan harga bersahabat. Ruang tamu saya sekarang jauh lebih nyaman.',
    rating: 4,
    image: '/8.jpg',
    avatar: '/12.png',
  },
];
