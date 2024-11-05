import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <Text
          className="line-through text-ui-fg-muted text-[10px] lg:text-sm  font-normal"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-[10px] lg:text-sm font-normal", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </>
  )
}
