import { Heading } from "@medusajs/ui"
import Accordion from "@modules/faq/components/accordion"
import React, { Suspense } from "react"
import {
  faq1,
  faq2,
  faq4,
  faq6,
  PlaceholderImage,
} from "../../../../../public/icons"
import Image from "next/image"

const accordionItems = [
  {
    title: "How does Friganto work?",
    content: (
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[38px] w-full">
        <Suspense>
          <div className="w-full h-full  lg:max-w-[374px] flex-shrink-0 ">
            <Image
              src={faq1}
              alt="Friganto"
              loading="lazy"
              decoding="async"
              placeholder="blur"
              blurDataURL={PlaceholderImage.src}
              width={1400}
              height={1200}
              className="w-full h-full aspect-auto object-cover object-center"
            />
          </div>
        </Suspense>
        <div className="flex flex-col gap-6 text-[10px] lg:text-base justify-center">
          <p className="">
            The Friganto is a cooling platform that transfers heat from the
            wine, decreasing the wine’s temperature. Read the results of the{" "}
            <strong className="font-semibold">Friganto Research Study</strong>.
          </p>
          <p>Want to talk physics?</p>
          <p>
            The Friganto uses conductive heat exchange to decrease the
            temperature of the decanter which, in turn, causes conductive heat
            exchange with the wine. Ultimately, the wine, decanter, and Friganto
            move toward thermodynamic equilibrium with the ambient temperature
            in the room, but this process takes longer than it takes to decant
            and consume the wine.
          </p>
          <p>
            The result is the wine reaches and maintains 55-60F during decanting
            and serving. Up to 4 hours!
          </p>
          <p>
            Wine left overnight eventually would reach room temperature, but why
            would you ever do that?!
          </p>
        </div>
      </div>
    ),
  },
  {
    title:
      "I thought red wine should be consumed at room temperature. Am I wrong?",
    content: (
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[38px] w-full">
        <Suspense>
          <div className="w-full h-full  lg:max-w-[374px] flex-shrink-0 ">
            <Image
              src={faq2}
              alt="Friganto"
              loading="lazy"
              decoding="async"
              placeholder="blur"
              blurDataURL={PlaceholderImage.src}
              width={1400}
              height={1200}
              className="w-full h-full aspect-auto object-cover object-center"
            />
          </div>
        </Suspense>
        <div className="flex flex-col gap-6 text-[10px] lg:text-base justify-center">
          <p className="">
            Yes, red wine should be served at room temperature, but what room?
            Your 21st century home, which most people keep between 70-72F? No.
          </p>
          <p>
            To understand the “room temperature” for wine, consider a castle in
            France 300 years ago. Back then, an old French castle was drafty and
            cold and most people wore multiple layers inside the castle to keep
            warm, except in the summer. “Room temperature” back then hovered
            around 50-60F.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "How is red wine different when it is cooled?",
    content: (
      <div className="w-full">
        <div className="flex flex-col gap-6 text-[10px] lg:text-base justify-center">
          <p className="">Less Acid + Less Alcohol Burn = Elevated Wine</p>
          <p>
            Wine is acidic, approximately 3.5 on the pH scale (7 is neutral and
            anything less is acidic). Generally, the higher the acidity the
            lower the serving temperature. The lower temperature allows the wine
            to express its other characteristics and not be overshadowed by
            acidity.
          </p>
          <p>
            Similarly, if you serve a warm high alcohol content wine (many red
            wines exceed 14% ABV) your mouth will experience more alcohol “burn”
            and less wine flavor. The trick is to find the right temperature,
            which varies by wine and individual preference. That said, fine wine
            served over 65F is almost always a bad idea.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Does Friganto elevate all wines or just really expensive ones?",
    content: (
      <div className="w-full">
        <div className="flex flex-col gap-6 text-[10px] lg:text-base justify-center">
          <p>
            Friganto elevates all wine experiences. A $5 bottle of wine benefits
            from the proper temperature as much as a $50 bottle (or even $500
            bottle). Of course, the better the wine you serve with the Friganto,
            the better the wine will be once it is elevated.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Can Friganto be used with white wine?",
    content: (
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[38px] w-full">
        <Suspense>
          <div className="w-full h-full lg:max-w-[374px]  lg:max-h-[311px] flex-shrink-0 ">
            <Image
              src={faq4}
              alt="Friganto"
              loading="lazy"
              decoding="async"
              placeholder="blur"
              blurDataURL={PlaceholderImage.src}
              width={1400}
              height={1200}
              className="w-full h-full aspect-auto object-cover object-center"
            />
          </div>
        </Suspense>
        <div className="flex flex-col gap-6 text-[10px] lg:text-base justify-center">
          <p>
            Each Friganto comes with a chill pack that contains a non-toxic,
            freezable liquid. After each use, refreeze the Friganto chill pack
            and use it over and over again.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "What’s in the Friganto chill pack?  Can I reuse it?",
    content: (
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[38px] w-full">
        <Suspense>
          <div className="w-full h-full lg:max-w-[374px]  lg:max-h-[311px] flex-shrink-0 ">
            <Image
              src={faq6}
              alt="Friganto"
              loading="lazy"
              decoding="async"
              placeholder="blur"
              blurDataURL={PlaceholderImage.src}
              width={1400}
              height={1200}
              className="w-full h-full aspect-auto object-cover object-center"
            />
          </div>
        </Suspense>
        <div className="flex flex-col gap-6 text-[10px] lg:text-base justify-center">
          <p>
            Each Friganto comes with a chill pack that contains a non-toxic,
            freezable liquid. After each use, refreeze the Friganto chill pack
            and use it over and over again.
          </p>
        </div>
      </div>
    ),
  },
]

export default function FaqPage() {
  return (
    <section className="content-container py-8 lg:p-16 flex flex-col gap-16 lg:gap-32 overflow-hidden">
      <Heading
        level={"h1"}
        className="text-2xl lg:text-5xl font-medium capitalize text-center"
      >
        FAQ
      </Heading>
      <Accordion items={accordionItems} />
    </section>
  )
}
