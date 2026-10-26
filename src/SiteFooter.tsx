import { useFeatures } from "./features/flags";
import { SiteFooterView } from "./SiteFooterView";

/** The site's footer, on every page the app draws (see SiteFooterView). Categories shows only while the tags feature is on. */
export default function SiteFooter() {
  const isOn = useFeatures();
  return <SiteFooterView categories={isOn("tags")} />;
}
