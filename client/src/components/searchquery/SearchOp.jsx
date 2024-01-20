import { useState } from "react";
import { getSearchQuery } from "./searchApi";
import { Link } from "react-router-dom";
export default function SearchOp() {

    const truncateTitle = (title, wordsLimit) => {
        const words = title.split(' ');
        if (words.length > wordsLimit) {
          return words.slice(0, wordsLimit).join(' ') ;
        }
        return title;
      };
      
    const [key, setKey] = useState('');
    const [data,setData] = useState(null)

    const searchSubmit = async(e) => {
        e.preventDefault();
      console.log(key);
      const response = await getSearchQuery(key);
      const info =  await response.data.data.organic_results
      
      setData(info)
  console.log(info)
    }



    return (
    <div>
        
        <div className="flex">
            <form onSubmit={searchSubmit} className="flex items-center">
                <input
                    type='text'
                    placeholder='Search a Product...'
                    onChange={(e) => { setKey(e.target.value) }}
                    className="border border-gray-400 rounded-md p-2"
                />
                <button type='submit' className="bg-gray-800 text-white px-4 py-2 ml-2 rounded-md">
                    Search
                </button>
            </form>
            <Link to={'/dashboard'} className="bg-gray-800 text-white px-4 py-2 ml-2 rounded-md">Dashboard</Link>
            </div>
            <div className="mt-20">
           {data?data.map((info,index)=>( 
<div key = {index}>
<div style={{minWidth:'100%'}} className="bg-white p-4 rounded-md shadow-md mx-auto max-w-2xl">
{/* Card content goes here */}
<h2 className="text-xl font-bold mb-2">{truncateTitle(info.title, 5)}</h2>
<p className="mb-3">{info.snippet}</p>

<a href={info.link}>Read more</a>
<hr className=" dark:bg-gray-900"></hr>
</div>
</div>
           )):'Loading....'}


            </div>



            </div>
       
    );
}

