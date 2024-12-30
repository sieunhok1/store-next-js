import React from "react";
import { auth } from "@clerk/nextjs/server";
import { CardSignButton } from "../form/Buttons";
import { featchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleButton({ productId }: { productId: string }) {
  const {userId} = auth()
  if(!userId) return <CardSignButton />
  const favoriteId = await featchFavoriteId({productId})
  return <FavoriteToggleForm productId={productId} favoriteId={favoriteId}/>
}

export default FavoriteToggleButton;
