import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const Header = () => {
  return (
    <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-lg flex items-center justify-center">
              <Icon name="Wifi" className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent">
              MoreSim
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#adapters" className="text-gray-600 hover:text-electric-blue transition-colors">
              eSIM Адаптеры
            </a>
            <a href="#roaming" className="text-gray-600 hover:text-electric-blue transition-colors">
              Роуминговые eSIM
            </a>
            <a href="#support" className="text-gray-600 hover:text-electric-blue transition-colors">
              Техподдержка
            </a>
            <Button className="bg-gradient-to-r from-electric-blue to-vibrant-purple hover:from-vibrant-purple hover:to-electric-blue">
              Каталог
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header