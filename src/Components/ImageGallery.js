import React, { useState } from 'react'

import details from '../details.json'

const ImageGallery = ({ mainObj, setMainObj, click, setClick }) => {

    const [newArray, setNewArray] = useState(details)


    const getInfo = (index) => {
        console.log(index);
        const res = newArray.find((curElem) => {
            return curElem.id == index
        })
        setMainObj(res)
        setClick(res.count)
        mainObj.count = click;
    }




    return <>
        <div className='mt-6 text-center'>
            <h1 className='text-3xl font-semibold'>Cats Image Gallery</h1>
        </div>

        <div className='mt-4 grid grid-row-1 md:grid-cols-4 gap-5 mx-4 '  >
            {
                details.map((curElem, id) => {
                    return <>
                        <div onClick={() => getInfo(id)} key={id} class="max-w-lg bg-white  rounded-lg  border-2 border-gray-400 shadow-2xl mx-auto  w-[90%] md:w-full hover:translate-y-[-3%]
                        transition-transform ">
                            <div >
                                <img class="rounded-t-lg w-full  h-64" src={curElem.src} alt="" />
                            </div>
                            <div class="p-5 flex flex-col">
                                <span className='text-xl font-bold text-center'>{curElem.name}</span>
                                <span className='text-xl font-bold text-center'>No of times clicked : {curElem.id == mainObj.id ? click : details[curElem.id].count} </span>
                                <span className='text-xl font-bold text-center'>{curElem.serialNo}</span>

                            </div>
                        </div>


                    </>
                })
            }
        </div>



    </>
}

export default ImageGallery
