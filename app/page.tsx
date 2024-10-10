import Collection from '@/components/home/collection';
import Hero from '@/components/home/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Collection products={[]} isLoading={true} />
    </>
  );
}
