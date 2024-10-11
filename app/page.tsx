'use client';
import Collection from '@/components/home/collection';
import Hero from '@/components/home/hero';
import useFetch from './hooks/useFetch';

export default function Home() {
  const { data, loading } = useFetch(
    'https://bambino-api.budigunawan.com/products?page=1&limit=8'
  );

  return (
    <>
      <Hero />
      <Collection products={data?.products} isLoading={loading} />
    </>
  );
}
