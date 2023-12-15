import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Testpage extends Component {
    render() {
        return (
            <div>

                <div class="bg-white py-4 shadow dark:bg-gray-800">
                    <div class="max-w-6xl mx-auto">


                        <div class="flex items-center lg:justify-between justify-around">

                            <a href="trending.html">
                                <img src="./assets/images/logo.png" alt="" class="w-32" />
                            </a>

                            <div class="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
                                <a href="form-login.html" class="py-3 px-4">Login</a>
                                <a href="form-register.html" class="bg-purple-500 purple-500 px-6 py-3 rounded-md shadow text-white">Register</a>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                    <form class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                        <h1 class="lg:text-2xl text-xl font-semibold mb-6"> Register </h1>

                        <div>
                            <label class="mb-0"> First Name </label>
                            <input type="text" placeholder="Your Name" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />
                        </div>
                        <div>
                            <label class="mb-0"> Last  Name </label>
                            <input type="text" placeholder="Last  Name" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />
                        </div>
                        <div>
                            <label class="mb-0"> Email Address </label>
                            <input type="email" placeholder="Info@example.com" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />
                        </div>
                        <div>
                            <label class="mb-0"> Password </label>
                            <input type="password" placeholder="******" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />
                        </div>

                        <div>
                            <button type="button" class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full">
                                Get Started</button>
                        </div>
                        <div>
                            <Link to="/">
                                <button type="button" class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full">
                                    Login </button>
                            </Link>
                        </div>
                    </form>


                </div>

            </ div>
        )
    }
}

export default Testpage