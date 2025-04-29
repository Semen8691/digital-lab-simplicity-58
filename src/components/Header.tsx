
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  
  // Add scroll event listener to change header styling
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

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

            {/* Login Dialog */}
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
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
                  <Button 
                    className="mt-2 bg-brand-blue hover:bg-brand-darkblue"
                    onClick={() => setLoginOpen(false)}
                  >
                    Войти
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Register Dialog */}
            <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-brand-blue text-white hover:bg-brand-darkblue">
                  Зарегистрироваться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] glass-panel">
                <DialogHeader>
                  <DialogTitle>Регистрация в Digital Lab News</DialogTitle>
                  <DialogDescription>
                    Создайте новый аккаунт для доступа ко всем функциям
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="reg-name">Имя</Label>
                    <Input id="reg-name" type="text" placeholder="Иван Иванов" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" placeholder="hello@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reg-password">Пароль</Label>
                    <Input id="reg-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reg-confirm-password">Подтвердите пароль</Label>
                    <Input id="reg-confirm-password" type="password" />
                  </div>
                  <Button 
                    className="mt-2 bg-brand-blue hover:bg-brand-darkblue"
                    onClick={() => setRegisterOpen(false)}
                  >
                    Зарегистрироваться
                  </Button>
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
