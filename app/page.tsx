import EmailForm from "./components/EmailForm";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className=" md:flex items-center md:h-screen">
      {/* Detail side */}
      <div className=" md:h-screen md:w-[55.56%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1FA911] from-[18%] via-[#2F15D0] via-[60%] to-[#000000] to-[90%] flex flex-col items-center">
        <div></div>

        <div className=" flex justify-center xl:gap-x-[55px] gap-x-[38px] items-center text-end ">
          <div className=" rounded-lg overflow-hidden">
            <img
              src="./Cohorts-1.jpg"
              alt="img"
              className=" h-[306px] w-[335px]"
            />
          </div>
          <div className=" flex flex-col items-end justify-end w-[305px] text-[#F2F2F2]">
            <img src="./eye.png" alt="eye" className=" h-auto w-[32px]" />
            <h4 className=" text-[31px] leading-[37.2px] my-[16px]">
              Watch what the whales are doing
            </h4>
            <p className=" text-[16px] leading-[19.2px]">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>

        <div className=" w-[678px]">
          <p className=" leading-[30px] text-[25px] text-right text-[#F2F2F2] my-[22px]">
            Testimonials
          </p>
          <div className=" border border-[#E5E5E6] h-[1px] "/>
          <Testimonial />
        </div>
      </div>

      {/* Email side */}
      <div className=" md:h-screen md:w-[44.44%] flex justify-center items-center ">
        <div className=" w-[365px] h-[347px]">
          <div className=" p-2">
            <h3 className=" text-[39px] text-[#B0B1B3] font-medium">
              Sign up for exclusive access.
            </h3>

            <div>
              <EmailForm />
            </div>
          </div>

          <p className=" font-semibold">
            You'll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </main>
  );
}

{
  /* <div className=" md:w-[1334px] md:h-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1FA911] from-[18%] via-[#2F15D0] via-[60%] to-[#000000] to-[90%] flex flex-col items-center justify-center gap-y-10">
        <div className=" flex items-center">
          <div className=" flex flex-col items-start gap-y-5 w-[322px]">
            <div className=" h-[32px] w-[32px] p-1">
              <img src={"/bell.png"} alt="bell" />
            </div>
            <p className="text-[#F2F2F2] text-[31px]">
              Get notified when a highly correlated whale makes a move
            </p>
            <p className=" text-[#F2F2F2] text-[16px]">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div></div>
        </div>

        <div className=" flex justify-between items-start h-[306px] w-[678px]">
          <div>
            <img src={"/Cohorts.png"} alt="Cohorts" />
          </div>
          <div className=" flex flex-col items-end justify-end text-end">
            <div className=" h-[32px] w-[32px] p-1">
              <img src={"/eye.png"} alt="eye" />
            </div>
            <p className="text-[#F2F2F2] text-[31px] ">
              Watch what the whales are doing
            </p>
            <p className=" text-[#F2F2F2] text-[16px]">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>

        <div></div>
      </div> */
}
