
import Stats from "./Stats";
import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";

function Stories() {
    const { data: session } = useSession();


  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>

        {session && (
            <MiniProfile />
        )}

        {session && (
            <Stats />
        )}
    </div>
  );
}

export default Stories;
