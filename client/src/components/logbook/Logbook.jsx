import React from 'react'
import { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getLogbookDetails } from './logbookApi'

export default function Logbook() {

    const {documentId} =  useParams() 
    const [data,setData] = useState([])
console.log(documentId)
   
    useEffect(()=>{ 
        async function showLogDetails(){ 
            const response = await getLogbookDetails(documentId)
            const info = await response.data.data
            console.log(info)
           setData(info)
        }
   showLogDetails();
    },[documentId])

console.log(data)

  return (
    <div>
 {data?data.map((info,index)=>( 
<div key = {index}>
<div style={{minWidth:'100%'}} className="bg-white p-4 rounded-md shadow-md mx-auto max-w-2xl">
{/* Card content goes here */}
<h2 className="text-xl font-bold mb-2">INFO</h2>

<p className="mb-3">{info.timestamp}</p>
<p className="mb-3">{info.document_id}</p>

<p> {info.data?.data?.ops && info.data.data.ops.length > 0 ? (
                <p>{info.data.data.ops[0].insert}</p>
              ) : (
                <p>No data available</p>
              )}</p>
<p>{info.data.promptMssg?(
    <p>{info.data.promptMssg}</p>
)
:(
    <p>No commit message sent</p>
)}</p>
<hr className=" dark:bg-gray-900"></hr>
</div>
</div>
           )):'Loading....'}
    </div>
  )
}
