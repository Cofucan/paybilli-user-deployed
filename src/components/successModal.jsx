import React, { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners';

export default function SuccessModal(props) { 

    useEffect(()=> {
        if(props?.tab) { 
            setTimeout(() => {
                props.close(false); 
                props?.setTab(false)
              }, 2000);
        }
    }, [props?.tab])

    return (
        <>
            {!props?.tab ? (
                <div className=" w-full h-[50vh] flex items-center justify-center " >
                    <MoonLoader size={"50px"} />
                </div>
            ):
                <div className=" w-full h-[50vh] flex items-center justify-center " >
                    <div role='button' onClick={()=> props.close(false)} className=' w-[400px] flex flex-col text-center ' >
                        <h4 className=' text-[30px] font-bold ' >Successful</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non odio porttitor dignissim orci no</p>
                    </div>
                </div>
            }
        </>
    )
}
