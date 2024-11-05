"use client"

import "swiper/swiper-bundle.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { ChevronLeft, ChevronRight } from "@medusajs/icons"
import { Autoplay, Pagination, Navigation } from "swiper"
import { useEffect, useRef } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"

export default function Carousel({ productPreviews, region }) {
  const swipeRef = useRef<any>()
  return (
    <div className="">
      <Swiper
        onSwiper={(swiper) => {
          swipeRef.current = swiper
        }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 4000 }}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
      >
        {productPreviews.map((productPreview) => (
          <SwiperSlide key={productPreview.id} className="px-2 rounded-none">
            <LocalizedClientLink
              href={`/products/${productPreview.handle}`}
              className="group rounded-none"
            >
              <div
                data-testid="product-wrapper"
                className="flex flex-col gap-2.5 lg:gap-6"
              >
                <Thumbnail thumbnail={productPreview.thumbnail} size="square" />
                <div className="flex flex-col gap-2.3 lg:gap-4 txt-compact-medium justify-between">
                  <Text
                    className="text-ui-fg-subtle font-medium text-[10px] lg:text-sm"
                    data-testid="product-title"
                  >
                    {productPreview.title}
                  </Text>
                  <div className="text-[10px]">
                    {productPreview?.price?.calculated_price || "Not Set"}
                  </div>
                </div>
              </div>
            </LocalizedClientLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-between gap-4 w-full mt-3">
        <ChevronLeft
          onClick={() => {
            swipeRef.current.slidePrev()
          }}
        />
        <ChevronRight
          onClick={() => {
            swipeRef.current.slideNext()
          }}
        />
      </div>
    </div>
  )
}
