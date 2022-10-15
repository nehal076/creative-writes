import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);
    // See if use is Logged
    const getData = async () => {
        if(loading) return;
        if(!user) return route.push('auth/login');
    }

    //Get users data
    useEffect(()  => {
        getData();
    }, [user, loading]);




    return(
        <div>
            <h1>Your Posts</h1>
            <div>posts</div>
            <button onClick={()=> auth.signOut()}>Sign out</button>
        </div>
    )
}