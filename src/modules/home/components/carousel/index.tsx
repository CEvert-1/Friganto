"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import { ChevronLeft, ChevronRight } from "@medusajs/icons"
import { Slide1, Slide2, SliderBigImage } from "../../../../../public/icons"
import useEmblaCarousel from "embla-carousel-react"
import { Button, Text } from "@medusajs/ui"
import Image from "next/image"
import { cn } from "@lib/util/cn"
import Link from "next/link"

// Sample slides data
const slides = [
  {
    id: 2,
    image: Slide2,
    title: "Item 2",
  },
  {
    id: 3,
    image: Slide2,
    title: "Item 3",
  },
  {
    id: 4,
    image: Slide2,
    title: "Item 4",
  },
  {
    id: 4,
    image: Slide2,
    title: "Item 4",
  },
  {
    id: 4,
    image: Slide2,
    title: "Item 4",
  },
]

const OPTIONS = { loop: true }
export default function SwiperCarousel(productPreviews) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [])
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const handleSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", handleSelect)
    handleSelect() // Set initial active index
  }, [emblaApi])

  return (
    <div className="relative flex flex-col items-center w-full max-lg:gap-6 lg:flex-row bg-[#f9f9f9] h-full">
      {/* Left-side image */}
      <img
        src={SliderBigImage.src}
        alt="Left side image"
        className="w-full lg:w-[40vw] max-lg:max-h-[94px] object-center object-cover z-20 h-full"
      />

      {/* Swiper with 3 slides per view */}
      <div className="relative w-full  lg:-ml-6">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container relative h-full py-6 ">
              {productPreviews?.productPreviews?.response?.products?.map(
                (item, index) => (
                  <div
                    style={{
                      paddingRight:
                        index === slides?.length - 1 ? "0px" : undefined,
                    }}
                    className="embla__slide flex flex-col gap-3 lg:gap-4 justify-between h-full relative"
                    key={index}
                  >
                    {index === activeIndex ? (
                      <Text className="text-center text-base font-medium capitalize">
                        {item?.title}
                      </Text>
                    ) : (
                      <Text className="text-center text-base font-medium capitalize opacity-0">
                        test
                      </Text>
                    )}
                    {index === activeIndex && (
                      <button
                        className="embla__prev absolute top-1/2 -left-8 lg:-left-6"
                        onClick={scrollPrev}
                      >
                        <ChevronLeft />
                      </button>
                    )}
                    {index === activeIndex && (
                      <button
                        className="embla__next absolute top-1/2 -right-8 lg:-right-6"
                        onClick={scrollNext}
                      >
                        <ChevronRight />
                      </button>
                    )}

                    <Image
                      // @ts-ignore
                      src={item?.thumbnail}
                      alt={item.title}
                      width={400}
                      height={400}
                      className={cn(
                        "max-w-[286px]  h-full w-full pb-12 z-10 ",
                        index === activeIndex
                          ? "max-lg:scale-[1.03]"
                          : "max-lg:scale-[0.97]"
                      )}
                    />

                    {index === activeIndex ? (
                      <Link
                        className="z-20  py-2 lg:py-2.5  bg-black rounded-full text-white w-full absolute -bottom-1 lg:-bottom-4 text-sm font-semibold text-center lg:px-14"
                        href={`/products/${item?.handle}`}
                      >
                        Shop Now
                      </Link>
                    ) : null}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
