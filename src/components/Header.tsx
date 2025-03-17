
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-brand-blue hover:bg-brand-darkblue text-white">
                  Регистрация
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] glass-panel">
                <DialogHeader>
                  <DialogTitle>Создать аккаунт</DialogTitle>
                  <DialogDescription>
                    Присоединяйтесь к Digital Lab News, чтобы комментировать и сохранять статьи
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input id="register-email" type="email" placeholder="hello@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <Input id="register-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="mt-2 bg-brand-green hover:bg-brand-green/90">Создать аккаунт</Button>
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
