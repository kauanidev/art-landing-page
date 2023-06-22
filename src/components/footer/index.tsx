const links = ['INICIO', 'BUSCAR', 'EXPLORAR', 'SOBRE NÓS']

export const Footer = () => {
  return (
    <footer className="container mx-auto flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0 py-10 sm:py-20">
      <img src="/logo.svg" alt="Art." />

      <nav className="flex items-center justify-between sm:gap-14 w-full sm:w-auto">
        {links.map(link => (
          <a key={link} href="#" className="text-xs sm:text-lg font-medium text-dark-10 hover:text-brand transition-colors">
            {link}
          </a>
        ))}
      </nav>
    </footer>
  )
}