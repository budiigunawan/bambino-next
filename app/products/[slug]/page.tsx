import ProductDetail from '@/components/product/product-detail';
import ProductRecommendation from '@/components/product/product-recommendation';

const dummyData = {
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
};

const recommendationsDummyData = [
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
];

export default function Page() {
  return (
    <>
      <ProductDetail dataProduct={dummyData} />
      <ProductRecommendation
        products={recommendationsDummyData}
        isLoading={false}
      />
    </>
  );
}
