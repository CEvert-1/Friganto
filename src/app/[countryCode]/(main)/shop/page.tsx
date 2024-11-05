import { Heading, Text } from "@medusajs/ui"
import { SortOptions } from "@modules/shop/components/refinement-list/sort-products"
import StoreTemplate from "@modules/shop/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function ShopPage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams
  return (
    <section className="content-container py-8 lg:p-16 flex flex-col gap-[42px] lg:gap-16">
      <Heading className="text-2xl lg:text-5xl font-medium text-center">
        Shop
      </Heading>
      <StoreTemplate
        sortBy={sortBy}
        page={page}
        countryCode={params.countryCode}
      />
      <div className="border-t border-gray-200 flex flex-col gap-7 lg:gap-6">
        <Text
          as="p"
          className="text-center text-base lg:text-xl font-medium mt-8"
        >
          Shop with confidence with our 30-day Money-Back Guarantee
        </Text>
        <Text as="p" className="text-[10px] lg:text-sm font-normal text-center">
          If you are not satisfied with Friganto for any reason in the first 30
          days, return it for a full refund. No questions asked.
        </Text>
      </div>
    </section>
  )
}
