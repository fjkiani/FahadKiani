import { Check } from "lucide-react";

const FirstSection = ({ projectDetails }) => {
  const { title, subtitle, description, videoSrc, benefits } = projectDetails;

  return (
    <div className="py-10 md:py-20">
      <div className="space-y-4 px-5 md:px-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center">
          {title}
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-center">
          {subtitle}
        </h2>
        <p className="text-base md:text-xl lg:text-2xl font-light text-gray-600 leading-normal text-center max-w-3xl mx-auto">
          {description}
        </p>

        {/* ...Other static content here... */}

        <div className="pt-10 md:pt-20 flex justify-center">
          <video
            className="rounded-xl md:rounded-xl shadow-lg w-full max-w-5xl mx-auto"
            controls
            autoPlay
            muted
            loop
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Benefits List (Uncomment if needed) */}
        {/* <div className="flex justify-center">
          <div className="flex flex-col space-y-6 py-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 items-center">
                <div className="bg-green-200 w-12 h-12 flex items-center justify-center rounded-full">
                  <Check className="text-3xl text-green-600" />
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FirstSection;
