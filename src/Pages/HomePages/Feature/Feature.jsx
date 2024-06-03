import React from 'react'
import '../Feature/Feature.css'
import SectionTitle from '../../../Shares/SectionTitle/SectionTitle'
const Feature = () => {
    return (
        // <section id="feature"   >
        //     <div className="fe-box">
        //         <img  src="https://www.pngkey.com/png/full/72-724111_2-weeks-to-ship-free-shipping-logo-png.png" alt="" />
        //         <h6>Free Shipping</h6>
        //     </div>
        //     <div className="fe-box">
        //         <img  src="https://cdn.dribbble.com/users/4843167/screenshots/14540242/dribbble-min_4x.jpg" alt="" />
        //         <h6>Online Order</h6>
        //     </div>
        //     <div className="fe-box">
        //         <img  src="https://cdn-icons-png.flaticon.com/512/6475/6475944.png" alt="" />
        //         <h6>Save Money</h6>
        //     </div>
        //     <div className="fe-box">
        //         <img  src="https://w7.pngwing.com/pngs/282/323/png-transparent-new-product-development-graphy-special-promo-text-rectangle-logo-thumbnail.png" alt="" />
        //         <h6>Special Offer</h6>
        //     </div>
        //     <div className="fe-box">
        //         <img  src="https://i.pinimg.com/736x/52/be/00/52be002aa8b87751363842f73cee95c1.jpg" alt="" />
        //         <h6>Happy Sell</h6>
        //     </div>
        //     <div className="fe-box">
        //         <img  src="https://e7.pngegg.com/pngimages/666/844/png-clipart-24-7-emergency-service-hvac-electrical-contractor-24-hours-miscellaneous-blue-thumbnail.png" alt="" />
        //         <h6>F24/7 Support</h6>
        //     </div>
        // </section>

        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle 
             subHeading="check it out" heading="Featured Item" />
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Feature
