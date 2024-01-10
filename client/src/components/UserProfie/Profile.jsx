import React from 'react'

export default function Profile() {
  return (
    <div>
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
          <div className="self-stretch bg-sky-300 flex grow flex-col justify-center items-stretch w-full max-md:max-w-full">
            <div className="bg-neutral-900 flex flex-col justify-center items-stretch max-md:max-w-full">
              <div className="bg-white flex flex-col justify-center items-stretch max-md:max-w-full">
                <span className="bg-slate-200 flex flex-col px-10 py-12 max-md:max-w-full max-md:px-5">
                  <img
                    loading="lazy"
                    alt=""
                    srcSet="..."
                    className="aspect-[1.02] object-contain object-center w-[370px] shadow overflow-hidden self-center max-w-full mt-2.5"
                  />
                  <div className="justify-center text-neutral-400 text-center text-lg font-bold leading-7 self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                    “Visit new places, meet new cultures, and exchange life
                    experiences are my favorite thing ever, also because I can
                    express my thinking along the journey”
                  </div>
                  <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-16 max-md:mt-10">
                    <span className="items-center flex justify-between gap-2.5">
                      <img
                        loading="lazy"
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6060cbf5e71feae77026f5df300558869e3f6c3f3e4ffbad4ff1f96f16849691?"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-gray-600 text-2xl leading-8 self-stretch">
                        Age
                      </div>
                    </span>
                    <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
                      26
                    </div>
                  </span>
                  <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
                    <span className="items-center flex justify-between gap-2.5">
                      <img
                        loading="lazy"
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d9abeb74446fc6d086d97442932761a4c5464cb7f20f4117ed2bb3cb43580e?"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
                        Occupation
                      </div>
                    </span>
                    <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
                      {" "}
                      Student
                    </div>
                  </span>
                  <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
                    <span className="items-center flex justify-between gap-2.5">
                      <img
                        loading="lazy"
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ff2968b07acb997e6b373491444d52286bcf0a47409ff7de0725eff8b708f20?"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
                        No Of Paper Published
                      </div>
                    </span>
                    <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
                      03
                    </div>
                  </span>
                  <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
                    <span className="items-center flex justify-between gap-2.5">
                      <img
                        loading="lazy"
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e0bad621e3710d06149abdb42dc2d423789b2510fc158dffe66f08cf9463e?"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
                        Location
                      </div>
                    </span>
                    <div className="text-neutral-900 text-center text-2xl font-bold leading-8 flex-1">
                      London, UK
                    </div>
                  </span>
                  <div className="items-stretch self-center flex w-[400px] max-w-full gap-5 mt-12 max-md:mt-10">
                    <span className="text-neutral-900 text-center text-lg font-semibold leading-6 items-stretch rounded bg-zinc-200 grow justify-center px-5 py-3">
                      PASSIONATE
                    </span>
                    <span className="text-neutral-900 text-center text-lg font-semibold leading-6 items-stretch rounded bg-zinc-200 grow justify-center px-5 py-3">
                      HONEST
                    </span>
                  </div>
                  <div className="items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6 mb-60 max-md:mb-10">
                    <span className="text-neutral-900 text-center text-lg font-semibold leading-6 items-stretch rounded bg-zinc-200 grow justify-center px-5 py-3">
                      CURIOUS
                    </span>
                    <span className="text-neutral-900 text-center text-lg font-semibold leading-6 items-stretch rounded bg-zinc-200 grow justify-center px-5 py-3">
                      ADVENTUROUS
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
          <span className="items-start bg-white flex grow flex-col w-full px-20 py-12 max-md:max-w-full max-md:px-5">
            <div className="text-gray-700 text-4xl font-extrabold leading-10 self-stretch mt-6 max-md:max-w-full">
              Martha Nielsen
            </div>
            <div className="text-neutral-900 text-center text-2xl font-bold leading-8 self-stretch mr-4 mt-8 max-md:max-w-full max-md:mr-2.5">
              About
            </div>
            <div className="text-stone-500 text-2xl leading-8 self-stretch w-full mr-4 mt-6 max-md:max-w-full max-md:mr-2.5">
              Martha is a compassionate and thoughtful young woman with a deep
              love for acting and a keen interest in political activism. She
              once embarked on a hunger strike to raise awareness about child
              hunger in Africa, demonstrating her strong commitment to making a
              difference. Martha is also known for her skepticism towards
              established institutions and holds reservations about nuclear
              energy. She always carries her smartphone, as it enables her to
              stay connected with friends and stay informed about important
              political and environmental developments. Martha leads a healthy
              lifestyle and does not have any detrimental habits.
            </div>
            <div className="text-neutral-900 text-center text-2xl font-bold leading-8 mt-20 self-start max-md:max-w-full max-md:mt-10">
              Projects
            </div>
            <div className="text-stone-500 text-2xl leading-8 w-[445px] max-w-full mt-6 self-start">
              Discovering captivating books, articles, and authors to expand her
              reading horizons.
              <br />
              Organizing and cataloging her book collection for easy access and
              reference.
              <br />
              Seeking out unique and compelling stories that resonate with her
              interests and values.
              <br />
              Sharing her thoughts and perspectives on literature with friends,
              fostering meaningful conversations.
            </div>
            <div className="self-stretch mr-4 mt-20 mb-6 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                  <span className="items-stretch flex flex-col max-md:mt-10">
                    <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
                      Connect with Me
                    </div>
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cf5c067e2fdc25c2a88520832f6ae67df071823bf9bb82f21818d2c8b0a826b?"
                      className="aspect-[2.41] object-contain object-center w-full overflow-hidden mt-6"
                    />
                  </span>
                </div>
                <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                  <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                    <div className="text-neutral-900 text-2xl font-bold leading-8 max-md:max-w-full">
                      Form
                    </div>
                    <div className="mt-6 px-0.5 py-1 max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
                          <span className="flex flex-col items-stretch max-md:mt-10">
                            <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap">
                              Introvert
                            </div>
                            <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-10">
                              Sensing
                            </div>
                            <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-9">
                              Thinking
                            </div>
                            <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-9">
                              Judging
                            </div>
                          </span>
                        </div>
                        <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col items-end max-md:mt-10">
                            <span className="flex w-[116px] max-w-full flex-col items-stretch">
                              <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap self-end">
                                Extrovert
                              </div>
                              <div className="flex shrink-0 h-3.5 flex-col mt-2.5 rounded-[50%]" />
                              <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
                                Intuition
                              </div>
                              <div className="flex shrink-0 h-3.5 flex-col mt-2.5 rounded-[50%]" />
                              <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
                                Feeling
                              </div>
                              <div className="flex shrink-0 h-3.5 flex-col mt-1.5 rounded-[50%]" />
                              <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
                                Perceiving
                              </div>
                            </span>
                            <div className="flex w-3.5 shrink-0 h-3.5 flex-col mt-2 rounded-[50%] self-start" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}
