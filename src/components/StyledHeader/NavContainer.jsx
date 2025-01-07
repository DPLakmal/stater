"use client";

import useDetectScroll from "@smakss/react-scroll-direction";

import React, { useEffect, useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import StyledContainer from "@/components/StyledContainer";
import clsx from "clsx";
import MenuItem from "@/slices-layout/MenuItem";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import AlgoliaSearchModal from "@/components/algolia-search-modal";

const NavContainer = ({ settings, navigation }) => {
  const { scrollDir, scrollPosition } = useDetectScroll();

  const [stickyMenu, setStickyMenu] = useState(false);
  const [scroll, setScroll] = useState({ dir: "down" });

  useEffect(() => {
    setScroll((prev) => {
      return {
        directionInitPosition:
          prev.dir === scrollDir
            ? prev.directionInitPosition
            : scrollPosition?.top,
        dir: scrollDir,
      };
    });
    if (scrollPosition?.top <= 250) {
      setStickyMenu(false);
    } else if (scrollDir === "down") {
      setStickyMenu(false);
    } else if (
      scrollDir === "up" &&
      scroll.directionInitPosition - 50 > scrollPosition?.top
    ) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  }, [scrollPosition, scrollDir]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => setMobileMenuOpen(false);

  /**
   * DO NOT ADD ANY STYLES THAT CHANGE THE HEIGHT OF THIS HEADER TAG
   * CHANGING THE HEIGHT DURING STICKY HAS A BUG THAT MAKE THE PAGE SCROLL BACK AND FORTH !!!
   */
  return (
    <header
      className={clsx({
        "z-50 bg-[#fff] transition-all sticky": true,
        "top-[-150px]": !stickyMenu,
        "top-0 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.2)]": stickyMenu,
      })}
    >
      <StyledContainer>
        <div
          className={clsx({
            "transition-all flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-[10px] bg-white": true,
            "h-[58px]": stickyMenu,
            "h-[58px] lg:h-[78px] xl:h-[88px]": !stickyMenu,
          })}
        >
          <PrismicNextLink
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            <PrismicText field={settings.data.siteTitle} />
          </PrismicNextLink>
          <button
            className={`xl:hidden flex items-center`}
            aria-label="Open mobile menu"
          >
            <CgMenuLeft
              size={24}
              className="ms-4 text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          </button>
          <div
            className={clsx({
              "fixed h-screen w-screen ms-auto z-100 top-0 right-0 bg-[rgba(0,0,0,0.5)] xl:static transition-all ease-linear xl:opacity-100 xl:bg-transparent xl:block xl:w-auto xl:h-auto": true,
              "opacity-100": mobileMenuOpen,
              "opacity-0 pointer-events-none xl:pointer-events-auto delay-200":
                !mobileMenuOpen,
            })}
            onClick={closeMobileMenu}
          >
            <nav
              className={clsx({
                "bg-white min-h-screen w-[250px] ms-auto transition-transform ease-linear xl:!translate-x-0 xl:w-auto xl:min-h-0 pointer-events-auto": true,
                "translate-x-0 delay-200": mobileMenuOpen,
                "translate-x-full": !mobileMenuOpen,
              })}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-right xl:hidden xl:none">
                <button
                  onClick={closeMobileMenu}
                  className={clsx({
                    "p-4": true,
                  })}
                >
                  <CgClose size={24} />
                </button>
              </div>
              <ul className="flex flex-wrap gap-6 md:gap-10 p-4 xl:p-0">
                {navigation.data.main_menu?.map((slice) => {
                  return <MenuItem key={slice.id} slice={slice} />;
                })}
                <AlgoliaSearchModal />
              </ul>
            </nav>
          </div>
        </div>
      </StyledContainer>
    </header>
  );
};

export default NavContainer;
