"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import { Minus, Plus } from "@medusajs/icons"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import { cn } from "@lib/util/cn"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
  disabled?: boolean
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const countryCode = useParams().countryCode as string

  const variants = product.variants

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {}

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined })
    }

    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id])
    }
  }, [variants, variantRecord])

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (variant && !variant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (variant && variant.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [variant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: variant.id,
      quantity,
      countryCode,
    })

    setIsAdding(false)
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <>
      <div
        className="flex flex-row lg:flex-col gap-3 lg:gap-y-6 w-full lg:w-fit"
        ref={actionsRef}
      >
        <div className="flex items-center justify-between gap-2 border py-2.5 border-gray-200 rounded-full w-full px-8 lg:px-9">
          <button
            onClick={handleDecreaseQuantity}
            disabled={quantity <= 1 || isAdding}
            className={cn(
              " rounded-full ",
              quantity <= 1 ? "text-gray-200 cursor-not-allowed" : ""
            )}
          >
            -
          </button>
          <span className="w-10 text-center text-sm font-semibold ">
            {quantity}
          </span>
          <button
            onClick={handleIncreaseQuantity}
            disabled={isAdding}
            className={cn(
              " rounded-full ",
              isAdding ? "text-gray-200 cursor-not-allowed" : ""
            )}
          >
            +
          </button>
        </div>
        <Button
          onClick={() => handleAddToCart()}
          disabled={isAdding}
          variant="primary"
          className="lg:h-10 rounded-full px-8 lg:px-16 w-full"
          isLoading={isAdding}
          data-testid="add-product-button"
        >
          {"Add To bag"}
        </Button>
        {/* <MobileActions
          product={product}
          variant={variant}
          region={region}
          options={options}
          updateOptions={updateOptions}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        /> */}
      </div>
    </>
  )
}
