import React from 'react'

export default function Signup() {
  return (
    <div>
    
    <div className="bg-slate-600 pl-6 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
          <span className="flex flex-col mt-5 items-start max-md:mt-10">
            <img
              loading="lazy"
              alt="google_img"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be69b2c38003c2b80727ff0083a091d67a080a59b668ad123f9928dd54cd25b8?"
              className="aspect-square object-contain object-center w-[37px] fill-white overflow-hidden max-w-full"
            />
            <div className="text-white text-2xl leading-9 tracking-widest self-stretch mt-14 max-md:mt-10">
              Unlock the power of collective wisdom. Join us and write the
              future of research collaboratively.
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
          <span className="bg-white flex grow flex-col w-full pl-20 pr-7 pt-7 pb-12 rounded-[36px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <span className="flex items-stretch justify-between gap-5 self-end">
              <div className="text-neutral-400 text-sm leading-9">
                English (UK)
              </div>
              <img
                loading="lazy"
                alt="google_img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98708c729f8732bb0914c1672794eef34cf9d4c20e624c1518de1b9bdcd1c301?"
                className="aspect-[1.67] object-contain object-center w-2.5 fill-stone-300 overflow-hidden shrink-0 max-w-full self-start"
              />
            </span>
            <div className="text-black text-2xl font-extrabold leading-9 tracking-widest mt-16 self-end max-md:max-w-full max-md:mt-10">
              Create Account
            </div>
            <div className="flex items-stretch justify-between gap-5 mt-10 self-end max-md:max-w-full max-md:flex-wrap">
              <span className="border flex items-stretch justify-between gap-3 px-4 py-3 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                <img
                  loading="lazy"
                  alt="google_img"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-600 text-xs leading-9 my-auto">
                  Sign up with Google
                </div>
              </span>
              <span className="border flex items-stretch justify-between gap-3 px-4 py-3.5 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                <img
                  loading="lazy"
                  alt="google_img"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-600 text-xs leading-9 mt-1.5">
                  Sign up with Facebook
                </div>
              </span>
            </div>
            <div className="text-neutral-400 text-lg leading-9 self-center whitespace-nowrap mt-12 max-md:mt-10">
              - OR -
            </div>
            <div className="text-neutral-400 text-base leading-9 mt-10 self-end max-md:max-w-full max-md:mt-10">
              Full Name
            </div>
            <div className="bg-gray-200 w-[536px] shrink-0 max-w-full h-px mt-2 self-end" />
            <div className="text-neutral-400 text-base leading-9 mt-11 self-end max-md:max-w-full max-md:mt-10">
              Email Address
            </div>
            <div className="bg-gray-200 w-[536px] shrink-0 max-w-full h-px mt-2 self-end" />
            <span className="flex w-[536px] max-w-full justify-between gap-5 mt-11 pr-20 self-end items-start max-md:flex-wrap max-md:mt-10 max-md:pr-5">
              <div className="text-neutral-400 text-base leading-9 mt-2">
                Password
              </div>
              <img
                loading="lazy"
                alt="google_img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5802ae3301076bde43299f3b76efb62d6353263aa2b092a2ebe931711970c2fd?"
                className="aspect-square object-contain object-center w-[22px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </span>
            <div className="bg-gray-200 w-[536px] shrink-0 max-w-full h-px mt-1 self-end" />
            <span className="text-white text-center text-base font-extrabold leading-9 bg-slate-600 w-[536px] max-w-full justify-center items-center mt-12 px-16 py-4 rounded-lg self-end max-md:mt-10 max-md:px-5">
              Create Account
            </span>
            <div className="text-slate-600 text-base leading-9 mt-9 mb-10 self-end max-md:max-w-full max-md:mb-10">
              Allready have an account?{" "}
              <span className="text-slate-600">Log in</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  
    </div>
  )
}
