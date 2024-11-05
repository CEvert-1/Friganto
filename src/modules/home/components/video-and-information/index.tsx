import { Text } from "@medusajs/ui"
import {
  Decorative,
  LongLasting,
  MiDrop,
  NoIceToFill,
  NoWaterToCleanUp,
} from "../../../../../public/icons"
import Image from "next/image"

const qualities = [
  {
    id: 1,
    name: "No ice to fill",
    image: NoIceToFill,
  },
  {
    id: 2,
    name: "No water to clean up",
    image: MiDrop,
  },
  {
    id: 3,
    name: "Decorative",
    image: Decorative,
  },
  {
    id: 4,
    name: "Long-lasting",
    image: LongLasting,
  },
]

export default function VideoAndInformation() {
  return (
    <section className="flex flex-col gap-[42px] content-container lg:px-16 mt-16 lg:mt-16">
      <div className="flex flex-col gap-6">
        <video
          src=""
          className="h-full min-h-[194px] max-h-[670px] w-full bg-gray-200"
        ></video>
        <Text as="p" className="text-xs lg:text-base text-center">
          Wine connoisseurs know that red wine should be stored between 55-60F
          and served between 55-65F. Even more, many fine red wines benefit from
          decanting, usually 30 minutes to as long as 4 hours. Friganto
          maintains the proper temperature for your delicate treasures,
          effectively cooling your wine for over 4 hours.
        </Text>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-4 mx-auto gap-[16px] lg:gap-20 items-center justify-center">
        {qualities.map((quality, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-center justify-center"
          >
            <Image
              src={quality.image}
              width={60}
              height={60}
              loading="lazy"
              decoding="async"
              alt={quality.name}
              className="w-6 h-6 lg:w-[42px] lg:h-[42px] aspect-auto"
            />
            <Text
              as="p"
              className=" max-lg:text-[8px] uppercase text-center whitespace-nowrap"
            >
              {quality.name}
            </Text>
          </div>
        ))}
      </div>
    </section>
  )
}
