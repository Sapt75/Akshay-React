import React from "react";

const ShimmerCard = () => {
  return (
    <div className="grid grid-cols-4">
      {Array.from({length: 8}).map((_, index) => {
        return (
          <div key={index} className="flex flex-wrap">
            <div className="p-4 flex-1 min-w-[300px] flex flex-col">
              <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                {/* Shimmer effect placeholder for the image */}
                <div className="relative w-full h-[14rem] bg-gradient-to-r from-gray-300 to-gray-200 animate-shimmer"></div>

                <div className="p-6 flex-1 space-y-4">
                  {/* Shimmer effect for the text (name) */}
                  <div className="w-3/4 h-6 bg-gradient-to-r from-gray-300 to-gray-200 animate-shimmer"></div>

                  <div className="flex items-center space-x-2">
                    {/* Shimmer effect for the icon */}
                    <div className="w-5 h-5 bg-gradient-to-r from-gray-300 to-gray-200 animate-shimmer rounded-full"></div>

                    {/* Shimmer effect for the rating */}
                    <div className="w-16 h-6 bg-gradient-to-r from-gray-300 to-gray-200 animate-shimmer"></div>

                    {/* Shimmer effect for the delivery time */}
                    <div className="w-20 h-6 bg-gradient-to-r from-gray-300 to-gray-200 animate-shimmer"></div>
                  </div>

                  {/* Shimmer effect for the cuisines text */}
                  <div className="w-2/3 h-6 bg-gradient-to-r from-gray-300 to-gray-200 animate-shimmer"></div>

                  {/* Shimmer effect for the area name */}
                  <div className="w-1/2 h-6 bg-gradient-to-r from-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShimmerCard;
