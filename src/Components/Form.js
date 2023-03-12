import React, { useState, useEffect } from 'react'
import details from '../details.json'

const Form = ({ mainObj, setMainObj, click, setClick, setShow }) => {


    const [name, setName] = useState(mainObj.name)
    const [image, setImage] = useState(mainObj.src)
    const [catClicks, setCatClicks] = useState(click)



    const changeObj = () => {
        setClick(catClicks)
        mainObj.name = name;
        mainObj.count = click
        mainObj.src = image

        // let newObj = { "name": "name", "nickName": mainObj.nickName, "src": image, "id": mainObj.id, "count": catClicks }
        // details[mainObj.name] = newObj.name
        // setMainObj(newObj)
        reset()
        setShow(false)
    }

    const reset = () => {
        setName("")
        setImage("")
        setCatClicks("")
    }
    const changeClicks = (e) => {
        setCatClicks(Number(e.target.value))
        console.log(catClicks)
    }

    useEffect(() => {
        setName(mainObj.name)
        setImage(mainObj.src)
        setCatClicks(click)

    }, [click])

    return (
        <>

            <div className=' w-[94%] mx-auto md:mx-0 md:w-[30rem] border-2 border-gray-400 mb-5 md:mb-20'>
                <div className=' float-right '><button onClick={() => setShow(false)} className='bg-red-600 hover:bg-red-400 px-2 py-1.5 w-10  text-white'>X</button></div>

                <div className='flex flex-col gap-4  mt-36  w-[97%] mx-auto'>
                    <div>
                        <label className="block mb-2 font-medium text-md text-black  ">Cat Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                    </div>

                    <div>
                        <label className="block mb-2 text-md font-medium text-black dark:text-white">Cat Image</label>
                        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                    </div>

                    <div>
                        <label className="block mb-2 text-md font-medium text-black dark:text-white">Cat Clicks</label>
                        <input type="text" value={catClicks} onChange={changeClicks} className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                    </div>
                    <div className='flex mx-auto gap-6 mb-4 md:mb-0'>
                        <button onClick={changeObj} className='bg-green-600 hover:bg-green-700 px-4 p-2 rounded-md text-white font-semibold'>Save</button>
                        <button onClick={reset} className='bg-red-500 hover:bg-red-600 text-white px-4 font-semibold p-2 rounded-md'>Clear</button>

                    </div>

                </div>


            </div>



        </>
    )
}

export default Form
