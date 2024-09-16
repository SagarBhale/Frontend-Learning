import React from "react";

function CardEventsHandling() {
    const data =[
    {name:"Mahiya Ve",
     description:"Lorem lore tum kyik ns kjdfue ndi skjdjf s djfgliied sjjfgkfg skkjfg skdjfg",
    },
    {name:"Janiya",
     description:"Lorem lore tum kyik ns kjdfue ndi skjdjf s djfgliied sjjfgkfg skkjfg skdjfg",
    },
    {name:"Tu hi hakeeqat",
     description:"Lorem lore tum kyik ns kjdfue ndi skjdjf s djfgliied sjjfgkfg skkjfg skdjfg",
    }
    ]

    const handleClickDownload = ()=>{alert("Chal rha he")};

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center">
    {data.map((item,index)=>
        
        <div className="w-70 song px-3 py-2 bg-zinc-100 rounded-md">
        <h3 className="font-semibold text-xl">{item.name}</h3>
        <p className="text-xm mt-2">
          {item.description}
        </p>
        <button onClick={handleClickDownload} className="px-2 py-1 mt-2 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-mt-3">
          Download Now
        </button>
      </div>
    )}
    </div>
  );
}

export default CardEventsHandling;
