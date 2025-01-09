import StyledContainer from "@/components/StyledContainer";
import { createClient } from "@/prismicio";
import SocialLinks from "@/components/StyledFooter/SocialLinks";
import FooterLinkList from "@/slices-layout/FooterLinkList";
import CopyrightLinks from "@/components/StyledFooter/CopyrightLinks";
import StyledPrismicRichTextSingle from "../StyledPrismicRichTextSingle";
import IconDiv from "./components/icon";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";

export default async function StyledFooter({ className }) {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <footer className={"bg-[#1D1D1D] pt-10 pb-4 overflow-hidden xl:pb-[16px]"}>
      <StyledContainer className="xl:mt-[80px]">
        <div className="grid grid-cols-1 gap-y-[36px] md:gap-y-[40px]  xl:grid-flow-col xl:gap-x-[60px] text-white">
          <div
            className={"text-center md:text-left md:col-span-2 max-w-[413px]"}
          >
            <Image
              src={Logo}
              className="max-w-[119px] max-h-[48px] mx-auto xl:mx-0"
              alt=""
            />
            <p className="my-[20px] font-normal text-body-base">
              {settings.data.footer_description}
            </p>
            <SocialLinks links={settings.data.social_profiles} />
          </div>
          <div className="grid gap-y-[32px] grid-cols-1 md:grid-cols-2  xl:grid-flow-col xl:gap-x-[80px]">
            <div className={"text-start md:text-left"}>
              <FooterLinkList
                slice={navigation.data.footer_links?.find(
                  (slice) => slice.primary.menu_id === "services",
                )}
              />
            </div>
            <div className={"text-start md:text-left"}>
              <FooterLinkList
                slice={navigation.data.footer_links?.find(
                  (slice) => slice.primary.menu_id === "about",
                )}
              />
            </div>
            <div className={"text-start md:text-left"}>
              <div>
                <StyledPrismicRichTextSingle
                  field={settings?.data?.contact_us_title}
                  className="title-font text-title-base font-medium mb-[30px]"
                />
                <ul className=" flex flex-col gap-[14px]">
                  {settings?.data?.contact_us?.map(
                    ({ icon_name, label }, idx) => (
                      <li
                        key={idx}
                        className="flex flex-row items-center gap-x-[10px]"
                      >
                        {/* <div className="w-[20px] h-[20px] text-white">
                          <IconDiv icon_name={icon_name} />
                        </div> */}
                        <StyledPrismicRichTextSingle
                          field={label}
                          className="text-body-base"
                        />
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            "border-t-[#D9D9D9] pt-[16px] text-white border-t mt-[30px] text-body-base md:mt-[40px] xl:mt-[60px] xl:pt-[26px]"
          }
        >
          <div className="text-center md:flex md:items-center md:justify-center space-y-[6px] md:gap-x-[30px]">
            <p>
              &copy; {new Date().getFullYear()} {settings.data.copyright_text}
            </p>
            <CopyrightLinks
              links={navigation.data.copyright_links}
              className="space-y-[6px]"
            />
          </div>
        </div>
      </StyledContainer>
    </footer>
  );
}
