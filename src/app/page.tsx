"use client"
import { Inter, Kanit } from 'next/font/google'
import { AiOutlineDown } from 'react-icons/ai'
import ReactFullpage from '@fullpage/react-fullpage';
import "./astronauta.png"
import "./style.css"

const inter = Inter({ subsets: ['latin'] })
const kanit = Kanit({ weight: "600", subsets: ['latin'] })

export default function Home() {
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
              <div className="section w-screen h-screen flex justify-center items-center second-page">
                <div>
                  <img src="./astronauta.png" alt="astronauta" />
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
