import { Button } from "../button"

const stats = [
  {
    title: 'Artistas',
    value: '+2 mil'
  },
  {
    title: 'Vendas',
    value: '+7 mil'
  },
  {
    title: 'Avaliações',
    value: '+16 mil'
  }
]

const collectionsImgs = ['1.png', '2.png', '3.png'];

export const Hero = () => {
  return (
    <section className="container mx-auto grid md:grid-cols-[1fr,396px] items-center mt-6 gap-x-6 gap-y-10 lg:gap-y-20">
      <div className="md:max-w-[576px]">
        <h1 className="text-3xl sm:text-5xl font-semibold !leading-[140%]">Descubra novos artistas e suas obras</h1>
        <p className="text-dark-20 sm:text-2xl mt-2 mb-6 sm:mt-4 sm:mb-8">Uma nova geração de jovens artistas surgem</p>
        <Button className="w-full sm:w-auto">EXPLORAR</Button>

        <ul className="mt-12 flex justify-between md:justify-start items-center gap-4 lg:gap-12">
          {stats.map(stat => (
            <li key={stat.title} className="flex flex-col items-center">
              <strong className="font-semibold text-xl sm:text-[32px]">{stat.value}</strong>
              <span className="text-dark-20 text-sm sm:text-base">{stat.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <img className="hidden md:block rounded max-w-[396px]" src="/hero-img.png" alt="Obra de arte retratando um rosto feminino" />

      <div className="w-full grid sm:grid-cols-3 gap-4 lg:gap-[54px] lg:max-w-[708px] col-span-full lg:col-span-1">
        {collectionsImgs.map((src, index) => (
          <img className="w-full h-[200px] md:h-auto object-cover rounded" src={`/collections/${src}`} key={`collection-img-${index}`} alt={`Coleção ${index}`} />
        ))}
      </div>

      <div className="flex flex-col justify-center w-full h-full col-span-full lg:col-span-1">
        <h2 className="text-center md:text-left text-2xl md:text-[40px] font-medium text-dark-10 md:leading-[50px] mb-6">
          Confira as ultimas coleções
        </h2>
        <Button className="w-full lg:w-auto">VER MAIS</Button>
      </div>
    </section>
  )
}