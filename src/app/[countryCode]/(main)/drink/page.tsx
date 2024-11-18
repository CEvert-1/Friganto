import { Heading } from "@medusajs/ui"

export const metadata = {
  title: "Drink",
  description: "Explore food and dining experiences.",
}

export default function EatPage() {
  return (
    <section className="content-container py-8 lg:p-16 flex flex-col gap-16">
      <Heading 
        level="h1" 
        className="text-2xl lg:text-5xl font-medium text-center"
      >
        DRINK
      </Heading>
      
      {/* Future YouTube video grid will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video components will be added here */}
      </div>
    </section>
  )
}
