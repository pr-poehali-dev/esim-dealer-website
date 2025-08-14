import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import MatrixBackground from '@/components/MatrixBackground'

const HeroSection = () => {
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

  return (
    <section className="relative py-20 overflow-hidden tech-grid">
      <MatrixBackground />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-vibrant-purple/10 to-tech-green/10 gradient-animate" />
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
          <Badge className="mb-6 bg-gradient-to-r from-electric-blue/20 to-vibrant-purple/20 text-electric-blue border-electric-blue/30">
            🚀 Новое поколение мобильной связи
          </Badge>
          
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue via-vibrant-purple to-tech-green bg-clip-text text-transparent leading-tight gradient-animate">
              MoreSim
            </h1>
            {/* Glowing effect behind title */}
            <div className="absolute inset-0 text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue via-vibrant-purple to-tech-green opacity-20 blur-xl">
              MoreSim
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Дилер eSIM адаптеров и роуминговых eSIM по всем популярным направлениям мира. 
            Современные технологии для безграничного общения.
          </p>

          {/* Device Compatibility Checker */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-md mx-auto mb-12 pulse-glow">
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
  )
}

export default HeroSection