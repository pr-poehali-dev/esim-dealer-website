import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const RoamingPlans = () => {
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
    <section id="roaming" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
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
            <Card key={index} className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-electric-blue to-vibrant-purple text-white text-center py-6 gradient-animate">
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
                        <Button size="sm" className="bg-gradient-to-r from-tech-green to-emerald-500 hover:from-emerald-500 hover:to-tech-green pulse-glow">
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
          <Button size="lg" className="bg-gradient-to-r from-electric-blue to-vibrant-purple hover:from-vibrant-purple hover:to-electric-blue px-8 pulse-glow">
            <Icon name="Globe" className="w-5 h-5 mr-2" />
            Смотреть все направления
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RoamingPlans