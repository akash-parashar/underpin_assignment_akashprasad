import Image from "next/image";

const imageArray = Array(8).fill("/Frame7.png"); 

export default function Gamecards() {
  return (
    <div className="sm:ml-28 ml-2  sm:mt-10 mt-5">
      <div className="min-w-full">
        <div className="sm:w-auto sm:h-auto flex overflow-x-auto sm:space-x-4 sm:p-5 snap-x snap-mandatory scrollbar-hide sm:mb-0 ">
          {imageArray.map((src, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              <Image
                src={src}
                alt={`Image ${index}`}
                width={300}
                height={100}
                className="w-40 sm:w-[300px] "
              />
            </div>
          ))}
        </div>
        <div className="sm:w-auto sm:h-auto flex overflow-x-auto sm:space-x-4 sm:p-5 snap-x snap-mandatory scrollbar-hide sm:mb-0 mt-1">
          {imageArray.map((src, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
             <Image
                src={src}
                alt={`Image ${index}`}
                width={300}
                height={100}
                className="w-40 sm:w-[300px] "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
