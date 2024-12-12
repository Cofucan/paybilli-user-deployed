import React from "react"

const QuickActivity = ({
    img,
    heading,
    text,
    onClick,
    animate = false,
    darkMode,
}) => {
    return (
        <div
            onClick={() => onClick()}
            className={
                animate
                    ? `${
                          !darkMode && "bg-transparent"
                      } flex gap-x-4 p-2 mb-3 items-center cursor-pointer border-[1px] border-[transparent] hover:border-[#FC00B5] hover:drop-shadow-[0_15px_10px_rgba(252,0,181,.1)] rounded-xl max-md:hover:bg-[#1F1B31] max-md:hover:border-none max-md:hover:drop-shadow-none bg-[#0a0325] animate-bounce-anim`
                    : `${
                          !darkMode && "bg-transparent"
                      } flex gap-x-4 p-2 mb-3 items-center cursor-pointer border-[1px] border-[transparent] hover:border-[#FC00B5] hover:drop-shadow-[0_15px_10px_rgba(252,0,181,.1)] rounded-xl max-md:hover:bg-[#1F1B31] max-md:hover:border-none max-md:hover:drop-shadow-none bg-[#0a0325]`
            }
        >
            <div
                className={`${
                    !darkMode && "bg-transparent"
                } border-[1px] bg-[#1F1B31] border-[#FC00B5] p-2 rounded-md object-contain`}
            >
                <img src={img} className="w-[40px] max-md:w-[30px]" />
            </div>

            <div className={!darkMode && "text-[#130F26]"}>
                <p className="text-inherit font-semibold text-[17px] max-md:text-[15px]">
                    {heading}
                </p>
                <p className="text-inherit text-[12px] opacity-60 max-md:text-[10px]">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default QuickActivity
