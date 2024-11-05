import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { Slide2 } from "../../../../../public/icons"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <Container
      className="relative lg:max-w-[659px] lg:max-h-[665px] w-full overflow-hidden bg-ui-bg-subtle aspect-square"
      id={images[0].id}
    >
      <Image
        src={images[0].url}
        className="absolute inset-0 rounded-rounded"
        alt={`Product image`}
        fill
        sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
        style={{
          objectFit: "cover",
        }}
      />
    </Container>
  )
}

export default ImageGallery
