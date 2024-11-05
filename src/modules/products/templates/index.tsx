import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { Heading, Text } from "@medusajs/ui"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="content-container p-6 lg:p-16 !h-full flex flex-col gap-16">
      <div
        className=" grid grid-cols-1 lg:grid-cols-2 relative gap-6 lg:gap-[42px] !h-full"
        data-testid="product-container"
      >
        <Heading
          level="h2"
          className="text-2xl lg:text-5xl leading-10 text-ui-fg-base font-medium lg:hidden text-center mb-2"
          data-testid="product-title"
        >
          {product.title}
        </Heading>
        <ImageGallery images={product?.images || []} />

        <div className="flex flex-col  justify-between  w-full gap-6 lg:gap-y-12 !h-full">
          <ProductInfo product={product} region={region} />

          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div data-testid="related-products-container" className="max-lg:-mt-8">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate
