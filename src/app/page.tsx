"use client"
import { Inter, Kanit } from 'next/font/google'
import { AiOutlineDown } from 'react-icons/ai'
import ReactFullpage from '@fullpage/react-fullpage';
import Image from 'next/image'
import astronauta from "./astronauta.png"
import "./style.css"
import React from 'react';

const inter = Inter({ subsets: ['latin'] })
const kanit = Kanit({ weight: "600", subsets: ['latin'] })

export default function Home() {
  const [ currentText, setCurrentText ] = React.useState(0);

  const textos = [
    "OI O MEU NOME É ASTRONAUTA FUINHA!",
    "VOU TE ENSINAR O QUE É UMA IA!",
    "VAMOS LÁ?",
    "IA É A ABREVIATURA DE INTELIGÊNCIA ARTIFICIAL",
    "A INTELIGÊNCIA ARTIFICIAL CONSEGUE APRENDER COMO NÓS",
    "A IA CONSEGUE AJUDAR A GENTE A RESOLVER PROBLEMAS",
    "AJUDE A IA A APRENDER MAIS!"
  ]

  return (
    <main className="">
      {/* @ts-expect-error */}
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className={"section bg-pink-50 w-screen h-screen first-page flex justify-center items-center flex-col " + kanit.className}>
                <div className='flex justify-center items-center flex-col'>
                  <p className='text-6xl text-center w-10/12 text-white drop-shadow-xl'>EXPLORE O MUNDO DAS  <span className='text-pink-500 drop-shadow-2xl'>IAs</span>!</p>
                  <button onClick={() => fullpageApi.moveSectionDown()} className='bg-[#d83eff] flex items-center p-2 rounded-md my-12 outline-white outline-8 outline active:bg-[#ac31cc]'>
                    <p className='text-3xl text-white px-6'>INICIAR</p>
                    <AiOutlineDown className='text-white w-16 h-14 hover:cursor-pointer mx-6'/>
                  </button>
                </div>
              </div>
              <div className="section w-screen flex justify-center items-center second-page overflow-hidden" onClick={() => {
                if (currentText < textos.length - 1) {
                  setCurrentText(currentText + 1)
                } else {
                  fullpageApi.moveSectionDown()
                }
              }}>
                <div className='flex flex-col'>
                  <div className='bg-white outline outline-4 outline-black w-72 h-72 rounded-full self-end mt-6 flex justify-center items-center text-3xl font-bold drop-shadow-2xl text-center'>
                    {currentText < textos.length ? textos[currentText] : null}
                  </div>
                  <Image src={astronauta} alt="astronauta"/>
                </div>
              </div>
              <div className="section w-screen h-screen flex justify-center items-center third-page">
                <p>Terceira Seção</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  )
}
