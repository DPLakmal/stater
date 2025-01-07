import StyledContainer from "@/components/StyledContainer";
import { createClient } from "@/prismicio";
import SocialLinks from "@/components/StyledFooter/SocialLinks";
import FooterLinkList from "@/slices-layout/FooterLinkList";
import CopyrightLinks from "@/components/StyledFooter/CopyrightLinks";
import StyledPrismicRichTextSingle from "../StyledPrismicRichTextSingle";
import IconDiv from "./components/icon";

export default async function StyledFooter({ className }) {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <footer className={"bg-white pt-10 pb-4 overflow-hidden xl:pb-[36px]"}>
      <StyledContainer className={className}>
        <div className="grid grid-cols-1 gap-y-[36px] md:gap-y-[40px]  xl:grid-flow-col xl:gap-x-[60px]">
          <div className={"text-center md:text-left md:col-span-2"}>
            <p>Logo</p>
            <p className="my-[20px]">{settings.data.footer_description}</p>
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
                  className="text-title-base font-medium mb-[16px]"
                />
                <ul className=" flex flex-col gap-[12px]">
                  {settings?.data?.contact_us?.map(
                    ({ icon_name, label }, idx) => (
                      <li
                        key={idx}
                        className="flex flex-row items-center gap-x-[10px]"
                      >
                        <div className="w-[20px] h-[20px] text-[#00000073]">
                          <IconDiv icon_name={icon_name} />
                        </div>
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
            "border-t-primary pt-[16px] border-t mt-[30px] text-body-base md:mt-[40px] xl:mt-[60px] xl:pt-[26px]"
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
