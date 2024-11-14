import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Image from "next/image"
import Logofooter from "../../../../../public/logofooter.svg"

import { ChevronRightMini } from "@medusajs/icons"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="bg-[#282828] text-white w-full">
      <div className="content-container flex flex-col w-full gap-[42px] lg:px-8 py-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:items-start justify-between">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              <Image
                src={Logofooter}
                alt="logo"
                width={400}
                height={400}
                className="w-36 h-8"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex flex-col items-center justify-center lg:justify-end lg:flex-row gap-6 lg:gap-16 w-full">
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/shop"
              scroll={false}
              data-testid="nav-search-link"
            >
              Shop
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/about"
              scroll={false}
              data-testid="nav-search-link"
            >
              About
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/faq"
              scroll={false}
              data-testid="nav-search-link"
            >
              FAQ
            </LocalizedClientLink>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <Text
            as="p"
            className=" text-center lg:text-left text-white font-semibold"
          >
            Subscribe Now
          </Text>
          <div className="flex items-center w-full lg:w-[350px] border-b border-white ">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full lg:w-[350px] text-xs border-none pb-2 outline-none  text-white placeholder-white focus:ring-0"
              style={{ backgroundColor: "transparent" }}
            />
            <button className="text-white">
              <ChevronRightMini className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1376"
            height="2"
            viewBox="0 0 1376 2"
            fill="none"
            className="w-full mx-auto flex-shrink-0"
          >
            <path d="M0 1L1376 1.00012" stroke="white" strokeWidth="0.75" />
          </svg>
          <div className="flex w-full items-center justify-between text-white">
            <Text className="text-sm">
              {new Date().getFullYear()} © Friganto | All Rights Reserved
            </Text>
            <div className="flex items-center gap-6">
              <a href="https://youtube.com/@your-channel">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path 
                    d="M23.4985 6.81398C23.3318 6.24195 23.0168 5.72401 22.5862 5.30701C22.1557 4.89001 21.6267 4.58935 21.0485 4.43398C19.2485 4.00398 12 4.00398 12 4.00398C12 4.00398 4.75146 4.00398 2.95146 4.43398C2.37326 4.58935 1.84426 4.89001 1.41372 5.30701C0.983176 5.72401 0.668171 6.24195 0.501463 6.81398C0.0766132 8.62765 -0.130137 10.4873 -0.114537 12.352C-0.130137 14.2167 0.0766132 16.0763 0.501463 17.89C0.668171 18.462 0.983176 18.98 1.41372 19.397C1.84426 19.814 2.37326 20.1146 2.95146 20.27C4.75146 20.7 12 20.7 12 20.7C12 20.7 19.2485 20.7 21.0485 20.27C21.6267 20.1146 22.1557 19.814 22.5862 19.397C23.0168 18.98 23.3318 18.462 23.4985 17.89C23.9234 16.0763 24.1301 14.2167 24.1145 12.352C24.1301 10.4873 23.9234 8.62765 23.4985 6.81398ZM9.60146 15.904V8.79998L15.8615 12.352L9.60146 15.904Z" 
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://tiktok.com/@your-handle">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path 
                    d="M19.321 5.562C17.7924 4.0283 15.7028 3.1471 13.5 3.1471H13.2V11.2471L13.197 16.8471C13.197 18.3771 11.952 19.6221 10.422 19.6221C9.7035 19.6221 9.0495 19.3321 8.5665 18.8491C8.0825 18.3651 7.7925 17.7111 7.7925 16.9921C7.7925 15.4621 9.0375 14.2171 10.5675 14.2171C10.9275 14.2171 11.2725 14.2921 11.5875 14.4271V11.2321C11.2545 11.1721 10.914 11.1421 10.569 11.1421C8.361 11.1421 6.315 12.1921 4.989 13.8471C4.1985 14.8571 3.717 16.0911 3.717 17.4471C3.717 18.6421 4.086 19.7721 4.737 20.7071C5.8245 22.2071 7.5975 23.1471 9.5925 23.1471C13.0545 23.1471 15.8775 20.3241 15.8775 16.8621L15.87 10.3321C16.8375 11.0771 17.9775 11.5771 19.2 11.7771V8.6421C18.4815 8.4421 17.832 8.0571 17.2875 7.5571C16.743 7.0571 16.2885 6.3621 16.0185 5.5921L19.32 5.5621H19.3215L19.321 5.562Z" 
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
