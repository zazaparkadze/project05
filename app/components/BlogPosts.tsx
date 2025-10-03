import getSortedPostsData from "@/lib/getSortedPostsData";
import Posts from "./Posts";

export default function BlogPosts() {
  const sortedPostsData = getSortedPostsData();

  const content = sortedPostsData.map((post) => {
    return <Posts post={post} key={post.id} />;
  });
  return content;
}
