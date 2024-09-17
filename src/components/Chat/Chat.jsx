import axios from 'axios';
import React, { useState } from 'react';
import './Chat.css'
function Chat() {

    const [question,setQusetion]= useState("")
    const [answer,setAnswer]=useState("")

  const generateAnswer = async () => {
    try {
      console.log("Loading...");

      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC1PfxOL9FNOpyFAjr3J2IK9kSoMZDQcWI",
        method: "post",
        headers: {
          "Content-Type": "application/json", 
        },
        data: {
          contents: [
            {
              parts: [{ text: question }]
            }
          ]
        }
      });

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]); // Log the response data
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
        <div className='chat-container'>
      <h1 className='chat-h1'>Hi! How can I help you?</h1>
      <textarea value={question} onChange={(e)=>setQusetion(e.target.value)} cols={30} rows={10}></textarea>
      <button className='chat-ben ' onClick={generateAnswer}>Generate answer</button>
      <pre className='chat-pre'>{answer}</pre>
    </div>

    </>
  );
}

export default Chat;
