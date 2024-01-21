import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <span className="bg-white flex flex-col pb-12">
           
      <span className="self-center flex w-full max-w-[1335px] flex-col items-center px-5 max-md:max-w-full">
        <div style={{ maxWidth: "100%", height: "100vh" }}>
          <div className="bg-slate-600 pl-20 pb-12 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
                <span className="flex flex-col items-stretch mt-8 max-md:max-w-full max-md:mt-10">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      loading="lazy"
                      alt=""
                      srcSet="/favicon.png"
                      className="aspect-[1.71] object-contain object-center w-[113px] overflow-hidden max-w-full self-start"
                    />
                    <h1 className="text-white">Research Sync</h1>
                  </div>
                  <div className="text-white text-6xl leading-[68px] mt-40 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
                    ResearchCollab: Unifying Collaboration Efforts
                  </div>
                  <div className="text-white leading-6 mt-28 max-md:max-w-full max-md:mt-10">
                    Manage your research and collaborate through an all-in-one
                    platform.
                  </div>
                  
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
                <div className=" bg-opacity-30 flex flex-col w-full pr-7 pt-11 items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
                  <div className="flex w-full  items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="justify-between items-center flex gap-5 my-auto pr-20 py-1 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <span className="justify-between items-stretch flex gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                        <div className="text-white font-bold  text-xm leading-5 tracking-[2px] uppercase grow whitespace-nowrap">
                          HOME
                        </div>
                       <Link to={'/profile'}>
                       <div className="text-white text-xm leading-5 tracking-[2px] uppercase">
                          PROFILE
                        </div>
                       </Link> 
                        <div className="text-white text-xm leading-5 tracking-[2px] uppercase">
                          PRICING
                        </div>
                        <Link to={'/project'}><div className="text-white text-xm leading-5 tracking-[2px] uppercase">
                          PROJECTS
                        </div></Link>
                     <Link to={'/search'}><div className="text-white text-xm leading-5 tracking-[2px] uppercase">
                          REFERNECES
                        </div></Link>   
                       
                       
                      </span>
                    </div>
                  </div>
                  <div className="flex-col overflow-hidden self-stretch relative flex min-h-[654px] mt-15 pl-20 pr-11 py-12 items-end max-md:max-w-full max-md:mt-10 max-md:px-5">
                    <img
                      loading="lazy"
                      alt=""
                      style={{ objectFit: "contain" }}
                      srcSet="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?w=996&t=st=1705778068~exp=1705778668~hmac=0541ce986ebb8771344d705cdfc58209bbe426da3b706ea105682848ad30868a"
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
               
        <div className="text-neutral-700 text-center text-4xl font-medium leading-10 mt-28 max-md:max-w-full max-md:mt-10">
                    Creating Extraordinary User Experience        
        </div>
               
        <div className="text-neutral-400 text-center text-base leading-6 max-w-[660px] mt-7 max-md:max-w-full">
                   "Crafting Unforgettable User Journeys: Elevating Experiences
          Beyond the Ordinary"
        </div>
               
        <div className="justify-between self-stretch z-[1] mt-20 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-280 max-md:w-full max-md:ml-0">
              <span className="shadow-2xl flex flex-col pl-6 pr-20 py-6 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7b5cb1bb25fd7fbfefbc592ba902b32feb2379944f99dc658c29805fb9960dd?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Integrity
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Honest, transparent, and ethical in all interactions with
                  customers.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-280 ml-5 max-md:w-full max-md:ml-0">
              <span className="shadow-2xl flex flex-col pl-6 pr-20 py-6 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42753e021ce9126207c988f8766f9963c1726697535df4d0be823b0a58281c40?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Demonstrate
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Demonstrating a strong Will to Win in the market place
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-280 ml-5 max-md:w-full max-md:ml-0">
              <span className="shadow-2xl flex grow flex-col pl-6 pr-20 py-6 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e11333b13cab0791be08a7ed955a7bf6671e15d28d909d866db03e99dc305f31?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Diversity
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Embracing the unique needs, preferences, and perspectives of a
                  diverse customer base.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-280 ml-5 max-md:w-full max-md:ml-0">
              <span className="self-stretch shadow-2xl flex grow flex-col pl-6 pr-20 pt-6 pb-12 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c896edc2b8327c8abfd87a8cca36a451cac259a14722d15d5575ddf532bf3b?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Teamwork
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Fostering a collaborative and customer-centric culture within
                  your organization.
                </div>
              </span>
            </div>
          </div>
        </div>
               
        <div className="justify-between self-stretch max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <span className="shadow-2xl flex flex-col pl-6 pr-20 py-6 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6122b909b9a14cb6aebe1c8ac83493360f2937673a2b9cdfacf7ac7108f5f3?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Collaboration
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Ensure seamless sharing of customer data across researchers
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="shadow-2xl flex flex-col pl-6 pr-20 py-6 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/94018928e6ffe4ab2b3e515b105baaaad2b58a7918bf1a2bbec69a74cfa1b07a?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                       
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Technology
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Harnessing the power of Technology to deliver better customer
                  experience
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="shadow-2xl flex grow flex-col pl-6 pr-20 py-6 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2de3abbcfc4130f9dc7ae89b822f700d730a986e4ca4c4d057252b3ad6fecef5?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Corporate
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="shadow-2xl flex grow flex-col pl-6 pr-20 py-6 rounded-lg items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f0d795d46e50e39d544a0cea0abde5b1d3d18f2fdddb516dcf5a26710286a9a?"
                  className="aspect-square object-contain object-center w-[37px] overflow-hidden max-w-full"
                />
                <div className="text-neutral-700 text-2xl font-medium leading-6 self-stretch mt-5">
                  Digital
                </div>
                <div className="text-neutral-400 text-sm leading-6 self-stretch mt-2.5">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </div>
              </span>
            </div>
          </div>
        </div>
      </span>
      <div className="bg-white self-stretch w-full max-md:max-w-full">
               
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                   
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                        <img loading="lazy" alt="" src="/Aboutus.png" />       
             
          </div>
                   
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                       
            <span className="flex flex-col my-auto px-5 items-start max-md:max-w-full max-md:mt-10">
                           
              <div className="text-neutral-700 text-3xl font-medium leading-10 self-stretch max-md:max-w-full">
                                About Us              
              </div>
                           
              <div className="text-stone-500 text-base leading-7 self-stretch mt-2.5 max-md:max-w-full">
                "Research Sync” is a digital platform designed to streamline the
                research process, fostering seamless collaboration among
                researchers. Serving as a centralized hub, it enables
                individuals and teams to converge, exchange ideas,and contribute
                collectively to advance knowledge. With a user-friendly
                interface, project management tools, and privacy controls,
                Research Sync simplifies the research journey, cultivating a
                supportive environment to accelerate discovery and innovation in
                the scientific community.              
              </div>
                           
              <span className="flex gap-2 mt-11 pr-4 items-start max-md:mt-10">
                               
                <div className="text-slate-600 text-xl leading-7">
                                    Read More                
                </div>
                               
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c321812143dbfd87790ac0c888bf5327962f5cbb4f8d26cc80c3c0fef276778?"
                  className="aspect-square object-contain object-center w-[29px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
                             
              </span>
                         
            </span>
                     
          </div>
                 
        </div>
             
      </div>
           
      <div className="bg-slate-200 bg-opacity-30 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
               
        <span className="flex w-full max-w-[1166px] flex-col items-stretch mt-16 mb-11 max-md:max-w-full max-md:my-10">
                   
          <div className="text-neutral-700 text-center text-4xl font-medium leading-10 self-center whitespace-nowrap">
                        Our Services          
          </div>
                   
          <div className="text-neutral-400 text-center text-base leading-6 self-center mt-9 max-md:max-w-full">
                        &quot;Elevate your experience with our premium services”
                     
          </div>
                   
          <div className="mt-16 max-md:max-w-full max-md:mt-10">
                       
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                               
                <div className="items-stretch self-stretch flex grow flex-col pb-9 rounded-lg max-md:mt-10">
                                   
                  <img
                    loading="lazy"
                    style={{ aspectRatio: "3/2", width: "100%" }}
                    alt=""
                    src="https://img.freepik.com/free-vector/business-team-working-project-project-management-business-analysis-planning-brainstorming-research-consulting-motivation-concept-vector-isolated-illustration_335657-2244.jpg?w=996&t=st=1705784851~exp=1705785451~hmac=aa17f4b6a500fae4ec2dc6cab719b5d5e230f3e06c22d7d893574c6aff32c564"
                    className="aspect-[0.7] object-contain object-center w-full overflow-hidden"
                  />
                                   
                  <span className="items-stretch flex justify-between gap-5 mt-6">
                                       
                    <div className="text-neutral-700 text-xl leading-9 tracking-wider uppercase">
                      ready made tempelates                    
                    </div>
                                       
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e6cb409c62da7b4b92eee3f034beafc45caca844d150ea726de8fb07205232f?"
                      className="aspect-square object-contain object-center w-[37px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                                     
                  </span>
                                 
                </div>
                             
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                               
                <div className="items-stretch self-stretch flex grow flex-col pb-9 rounded-lg max-md:mt-10">
                                   
                  <img
                    loading="lazy"
                    style={{ aspectRatio: "3/2", width: "100%" }}
                    alt=""
                    srcSet="https://img.freepik.com/free-photo/ideas-idea-vision-design-plan-objective-mission-concept_53876-167112.jpg?w=1060&t=st=1705740436~exp=1705741036~hmac=e5eab95e6b08ed2c85f6914319841a10d39527670db8fca8063d45972845f989"
                    className="aspect-[0.7] object-contain object-center w-full overflow-hidden"
                  />
                                   
                  <span className="items-stretch flex justify-between gap-5 mt-6">
                                       
                    <div className="text-neutral-700 text-xl leading-9 tracking-wider uppercase">
                      ready made tempelates                    
                    </div>
                                       
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e6cb409c62da7b4b92eee3f034beafc45caca844d150ea726de8fb07205232f?"
                      className="aspect-square object-contain object-center w-[37px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                                     
                  </span>
                                 
                </div>
                             
              </div>
                           
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                               
                <div className="items-stretch self-stretch flex grow flex-col pb-9 rounded-lg max-md:mt-10">
                                   
                  <img
                    loading="lazy"
                    alt=""
                    style={{ aspectRatio: "3/2", width: "100%" }}
                    srcSet="https://img.freepik.com/free-photo/copyright-design-license-patent-trademark-value-concept_53876-123644.jpg?w=996&t=st=1705740527~exp=1705741127~hmac=0d691aef4014795427b7ec8589021a156825a33750906e3ccdd62670ab43e484"
                    className="aspect-[0.7] object-contain object-center w-full overflow-hidden"
                  />
                                   
                  <span className="items-stretch flex justify-between gap-5 mt-6">
                                       
                    <div className="text-neutral-700 text-xl leading-9 tracking-wider uppercase">
                      plagarism checker                    
                    </div>
                                       
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a24418028f00b6d32003f7324cf8db186b254e04eb136753d371e82c8f25bc?"
                      className="aspect-square object-contain object-center w-[37px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                                     
                  </span>
                                 
                </div>
                             
              </div>
                           
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                               
                <div className="items-stretch self-stretch flex grow flex-col rounded-lg max-md:mt-10">
                                   
                  <img
                    loading="lazy"
                    alt=""
                    style={{ aspectRatio: "3/2", width: "100%" }}
                    srcSet="https://img.freepik.com/free-vector/publish-article-concept-illustration_114360-4926.jpg?w=996&t=st=1705740563~exp=1705741163~hmac=0435383f2312646a9e7997802bfb233ea7d2695643da1fa5cf7eff50f2adbb29"
                    className="aspect-[0.7] object-contain object-center w-full overflow-hidden"
                  />
                                   
                  <span className="items-stretch flex justify-between gap-5 mt-6">
                                       
                    <div className="text-neutral-700 text-xl leading-9 tracking-wider uppercase">
                      Pre-Publication Showcase                    
                    </div>
                                       
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/269cb2987550ddec43dd8a3c51d3672b5bafc5121b3963c1c669231ecd86ccc7?"
                      className="aspect-square object-contain object-center w-[37px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                                     
                  </span>
                                 
                </div>
                             
              </div>
                         
            </div>
                     
          </div>
                 
        </span>
             
      </div>
           
      <div className="self-center flex w-full max-w-[1179px] items-stretch justify-between gap-5 mt-16 mb-7 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
               
        <div className="justify-between px-5 py-px max-md:max-w-full">
                   
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                       
            <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                           
              <span className="flex grow flex-col items-stretch max-md:mt-10">
                               
                <div className="text-black text-lg leading-5 whitespace-nowrap">
                  About the company                
                </div>
                               
                <div className="text-stone-500 text-sm leading-6 mt-6">
                  Learn To Love Growth And Change And You Will Be A Success.
                  Microsoft Patch                
                </div>
                               
                <div className="items-stretch flex gap-4 mt-11 pr-10 max-md:mt-10 max-md:pr-5">
                                   
                  <img
                    loading="lazy"
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ce1b2bc1e0024414a67d81e3bf2b643145cc2ab8614edb0cc67a68d2867133?"
                    className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                  />
                                   
                  <img
                    loading="lazy"
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d44146a096086de5bd5af8cebc223e1dd2bb6339f2e48e51219912ff59d888c?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                                   
                  <img
                    loading="lazy"
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cddfd7c0eee628330a54407b0b9c2c268c745ecfd0854743b5fc156229a4846d?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                                   
                  <img
                    loading="lazy"
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cee14ad07310e936c4317493db9087a109b24828ea209b85aed48d794e06835?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                                 
                </div>
                             
              </span>
                         
            </div>
                       
            <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                           
              <span className="flex grow flex-col items-stretch max-md:mt-10">
                               
                <div className="text-neutral-700 text-lg leading-5">
                                    Products                
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-8">
                                    CSR Activities                
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-5">
                                    Green Banking                
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-5">
                                    News                
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 whitespace-nowrap mt-5">
                                    Ongoing Campgain                
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-4">
                                    Updates                
                </div>
                             
              </span>
                         
            </div>
                       
            <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                           
              <span className="flex flex-col items-stretch max-md:mt-10">
                               
                <div className="text-neutral-700 text-lg leading-5">
                  Get Started
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-8">
                  Career
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-5">
                  Contact Us
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 whitespace-nowrap mt-5">
                  Government Securities
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-5">
                  Examples
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-5">NIS</div>
                             
              </span>
                         
            </div>
                       
            <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
                           
              <span className="flex flex-col items-stretch max-md:mt-10">
                               
                <div className="text-neutral-700 text-lg leading-5">About</div> 
                             
                <div className="text-stone-500 text-sm leading-5 whitespace-nowrap mt-7">
                  IPDC at a Glance
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-5">
                  Mission, VIsion & Values
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-5">
                  Corporate Governanace
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 mt-4">
                  Shareholders
                </div>
                               
                <div className="text-stone-500 text-sm leading-5 whitespace-nowrap mt-5">
                  Investor Relations
                </div>
                             
              </span>
                         
            </div>
                     
          </div>
                 
        </div>
               
        <span className="items-stretch flex gap-3 mt-1 px-5 rounded-2xl self-start">
                   
          <img
            loading="lazy"
            alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7900e070583cd28b351eb9233220843daf84980b0c6ad893841f99c0f21f12c7?"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
                   
          <div className="text-black text-center text-lg leading-5 tracking-wider self-start">
                        16519          
          </div>
                 
        </span>
             
      </div>
         
    </span>
  );
}
