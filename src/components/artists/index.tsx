const artists = [
  {
    name: 'Sabine Lowe',
    role: 'Designer e Fotógrafa',
    img: 'sabine-lowe.png'
  },
  {
    name: 'Eleanor Pena',
    role: 'Escritora e Designer',
    img: 'eleanor-pena.png'
  },
  {
    name: 'Leslie Alexander',
    role: 'Diretora de Arte',
    img: 'leslie-alexander.png'
  }
]

export const Artists = () => {
  return (
    <section className="container mx-auto mt-10 sm:mt-20">
      <h3 className="text-3xl sm:text-[40px] font-medium mb-6 sm:mb-10">Artistas</h3>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
        {artists.map(artist => (
          <div key={artist.name} className="rounded overflow-hidden relative group">
            <img src={`/artists/${artist.img}`} alt={artist.name} className="w-full group-hover:scale-110 group-hover:brightness-125 duration-500 transition-all" />
            <div className="absolute inset-0 p-6 text-dark-40">
              <p className="text-xl sm:text-2xl font-medium">{artist.name}</p>
              <span className="text-sm">{artist.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section> 
  )
}