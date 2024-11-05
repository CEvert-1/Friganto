"use client"
import React, { useState } from "react"
import { ChevronDownMini } from "@medusajs/icons"

type AccordionItem = {
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

function Accordion({ items }: AccordionProps) {
  // Initialize openItems as an empty array to start with all items closed
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleAccordion = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index))
    } else {
      setOpenItems([...openItems, index])
    }
  }

  return (
    <div className="w-full transition-all overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-3.5 lg:py-5 ">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center gap-[42px] text-left focus:outline-none"
          >
            <h3 className="text-[10px] lg:text-xl font-medium">{item.title}</h3>
            <ChevronDownMini
              className={`transition-transform duration-300 flex-shrink-0   ${
                openItems.includes(index) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300  ${
              openItems.includes(index)
                ? "animate-accordion-open"
                : "animate-accordion-close"
            }`}
          >
            {openItems.includes(index) && (
              <div className="mt-4 lg:mt-8 justify-center  ">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
