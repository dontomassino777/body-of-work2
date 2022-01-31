import React from 'react';
import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (

    <div className='flex items-center justify-between mt-2 ml-2'>
        <img 
            className="w-16 h-16 rounded-full border p-[2px]"
            src={session?.user?.image}
            alt="profile pic"
        />

        <div className='flex-1 mx-4'>
          <h2 className='font-bold'>{session?.user?.username}</h2>
          <h3 className='text-sm text-gray-400'>Welcome to Body of Work</h3>
          <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>

        </div>

    </div>

  );
}

export default MiniProfile;
