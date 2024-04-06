"use client"
import Header from "@/components/header";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper/modules";
import 'swiper/css';

export default function Home() {
  const [page, setPage] = useState(0)
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Material UI",
    "Nest.js",
    "Git"
  ]

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between px-8 2xl:px-32">
      <Header page={page} onChange={(page) => swiper?.slideTo(page)} />
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        className="w-full h-full"
        speed={500}
        onActiveIndexChange={(s) => setPage(s.activeIndex)}
        onSwiper={setSwiper}
      >
        <SwiperSlide>
          <div className="flex w-full h-screen justify-center items-center px-4 flex-col gap-8 md:flex-row 2xl:justify-start">
            <div className="flex justify-center items-center w-2/3 md:w-2/5">
              <img src="my.jpg" className="rounded-full drop-shadow-2xl md:w-2/3" />
            </div>
            <div className="flex w-full flex-col drop-shadow-2xl gap-7 text-center md:w-3/5 md:text-start">
              <div className="flex flex-col text-4xl md:gap-3 md:flex-row md:text-4xl lg:text-5xl">
                <h1>Olá, eu sou o</h1>
                <span className="text-blue-800 text-5xl md:text-4xl lg:text-5xl">João Vitor</span>
              </div>
              <p className="text-xl md:text-xl lg:text-2xl 2xl:w-4/5">Desenvolvedor <span className="text-blue-400">Full Stack</span>, com interesse na área de tecnologia, buscando constante aprendizado e conhecimento.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-screen justify-start items-center px-4">
            <div className="flex flex-col w-full drop-shadow-2xl gap-3">
              <div className="hidden flex-col gap-3 md:flex">
                <h1 className="text-5xl text-blue-800 text-center font-bold">Sobre</h1>
                <p className="text-center text-xl">Um pouco mais sobre mim, e as tecnologias que tenho experiência e utilizo no meu dia a dia.</p>
              </div>
              <div className="flex flex-col gap-16 justify-between mt-[5%] md:flex-row">
                <div className="flex w-full items-center flex-col gap-4 md:items-start md:w-1/2">
                  <h1 className="text-2xl font-bold md:text-4xl">Sobre mim</h1>
                  <div className="flex flex-col gap-2 text-lg text-center md:text-xl md:text-left">
                    <p>Sou um Desenvolvedor Full Stack e tenho experiencia no desenvolvimento de aplicações web, buscando um design responsivo e um fluxo seguro e organizado, com APIs REST.</p>
                    <p>Atualmente participante de projeto de iniciação científica com bolsa de auxilio.</p>
                  </div>
                </div>
                <div className="flex w-full items-center flex-col gap-4 md:items-start md:w-1/3">
                  <h1 className="text-2xl font-bold md:text-4xl">Tecnologias</h1>
                  <div className="grid gap-3 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {skills.map(skill => <p key={skill} className="bg-zinc-900 rounded-lg text-center shadow-xl p-4">{skill}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-screen justify-start items-center px-8">
            <div className="flex w-full flex-col drop-shadow-2xl gap-4">
              <h1 className="text-4xl font-bold text-center text-blue-800 md:text-left md:text-5xl">Projetos</h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="flex justify-between flex-col bg-zinc-900 p-4 gap-5">
                  <h1 className="text-xl md:text-2xl">Samba Technology</h1>
                  <p className="text-gray-300 text-base md:text-lg">Soluções com aplicações web (Next.js e Nest.js) para a facilitação de processos escolares.</p>
                  <a className="text-blue-500 text-lg md:text-xl" href="https://github.com/Samba-Technology" target="_blank">Visualizar projeto</a>
                </div>
                <div className="flex flex-col bg-zinc-900 p-4 gap-5">
                  <h1 className="text-xl md:text-2xl">Em breve...</h1>
                  <p className="text-gray-300 text-base md:text-lg">Que tal pegar um café..?</p>
                </div>
                <div className="flex flex-col bg-zinc-900 p-4 gap-5">
                  <h1 className="text-xl md:text-2xl">Em breve...</h1>
                  <p className="text-gray-300 text-base md:text-lg">Ou você prefere um chá..?</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
