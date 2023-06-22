import { Artists } from "@/components/artists";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-40">
      <Head>
        <title>Descubra novos artistas e suas obras</title>
      </Head>

      <Header />
      <Hero />
      <Artists />
      <Footer />
    </main>
  )
}
