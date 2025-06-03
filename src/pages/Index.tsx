
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);
  
  // Filter posts by selected category or show all if no category is selected
  const filteredPosts = selectedCategory 
    ? remainingPosts.filter(post => post.category === selectedCategory)
    : remainingPosts;
  
  // Reset visible posts count when category changes
  useEffect(() => {
    setVisiblePosts(3);
  }, [selectedCategory]);
  
  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <div className={`min-h-screen flex flex-col ${isMobile ? 'pb-20' : ''}`}>
      <Header />
      
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-24'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? 'pb-4' : ''}`}>
          {/* Hero section with featured post */}
          <section className="mb-16 animate-fadeIn">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <img 
                src={featuredPost.image}
                alt={featuredPost.title}
                className={`w-full object-cover ${isMobile ? 'h-[300px]' : 'h-[500px]'}`}
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end ${isMobile ? 'p-4' : 'p-6 md:p-10'}`}>
                <span className="bg-brand-blue/90 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm inline-block mb-4 w-max">
                  {featuredPost.category}
                </span>
                
                <h1 className={`font-bold text-white mb-3 max-w-3xl ${isMobile ? 'text-xl' : 'text-2xl md:text-4xl'}`}>
                  {featuredPost.title}
                </h1>
                
                <p className={`text-white/90 mb-4 max-w-2xl ${isMobile ? 'text-sm' : ''}`}>
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className={`rounded-full ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}`}
                  />
                  
                  <div>
                    <p className={`text-white font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {featuredPost.author.name}
                    </p>
                    <p className={`text-white/70 ${isMobile ? 'text-xs' : 'text-xs'}`}>
                      {featuredPost.date} · {featuredPost.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Latest articles */}
          <section className="mb-20">
            <div className={`flex justify-between items-center mb-8 ${isMobile ? 'flex-col space-y-4' : ''}`}>
              <h2 className={`font-semibold ${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'}`}>Последние статьи</h2>
              
              <div className={`flex space-x-2 ${isMobile ? 'overflow-x-auto w-full' : 'space-x-4'}`}>
                <Button 
                  variant="ghost" 
                  size={isMobile ? "sm" : "default"}
                  className={`${selectedCategory === null 
                    ? "text-brand-blue hover:text-brand-darkblue hover:bg-brand-blue/5" 
                    : "text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5"} ${isMobile ? 'text-sm whitespace-nowrap' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Все
                </Button>
                <Button 
                  variant="ghost" 
                  size={isMobile ? "sm" : "default"}
                  className={`${selectedCategory === "Технологии" 
                    ? "text-brand-blue hover:text-brand-darkblue hover:bg-brand-blue/5" 
                    : "text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5"} ${isMobile ? 'text-sm whitespace-nowrap' : ''}`}
                  onClick={() => setSelectedCategory("Технологии")}
                >
                  Технологии
                </Button>
                <Button 
                  variant="ghost" 
                  size={isMobile ? "sm" : "default"}
                  className={`${selectedCategory === "Наука" 
                    ? "text-brand-blue hover:text-brand-darkblue hover:bg-brand-blue/5" 
                    : "text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5"} ${isMobile ? 'text-sm whitespace-nowrap' : ''}`}
                  onClick={() => setSelectedCategory("Наука")}
                >
                  Наука
                </Button>
                <Button 
                  variant="ghost" 
                  size={isMobile ? "sm" : "default"}
                  className={`${selectedCategory === "Культура" 
                    ? "text-brand-blue hover:text-brand-darkblue hover:bg-brand-blue/5" 
                    : "text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5"} ${isMobile ? 'text-sm whitespace-nowrap' : ''}`}
                  onClick={() => setSelectedCategory("Культура")}
                >
                  Культура
                </Button>
              </div>
            </div>
            
            <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
            
            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  size={isMobile ? "sm" : "default"}
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/5"
                  onClick={loadMorePosts}
                >
                  Загрузить еще
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
