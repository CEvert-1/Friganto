import { Button, Heading, Text } from "@medusajs/ui"
import heroImage from "../../../../../public/images/IMAGE 1.jpg"

// Static import

const Hero = () => {
  return (
    <div className="h-full w-full  relative grid grid-cols-1 lg:grid-cols-5">
      <div className="w-full col-span-2 relative h-[430px] lg:h-[720px]">
        <video
          src="/video/homepage.mp4"
          autoPlay
          loop
          muted
          controls
          playsInline
          poster={heroImage.src}
          className="w-full h-full object-cover object-center"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex-1 flex flex-col gap-4 col-span-3 lg:gap-8 items-start justify-center p-6 lg:p-[76px]">
        <Heading
          level="h1"
          className="text-base text-3xl text-ui-fg-base font-medium w-full"
        >
          Elevate your wine…with Friganto
        </Heading>
        <Text as="p" size={"base"} className=" font-normal w-full lg:pr-12">
          Decant and serve your fine wine at the proper temperature. Friganto
          elevates your wine, adding value to each bottle you purchase. A small
          investment now for many years of enjoyment to come.
        </Text>
        <a href="/shop" className="max-lg:w-full">
          <Button
            variant="primary"
            className="rounded-full px-6 py-2 lg:py-3.5 max-lg:w-full btn1"
          >
            Buy Yours Today
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
