import { createClient } from "@/prismicio";
import NavContainer from "@/components/StyledHeader/NavContainer";

export default async function StyledHeader() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return <NavContainer navigation={navigation} settings={settings} />;
}
