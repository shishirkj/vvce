import { useState } from "react";
import { getSearchQuery } from "./searchApi";

export default function SearchOp() {


    const [key, setKey] = useState('');

    const searchSubmit = async(e) => {
        e.preventDefault();
      console.log(key);
      const response = await getSearchQuery(key);
      console.log(response);
      return;
    }

    return (
        <>
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
            </>
    );
}

