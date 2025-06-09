
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const NotFound = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="text-center px-4 animate-fadeIn">
          <h1 className="text-9xl font-bold text-brand-blue">404</h1>
          <h2 className="text-3xl font-semibold mt-4 mb-6">Страница не найдена</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Страница, которую вы ищете, возможно, была удалена, переименована или временно недоступна.
          </p>
          <Button asChild className="bg-brand-blue hover:bg-brand-darkblue">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      
      {!isMobile && <Footer />}
    </div>
  );
};

export default NotFound;
