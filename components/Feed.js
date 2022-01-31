import React from 'react';
import Posts from './Posts';
import { useSession } from 'next-auth/react';
import UserInfo from './UserInfo';


function Feed() {
    const { data: session } = useSession();


    return (
        <main className={`grid grid-cols-1 md:grid-cols-3 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className='col-span-3'>
                {session && (
                    <section className='col-span-3'>
                        <UserInfo />
                    </section>
                )}
                <Posts />
            </section>
  
        </main>
    );
}

export default Feed;
