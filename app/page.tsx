import Collection from '@/components/home/collection';
import Hero from '@/components/home/hero';

const dummyProducts = [
  {
    id: 'clz70yukp00061145htqv02w7',
    name: 'UT My Special Friends Lengan Pendek',
    slug: 'ut-my-special-friends-lengan-pendek',
    price: 149000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466347/item/goods_62_466347.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:28:36.935Z',
    updatedAt: '2024-07-29T13:28:36.935Z',
  },
  {
    id: 'clz70zdqv00071145nn8xlgli',
    name: 'Baju Terusan | Lengan Pendek Garis',
    slug: 'baju-terusan-lengan-pendek-garis',
    price: 99000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464513/item/goods_31_464513.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:29:01.782Z',
    updatedAt: '2024-07-29T13:29:01.782Z',
  },
  {
    id: 'clz70zu8800081145p7u1bivh',
    name: 'Celana Legging Crop',
    slug: 'celana-legging-crop',
    price: 129000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464633/item/goods_11_464633.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:29:23.142Z',
    updatedAt: '2024-07-29T13:29:23.142Z',
  },
  {
    id: 'clz71080p000911453rpjcsy1',
    name: 'Baju Terusan Katun Mesh Tanpa Lengan Joy of Print',
    slug: 'baju-terusan-katun-mesh-tanpa-lengan-joy-of-print',
    price: 99000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464576/item/goods_01_464576.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:29:41.016Z',
    updatedAt: '2024-07-29T13:29:41.016Z',
  },
  {
    id: 'clz710jj5000a1145364qubjl',
    name: 'T-Shirt Kerah Bulat | Lengan Panjang',
    slug: 't-shirt-kerah-bulat-lengan-panjang',
    price: 149000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/470873/item/goods_51_470873.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:29:55.938Z',
    updatedAt: '2024-07-29T13:29:55.938Z',
  },
  {
    id: 'clz710wsz000b1145wz5b108j',
    name: 'Celana Legging Fit Rileks (Serupa Denim)',
    slug: 'celana-legging-fit-rileks-serupa-denim',
    price: 129000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455062/item/goods_65_455062.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:30:13.137Z',
    updatedAt: '2024-07-29T13:30:13.137Z',
  },
  {
    id: 'clz711buj000c1145vjaflozv',
    name: 'Piyama Dry Picture Book Lengan Pendek',
    slug: 'piyama-dry-picture-book-lengan-pendek',
    price: 199000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464655/item/goods_13_464655.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:30:32.634Z',
    updatedAt: '2024-07-29T13:30:32.634Z',
  },
  {
    id: 'clz711olm000d1145e3i5qkca',
    name: 'Kaos Kaki 2 Pack (Reguler)',
    slug: 'kaos-kaki-2-pack-reguler',
    price: 79000,
    imageUrl:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460789003/item/goods_69_460789003.jpg',
    stock: 100,
    size: null,
    sku: null,
    overview: null,
    materials: null,
    categoryId: null,
    createdAt: '2024-07-29T13:30:49.161Z',
    updatedAt: '2024-07-29T13:30:49.161Z',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Collection products={dummyProducts} isLoading={false} />
    </>
  );
}
