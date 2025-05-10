import { useState, useEffect } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = '<Hello World/>, This is Aditi!';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#010101] text-[#d9bbbb] flex flex-col items-center justify-center overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute w-full h-full -z-10">
        <div className="absolute top-10 left-20 w-40 h-40 bg-[#f3dbdb] rounded-full opacity-30 animate-float blur-2xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#F2D0A4] rounded-full opacity-20 animate-float2 blur-xl" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#D1C7E0] rounded-full opacity-25 animate-float3 blur-2xl" />
      </div>

      {/* Typing animation */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading bar */}
      <div className="w-[200px] h-[2px] bg-[#F2D0A4] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#FAD1D1] shadow-[0_0_15px_#FAD1D1] animate-loading-bar absolute"></div>
      </div>
    </div>
  );
};
