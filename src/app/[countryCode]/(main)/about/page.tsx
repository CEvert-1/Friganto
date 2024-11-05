import Image from "next/image"
import {
  About1,
  About2,
  About3,
  About4,
  AboutHero,
} from "../../../../../public/icons"
import { Heading, Text } from "@medusajs/ui"

const aboutImages = [
  {
    image: About1,
  },
  {
    image: About2,
  },
  {
    image: About3,
  },
  {
    image: About4,
  },
]

export default function AboutPage() {
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-6 max-lg:px-6 lg:max-w-[90vw] lg:ml-auto ">
        {aboutImages.map((about, index) => (
          <div key={index} className="w-full">
            <Image
              src={about.image}
              alt={`${index}`}
              className="w-full lg:w-[318px] lg:h-[388px] aspect-auto object-center object-cover"
              width={600}
              height={600}
              priority
            />
          </div>
        ))}
      </div>
    </section>
  )
}
