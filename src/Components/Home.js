import React from "react";
import image1 from "../img/entrega-paquete.jpg";
import Logo from '../img/Logo_InstaYa.png';




function Home() {


    const showRegister = (e) => {
        e.preventDefault();
        if (document.querySelector('#register').classList.contains('hidden')) {
            document.querySelector('#register').classList.remove('hidden');
            document.querySelector('#login').classList.add('hidden');
        } else {
            document.querySelector('#register').classList.add('hidden');
            
        }
        
    }

    const showLogin = (e) => {
        e.preventDefault();
        if (document.querySelector('#login').classList.contains('hidden')) {
            document.querySelector('#login').classList.remove('hidden');
            document.querySelector('#register').classList.add('hidden');
        } else {
            document.querySelector('#login').classList.add('hidden');
            
        }
    }



    return (
        <section className="flex lg:grid sm:grid-cols-3 h-screen place-items-center place-content-center">

            <div className="mx-5 md:mx-10 col-span-3 sm:col-span-1 w-full sm:w-9/12">
                <img src={Logo} alt="Logo InstaYa" className="h-36 mx-auto"/>

                <div className="flex justify-around items-center mb-10">
                    <button onClick={showRegister} className="bg-burnt-sienna-500 text-[white] font-medium py-2 px-4 mx-2 rounded-lg">Register</button>
                    <button onClick={showLogin} className="bg-burnt-sienna-400 text-burnt-sienna-700 font-medium py-2 px-4 mx-2 rounded-lg">Sign in</button>
                </div>

                {/* Login Form */}
                <form action=""  id="login" className="hidden">
                    <h1 className="text-3xl font-bold text-center mb-5 text-nile-blue-900">Hello Again!</h1>
                    <p className="text-center mb-5 text-nile-blue-600">Enter your email to get started</p>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="pb-1 text-nile-blue-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="pb-1 text-nile-blue-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="***********" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>  
                    <div className="flex justify-center my-5 ">
                        <button type="submit" className="w-full bg-burnt-sienna-500 hover:bg-burnt-sienna-500 py-2 px-3 text-nile-blue-50 rounded-lg text-center">Sign in</button>
                    </div>
                </form>

                {/* Register Form */}
                <form action="" id="register" className="hidden">
                    <h1 className="text-3xl font-bold text-center mb-5 text-nile-blue-900">Create a new account</h1>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="name" className="pb-1 text-nile-blue-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Jhon Smith" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="pb-1 text-nile-blue-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="pb-1 text-nile-blue-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="***********" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex justify-center my-5 ">
                        <button type="submit" className="w-full bg-burnt-sienna-500 hover:bg-burnt-sienna-500 py-2 px-3 text-nile-blue-50 rounded-lg text-center">Register</button>
                    </div>
                </form>
            </div>
            
            <div className="hidden lg:block sm:col-span-2 mx-10">
                <img src={image1} alt="Entrega de paquete" className="rounded-lg shadow-xl" />
            </div>
        </section>
    )
}

export default Home;