import React from 'react'
import Avatar from '../../assets/avatar.png'
import Input from '../../components/Input'
const Chat = () => {
    const contacts=[
        { name:'John',
          status:'online',
         img:Avatar
         },
         {
            name:'Manoj',
            status:'online',
            img:Avatar
         },
         {
            name:'Avinash',
            status:'online',
            img:Avatar
         }
]
  return (
    <div className='w-screen flex'>       
        <div className='w-[5%] border border-black h-screen'></div>
        <div className='w-[30%] h-screen bg-secondary overflow-scroll'>
            <div className='flex items-center my-8 ml-2 '>
                <div><img src={Avatar} width={50} height={50} className='border border-primary p-[2px] rounded-full' /></div>
                <div className='ml-8'>
                    <h3 className='text-2xl'>Name</h3>
                    <p className='text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr />
            <div className='mx-14 mt-4 ml-2'>
                <div className='text-primary text-lg'>Messages</div>
                <div>
                    {contacts.map(({name,status,img})=>{
                        return(
                            <div className='flex items-center my-8 border-b-gray-300'>
                                <div className='cursor-pointer flex items-center'></div>
                                <div className='cursor-pointer'><img src={img} width={50} height={50} className='border border-primary p-[2px] rounded-full' /></div>
                                <div className='ml-8'>
                                    <h3 className='text-2xl'>{name}</h3>
                                    <p className='text-sm font-light'>{status}</p>
                                </div>
            </div>
                        )
                    })
                    }
                    </div>
                </div>		
        </div>
            <div className='w-[65%] h-screen bg-white flex flex-col items-center '>
					<div className='w-[75%] bg-secondary h-[60px] my-4 rounded-full flex items-center px-7 py-2'>
						<div className='cursor-pointer'><img src={Avatar} width={40} height={40} className="rounded-full" /></div>
						<div className='ml-6 mr-auto'>
							<h3 className='text-lg'>Manoj</h3>
							<p className='text-sm font-light text-gray-600'>Online</p>
						</div>
						<div className='cursor-pointer'>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
								<line x1="15" y1="9" x2="20" y2="4" />
								<polyline points="16 4 20 4 20 8" />
							</svg>
						</div>
					</div>
				<div className='h-[75%] w-full overflow-scroll shadow-sm'>
					<div className='p-4'>
							<div className={`max-w-[40%] rounded-b-xl bg-secondary rounded-tr-xl p-2 mb-6`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque ducimus laudantium rem quae ad! Eaque doloribus sit corporis iure, tempore sapiente ducimus consequuntur quas illum atque! Similique, accusantium exercitationem!
                            </div>
                            <div className={`max-w-[40%] rounded-b-xl ml-auto  bg-primary rounded-tl-xl p-2 text-white  mb-6`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque ducimus laudantium rem quae ad! Eaque doloribus sit corporis iure, tempore sapiente ducimus consequuntur quas illum atque! Similique, accusantium exercitationem!
                            </div>
                            <div className={`max-w-[40%] rounded-b-xl p-2 mb-6 bg-secondary rounded-tr-xl`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque ducimus laudantium rem quae ad! Eaque doloribus sit corporis iure, tempore sapiente ducimus consequuntur quas illum atque! Similique, accusantium exercitationem!
                            </div>
                            <div className={`max-w-[40%] rounded-b-xl ml-auto bg-primary rounded-tl-xl p-2 text-white  mb-6`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque ducimus laudantium rem quae ad! Eaque doloribus sit corporis iure, tempore sapiente ducimus consequuntur quas illum atque! Similique, accusantium exercitationem!
                            </div>
                            <div className={`max-w-[40%] rounded-b-xl p-2 mb-6 bg-secondary rounded-tr-xl`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque ducimus laudantium rem quae ad! Eaque doloribus sit corporis iure, tempore sapiente ducimus consequuntur quas illum atque! Similique, accusantium exercitationem!
                            </div>
							
								
					 <div className='text-center text-lg font-semibold mt-24'>No Messages or No Conversation Selected</div>
						
					</div>
				</div>
                <div className='p-7  w-full flex items-center'>
                    <Input placeholder='Type a message... ' className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none'/>
						<div className="ml-4 p-2 cursor-pointer bg-light rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="10" y1="14" x2="21" y2="3" />
								<path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
							</svg>
						</div>
						<div className="ml-4 p-2 cursor-pointer bg-light rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus " width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="12" cy="12" r="9" />
								<line x1="9" y1="12" x2="15" y2="12" />
								<line x1="12" y1="9" x2="12" y2="15" />
							</svg>
						</div>
					</div>
                
             </div>
    </div>
    )
}


export default Chat
