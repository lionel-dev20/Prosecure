import { Cctv, Headset, RefreshCcw, ShieldCheck } from "lucide-react";

const Promise = () => {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between px-2 py-16 sm:py-3 sm:px-6 lg:px-8">
      <div className="flex mt-32 sm:mt-2 gap-1 sm:flex-col">

        <div className="flex items-center justify-around">
          <ShieldCheck className="w-20 h-20 mr-2 mt-4 text-[#a2185b3d] stroke-[0.85px]"/>
          <div>
        <h4 className="text-tlecolor text-[16px] font-semibold leading-[20px] sm:text-[14px]">
            Service premium
          </h4>
          <p className="text-ttcolor text-[12px]">
          Connectez vous contacter nous et obtenez votre solution sur mésure .
          </p>
          </div>
        </div>
        
        <span className="h-12 text-[#a2185b3d] border mt-8 mx-4 sm:hidden"></span>

        <div className="flex items-center justify-around">
          <Headset className="w-20 h-20 mr-2 mt-4 text-[#a2185b3d] stroke-[0.85px]"/>
          <div>
          <h4 className="text-tlecolor text-[16px] font-semibold leading-[20px] sm:text-[14px]">
            Support disponible
          </h4>
          <p className="text-ttcolor text-[12px]">
            Une équipe dévoué et toujours disponible à vous écouter à tout moment .
          </p>
        </div>
        </div>

        <span className="h-12 text-[#a2185b3d] border mt-8 mx-4 sm:hidden"></span>

        <div className="flex items-center justify-around">
          <Cctv className="w-20 h-20 mr-2 mt-4 text-[#a2185b3d] stroke-[0.85px]"/>
          <div>
        <h4 className="text-tlecolor text-[16px] font-semibold leading-[32px] sm:text-[14px]">
            Fourniture De Matériels
          </h4>
          <p className="text-ttcolor text-[12px]">
          Equipement sur mésure pour votre besoin disponible chez nous . 
          </p>
        </div>
        </div>
        <span className="h-12 text-[#a2185b3d] border mt-8 mx-4 sm:hidden"></span>


        <div className="flex items-center justify-around">
          <RefreshCcw className="w-20 h-20 mr-2 mt-4 text-[#a2185b3d] stroke-[0.85px]"/>
          <div>
        <h4 className="text-tlecolor text-[16px] font-semibold leading-[32px] sm:text-[14px]">
            Services Aprés Vente
          </h4>
          <p className="text-ttcolor text-[12px]">
          Fourniture installation et maintenance de vos équipement .
          </p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Promise;
