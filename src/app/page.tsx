import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen">
      <div className="w-full h-[10%]">
          <div className="w-[82px] h-[52px] absolute top-[24px] left-[24px] rounded-[12px] bg-[#333333] flex justify-center items-center">
            <div className="w-[56px] h-[33px] flex justify-center items-center">
              <span className="text-white text-[30px] font font-light leading-[33px]">EN</span>
            </div>
          </div> 
      </div>
      <div className="w-full h-[60%] flex justify-center items-center">
          <div className="w-full flex flex-col m-[-30px] justify-start items-center">
              <Image alt="logo" width={150} height={150} src="/logo.webp"/>
              <Image alt="title" width={150} height={150} src="/title.webp"/>
              <div className="w-full  py-2 font-normal text-center opacity-[80%] text-[36px] leading-[54px] flex flex-col items-center text-white">
                <span>A new type of social</span>
                <span>Network!</span>
              </div>
              <div className="w-full h-[50px] opacity-[80%] text-center flex justify-center items-center">
                <span className="text-[24px] leading-[28.8px] text-white">Get early access now!</span>
                <Image src="/icon.webp" width={30} height={30} alt="icon"/>
              </div>
              <div className="w-full h-[100px]  flex justify-center items-center ">
                <button className="w-[40%] sm:w-[25%] md:w-[15%] h-[50px] mr-3 rounded-[55px] bg-[#BABABA] text-sm md:text-md text-white">Your Email</button>
                <button className="w-[40%] sm:w-[25%] md:w-[15%] h-[50px] ml-3 rounded-[55px] bg-[#FF3939] text-sm md:text-md text-white">Get Early Access</button>
              </div>
          </div>
      </div>
      <div className="w-full h-[30%] flex justify-center items-center">
          <div className="w-[95%] md:w-[80%] lg:w-[60%] h-[88px] p-2 flex flex-col justify-center items-center text-white  rounded-3xl border-2 md:border-[1px] border-solid border-white/20">
              <div className="w-full h-[40px] flex justify-center items-center">
                <Link href="#" className="px-1 md:px-2 text-[0.7em] sm:text-sm lg:text-md text-center w-[20%] md:w-auto">Home</Link>
                <Link href="#" className="px-1 md:px-2 text-[0.7em] sm:text-sm lg:text-md text-center w-[20%] md:w-auto">Terms of service </Link>
                <Link href="#" className="px-1 md:px-2 text-[0.7em] sm:text-sm lg:text-md text-center w-[20%] md:w-auto">Privacy Policy</Link>
                <Link href="#" className="px-1 md:px-2 text-[0.7em] sm:text-sm lg:text-md text-center w-[20%] md:w-auto">Contact Us</Link>
                <Link href="#" className="px-1 md:px-2 text-[0.7em] sm:text-sm lg:text-md text-center w-[20%] md:w-auto">Community Guidelines</Link>
              </div>
              <div className="w-full flex justify-center  pt-3 sm:pt-0 text-[0.7em] sm:text-sm lg:text-md text-center">Sunveil 2024.</div>
          </div>  
      </div>
    </main>
  );
}
