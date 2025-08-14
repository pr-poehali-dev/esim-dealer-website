import { Button } from '@/components/ui/button'

const VisualGallery = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-100 to-blue-100 relative overflow-hidden">
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
  )
}

export default VisualGallery