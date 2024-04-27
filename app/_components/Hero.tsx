import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Gerencie Suas Despesas
            <strong className="font-extrabold text-primary sm:block">
              Controle seu Dinheiro
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Comece a criar seu orçamento e economize uma tonelada de dinheiro
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Atenção, pode haver uma falha no design aqui */}
            <Link
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring sm:w-auto transition"
              href="/sign-up"
            >
              Começar agora
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/tmp-dashboard.png"
        alt="Exemplo de dashboard"
        width={1000}
        height={700}
        className="-mt-8 rounded-xl border-2 mx-auto"
      />
    </section>
  )
}
