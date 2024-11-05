"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPrice from "@modules/products/components/product-price"
import { isEqual } from "lodash"
import { useMemo, useState } from "react"

type ProductInfoProps = {
  product: PricedProduct
  region: Region
}

const ProductInfo = ({ product, region }: ProductInfoProps) => {
  const [options, setOptions] = useState<Record<string, string>>({})
  const variants = product.variants

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
  return (
    <div id="product-info">
      <div className="flex flex-col gap-6 lg:gap-16 w-full">
        <div className="flex flex-col gap-8">
          <Heading
            level="h2"
            className="text-2xl lg:text-5xl leading-10 text-ui-fg-base font-medium max-lg:hidden"
            data-testid="product-title"
          >
            {product.title}
          </Heading>
          <div className="flex items-center justify-between gap-4 w-full border-b border-gray-200 pb-3.5 lg:pb-6">
            {product.collection && (
              <LocalizedClientLink
                href={`/collections/${product.collection.handle}`}
                className="text-medium text-xs lg:text-xl font-medium"
              >
                {product.collection.title}
              </LocalizedClientLink>
            )}
            <ProductPrice product={product} variant={variant} region={region} />
          </div>
        </div>
        <Text
          className="text-medium text-[10px] lg:text-base"
          data-testid="product-description "
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
