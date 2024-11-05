import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import { BarsThree } from "@medusajs/icons"

import Logo from "../../../../../public/logo.svg"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 w-full mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container flex items-center justify-between w-full h-full ">
          <LocalizedClientLink
            href="/"
            className=""
            data-testid="nav-store-link"
          >
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              className="w-36 h-8"
            />
          </LocalizedClientLink>

          <div className="hidden lg:flex items-center justify-center gap-10  w-full">
            <LocalizedClientLink
              className="hover:text-ui-fg-base blue"
              href="/shop"
              scroll={false}
              data-testid="nav-search-link"
            >
              Shop
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base blue"
              href="/about"
              scroll={false}
              data-testid="nav-search-link"
            >
              About
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base blue"
              href="/faq"
              scroll={false}
              data-testid="nav-search-link"
            >
              FAQ
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-[22px] h-full justify-end ">
            <div className="flex-shrink-0">
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base bg-[#3fbaeb] hover:bg-opacity-70 rounded-full cartbtn overflow-hidden p-2.5"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <circle cx="21" cy="21" r="21" fill="#3fbaeb" />
                    </svg>
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
            <div className="flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base "
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base bg-[#3fbaeb] hover:bg-opacity-70 rounded-full overflow-hidden p-2.5"
                href="/account"
                data-testid="nav-account-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.2006 10.0912C14.4317 10.6724 15.4814 11.5776 16.2371 12.71C16.9929 13.8423 17.4262 15.1589 17.4906 16.5188C17.4992 16.6433 17.4828 16.7683 17.4424 16.8865C17.402 17.0046 17.3384 17.1135 17.2554 17.2067C17.1723 17.3 17.0715 17.3757 16.9588 17.4294C16.8461 17.4831 16.7238 17.5138 16.5991 17.5196C16.4744 17.5255 16.3497 17.5063 16.2325 17.4633C16.1153 17.4203 16.0078 17.3544 15.9165 17.2693C15.8251 17.1842 15.7516 17.0817 15.7004 16.9679C15.6491 16.854 15.6212 16.7311 15.6181 16.6062C15.55 15.1619 14.9282 13.7993 13.882 12.8012C12.8357 11.8032 11.4453 11.2463 9.99935 11.2463C8.5534 11.2463 7.16298 11.8032 6.11673 12.8012C5.07047 13.7993 4.44874 15.1619 4.3806 16.6062C4.36376 16.8507 4.25186 17.0789 4.06887 17.2419C3.88588 17.4049 3.64634 17.4897 3.40155 17.4783C3.15676 17.4669 2.92618 17.36 2.75919 17.1807C2.59219 17.0013 2.50206 16.7637 2.5081 16.5188C2.57238 15.1591 3.00551 13.8425 3.76103 12.7102C4.51656 11.5779 5.566 10.6726 6.79685 10.0912C6.00811 9.43336 5.44118 8.54848 5.17316 7.55697C4.90515 6.56546 4.94906 5.51546 5.29893 4.54979C5.6488 3.58412 6.28764 2.74967 7.12855 2.15993C7.96947 1.5702 8.97163 1.25381 9.99872 1.25381C11.0258 1.25381 12.028 1.5702 12.8689 2.15993C13.7098 2.74967 14.3486 3.58412 14.6985 4.54979C15.0484 5.51546 15.0923 6.56546 14.8243 7.55697C14.5563 8.54848 13.9893 9.43336 13.2006 10.0912ZM13.1243 6.25C13.1243 5.4212 12.7951 4.62634 12.2091 4.04029C11.623 3.45424 10.8281 3.125 9.99935 3.125C9.17055 3.125 8.37569 3.45424 7.78964 4.04029C7.20359 4.62634 6.87435 5.4212 6.87435 6.25C6.87435 7.0788 7.20359 7.87366 7.78964 8.45971C8.37569 9.04576 9.17055 9.375 9.99935 9.375C10.8281 9.375 11.623 9.04576 12.2091 8.45971C12.7951 7.87366 13.1243 7.0788 13.1243 6.25Z"
                    fill="white"
                  />
                </svg>
              </LocalizedClientLink>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <div className="flex-1 basis-0 h-full flex items-center">
                <div className="h-full">
                  <SideMenu regions={regions} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
