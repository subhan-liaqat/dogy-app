import { SquarePlus } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { cn } from "../lib/utils";

export default function DogDetails() {
  const [sensivity, setSensitivity] = useState({
    noise: false,
    car: false,
    none: false,
  });

  const [eneryLevel, setEnergyLevel] = useState("");

  const handleEnergyLevelChange = (event) => {
    setEnergyLevel(event.target.value);
  };

  const [dogSize, setDogSize] = useState("");

  const handleDogSizeChange = (event) => {
    setDogSize(event.target.value);
  };

  const toggleSensitivity = (key) => {
    setSensitivity((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <header className="flex items-center gap-3 mb-4">
        <div className="w-14 md:w-20 md:max-w-20">
          <img
            src={logo}
            alt="dogy logo"
            className="object-cover w-full h-full"
          />
        </div>
        <h6 className="text-foreground-col  font-medium md:text-md">
          Dogy is here to serve you
        </h6>
      </header>

      <form onSubmit={handleFormSubmit} className=" flex flex-col h-full">
        <fieldset>
          <legend>What size is your dog?</legend>

          <div className="flex items-center gap-5">
            <label className=" capitalize">
              <input
                type="radio"
                name="dog-size"
                id="small"
                value="small"
                className="mr-2"
                checked={dogSize === "small"}
                onChange={handleDogSizeChange}
              />
              small
            </label>
            <label className="capitalize">
              <input
                type="radio"
                name="dog-size"
                id="medium"
                value="medium"
                className="mr-2"
                checked={dogSize === "medium"}
                onChange={handleDogSizeChange}
              />
              medium
            </label>
            <label className="capitalize">
              <input
                type="radio"
                name="dog-size"
                id="big"
                value="big"
                className="mr-2"
                checked={dogSize === "big"}
                onChange={handleDogSizeChange}
              />
              big
            </label>
          </div>
        </fieldset>

        <fieldset className="my-5">
          <legend>What energy level is your dog?</legend>

          <div className="flex items-center gap-5">
            <label className="capitalize">
              <input
                type="radio"
                name="dog-energy"
                id="low"
                value="low"
                className="mr-2"
                checked={eneryLevel === "low"}
                onChange={handleEnergyLevelChange}
              />
              low
            </label>
            <label className="capitalize">
              <input
                type="radio"
                name="dog-energy"
                id="medium"
                value="medium"
                className="mr-2"
                checked={eneryLevel === "medium"}
                onChange={handleEnergyLevelChange}
              />
              medium
            </label>
            <label className="capitalize">
              <input
                type="radio"
                name="dog-energy"
                id="high"
                value="high"
                className="mr-2"
                checked={eneryLevel === "high"}
                onChange={handleEnergyLevelChange}
              />
              high
            </label>
          </div>
        </fieldset>

        <div className="space-y-3">
          <p className="">Is your dog reactive?</p>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => toggleSensitivity("noise")}
              className={cn(
                reactiveButtonStyles,
                sensivity.noise ? "bg-state-success/60" : ""
              )}
              type="button"
            >
              Reactive to noises
              <SquarePlus className="" color="#021927" size={"13.3px"} />
            </button>

            <button
              onClick={() => toggleSensitivity("car")}
              className={cn(
                reactiveButtonStyles,
                sensivity.car ? "bg-state-success/60" : ""
              )}
              type="button"
            >
              Reactive to cars
              <SquarePlus className="" color="#021927" size={"13.3px"} />
            </button>

            <button
              onClick={() => toggleSensitivity("none")}
              className={cn(
                reactiveButtonStyles,
                sensivity.none ? "bg-state-success/60" : ""
              )}
            >
              Non-reactive
              <SquarePlus className="" color="#021927" size={"13.3px"} />
            </button>
          </div>
        </div>

        <button
          className="mt-auto bg-state-success border-2 border-[#A4BA60] text-foreground-col font-medium md:text-lg rounded-xl"
          type="submit"
        >
          Plan your work
        </button>
      </form>
    </>
  );
}

const reactiveButtonStyles =
  "flex items-center gap-2 bg-[#F8F3DF] border-2 border-[#F2EBD8] rounded-[20px] px-2 py-1";
