import { Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
import {sectionData} from '../constant';


const FeatureList = ({ features }) => (
  <div className="space-y-10">
    {features.map((feature, index) => (
      <div className="flex items-center gap-4" key={index}>
        <Check className="text-3xl text-indigo-500" />
        <span className="text-xl">{feature}</span>
      </div>
    ))}
  </div>
);


const ThirdSection = ({ sectionData }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-5/6 md:rounded-[80px]">
        {/* Flex container adjustment */}
        <div className="flex flex-col md:flex-row md:space-x-10 md:px-20 px-5">
          
          {/* Hide Image Section on mobile using the hidden and md:block classes */}
          <div className="hidden md:block md:w-2/5 lg:w-2/5 p-10">
            <img
              src={sectionData.image}
              alt="section image"
              className="rounded-md w-full object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="text-white flex flex-col space-y-10 w-full md:w-1/2 lg:w-3/5 px-4 py-10">
            <h2 className="text-2xl md:text-3xl">{sectionData.tagline}</h2>
            <h1 className="text-5xl md:text-7xl pb-4 md:pb-0">{sectionData.title}</h1>
            <p className="text-xl md:text-3xl">{sectionData.subtitle}</p>
      
          </div>
        </div>
      </div>
    </div>
  );
};


export default ThirdSection;

