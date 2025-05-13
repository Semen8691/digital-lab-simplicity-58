
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
import { useEffect } from "react";

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const filteredPosts = posts.filter(post => post.category === category);
  
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{category}</h1>
            
            {displayPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">Нет статей в этой категории</p>
              </div>
            )}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
