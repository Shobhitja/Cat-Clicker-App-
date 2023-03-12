import React, { useState } from 'react'
import details from '../details.json'

const Sidebar = ({ click, setMainObj, mainObj, setClick }) => {
    const [newArray, setNewArray] = useState(details)

    const getInfo = (index) => {
        const res = newArray.find((curElem) => {
            return index == curElem.id
        })
        setMainObj(res)
        setClick(res.count)
        mainObj.count = click;

    }

    return (
        <div className='w-[90%]  mx-auto md:mx-0 md:w-auto h-full border-2 border-gray-500 bg-blue-100'>

            <ul className='' >

                {
                    details.map((curElem, id) => {
                        return <>
                            <li onClick={() => { getInfo(id) }} key={id} className="cursor-pointer text-black font-semibold p-4 hover:text-white hover:bg-blue-500 mt-1 rounded-md flex items-center justify-between gap-x-5 border-2 border-gray-400 ">
                                <span>{curElem.name}</span>
                                <span className='bg-gray-500 font-medium text-white rounded-md p-1'>{curElem.id == mainObj.id ? click : details[curElem.id].count}</span>
                            </li>

                        </>

                    })
                }

            </ul>
        </div >

    )
}

export default Sidebar
