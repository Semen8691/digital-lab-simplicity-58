
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-medium">Digital Lab</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Исследуя будущее через минималистичную, вдумчивую журналистику, сфокусированную на технологиях и инновациях.
            </p>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">Разделы</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tech" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  Технологии
                </Link>
              </li>
              <li>
                <Link to="/science" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  Наука
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  Культура
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-8 flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digital Lab. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
