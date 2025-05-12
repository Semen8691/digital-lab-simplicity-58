
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { posts } from "@/data/posts";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  // Add scroll event listener to change header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    // Search for partial title match instead of exact match
    const foundPost = posts.find(
      post => post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (foundPost) {
      navigate(`/post/${foundPost.id}`);
      setSearchQuery("");
    } else {
      alert("Статья не найдена");
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-medium text-brand-darkblue">
                  Digital Lab News
                </span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-brand-darkblue hover:text-brand-blue transition-colors">
                Главная
              </Link>
              <Link to="/tech" className="text-brand-darkblue hover:text-brand-blue transition-colors">
                Технологии
              </Link>
              <Link to="/science" className="text-brand-darkblue hover:text-brand-blue transition-colors">
                Наука
              </Link>
              <Link to="/culture" className="text-brand-darkblue hover:text-brand-blue transition-colors">
                Культура
              </Link>
            </nav>
          </div>
          
          <form onSubmit={handleSearch} className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Поиск..."
                className="pl-9 h-9 w-[180px] focus:w-[220px] transition-all duration-300 bg-muted/50 border-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute left-2.5 top-2 h-4.5 w-4.5 text-muted-foreground bg-transparent border-none p-0">
                <Search className="h-4.5 w-4.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
