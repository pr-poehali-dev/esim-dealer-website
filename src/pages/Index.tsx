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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-electric-blue/30 bg-black/80 backdrop-blur-sm sticky top-0 z-50 neon-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-lg flex items-center justify-center">
                <Icon name="Wifi" className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent terminal-text">
                MoreSim
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#adapters" className="text-gray-300 hover:text-electric-blue transition-colors terminal-text">
                eSIM Адаптеры
              </a>
              <a href="#roaming" className="text-gray-300 hover:text-electric-blue transition-colors terminal-text">
                Роуминговые eSIM
              </a>
              <a href="#support" className="text-gray-300 hover:text-electric-blue transition-colors terminal-text">
                Техподдержка
              </a>
              <Button className="cyber-button neon-border">
                Каталог
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden circuit-board cyber-scanline">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-vibrant-purple/20 to-tech-green/20 gradient-animate" />
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="/img/15fd7bb7-0b49-4b96-8910-80862a10d1c8.jpg" 
            alt="Tech Background"
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-full opacity-20" />
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-r from-vibrant-purple to-tech-green rounded-full opacity-30" />
        <div className="absolute top-40 left-1/4 w-8 h-8 bg-gradient-to-r from-tech-green to-electric-blue rounded-full opacity-25" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 hologram-effect text-electric-blue neon-border terminal-text">
              🚀 Новое поколение мобильной связи
            </Badge>
            
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue via-vibrant-purple to-tech-green bg-clip-text text-transparent leading-tight gradient-animate glitch-effect" data-text="MoreSim">
                MoreSim
              </h1>
              {/* Glowing effect behind title */}
              <div className="absolute inset-0 text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue via-vibrant-purple to-tech-green opacity-20 blur-xl">
                MoreSim
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed terminal-text">
              Дилер eSIM адаптеров и роуминговых eSIM по всем популярным направлениям мира. 
              Современные технологии для безграничного общения.
            </p>

            {/* Device Compatibility Checker */}
            <div className="hologram-effect rounded-2xl p-8 shadow-xl neon-border max-w-md mx-auto mb-12 data-stream">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smartphone" className="w-6 h-6 text-electric-blue" />
                <h3 className="text-lg font-semibold terminal-text">Проверка совместимости</h3>
              </div>
              <div className="space-y-4">
                <Input
                  placeholder="Введите модель устройства (iPhone 14, Samsung S23...)"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="bg-black/50 border-electric-blue/30 focus:border-electric-blue text-gray-300 hologram-effect"
                />
                <Button 
                  onClick={checkCompatibility}
                  disabled={isChecking || !deviceModel}
                  className="w-full cyber-button neon-border"
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
              <Button size="lg" className="cyber-button neon-border px-8">
                <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                Купить адаптер
              </Button>
              <Button size="lg" className="cyber-button neon-border px-8">
                <Icon name="Globe" className="w-5 h-5 mr-2" />
                Роуминговые eSIM
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden circuit-board">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent">
              Технологии будущего
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              MoreSim объединяет передовые технологии для создания идеального мобильного опыта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative group">
              <img 
                src="/img/1f5ae6de-26d6-4f5d-b075-18dc86723e2c.jpg" 
                alt="Business Professional"
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">Для бизнеса</h3>
                <p className="text-sm opacity-90">Профессиональные решения для корпоративных клиентов</p>
              </div>
            </div>

            <div className="relative group">
              <img 
                src="/img/3d5a4c54-7f72-4404-9b88-b91b823730e2.jpg" 
                alt="Travel Experience"
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">Путешествия</h3>
                <p className="text-sm opacity-90">Связь без границ в любой точке мира</p>
              </div>
            </div>

            <div className="relative group">
              <img 
                src="/img/2c34c0d5-609b-4a90-a47c-a9ff4211f034.jpg" 
                alt="Future Technology"
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">Будущее связи</h3>
                <p className="text-sm opacity-90">Инновации в области мобильных технологий</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative pulse-glow">
              <img 
                src="/img/ae8cbef3-794a-4a23-812f-4d36fe190425.jpg" 
                alt="Compatible Devices"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/80 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Совместимость</h3>
                <p className="text-lg mb-4">Работает с любыми устройствами</p>
                <Button className="bg-white text-electric-blue hover:bg-gray-100">
                  Проверить устройство
                </Button>
              </div>
            </div>

            <div className="relative pulse-glow">
              <img 
                src="/img/a6e6ec0f-9377-4c9c-b6c3-1a8758788e0f.jpg" 
                alt="eSIM Technology"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vibrant-purple/80 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Технология eSIM</h3>
                <p className="text-lg mb-4">Микрочипы нового поколения</p>
                <Button className="bg-white text-vibrant-purple hover:bg-gray-100">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eSIM Adapters Section */}
      <section id="adapters" className="py-16 bg-black relative overflow-hidden cyber-scanline">
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
              <Card key={adapter.id} className="group hover:shadow-2xl transition-all duration-300 border-0 hologram-effect neon-border">
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
                  <div className="relative h-48 bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 rounded-lg overflow-hidden neon-border cyber-scanline">
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

                    <Button className="w-full cyber-button neon-border">
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
      <section id="roaming" className="py-16 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden circuit-board">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/9a92dd00-7eb6-4463-a869-8fcdca10709c.jpg" 
            alt="World Connectivity"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-vibrant-purple bg-clip-text text-transparent floating-element">
              Роуминговые eSIM
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Путешествуйте без границ с нашими выгодными тарифами по всему миру
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roamingPlans.map((region, index) => (
              <Card key={index} className="overflow-hidden border-0 hologram-effect shadow-xl hover:shadow-2xl transition-all duration-500 neon-border">
                <CardHeader className="bg-gradient-to-r from-electric-blue to-vibrant-purple text-white text-center py-6 gradient-animate cyber-scanline">
                  <div className="text-4xl mb-2">{region.flag}</div>
                  <CardTitle className="text-2xl font-bold">{region.country}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {region.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-semibold text-electric-blue">{plan.data}</span>
                          <span className="text-2xl font-bold text-gray-800">{plan.price} ₽</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center">
                            <Icon name="Calendar" className="w-4 h-4 mr-1" />
                            {plan.days} дней
                          </span>
                          <Button size="sm" className="cyber-button neon-border">
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
            <Button size="lg" className="cyber-button neon-border px-8">
              <Icon name="Globe" className="w-5 h-5 mr-2" />
              Смотреть все направления
            </Button>
          </div>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section id="support" className="py-16 bg-black relative overflow-hidden circuit-board">
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
            <Card className="text-center p-6 hologram-effect border-0 hover:shadow-lg transition-shadow neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Онлайн-чат</h3>
              <p className="text-gray-600 mb-4">Получите мгновенную помощь через чат на сайте</p>
              <Button className="cyber-button neon-border">
                Начать чат
              </Button>
            </Card>

            <Card className="text-center p-6 hologram-effect border-0 hover:shadow-lg transition-shadow neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-tech-green to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Горячая линия</h3>
              <p className="text-gray-600 mb-4">8 800 555-35-35<br/>Круглосуточно, бесплатно</p>
              <Button className="cyber-button neon-border">
                Позвонить
              </Button>
            </Card>

            <Card className="text-center p-6 hologram-effect border-0 hover:shadow-lg transition-shadow neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-vibrant-purple to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email поддержка</h3>
              <p className="text-gray-600 mb-4">support@moresim.ru<br/>Ответ в течение 1 часа</p>
              <Button className="cyber-button neon-border">
                Написать
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-12 relative overflow-hidden circuit-board">
        {/* Subtle tech pattern */}
        <div className="absolute inset-0 cyber-scanline opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-vibrant-purple rounded-lg flex items-center justify-center neon-border">
                  <Icon name="Wifi" className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold terminal-text">MoreSim</h3>
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