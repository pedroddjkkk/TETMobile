"use client"
import { Inter, Kanit } from 'next/font/google'
import { AiOutlineDown } from 'react-icons/ai'
import ReactFullpage from '@fullpage/react-fullpage';
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
                  <p className='text-3xl text-center w-10/12 text-white'>Decole para o mundo das <span className='text-pink-500'>IAs</span>!</p>
                  <p className='pt-6 w-10/12 text-center text-slate-200'>Descubra uma nova forma de utilizar as máquinas para pensar e resolver problemas</p>
                </div>
                <AiOutlineDown className='text-white w-16 h-16 hover:cursor-pointer self-center' onClick={() => fullpageApi.moveSectionDown()} />
              </div>
              <div className="section w-screen h-screen flex justify-center items-center" style={{backgroundColor: "#392378"}}>
                <p>Section 2</p>
              </div>
              <div className="section w-screen h-screen flex justify-center" style={{backgroundColor: "#392378"}}>
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  )
}
