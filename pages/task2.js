import { useRouter } from "next/router";

export default function Task2() {
  const router = useRouter();
  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">


      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.back()}
          className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition duration-300"
        >
          Back
        </button>
      </div>



        <div className="space-y-4 h-[600px] w-[500px] bg-gray-100 p-4 flex items-left flex-col text-[10px] rounded-xl border border-black  ">
          
            <p className=" font-bold text-2xl text-black ">INSERT NAME HERE </p>
            <div className="font-bold space-y-1 text-black">
              <p>[Email ID]</p>
              <p>[Address]</p>
              <p>[Phone Number]</p>
              <p>[Website]</p>
            </div>

            <p className="font-bold text-xl text-black"> OBJECTIVES</p>
            <p className="font-bold text-black">[Mention your objective here]</p>
            
            <p className="font-bold text-xl text-black"> EDUCATION</p>

            <div>
              <p className="font-bold text-xl text-black"> NAME OF SCHOOL</p>
              <p className="font-bold  text-red-700"> Completion data and name of degree</p>    
            </div>

            <p className="font-bold text-black">[Type 1st of accomplishment]</p>
            
            <p className="font-bold text-xl text-black">EXPERIENCE</p>
            
            <p className="font-bold text-xl text-black">COMPANY NAME</p>
            <p  className="font-bold text-red-700">
                [Type your job title]
            </p>
            <p  className="font-bold text-black">
                [Type the start date] = [Type the end date]
            </p>
           

            <div>
              <p className="font-bold text-lg text-black uppercase">SKILLS</p>
              <ul className="list-disc ml-6 font-bold">
                <li className="text-black">Skill1</li>
                <li className="text-black">Skill2</li>
              </ul>
            </div>
                        


          </div>
          
        

    </div>
  );
}
