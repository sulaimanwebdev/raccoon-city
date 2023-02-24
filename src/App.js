import {useState, useEffect} from 'react';
import './fonts/ClashGrotesk-Light.otf';
import Header from './components/Header';
import NFTCard from './components/NFT-Card';

function App() {
  const [loader, setloader] = useState("opacity-100 visible");

  useEffect(() => {
    setTimeout(() => {
      setloader("opacity-0 invisible");
      document.body.classList.remove("overflow-hidden");
    }, 2000);
  }, []);

  return (
    <>

<div id="preloader-main" className={`transition ${loader}`}>
        <div className="preloader flex items-center justify-center">
            <div className="preloader-inner relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="http://raccooncity.online/assets/img/logo/loder.png" alt=""/>
                </div>
            </div>
        </div>
    </div>



    <div className='relative font-[Regular] text-white'>
     <div className="relative z-30">
      <Header/>

      <div className="px-5 relative max-w-[1350px] mx-auto min-h-[600px] 2lg:min-h-screen flex items-center justify-center flex-col mb-[100px] 2lg:mb-0">
        <img src="/images/logo.svg" className='w-[500px]' alt="logo" />
        <div className='max-w-[500px] mx-auto text-center text-[17px] tracking-wide mt-5'>An Immersive MMORPG integrating RADIX'S DLT, with an NFT collection of 10,000 members</div>
        <button><img src="/images/playgame-button.svg" className='mt-10' alt="play game" /></button>
        <img src="/images/planets.svg" className='absolute top-0 right-0 w-[150px] 2lg:w-[200px] 4lg:w-[300px] 3lg:w-auto' alt="planets" />
        <img src="/images/cat-plane.svg" className='absolute -bottom-10 2lg:bottom-20 left-0 w-[200px] 4lg:w-[300px] 3lg:w-[350px]' alt="planets" />
      </div>


      <div className="w-full px-5 mt-7">
        <div className="p-5 relative max-w-[1350px] h-[300px] sm:h-[400px] 2lg:h-[600px] mx-auto rounded-[4px] flex items-center justify-center border-2 border-[#621CD4] overflow-hidden">
          <button><img src="/images/connectwallet-button.svg" className='relative z-30' alt="connect wallet" /></button>
          <img src="/images/background2.svg" className="absolute top-0 left-0 w-full h-full object-cover object-bottom" alt="background" />
        </div>
     </div>


     <div className="px-5 relative max-w-[1350px] mx-auto mt-[150px] sm:mt-[220px]">
      <div className="relative z-30">
        <div className="relative flex items-center justify-center flex-col text-center">
          <img src="/images/illustration1.svg" alt="raccoon" />
          <div className="text-[#55DBD6] text-[19px] tracking-wide mt-3">Strategize your next move and dominate the game</div>
          <div className="my-1 font-[ClashDisplay-Semibold] text-[35px] sm:text-[40px]">Endless quests and thrilling challenges</div>
          <div className="text-[19px] font-[Light] mt-3 tracking-wide max-w-[700px] mx-auto">Are you ready to dive into a world of adventure and endless possibilities? Our MMORPG game is waiting for you! With endless quests, exciting battles, and thrilling challenges, our game offers an experience unlike any other.</div>
        </div>


        <div className="relative flex items-center justify-center flex-col text-center mt-[100px] sm:mt-[150px]">
          <img src="/images/illustration2.svg" alt="raccoon" />
          <div className="text-[#55DBD6] text-[19px] tracking-wide mt-7">Compete with other players in exciting PvP battles</div>
          <div className="my-1 font-[ClashDisplay-Semibold] text-[35px] sm:text-[40px]">Online PVP Battles</div>
          <div className="text-[19px] font-[Light] mt-3 tracking-wide max-w-[700px] mx-auto">Compete with other players in exciting PvP battles or team up with friends to take on powerful bosses. The game features stunning graphics and an immersive soundtrack that will transport you to a whole new world.</div>
        </div>



        <div className="relative flex items-center justify-center flex-col text-center mt-[100px] sm:mt-[150px]">
          <img src="/images/illustration3.svg" alt="raccoon" />
          <div className="text-[#55DBD6] text-[19px] tracking-wide sm:mt-3">Join a community of players from around the world</div>
          <div className="my-1 font-[ClashDisplay-Semibold] text-[35px] sm:text-[40px]">BEST COMMUNITY SUPPORT</div>
          <div className="text-[19px] font-[Light] mt-3 tracking-wide max-w-[700px] mx-auto">Join a community of players from around the world and embark on epic journeys together. Choose your character, customize your abilities, and explore a vast and detailed world full of hidden treasures and secrets to uncover.</div>
        </div>


      </div>
     <img src="/images/background3.svg" className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full object-cover object-center' alt="background" />
     <img src="/images/planet1.svg" className='hidden 5lg:flex absolute -top-[100px] left-0' alt="planet" />
     <img src="/images/planet2.svg" className='hidden 5lg:flex absolute top-1/2 -translate-y-1/2 right-0' alt="planet" />
     <img src="/images/cat-plane.svg" className='hidden 5lg:flex absolute bottom-0 left-0 w-[260px]' alt="cat plane" />
     </div>





     <div className="px-5 relative max-w-[1350px] mx-auto mt-[150px]">
       <div className="relative mb-12">
        <div className="relative font-[ClashDisplay-Semibold] text-[30px] sm:text-[35px] bg-[#100228] w-fit mx-auto text-center px-6 z-20 leading-none">BEST COMMUNITY SUPPORT</div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-white"></div>
       </div>

       <div className="grid grid-cols-1 4lg:grid-cols-2 gap-5">
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
       </div>

       <a href="/" className="flex items-center gap-2.5 float-right mt-5">
        <div className="border-b border-white text-[19px]">Explore NFT Marketplace</div> 
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_1878)"><path d="M6.66675 16H25.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.3333 24L25.3333 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.3333 8L25.3333 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_24_1878"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>
       </a>
     </div>


     <div className="relative px-5 max-w-[1350px] mx-auto h-[200px] mt-[130px] sm:mt-[170px]"><img src="/images/planet3.svg" className='absolute top-0 left-0' alt="planet" /></div>
     
     <img src="/images/background4.svg" className='w-full' alt="background" />

     <div className="bg-[#100228] px-5 max-w-[1350px] mx-auto py-5 flex 2md:items-center 2md:justify-between flex-col 2md:flex-row gap-3">
       <div className='text-[17px]'>2023 © Raccoon City. All Rights Reserved.</div>
       <div className="flex sm:items-center flex-col sm:flex-row gap-7 mt-2 sm:mt-0">
        <a href="#" className='text-[17px]'>About</a>
        <a href="#" className='text-[17px]'>Teams</a>
        <a href="#" className='text-[17px]'>Governance</a>
        <a href="#" className='text-[17px]'>Documentation</a>
        <a href="#" className='text-[17px]'>Community</a>
       </div>
     </div>


     </div>

    <img src="/images/background.svg" className='absolute top-0 left-0 w-full h-full object-cover object-center' alt="background" />
    </div>
    </>
  );
}

export default App;