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
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_147_136"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                  >
                    <path d="M1 1H23V23H1V1Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_147_136)">
                    <path
                      d="M18.325 2.03076H21.6989L14.3289 10.4756L23 21.969H16.2114L10.8906 14.9998L4.80914 21.969H1.43214L9.31443 12.9333L1 2.03233H7.96143L12.7637 8.40133L18.325 2.03076ZM17.1386 19.945H19.0086L6.94 3.94948H4.93486L17.1386 19.945Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.7778 2C20.3671 2 20.9324 2.23413 21.3491 2.65087C21.7659 3.06762 22 3.63285 22 4.22222V19.7778C22 20.3671 21.7659 20.9324 21.3491 21.3491C20.9324 21.7659 20.3671 22 19.7778 22H4.22222C3.63285 22 3.06762 21.7659 2.65087 21.3491C2.23413 20.9324 2 20.3671 2 19.7778V4.22222C2 3.63285 2.23413 3.06762 2.65087 2.65087C3.06762 2.23413 3.63285 2 4.22222 2H19.7778ZM19.2222 19.2222V13.3333C19.2222 12.3727 18.8406 11.4513 18.1613 10.772C17.482 10.0927 16.5607 9.71111 15.6 9.71111C14.6556 9.71111 13.5556 10.2889 13.0222 11.1556V9.92222H9.92222V19.2222H13.0222V13.7444C13.0222 12.8889 13.7111 12.1889 14.5667 12.1889C14.9792 12.1889 15.3749 12.3528 15.6666 12.6445C15.9583 12.9362 16.1222 13.3319 16.1222 13.7444V19.2222H19.2222ZM6.31111 8.17778C6.80618 8.17778 7.28098 7.98111 7.63104 7.63104C7.98111 7.28098 8.17778 6.80618 8.17778 6.31111C8.17778 5.27778 7.34444 4.43333 6.31111 4.43333C5.81309 4.43333 5.33547 4.63117 4.98332 4.98332C4.63117 5.33547 4.43333 5.81309 4.43333 6.31111C4.43333 7.34444 5.27778 8.17778 6.31111 8.17778ZM7.85556 19.2222V9.92222H4.77778V19.2222H7.85556Z"
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
