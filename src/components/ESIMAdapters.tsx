import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const ESIMAdapters = () => {
  const esimAdapters = [
    {
      id: 1,
      name: 'MoreSim Pro Adapter',
      price: '3,990',
      description: 'Универсальный eSIM адаптер для всех устройств',
      features: ['Nano-SIM слот', 'Bluetooth 5.0', 'Водозащита IP67', 'До 20 профилей'],
      compatibility: ['iPhone', 'Samsung', 'Xiaomi', 'Google Pixel']
    },
    {
      id: 2,
      name: 'MoreSim Compact',
      price: '2,490',
      description: 'Компактное решение для базовых потребностей',
      features: ['Nano-SIM слот', 'До 5 профилей', 'Легкий вес'],
      compatibility: ['iPhone', 'Samsung', 'Huawei']
    }
  ]

  return (
    <section id="adapters" className="py-16 bg-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img 
          src="/img/0bceef55-918d-4b7d-bc47-2b384ad9b3b4.jpg" 
          alt="Devices Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-electric-blue rounded-full particle-float" style={{animationDelay: '0s'}} />
      <div className="absolute top-20 right-32 w-3 h-3 bg-vibrant-purple rounded-full particle-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-tech-green rounded-full particle-float" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent floating-element">
            eSIM Адаптеры
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Превратите любое устройство в eSIM-совместимое с нашими современными адаптерами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {esimAdapters.map((adapter, index) => (
            <Card key={adapter.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {adapter.name}
                  </CardTitle>
                  <Badge className="bg-gradient-to-r from-tech-green to-emerald-500 text-white">
                    ТОП
                  </Badge>
                </div>
                <CardDescription className="text-gray-600 text-lg">
                  {adapter.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative h-48 bg-gradient-to-br from-electric-blue/10 to-vibrant-purple/10 rounded-lg overflow-hidden pulse-glow">
                  <img 
                    src="/img/5c693c8f-99ec-4979-bad3-181e97caed74.jpg" 
                    alt={adapter.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-2xl font-bold text-electric-blue">
                    {adapter.price} ₽
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Icon name="Zap" className="w-4 h-4 mr-2 text-electric-blue" />
                      Особенности
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {adapter.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="justify-start">
                          <Icon name="Check" className="w-3 h-3 mr-1 text-tech-green" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Icon name="Smartphone" className="w-4 h-4 mr-2 text-electric-blue" />
                      Совместимость
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {adapter.compatibility.map((device, index) => (
                        <Badge key={index} className="bg-electric-blue/10 text-electric-blue">
                          {device}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple hover:from-vibrant-purple hover:to-electric-blue pulse-glow">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    Купить сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ESIMAdapters