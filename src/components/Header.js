import {useState} from 'react'

const Header = () => {
  const [menu, setmenu] = useState(false);

  return (
    <>
     <div className="w-full px-5 bg-[#0C0929] bg-opacity-50 backdrop-blur-[6px] border-b-2 border-[#2E56CB]">
        <div className="flex items-center justify-between gap-5 py-4 max-w-[1350px] mx-auto">
           <div className="flex items-center gap-14">
            <button><img src="/images/logo.svg" className='w-[170px]' alt="logo" /></button>
            <div className="hidden 2lg:flex gap-5">
              <a href="#" className='text-[18px]'>Home</a>
              <a href="#" className='text-[18px] text-[#C0C0CC]'>Game</a>
              <a href="#" className='text-[18px] text-[#C0C0CC]'>Features</a>
              <a href="#" className='text-[18px] text-[#C0C0CC]'>NFT</a>
              <a href="#" className='text-[18px] text-[#C0C0CC]'>FAQ</a>
            </div>
           </div>

           <div className="hidden 2lg:flex items-center gap-6">
            <a href="#"><svg width="24" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 1.01001C20 1.50001 19.02 1.69901 18 2.00001C16.879 0.735013 15.217 0.665013 13.62 1.26301C12.023 1.86101 10.977 3.32301 11 5.00001V6.00001C7.755 6.08301 4.865 4.60501 3 2.00001C3 2.00001 -1.182 9.43301 7 13C5.128 14.247 3.261 15.088 1 15C4.308 16.803 7.913 17.423 11.034 16.517C14.614 15.477 17.556 12.794 18.685 8.77501C19.0218 7.55268 19.189 6.28987 19.182 5.02201C19.182 4.77301 20.692 2.25001 21 1.00901V1.01001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="#"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8946 14.7348 13 15 13C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 7.5C11 6.5 13 6.5 16.5 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 16.5C10.5 17.5 13.5 17.5 17 16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 17C15.5 18 17 20 17.5 20C19 20 20.333 18.333 21 17C21.667 15.333 21.5 11.167 19.5 5.5C18.043 4.485 16.5 4.16 15 4L14 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.49999 17C8.49999 18 7.14399 20 6.66799 20C5.23899 20 3.96999 18.333 3.33499 17C2.69999 15.333 2.85899 11.167 4.76299 5.5C6.15099 4.485 7.54499 4.16 8.99999 4L9.99999 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <button><img src="/images/whitepaper-button.svg" alt="whitepaper" /></button>
           </div>

          <button onClick={()=> {setmenu(true)}} className="flex 2lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button>
        </div>
      </div>




      <div className={`bg-[#0C0929] border-l-2 border-[#2E56CB] transition fixed top-0 right-0 w-[70%] sm:w-[50%] min-h-screen px-5 pt-10 z-50 flex flex-col gap-3 ${menu === true ? "translate-x-0" : "translate-x-full"}`}>
        <a href="#" className='text-[18px]'>Home</a>
        <a href="#" className='text-[18px] text-[#C0C0CC]'>Game</a>
        <a href="#" className='text-[18px] text-[#C0C0CC]'>Features</a>
        <a href="#" className='text-[18px] text-[#C0C0CC]'>NFT</a>
        <a href="#" className='text-[18px] text-[#C0C0CC]'>FAQ</a>
        <a href="#" className='mt-1'><svg width="24" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 1.01001C20 1.50001 19.02 1.69901 18 2.00001C16.879 0.735013 15.217 0.665013 13.62 1.26301C12.023 1.86101 10.977 3.32301 11 5.00001V6.00001C7.755 6.08301 4.865 4.60501 3 2.00001C3 2.00001 -1.182 9.43301 7 13C5.128 14.247 3.261 15.088 1 15C4.308 16.803 7.913 17.423 11.034 16.517C14.614 15.477 17.556 12.794 18.685 8.77501C19.0218 7.55268 19.189 6.28987 19.182 5.02201C19.182 4.77301 20.692 2.25001 21 1.00901V1.01001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#" className='mt-1'><svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8946 14.7348 13 15 13C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 7.5C11 6.5 13 6.5 16.5 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 16.5C10.5 17.5 13.5 17.5 17 16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 17C15.5 18 17 20 17.5 20C19 20 20.333 18.333 21 17C21.667 15.333 21.5 11.167 19.5 5.5C18.043 4.485 16.5 4.16 15 4L14 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.49999 17C8.49999 18 7.14399 20 6.66799 20C5.23899 20 3.96999 18.333 3.33499 17C2.69999 15.333 2.85899 11.167 4.76299 5.5C6.15099 4.485 7.54499 4.16 8.99999 4L9.99999 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <button className='mt-1'><img src="/images/whitepaper-button.svg" alt="whitepaper" /></button>
        <button onClick={()=> {setmenu(false)}} className='absolute top-3 right-3'><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button> 
      </div>

      <div onClick={()=> {setmenu(false)}} className={`bg-[#0C0929] transition bg-opacity-80 fixed top-0 left-0 w-full h-screen z-40 ${menu === true ? "visible opacity-100" : "invisible opacity-0"}`}></div>
    </>
  )
}

export default Header