import { fetchSingerProduct, findExistingReview } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import React from "react";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductRating from "@/components/single-product/ProductRating";
import AddToCart from "@/components/single-product/AddToCart";
import ShareButton from "@/components/single-product/ShareButton";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import { auth } from "@clerk/nextjs/server";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingerProduct(params.id);
  const { name, image, price, description, company } = product;
  const dollarsAmount = formatCurrency(price);
  const {userId} = auth()
  const reviewDoesNotExit = userId && !(await findExistingReview(userId , product.id))
  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="grid g-y-8 mt-6 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE COL FRIST */}
        <div className="h-full relative">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw , 33vw"
          />
        </div>
        {/*PRODUCT COL SECOND */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="text-xl capitalize">{name}</h1>
            <div className="flex gap-x-2">
            <FavoriteToggleButton productId={params.id} />
            <ShareButton productId={params.id} name={product.name}/>
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
      <>
        <ProductReviews productId={params.id} />
        {reviewDoesNotExit && <SubmitReview productId={params.id} />}
        
      </>
    </section>
  );
}

export default SingleProductPage;
