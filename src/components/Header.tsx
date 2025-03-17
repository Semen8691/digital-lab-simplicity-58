
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Eye, Sun, Moon, Video } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isBigText, setIsBigText] = useState(false);
  
  // Add scroll event listener to change header styling
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Переключатель высокого контраста
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  // Переключатель увеличенного текста
  const toggleBigText = () => {
    setIsBigText(!isBigText);
    if (!isBigText) {
      document.documentElement.classList.add('big-text');
    } else {
      document.documentElement.classList.remove('big-text');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-medium text-brand-darkblue group-hover:text-brand-blue transition-colors">
                  Digital Lab News
                </span>
              </div>
            </Link>
            
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
              <Link to="/podcast" className="text-brand-darkblue hover:text-brand-blue transition-colors flex items-center gap-1">
                <Video size={16} />
                Видео подкаст
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Поиск..."
                className="pl-9 h-9 w-[180px] focus:w-[220px] transition-all duration-300 bg-muted/50 border-none"
              />
              <Search className="absolute left-2.5 top-2 h-4.5 w-4.5 text-muted-foreground" />
            </div>

            {/* Настройки для слабовидящих */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9 border-brand-blue text-brand-blue">
                  <Eye className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Настройки для слабовидящих</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm">Высокий контраст</span>
                  <Switch 
                    checked={isHighContrast} 
                    onCheckedChange={toggleHighContrast} 
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm">Увеличенный текст</span>
                  <Switch 
                    checked={isBigText} 
                    onCheckedChange={toggleBigText} 
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] glass-panel">
                <DialogHeader>
                  <DialogTitle>Вход в Digital Lab News</DialogTitle>
                  <DialogDescription>
                    Введите ваши учетные данные для доступа к аккаунту
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="hello@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="mt-2 bg-brand-blue hover:bg-brand-darkblue">Войти</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

