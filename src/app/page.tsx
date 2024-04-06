"use client"
import Header from "@/components/header";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper/modules";
import 'swiper/css';

export default function Home() {
  const [page, setPage] = useState(0)
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between px-32">
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
          <div className="flex w-full h-screen justify-start items-center px-4">
            <div className="flex justify-center items-center w-2/5">
              <img src="my.jpg" className="rounded-full w-2/3 drop-shadow-2xl" />
            </div>
            <div className="flex flex-col w-3/5 drop-shadow-2xl gap-7">
              <h1 className="text-5xl font-bold">Olá, sou o <span className="text-blue-800">João Vitor</span></h1>
              <p className="text-2xl w-4/5">Desenvolvedor <span className="text-blue-400">Full Stack</span>, com interesse na área de tecnologia, buscando constante aprendizado e conhecimento.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="sobre" className="flex w-full h-screen justify-start items-center px-4">
            <div className="flex flex-col w-2/3 drop-shadow-2xl gap-3">
              <h1 className="text-5xl font-bold text-blue-800">Experiência</h1>
              <div className="flex flex-col text-2xl gap-2">
                <p>Dois anos de experiência com tecnologias como <span className="text-blue-400">Next.js (Frontend)</span> e <span className="text-blue-400">Nest.js (Backend)</span>, além de cohecimento básico em MySQL, Python e C.</p>
                <p>Participante de projeto de iniciação científica com bolsa de auxílio.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="sobre" className="flex w-full h-screen justify-start items-center px-8">
            <div className="flex w-full flex-col drop-shadow-2xl gap-4">
              <h1 className="text-5xl font-bold text-blue-800">Projetos</h1>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-between flex-col bg-zinc-900 p-4 gap-5">
                  <h1 className="text-2xl">Samba Technology</h1>
                  <p className="text-gray-300 text-lg">Soluções com aplicações web (Next.js e Nest.js) para a facilitação de processos escolares.</p>
                  <a className="text-blue-500 text-xl" href="https://github.com/Samba-Technology">Visualizar projeto</a>
                </div>
                <div className="flex flex-col bg-zinc-900 p-4 gap-5">
                  <h1 className="text-2xl">Em breve...</h1>
                  <p className="text-gray-300 text-xl">Que tal pegar um café..?</p>
                </div>
                <div className="flex flex-col bg-zinc-900 p-4 gap-5">
                  <h1 className="text-2xl">Em breve...</h1>
                  <p className="text-gray-300 text-xl">Que tal pegar um café..?</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
