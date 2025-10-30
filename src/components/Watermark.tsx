import watermarkImage from "@/assets/watermark.png";

export const Watermark = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <img 
        src={watermarkImage} 
        alt="Marca d'água - Gaiola aberta com pássaro"
        className="w-24 h-24 opacity-10 md:w-32 md:h-32"
      />
    </div>
  );
};
