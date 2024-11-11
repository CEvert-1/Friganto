import { Product, StoreGetProductsParams } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache, Suspense } from "react"
import Carousel from "@modules/home/components/carousel"
import { Heading, Text } from "@medusajs/ui"
import VideoAndInformation from "@modules/home/components/video-and-information"

export const metadata: Metadata = {
  title: "Friganto",
  description: "Decant and serve your fine wine at the proper temperature",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }
  // // edit this function to define your related products logic
  const setQueryParams = (): StoreGetProductsParams => {
    const params: StoreGetProductsParams = {}

    if (region?.id) {
      params.region_id = region.id
    }

    return params
  }

  const queryParams = setQueryParams()

  const productPreviews = await getProductsList({
    queryParams,
    countryCode,
  })

  if (!region) {
    return null
  }

  return (
    <div className="flex flex-col gap-[74px] lg:gap-16 pb-16 min-h-screen">
      <Hero />

      {/* <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul> */}
      <div className="space-y-6 lg:space-y-8">
        <Heading
          level={"h2"}
          className="text-base lg:text-2xl font-medium text-center"
        >
          Lorem ipsum dolor sit amet consectetur
        </Heading>
        <Suspense>
          <Carousel productPreviews={productPreviews} />
        </Suspense>
      </div>

      <VideoAndInformation />

      <div className=" px-6 lg:px-16 space-y-8 lg:space-y-6">
        <Heading
          level={"h2"}
          className="text-base lg:text-2xl font-medium text-center max-w-[800px] w-full mx-auto lg:mt-8 px-6 lg:px-16"
        >
          In a real world research study, across multiple environments, Friganto
          met or exceeded the requirements for cooling wine.
        </Heading>
        <div className="lg:hidden">
          <Text as="p" className="text-xs text-center">
            Want to know more?
          </Text>
          <Text as="p" className=" text-center">
            Read the results of the{" "}
            <a
              href="/report/Friganto Report.pdf"
              download
              className="text-xs font-semibold"
            >
              Friganto Research Study.
            </a>
          </Text>
        </div>
        <Text as="p" className="hidden lg:block text-center">
          Want to know more? Read the results of the{" "}
          <a
            href="/report/Friganto_Report.pdf"
            download
            className=" font-semibold"
          >
            Friganto Research Study.
          </a>
        </Text>
        <Text as="p" className="max-lg:text-xs text-center">
          Don’t have a wine fridge, Friganto cools wine from 72F to 60F in 30
          minutes or less, all while you decant the wine to deliver a truly fine
          wine experience.
        </Text>
      </div>
    </div>
  )
}
