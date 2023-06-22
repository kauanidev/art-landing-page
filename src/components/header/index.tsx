import { Button } from "../button"

export const Header = () => {
  return (
    <header className="container mx-auto flex justify-between lg:grid lg:grid-cols-[1fr,644px,1fr] items-center gap-4 py-10">
      <img src="/logo.svg" alt="Art." />

      <div className="hidden lg:flex bg-dark-30 items-center rounded">
        <input placeholder="Buscar" className="text-sm h-10 flex-1 pl-6 bg-transparent focus:outline-none placeholder:text-dark-20" />
        <img src="/icons/search.svg" className="px-6" />
      </div>

      <Button className="ml-auto">ENTRAR</Button>
    </header>
  )
}