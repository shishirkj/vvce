[1mdiff --git a/client/src/components/TextEditor.jsx b/client/src/components/TextEditor.jsx[m
[1mindex 1744549..4f78ee6 100644[m
[1m--- a/client/src/components/TextEditor.jsx[m
[1m+++ b/client/src/components/TextEditor.jsx[m
[36m@@ -88,6 +88,12 @@[m [mexport default function TextEditor() {[m
       }[m
     [m
   },[socket,quill])[m
[32m+[m[41m[m
[32m+[m[41m[m
[32m+[m[32m  const logDocument = ()=>{[m[41m   [m
[32m+[m[32m    socket.emit("log-document",quill.getContents())[m[41m[m
[32m+[m[32m  }[m[41m[m
[32m+[m[41m[m
   const wrapperRef = useCallback(wrapper=>{ [m
     if(wrapper==null)return [m
     wrapper.innerHTML=""[m
[36m@@ -100,7 +106,12 @@[m [mexport default function TextEditor() {[m
   },[])[m
   [m
   return ([m
[32m+[m[32m    <>[m[41m[m
     <div className='container' ref = {wrapperRef}></div>[m
[32m+[m[32m    <div>[m[41m[m
[32m+[m[32m      <button onClick={logDocument}>kjjfhg</button>[m[41m[m
[32m+[m[32m    </div>[m[41m[m
[32m+[m[32m    </>[m[41m[m
   )[m
 }[m
 [m
[1mdiff --git a/server/server.js b/server/server.js[m
[1mindex deaadd4..e674b1d 100644[m
[1m--- a/server/server.js[m
[1m+++ b/server/server.js[m
[36m@@ -14,8 +14,8 @@[m [mimport Document from './models/documentModel.js';[m
 import Logbook from './models/logbookModel.js';[m
 [m
 config({[m
[31m-  // path: "C:/Users/reach/Desktop/check/server/data/secret/.env",[m
[31m-  path: "/Users/hariom/Desktop/vvce/server/data/secret/.env",[m
[32m+[m[32m  path: "C:/Users/reach/Desktop/check/server/data/secret/.env",[m[41m[m
[32m+[m[32m  // path: "/Users/hariom/Desktop/vvce/server/data/secret/.env",[m[41m[m
 });[m
 [m
 [m
[36m@@ -70,7 +70,11 @@[m [mio.on('connection',(socket)=>{[m
       await Document.findByIdAndUpdate(documentId, { data })[m
     })[m
     // console.log("fdsbfj",documentId,document.data)[m
[31m-    await saveLog(documentId,document.data); [m
[32m+[m[32m    socket.on("log-document",async data=>{[m[41m[m
[32m+[m[32m      console.log("data",data)[m[41m[m
[32m+[m[32m      console.log("documentId",documentId);[m[41m[m
[32m+[m[32m      await saveLog(documentId,document.data);[m[41m [m
[32m+[m[32m    })[m[41m[m
 [m
   })[m
   [m
[36m@@ -106,7 +110,7 @@[m [mprocess.on("uncaughtException", (err) => {[m
 //logbook[m
 async function saveLog(documentId,data) {[m
   // Create a new log entry using Logbook model[m
[31m-  console.log("sbdfhbdsb", documentId,data)[m
[32m+[m[41m [m
   const newLog = new Logbook({[m
     data: data,  // Assuming you want to log the existing data[m
     document_id: documentId,[m
