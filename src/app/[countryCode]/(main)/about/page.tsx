"use client"

import Image from "next/image"
import {
  About1,
  About2,
  About3,
  About4,
  AboutHero,
} from "../../../../../public/icons"

import M1 from "../../../../../public/images/about/M1.jpg"
import M2 from "../../../../../public/images/about/M2.jpg"
import M3 from "../../../../../public/images/about/M3.jpg"
import M4 from "../../../../../public/images/about/M4.jpg"
import M5 from "../../../../../public/images/about/M5.jpg"
import MT1 from "../../../../../public/images/about/MT1.jpeg"
import MT2 from "../../../../../public/images/about/MT2.jpg"
import MT3 from "../../../../../public/images/about/MT3.jpeg"
import MT4 from "../../../../../public/images/about/MT4.jpg"
import MT5 from "../../../../../public/images/about/MT5.jpg"
import MT6 from "../../../../../public/images/about/MT6.jpeg"
import MT7 from "../../../../../public/images/about/MT7.jpg"
import MT8 from "../../../../../public/images/about/MT8.jpg"
import MT9 from "../../../../../public/images/about/MT9.jpg"
import MT10 from "../../../../../public/images/about/MT10.jpg"
import MT11 from "../../../../../public/images/about/MT11.jpg"

import { Heading, Text } from "@medusajs/ui"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "@medusajs/icons"

const aboutImages = [
  M1,
  M2,
  M3,
  M4,
  M5,
  MT1,
  MT2,
  MT3,
  MT4,
  MT5,
  MT6,
  MT7,
  MT8,
  MT9,
  MT10,
  MT11,
]

const OPTIONS = {
  loop: true,
  slidesToScroll: 1,
  draggable: true,
  speed: 5,
}

const autoplayOptions = {
  delay: 2500,
}

export default function AboutPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay(autoplayOptions),
  ])
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
    <section className="flex flex-col gap-[42px] lg:gap-16 pb-16">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[42px]">
        <div className="lg:max-w-[593px] w-full h-full flex-shrink-0 flex flex-col items-center gap-3 max-lg:pt-8">
          <Heading
            level={"h1"}
            className="text-2xl lg:text-5xl font-medium lg:hidden"
          >
            About Mike
          </Heading>
          <img
            src={AboutHero.src}
            alt="about hero"
            className="w-full h-full object-cover object-center flex-shrink-0"
          />
        </div>
        <div className="flex flex-col gap-6 lg:gap-16 justify-between  px-8 lg:pt-16 lg:pr-16 lg:pl-0">
          <Heading
            level={"h1"}
            className="text-3xl lg:text-5xl font-medium max-lg:hidden"
          >
            About Mike
          </Heading>

          <div className="flex flex-col gap-4 lg:gap-[42px]">
            <Text
              as="p"
              className="text-base lg:text-xl font-medium max-lg:text-center"
            >
              Meet Mike, the Inventor of Friganto
            </Text>
            <div className="flex flex-col gap-4 lg:gap-6">
              <Text as="p" className="max-lg:text-xs">
                Friganto’s inventor is a wine connoisseur, educator, and
                traveller. (In his spare time, he’s also a lawyer and a writer.)
                He passed the Level 1 Sommelier exam in October 2022. (Level 2
                coming soon…)
              </Text>
              <Text as="p" className="max-lg:text-xs">
                Since 1998, Mike has explored the world in search of great food
                and wine. From Canada’s Niagara region, to Europe, Chile, and
                many points in between, and of course throughout the U.S., Mike
                has travelled and explored wineries, vineyards, and the
                beautiful connection between food and wine.
              </Text>
              <Text as="p" className="max-lg:text-xs">
                Mike’s favorite place to drink wine? Wherever there is good food
                and great friends.
              </Text>
            </div>
          </div>
          <div className="lg:mt-[17px] max-lg:text-xs">
            Explore Wine with Mike and Friganto on{" "}
            <a
              href="CellarTracker.com"
              target="_blank"
              className="max-lg:text-xs font-semibold"
            >
              CellarTracker.com
            </a>
          </div>
        </div>
      </div>
      {/* Embla Carousel */}
      <div className="relative mt-8">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {aboutImages.map((image, index) => (
              <div className="embla__slide" key={index}>
                <div className="w-full min-h-[224px] lg:min-h-[388px] h-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`About Image ${index + 1}`}
                    className="w-full h-full  object-cover object-center aspect-auto"
                    width={1200}
                    height={800}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 w-full mt-4 lg:mt-6 ">
          <ChevronLeft onClick={scrollPrev} />
          <ChevronRight onClick={scrollNext} />
        </div>
      </div>
    </section>
  )
}
