'use client';
import { useParams } from 'next/navigation';
import ProductDetail from '@/components/product/product-detail';
import ProductRecommendation from '@/components/product/product-recommendation';
import useFetch from '@/app/hooks/useFetch';
import { useMemo } from 'react';
import { Product } from '@/app/lib/types';

export default function Page() {
  const { slug } = useParams();

  const { data: dataProduct, loading: loadingDetail } = useFetch(
    `https://bambino-api.budigunawan.com/products/${slug}`
  );
  const { data: recommendationsData, loading: loadingRecommendation } =
    useFetch('https://bambino-api.budigunawan.com/products?page=1&limit=5');

  const productsRecommendation: Product[] = useMemo(() => {
    if (recommendationsData?.products.length > 0) {
      return recommendationsData.products
        .filter((product: Product) => product.slug !== slug)
        .slice(0, 4);
    }

    return [];
  }, [recommendationsData, slug]);

  return (
    <>
      <ProductDetail dataProduct={dataProduct} isLoading={loadingDetail} />
      <ProductRecommendation
        products={productsRecommendation}
        isLoading={loadingRecommendation}
      />
    </>
  );
}
