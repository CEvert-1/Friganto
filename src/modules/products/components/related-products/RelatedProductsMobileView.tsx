import Carousel from "./Carousel"

export default function RelatedProductsMobileView({ productPreviews, region }) {
  return (
    <div>
      <Carousel productPreviews={productPreviews} region={region} />
    </div>
  )
}
