import StyledHeader from "@/components/StyledHeader";
import StyledFooter from "@/components/StyledFooter";
import React from "react";
import AlgoliaSearchOverlayWrapper from "@/components/algolia-search-modal/overlay-wrapper";

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <>
      <StyledHeader />
      {children}
      <AlgoliaSearchOverlayWrapper />
      <StyledFooter />
    </>
  );
}
