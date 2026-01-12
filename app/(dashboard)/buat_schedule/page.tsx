import AddSchdule from "./components/schduleForm";
import Navbar from "../components/navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 min-h-screen">
        <div className="bg-red-500" id="liat_schedule"></div>
        <div className="flex justify-center items-center mt-9 bg-[#08152F]" id="add_scehdule">
            <AddSchdule />
        </div>
      </div>
    </>
  );
}
