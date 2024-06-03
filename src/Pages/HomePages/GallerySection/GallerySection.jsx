import React from 'react'

const GallerySection = () => {
    return (
        <div>
            <div className="my-16 bg-blue-100 rounded-xl">

                <h3 className='text-center text-3xl font-bold py-5  bg-blue-200 text-blue-600 rounded-t-xl shadow-lg'> GALLERY</h3>

                <div className="container flex flex-col justify-center p-10 mx-auto">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2 p-6">
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                        <img alt='' className="hover:shadow-lg hover:scale-125 ease-liner duration-200 overflow-hidden  object-cover w-full" src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection
