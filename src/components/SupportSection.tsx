import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const SupportSection = () => {
  return (
    <section id="support" className="py-16 bg-white relative overflow-hidden">
      {/* Support team image background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img 
          src="/img/5013dbea-d11d-494d-a99c-14bfae07ff2e.jpg" 
          alt="Support Team Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated background particles */}
      <div className="absolute top-32 left-20 w-4 h-4 bg-electric-blue/30 rounded-full particle-float" style={{animationDelay: '0s'}} />
      <div className="absolute bottom-20 right-32 w-3 h-3 bg-vibrant-purple/30 rounded-full particle-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-20 right-20 w-2 h-2 bg-tech-green/30 rounded-full particle-float" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden pulse-glow">
            <img 
              src="/img/5013dbea-d11d-494d-a99c-14bfae07ff2e.jpg" 
              alt="Our Support Team"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent">
            Техподдержка
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наша команда экспертов готова помочь 24/7 с настройкой и использованием ваших устройств
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 hover:shadow-lg transition-shadow pulse-glow">
            <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Онлайн-чат</h3>
            <p className="text-gray-600 mb-4">Получите мгновенную помощь через чат на сайте</p>
            <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
              Начать чат
            </Button>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0 hover:shadow-lg transition-shadow pulse-glow">
            <div className="w-16 h-16 bg-gradient-to-r from-tech-green to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Горячая линия</h3>
            <p className="text-gray-600 mb-4">8 800 555-35-35<br/>Круглосуточно, бесплатно</p>
            <Button variant="outline" className="border-tech-green text-tech-green hover:bg-tech-green/10">
              Позвонить
            </Button>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0 hover:shadow-lg transition-shadow pulse-glow">
            <div className="w-16 h-16 bg-gradient-to-r from-vibrant-purple to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email поддержка</h3>
            <p className="text-gray-600 mb-4">support@moresim.ru<br/>Ответ в течение 1 часа</p>
            <Button variant="outline" className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple/10">
              Написать
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default SupportSection