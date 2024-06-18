import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black w-full h-screen">
      <div className="w-full h-[100px]">
          <div className="w-[82px] h-[52px] absolute top-[24px] left-[24px] rounded-[12px] bg-[#333333] flex justify-center items-center">
            <div className="w-[56px] h-[33px] flex justify-center items-center">
              <span className="text-white text-[30px] font font-light leading-[33px]">EN</span>
            </div>
          </div> 
      </div>
      <div className="w-full h-[70%] flex justify-center">
          <div className="w-[40%] flex flex-col m-[-50px] justify-start items-center">
              <Image alt="logo" width={150} height={150} src="/logo.webp"/>
              <Image alt="title" width={150} height={150} src="/title.webp"/>
              <div className="w-[480.61px] h-[108px] font-normal p-6 opacity-[80%] text-[36px] leading-[54px] flex flex-col items-center text-white">
                <span>A new type of social</span>
                <span>Network!</span>
              </div>
              <div className="w-full h-[50px] opacity-[80%] pt-16 flex justify-center items-center">
                <span className="text-[24px] leading-[28.8px] text-white">Get early access now!</span>
              </div>
              <div className="w-full h-[100px]  flex items-center pt-20">
                <button className="w-[336px] h-[74px] rounded-[55px] bg-[#BABABA] text-[24px] text-white">Your Email</button>
                <button className="w-[247px] h-[74px] rounded-[55px] bg-[#FF3939] text-[24px] text-white">Get Early Access</button>
              </div>
          </div>
      </div>
      <div className="w-full flex justify-center items-center">
          <div className="w-[1046px] flex flex-col justify-center items-center text-white h-[88px] rounded-[20px] border-[3px] border-solid border-[rgba(255, 255, 255, 0.2)]">
              <div className="w-full h-[40px] flex justify-center items-center">
                <Link href="#">Home</Link>
                <Link href="#">Terms of service </Link>
                <Link href="#">privacy Policy</Link>
                <Link href="#">Contact Us</Link>
                <Link href="#">Community Guidelines</Link>
              </div>
              <div className="w-full flex justify-center">Sunveil 2024.</div>
          </div>  
      </div>
    </main>
  );
}
