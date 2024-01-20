import React from 'react'
import { Link } from 'react-router-dom'
export default function LandingPage() {
  return (
        <div style={{ maxWidth: '100%', height:'100vh' }}>
            <div className="bg-white pl-20 pb-12 max-md:pl-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
                  <span className="flex flex-col items-stretch mt-8 max-md:max-w-full max-md:mt-10">
                  <div style={{display:'flex',alignItems:'center'}}>
                    <img
                      loading="lazy"alt=""
                      srcSet="/favicon.png"
                      className="aspect-[1.71] object-contain object-center w-[113px] overflow-hidden max-w-full self-start"
                    />
                    <h1>Research Sync</h1>
                  </div>
                    <div className="text-black text-6xl leading-[68px] mt-44 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
                      ResearchCollab: Unifying Collaboration Efforts
                    </div>
                    <div className="text-stone-500 text-base leading-6 mt-32 max-md:max-w-full max-md:mt-10">
                      Manage your research and collaborate through an all-in-one
                      platform.
                    </div>
                    <div className="items-stretch flex gap-5 mt-16 pr-2.5 pb-3 self-start max-md:mt-10">
                    <Link  to={'/login'} className="text-slate-600">
                      <button className="text-white text-center text-xs leading-5 tracking-[2px] uppercase whitespace-nowrap rounded bg-slate-600 grow justify-center items-stretch px-5 py-3.5 max-md:px-5">
                      Log In
                      </button>
                      </Link>
                      <Link  to={'/signup'} className="text-slate-600">
                      <button className="text-slate-600 text-center text-xs leading-5 tracking-[2px] uppercase whitespace-nowrap items-stretch rounded border grow justify-center px-5 py-3.5 border-solid border-slate-600">
                      Sign up
                      </button>
                      </Link>
                    </div>
                    <div className="justify-between items-stretch flex gap-5 mt-12 self-start max-md:mt-10">
                      <span className="items-stretch self-center flex gap-3 my-auto rounded-2xl">
                        <img
                          loading="lazy"alt=""
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b66f12b92bf7625ef389f9eced66dabb5df1193d07e40791de4848bef1c63036?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-black text-center text-lg leading-5 tracking-wider self-start">
                          16519
                        </div>
                      </span>
                      <div className="bg-stone-300 w-px shrink-0 h-[30px]" />
                      <div className="items-stretch self-center flex gap-4 my-auto">
                        <img
                          loading="lazy"alt=""
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90804686441acb321751b0bbe54066faaf78519b4ee41065b8f03f808b778ab8?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                          loading="lazy"alt=""
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45fb0c302cd485df99d9a8ca74c129f42761e620519fd6d1a01586c68e0b1a3e?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                          loading="lazy"alt=""
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f8705eae349a3e7c9076b5800683d89483fba08bb0a2252b4663cab6e23109a?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                          loading="lazy"alt=""
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51958d71d6f55b861251a1aa4ff677e054841d89590f7ff40cc4661ed8751b34?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                      </div>
                    </div>
                  </span>
                </div>
                <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
                  <div className=" bg-opacity-30 flex flex-col w-full pr-7 pt-11 items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
                    <div className="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                      <div className="justify-between items-center flex gap-5 my-auto pr-20 py-1 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                        <span className="justify-between items-stretch flex gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                          <div className="text-black font-bold  text-xm leading-5 tracking-[2px] uppercase grow whitespace-nowrap">
                            HOME
                          </div>
                          <div className="text-black text-xm leading-5 tracking-[2px] uppercase">
                            PROFILE
                          </div>
                          <div className="text-black text-xm leading-5 tracking-[2px] uppercase">
                            PRICING
                          </div>
                          <div className="text-black text-xm leading-5 tracking-[2px] uppercase">
                            PROJECTS{" "}
                          </div>
                          <div className="text-black text-xm leading-5 tracking-[2px] uppercase">
                          REFERNECES
                          </div>
                          <div className="text-black text-xm leading-5 tracking-[2px] uppercase grow whitespace-nowrap">
                        PLAGARISM_CHECKER
                          </div>
                        </span>
                       
                      </div>
                    
                    </div>
                    <div className="flex-col overflow-hidden self-stretch relative flex min-h-[654px] mt-28 pl-20 pr-11 py-12 items-end max-md:max-w-full max-md:mt-10 max-md:px-5">
                      <img
                        loading="lazy" alt=""
                        style={{objectFit:'contain'}}
                        srcSet="https://img.freepik.com/free-vector/business-team-working-project-project-management-business-analysis-planning-brainstorming-research-consulting-motivation-concept-vector-isolated-illustration_335657-2244.jpg?w=1800&t=st=1705758195~exp=1705758795~hmac=12fde4b1a8a8d4fbdfafde624b5323f1a977189c1edb22adb9dd8247c31b7b79"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <div className="relative flex w-[13px] shrink-0 h-[13px] flex-col mt-52 rounded-[50%] max-md:mt-10" />
                      <div className="relative flex w-[13px] shrink-0 h-2 flex-col mt-5 rounded-[50%]" />
                      <div className="relative flex w-[13px] shrink-0 h-2 flex-col mt-5 rounded-[50%]" />
                      <div className="relative flex w-[13px] shrink-0 h-2 flex-col mt-5 mb-48 rounded-[50%] max-md:mb-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}
