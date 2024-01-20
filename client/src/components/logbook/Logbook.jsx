import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getLogbookDetails } from './logbookApi'

export default function Logbook() {

    const {documentId} =  useParams() 
console.log(documentId)
   
    useEffect(()=>{ 
        async function showLogDetails(){ 
            const response = await getLogbookDetails(documentId)
            console.log(response)
            return;
        }
   showLogDetails();
    },[documentId])



  return (
    <div>Logbook</div>
  )
}
