"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ReactFullpage from '@fullpage/react-fullpage';

const inter = Inter({ subsets: ['latin'] })

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
              <div className="section bg-pink-50 w-screen h-screen flex justify-center items-center">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section bg-slate-700 w-screen h-screen flex justify-center items-center">
                <p>Section 2</p>
              </div>
              <div className="section bg-pink-700 w-screen h-screen flex justify-center items-center">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  )
}
