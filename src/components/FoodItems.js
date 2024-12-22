import React from "react";

const FoodItems = () => {
  return (
    <div id="cid-Recommended" className="relative">
      <div></div>
      <div className="relative my-6 mx-4">
        <button
          className="flex justify-between pr-4 text-xl mb-6"
          data-cy="recommended-open"
          aria-label="Category: Recommended, 15 items available"
          aria-expanded="true"
          data-role="category-heading"
        >
          <h3 className="font-bold text-lg leading-5 tracking-tight text-gray-900">
            Recommended (15)
          </h3>
          <div className="transform rotate-180">
            <svg aria-hidden="true" height="16" width="16" className="h-4 w-4">
              <use xlinkHref="/core/sprite-Dkz5JHnu.svg#chevronDown16" />
            </svg>
          </div>
        </button>
        <div>
          <div>
            <div data-testid="normal-dish-item" className="p-1">
              <div className="flex justify-between">
                <p className="sr-only" tabIndex="0">
                  Veg Item. Combo for 1 Veg. Costs: 359 rupees, Description:
                  Serves 1 | Combo for one (Rice/Noodle Bowl with choice of Veg
                  Gravy, Veg Momos & Drinks) This item is customizable. Swipe
                  right to add item to cart.
                </p>
                <div>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      height="16"
                      width="16"
                      className="h-4 w-4"
                    >
                      <use xlinkHref="/food/sprite-CiiAtHUR.svg#vegVeg16" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold text-gray-700">
                    Combo for 1 Veg
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg font-semibold text-green-500">
                      ₹359
                    </div>
                  </div>
                  <div className="flex items-end cursor-pointer">
                    <div className="text-sm text-gray-600">
                      Serves 1 | Combo for one (Rice/Noodle Bowl with choice of
                      Veg Gravy, Veg Momos & Drinks)
                    </div>
                  </div>
                </div>
                <div className="relative ml-16">
                  <button
                    aria-label="See more information about Combo for 1 Veg"
                    className="relative"
                  >
                    <img
                      alt="Combo for 1 Veg"
                      className="object-cover rounded-xl"
                      height="144"
                      width="156"
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/3e4f7ca32bf517b390f1cb3205b892e4"
                    />
                  </button>
                  <div className="relative left-1/2 bottom-7 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="flex justify-center items-center flex-col">
                        <div className="inline-flex justify-between items-center w-30 h-10 rounded-lg bg-white border border-gray-300 shadow-md">
                          <button className="h-full flex items-center justify-center text-xl text-gray-700">
                            −
                          </button>
                          <button className="h-full flex items-center justify-center text-xl text-gray-700">
                            Add
                          </button>
                          <button className="h-full flex items-center justify-center text-xl text-gray-700">
                            1
                          </button>
                          <button className="h-full flex items-center justify-center text-xl text-gray-700">
                            +
                          </button>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                          Customisable
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 my-5"></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="h-4 border-b-4 border-gray-100"></div>
      <div
        className="absolute top-[-52px] opacity-0 w-0 h-0"
        data-scrollpoint="true"
      ></div>
    </div>
  );
};

export default FoodItems;
