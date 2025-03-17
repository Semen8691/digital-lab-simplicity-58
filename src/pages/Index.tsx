
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);
  
  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, posts.length));
  };
  
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section with featured post */}
          <section className="mb-16 animate-fadeIn">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <img 
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-[500px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
                <span className="bg-brand-blue/90 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm inline-block mb-4 w-max">
                  {featuredPost.category}
                </span>
                
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 max-w-3xl">
                  {featuredPost.title}
                </h1>
                
                <p className="text-white/90 mb-4 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  
                  <div>
                    <p className="text-white font-medium text-sm">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-white/70 text-xs">
                      {featuredPost.date} · {featuredPost.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Latest articles */}
          <section className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">Latest Articles</h2>
              
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-brand-blue hover:text-brand-darkblue hover:bg-brand-blue/5">
                  All
                </Button>
                <Button variant="ghost" className="text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5">
                  Tech
                </Button>
                <Button variant="ghost" className="text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5">
                  Science
                </Button>
                <Button variant="ghost" className="text-foreground/70 hover:text-brand-blue hover:bg-brand-blue/5">
                  Culture
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.slice(0, visiblePosts).map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
            
            {visiblePosts < remainingPosts.length && (
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/5"
                  onClick={loadMorePosts}
                >
                  Load More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </section>
          
          {/* Newsletter */}
          <section className="bg-gradient-to-r from-brand-blue/10 to-brand-indigo/10 rounded-2xl p-8 md:p-12 my-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Stay Updated with Digital Lab
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest technology news and insights delivered directly to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow h-11 px-4 rounded-lg border border-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                  required
                />
                <Button className="bg-brand-green hover:bg-brand-green/90 h-11">
                  Subscribe
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from Digital Lab.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
