import ProductDetail from '@/components/product/product-detail';

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

export default function Page() {
  return (
    <>
      <ProductDetail dataProduct={dummyData} />
    </>
  );
}
