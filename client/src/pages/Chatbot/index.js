import React, { useState } from "react";
import { ask } from 'node-gpt-api'
import Avatar from "../../assets/avatar.png";
import Input from "../../components/Input";
import { useEffect, setConversations } from "react";
  
const Chatbot=()=>{
    const [message,setMessage] = useState([]);

    async function sendMessage() {
      const task = await ask('What can I do with GPT?', task => {
        console.clear()
        console.log(task.question)
        console.log('='.repeat(32))
        console.log(task.text)
      })
        const userMessage = message;
        if (userMessage) {
          // appendMessage('You', userMessage);
          // try {
          //   const response = await fetch('/ask-gpt', {
          //     method: 'POST',
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //     body: JSON.parse({value : userMessage}),
          //   });
      
          //   if (response.ok) {
          //     const data = await response.json();
          //     const botMessage = data.botResponse;
          //     // appendMessage('Bot', botMessage);
          //   } else {
          //     console.error('Error sending message:', response.statusText);
          //   }
          // } catch (error) {
          //   console.error('Error sending message:', error);
          // }
      
          // message.value = '';
        }
      }

    return (
        <div className="w-screen flex">
          <div className="w-[5%] border border-black h-screen ">
            <div className="cursor-pointer ml-4 mt-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          </svg>
            </div>
            <div className="cursor-pointer ml-4 mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
        </svg>
          </div>
          <div className="cursor-pointer ml-4 mt-10 " >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
       <path d="M10 16h4"></path>
       <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
       <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
       <path d="M9 7l-1 -4"></path>
       <path d="M15 7l1 -4"></path>
    </svg>
          </div>
          <div className="cursor-pointer ml-4 mt-10" >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-language" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M4 5h7"></path>
       <path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>
       <path d="M5 9c0 2.144 2.952 3.908 6.7 4"></path>
       <path d="M12 20l4 -9l4 9"></path>
       <path d="M19.1 18h-6.2"></path>
    </svg>
          </div>
          </div>
          
          {/* <div className="w-[55%] h-screen bg-white flex flex-col items-center ">
          {
            
            <div className="w-[75%] bg-secondary h-[60px] my-4 rounded-full flex items-center px-7 py-2">
              <div className="cursor-pointer">
                <img src={Avatar} width={40} height={40} className="rounded-full" />
              </div>
              <div className="ml-6 mr-auto">
                <h3 className="text-lg">{message?.receiver?.fullName}</h3>
                <p className="text-sm font-light text-gray-600">{message?.receiver?.email}</p>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-phone-outgoing"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <line x1="15" y1="9" x2="20" y2="4" />
                  <polyline points="16 4 20 4 20 8" />
                </svg>
              </div>
            </div>
          } */}
            
            {/* <div className="h-[75%] w-full overflow-scroll shadow-sm">
              <div className="p-4">
               {
                                message?.length > 0 ?
                                    message.map(({ message, user: { id } = {} }) => {
                                        return (
                                            <>
                                            <div className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${id === user?.id ? 'bg-primary text-white rounded-tl-xl ml-auto' : 'bg-secondary rounded-tr-xl'} `}>{message}</div>
                                            {/* <div ref={messageRef}></div> */}
                                            {/* </>
                                        )
                                    }) : <div className='text-center text-lg font-semibold mt-24'>No Messages or No Conversation Selected</div>
                            }
               
              </div>
            </div> */} 
            {
               
                <div className="p-7  w-full flex items-center">
              <Input
                placeholder="Type a message... "
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className="w-[75%]"
                inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
              />
              <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${!message && 'pointer-events-none'}`} onClick={()=>sendMessage()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-send"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              </div>
              <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${!message && 'pointer-events-none'}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-plus "
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
              </div>
            </div>
            }
          </div>
         
        )
}
export default Chatbot;