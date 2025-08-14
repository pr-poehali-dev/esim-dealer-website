import Icon from '@/components/ui/icon'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Subtle tech pattern */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-lg flex items-center justify-center">
                <Icon name="Wifi" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">MoreSim</h3>
            </div>
            <p className="text-gray-400">
              Современные решения для мобильной связи без границ
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Продукты</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-electric-blue transition-colors">eSIM Адаптеры</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Роуминговые eSIM</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Тарифы и цены</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-electric-blue transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                8 800 555-35-35
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                support@moresim.ru
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MoreSim. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer