import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    <main className=" md:flex items-center md:h-screen">
      
      {/* Detail side */}
      <div className=" md:w-[1334px]  md:h-screen bg-red-400">rohan</div>

      {/* Email side */}
      <div className=" md:h-screen flex justify-center items-center md:w-[640px]">
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
