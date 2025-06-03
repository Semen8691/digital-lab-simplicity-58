
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const filteredPosts = posts.filter(post => post.category === category);
  const isMobile = useIsMobile();
  
  // Duplicate the posts to show more cards with proper content
  const displayPosts = [...filteredPosts];
  if (filteredPosts.length > 0) {
    // Create duplicate posts with unique IDs but all the same data
    filteredPosts.forEach(post => {
      displayPosts.push({
        ...post,
        id: `${post.id}-copy`,
      });
    });
  }
  
  // Scroll to top when changing category
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className={`min-h-screen flex flex-col ${isMobile ? 'pb-20' : ''}`}>
      <Header />
      
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-24'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? 'pb-4' : ''}`}>
          <section className="mb-20">
            <h1 className={`font-bold mb-8 ${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>{category}</h1>
            
            {displayPosts.length > 0 ? (
              <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
                {displayPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className={`text-gray-500 ${isMobile ? 'text-lg' : 'text-xl'}`}>Нет статей в этой категории</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
