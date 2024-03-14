"use client" ;
import Link from "next/link";
import react from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage(){
    const [user , setUser ] = react.useState({
        email: '',
        password:'',
        username : "",
    })
    const logIn = ()=>{}
    return (
        <div className="flex min-h-full  border-none flex-col justify-center h-screen">
            <h1 className="text-center text-2xl">sign up </h1>
            <hr/>
            <label htmlFor="username" className="w-1/3 items-center mx-auto">
                username
            </label>
             <input
                id="username"
                type="text"
                placeholder="username" 
                value={user.username}
                onChange={(e) => setUser({...user , username :e.target.value})}
                className="w-1/3 items-center mx-auto"
             />
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
             onClick={logIn}
             className="p-2 border-white-300 bg-amber-600 w-1/3 items-center mx-auto p-4"
             >signup</button>
             <Link href='/login' className="w-1/3 items-center mx-auto">Visit login Page </Link>
        </div>
    )
}