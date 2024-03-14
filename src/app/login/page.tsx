"use client" ;
import Link from "next/link";
import react from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function loginPage(){
    const [user , setUser ] = react.useState({
        email: '',
        password:'',
    })
    const signUp = ()=>{}
    return (
        <div className="flex min-h-full  border-none flex-col justify-center h-screen">
            <h1 className="text-center text-2xl">Login </h1>
            <hr/>
             <label htmlFor="email" className="w-1/3 items-center mx-auto">
                email
            </label>
             <input
                id="email"
                type="text"
                placeholder="email" 
                value={user.email}
                onChange={(e) => setUser({...user , email :e.target.value})}
                className="w-1/3 items-center mx-auto"
             />
              <label htmlFor="password" className="w-1/3 items-center mx-auto">
              password
            </label>
             <input
                id="password"
                type="text"
                placeholder="password" 
                value={user.email}
                onChange={(e) => setUser({...user , email :e.target.value})}
                className="w-1/3 items-center mx-auto"
             />
             <button 
             onClick={signUp}
             className="p-2 border-white-300 bg-amber-600 w-1/3 items-center mx-auto"
             >
            login here
             </button>
             <Link href='/login' className="w-1/3 items-center mx-auto">Visit login Page </Link>
        </div>
    )
}