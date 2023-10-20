import HomeSlider from "@/components/HomeSlider/HomeSlider";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import { popularCategoriesData, recentBlogsData, trendingBlogsData } from "../../data";
import RecentBlogs from "@/components/RecentBlogs/RecentBlogs";
import TrendingTopics from "@/components/TrendingTopics/TrendingTopics";
import EditorsPick from "@/components/EditorsPick/EditorsPick";
import Newsletter from "@/components/Newsletter/Newsletter";

/* Landing Page of BlogBridges */
export default function Home() {
  return (
    <>
      <HomeSlider />
      <PopularCategories categories={popularCategoriesData} />
      <TrendingTopics trendingBlogs={trendingBlogsData} />
      <EditorsPick />
      <RecentBlogs recentBlogs={recentBlogsData}/>
      <Newsletter />
    </>
  )
}
