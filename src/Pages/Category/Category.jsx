import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const [categoryGifts,setCategoryGifts] = useState([]);

    useEffect( () =>{
        fetch('https://gift-server-salmatonka.vercel.app/category')
        .then( res => res.json())
        .then(data => setCategoryGifts(data));
    },[])
    return (
        <section  >
            <div className='py-12'>
           <h4 className='text-center text-3xl font-bold   py-6'> All Category Services: {categoryGifts.length}</h4>
           <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4  py-10 px-20 '>
            {
                categoryGifts.map(category => <p 
                className='border border-x-8 rounded-md shadow-2xl py-4 text-center  
                border-[#1D59A0] hover:border-gray-400'

                key={category}
                category={category}
                >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
           </div>

           <div>
           
           </div>
        </div>
        </section>
  )
}

export default Category
