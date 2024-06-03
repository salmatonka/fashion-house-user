import React from 'react'

const UserProfile = () => {
  return (
    <div>
      
      {
                    user ? <div className="relative">
                        <img
                            src={user?.photoURL}
                            className="absolute inset-0  w-full h-full"
                            alt=""
                        />
                        <div className="relative  bg-gray-900 bg-opacity-75">
                            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  pb-16 lg:pb-40 ">
                                <div className="flex flex-col items-center justify-between xl:flex-row">
                                    <div className="border-4 border-sky-500 rounded-b-xl shadow-sky-700 shadow-xl h-full ">

                                        <h2 className="max-w-lg mb-2 pt-6 px-14 font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
                                            Name : {user?.displayName}
                                        </h2>
                                        <h2 className="max-w-lg mb-6  px-8 font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
                                            Email : {user?.email}
                                        </h2>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> : <h2 className='text-4xl font-semibold text-pink-500 text-center py-10'>Please, Login to view your profile!!</h2>

                }

    </div>
  )
}

export default UserProfile
