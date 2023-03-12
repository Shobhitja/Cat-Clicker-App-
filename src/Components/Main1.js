
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import details from '../details.json'
import ImageGallery from './ImageGallery';
import Form from './Form';

const Main = () => {

    const [age, setAge] = useState("infant")
    const [mainObj, setMainObj] = useState(details[0])
    const [click, setClick] = useState(mainObj.count)
    const [show, setShow] = useState(false)




    useEffect(() => {
        if (click >= 0 && click <= 5) {
            setAge('infant')
        } else if (click >= 6 && click <= 12) {
            setAge("child")
        }
        else if (click >= 13 && click <= 25) {
            setAge("young")
        }
        else if (click >= 26 && click <= 40) {
            setAge("middle-age")
        } else if (click >= 41 && click <= 60) {
            setAge("old")
        }
        else if (click >= 61) {
            setAge("very old")
        } else {
            setAge('')
        }

    }, [click])




    return <>
        <div className=' flex flex-col md:flex-row  md:gap-10 gap-10 mt-6 md:mt-0'>

            <Sidebar mainObj={mainObj} setMainObj={setMainObj} click={click} setClick={setClick} />



            <div className='flex  flex-col md:flex-row gap-10'>

                <div className='mx-auto md:mx-0'>
                    <div onClick={() => setClick(click + 1)} class="max-w-xs md:max-w-md bg-white rounded-lg border-2 border-gray-500 shadow-2xl mt-6 ">

                        <div className='flex flex-col mt-4'>
                            <span className='text-xl font-bold text-center'>{mainObj.name}</span>
                            <span className='text-lg text-gray-600 font-bold text-center'>No of times clicked : {click} </span>
                        </div>
                        <div className='mt-4'>
                            <img class="rounded-t-lg w-full  h-96" src={mainObj.src} alt="" />
                        </div>
                        <div class="p-5 flex flex-col">

                            <span className='text-lg font-bold text-center'>{mainObj.nickName}</span>

                            <span className='text-lg font-bold text-center'>{age} </span>
                        </div>
                    </div>
                </div>

                {
                    !show ? <button onClick={() => setShow(true)} className='bg-green-500 mt-6 hover:bg-green-600   px-2 h-10  w-36 md:w-auto mx-auto md:mx-0 rounded-md text-white font-semibold'>Open Form</button> : ""
                }

                {
                    show ? <Form mainObj={mainObj} setMainObj={setMainObj} click={click} setClick={setClick} setShow={setShow} /> : ""
                }

            </div>




        </div >

        <ImageGallery mainObj={mainObj} setMainObj={setMainObj} click={click} setClick={setClick} />


    </>
}

export default Main
