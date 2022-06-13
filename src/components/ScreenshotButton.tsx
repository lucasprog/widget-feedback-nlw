import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from './Loading';

interface ScreenshotButtonProps{
  screenshot : string | null,
  onScreenshotTook : (screenshot: string) => void,
}

export  function ScreenshotButton({
  onScreenshotTook, 
  screenshot} : ScreenshotButtonProps){

  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot(){    

    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenshotTook(base64Image);

    setIsTakingScreenshot(false);
  }

  if( screenshot ) {
    return (
      <button 
        type="button"
        className="p-1 w-10 h-10 rounded-md -border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage : `url(${screenshot})`
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    )
  }
  return (
    <>
     <button
        type="button"
        onClick={handleTakeScreenshot}
        className="button-camera">
            { isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6" /> }
      </button>
    </>
  );
}