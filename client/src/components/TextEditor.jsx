import React, { useCallback, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { io } from 'socket.io-client';
import { useParams, Link } from 'react-router-dom';

const SAVE_INTERVAL = 2000;
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
];

const Segment = ({ id, content, isEditable, onLockRequest }) => {
  const checkId = useParams();
 
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const [mssg,setMssg] = useState('');
  useEffect(() => {
    const s = io('http://localhost:4000');
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once('load-document', (document) => {
      console.log(`load-document event received for segment ${id}`);

      quill.setContents(document);
      quill.enable();
    });
    socket.emit('get-document', id);
  }, [socket, quill, id]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit('save-document', quill.getContents());
    }, SAVE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on('receive-changes', handler);

    return () => {
      socket.off('receive-changes', handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      if (source !== 'user') return;
      socket.emit('send-changes', delta);
    };
    quill.on('text-change', handler);
    return () => {
      quill.off('text-change', handler);
    };
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = '';

    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } });
    q.disable();
    q.setText(content); // Set segment content
    setQuill(q);
  }, [content]);

  const logDocument = () => {
    const promptData = prompt("Enter commit message");

    setMssg(promptData)
    const logDetails = {
      promptMssg:promptData,
      data: quill.getContents(), // or any other details you want to include
    };
    console.log("logDetails",logDetails)
    socket.emit('log-document', logDetails);
  };

  return (
    <div className={`segment ${isEditable ? 'editable' : 'locked'}`}>

      <div className="container" style={{ minWidth: '100%' }} ref={wrapperRef}></div>
      <div>
        <button className="bg-slate-600 rounded-lg px-5 py-2 " onClick={logDocument}>
          Store Log Button
        </button>
        <Link to={`/logbook/${id}`} className="bg-slate-600 rounded-lg px-5 py-2 ml-3 ">
          Display Log Book
        </Link>
      </div>
    </div>
  );
};

export default function TextEditor() {
  const { id: documentId } = useParams();

  // Sample document content with multiple segments
  const sampleDocumentContent = `
    Segment 1 content
    Segment 2 content
    Segment 3 content
    Segment 4 content
  `;

  // Use a specific logic to split the document content into segments
  const contentSegments = sampleDocumentContent.split('\n').filter((segment) => segment.trim() !== '');

  return (
    <>
      {contentSegments.map((segmentContent, index) => (
        <Segment
          key={index}
          id={index}
          content={segmentContent}
          isEditable={true}
          onLockRequest={() => {
            // Implement the lock request logic if needed
          }}
        />
      ))}
    </>
  );
}
