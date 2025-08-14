import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [deviceModel, setDeviceModel] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [compatibilityResult, setCompatibilityResult] = useState<string | null>(null)

  const checkCompatibility = () => {
    setIsChecking(true)
    setTimeout(() => {
      setCompatibilityResult(deviceModel ? 'compatible' : 'unknown')
      setIsChecking(false)
    }, 1500)
  }

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

  const roamingPlans = [
    {
      country: 'США',
      flag: '🇺🇸',
      plans: [
        { data: '1 ГБ', days: 7, price: 590 },
        { data: '3 ГБ', days: 15, price: 1290 },
        { data: '10 ГБ', days: 30, price: 2990 }
      ]
    },
    {
      country: 'Европа',
      flag: '🇪🇺',
      plans: [
        { data: '1 ГБ', days: 7, price: 490 },
        { data: '5 ГБ', days: 15, price: 1590 },
        { data: '15 ГБ', days: 30, price: 3490 }
      ]
    },
    {
      country: 'Азия',
      flag: '🌏',
      plans: [
        { data: '2 ГБ', days: 7, price: 690 },
        { data: '7 ГБ', days: 15, price: 1990 },
        { data: '20 ГБ', days: 30, price: 4490 }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-vibrant-purple/10 to-tech-green/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-electric-blue/20 to-vibrant-purple/20 text-electric-blue border-electric-blue/30">
              🚀 Новое поколение мобильной связи
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-electric-blue via-vibrant-purple to-tech-green bg-clip-text text-transparent leading-tight">
              MoreSim
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Дилер eSIM адаптеров и роуминговых eSIM по всем популярным направлениям мира. 
              Современные технологии для безграничного общения.
            </p>

            {/* Device Compatibility Checker */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-md mx-auto mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smartphone" className="w-6 h-6 text-electric-blue" />
                <h3 className="text-lg font-semibold">Проверка совместимости</h3>
              </div>
              <div className="space-y-4">
                <Input
                  placeholder="Введите модель устройства (iPhone 14, Samsung S23...)"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="border-electric-blue/30 focus:border-electric-blue"
                />
                <Button 
                  onClick={checkCompatibility}
                  disabled={isChecking || !deviceModel}
                  className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple hover:from-vibrant-purple hover:to-electric-blue"
                >
                  {isChecking ? (
                    <>
                      <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                      Проверяем...
                    </>
                  ) : (
                    <>
                      <Icon name="Search" className="w-4 h-4 mr-2" />
                      Проверить
                    </>
                  )}
                </Button>
                {compatibilityResult && (
                  <div className={`p-4 rounded-lg ${compatibilityResult === 'compatible' 
                    ? 'bg-tech-green/10 border border-tech-green/30' 
                    : 'bg-yellow-50 border border-yellow-200'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={compatibilityResult === 'compatible' ? 'CheckCircle' : 'AlertCircle'} 
                        className={`w-5 h-5 ${compatibilityResult === 'compatible' ? 'text-tech-green' : 'text-yellow-600'}`}
                      />
                      <p className={compatibilityResult === 'compatible' ? 'text-tech-green' : 'text-yellow-600'}>
                        {compatibilityResult === 'compatible' 
                          ? 'Отлично! Ваше устройство поддерживает eSIM' 
                          : 'Нужна дополнительная проверка'
                        }
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-electric-blue to-vibrant-purple hover:from-vibrant-purple hover:to-electric-blue px-8">
                <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                Купить адаптер
              </Button>
              <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 px-8">
                <Icon name="Globe" className="w-5 h-5 mr-2" />
                Роуминговые eSIM
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* eSIM Adapters Section */}
      <section id="adapters" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent">
              eSIM Адаптеры
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Превратите любое устройство в eSIM-совместимое с нашими современными адаптерами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {esimAdapters.map((adapter) => (
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
                  <div className="relative h-48 bg-gradient-to-br from-electric-blue/10 to-vibrant-purple/10 rounded-lg overflow-hidden">
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

                    <Button className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple hover:from-vibrant-purple hover:to-electric-blue">
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

      {/* Roaming Plans Section */}
      <section id="roaming" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent">
              Роуминговые eSIM
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Путешествуйте без границ с нашими выгодными тарифами по всему миру
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roamingPlans.map((region, index) => (
              <Card key={index} className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader className="bg-gradient-to-r from-electric-blue to-vibrant-purple text-white text-center py-6">
                  <div className="text-4xl mb-2">{region.flag}</div>
                  <CardTitle className="text-2xl font-bold">{region.country}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {region.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-semibold text-electric-blue">{plan.data}</span>
                          <span className="text-2xl font-bold text-gray-800">{plan.price} ₽</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center">
                            <Icon name="Calendar" className="w-4 h-4 mr-1" />
                            {plan.days} дней
                          </span>
                          <Button size="sm" className="bg-gradient-to-r from-tech-green to-emerald-500 hover:from-emerald-500 hover:to-tech-green">
                            Купить
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-electric-blue to-vibrant-purple hover:from-vibrant-purple hover:to-electric-blue px-8">
              <Icon name="Globe" className="w-5 h-5 mr-2" />
              Смотреть все направления
            </Button>
          </div>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section id="support" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent">
              Техподдержка
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы всегда готовы помочь вам с настройкой и использованием наших решений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Онлайн-чат</h3>
              <p className="text-gray-600 mb-4">Получите мгновенную помощь через чат на сайте</p>
              <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                Начать чат
              </Button>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-tech-green to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Горячая линия</h3>
              <p className="text-gray-600 mb-4">8 800 555-35-35<br/>Круглосуточно, бесплатно</p>
              <Button variant="outline" className="border-tech-green text-tech-green hover:bg-tech-green/10">
                Позвонить
              </Button>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0 hover:shadow-lg transition-shadow">
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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
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
    </div>
  )
}

export default Index