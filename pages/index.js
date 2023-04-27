import CategoryCard from "@/components/CategoryCard";
import GetInTouch from "@/components/GetInTouch";
import Hero from "components/Hero";
import ProductCard from "components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import Wrapper from "components/Wrapper";
import Head from "next/head";



export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}

export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Bazarrafal</title>
        <meta
          name="description"
          content="Simplifier l'accès à la consommation de produits de qualités et favoriser la production locale"
        />
      </Head>
      <main>
        <Hero />
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <h className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Catalogue produit
            </h>
            <div className="text-md md:text-xl">
              Une selection de produits de notre catalogue.
              Vous trouverez chez nous une large gamme de produits locaux
              à prix abordable.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 mx-auto md:px-0">
            {products?.data
              .filter((_, index) => (index< 9)) 
              .map((product) => (
                <ProductCard key={product?.id} data={product} />
              ))
            }
          </div>
          {/* <div className="text-center text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Nos Catégories
          </div>
          <CategoryCard /> */}
        </Wrapper>
        <GetInTouch />
      </main>
    </>

  )
}


