import React from 'react';
import { useSession } from 'next-auth/react';



function Stats() {
  const { data: session } = useSession();

  console.log(session)

  return (
    <div className='justify-between mt-2 ml-2'>
      <div>
          <p className='font-bold'>My Stats</p>
          <p className='text-sm text-gray-400'>
            {session?.user?.username}
          </p>
      </div>
    </div>
  );
}

export default Stats;
