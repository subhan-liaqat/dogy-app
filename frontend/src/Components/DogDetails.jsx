import { format } from "date-fns";
import { Calendar as CalendarIcon, SquarePlus } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.svg";
import useCoordinates from "../hooks/useCoordinates";
import { calculateAge, cn } from "../lib/utils";
import Loader from "./Loader";
import { DogyContext } from "./map/DogyContext";
import { Button } from "./ui/Button";
import { Calendar } from "./ui/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";

const baseUrl = import.meta.env.VITE_BASE_URL;

export default function DogDetails() {
  const { coordinates } = useCoordinates();

  const [sensitivity, setSensitivity] = useState({
    noise: false,
    car: false,
    none: false,
  });
  const [pending, setPending] = useState(false);
  const [energyLevel, setEnergyLevel] = useState("");

  const navigate = useNavigate();

  const handleEnergyLevelChange = (event) => {
    setEnergyLevel(event.target.value);
  };

  const [dogSize, setDogSize] = useState("");

  const [age, setAge] = useState("");
  const { setData } = useContext(DogyContext);

  const handleDogSizeChange = (event) => {
    setDogSize(event.target.value);
  };

  const toggleSensitivity = (key) => {
    setSensitivity((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!age || !dogSize || !energyLevel) {
      toast.error(
        "please provide information about your dog's age,size and energy level"
      );
      return;
    }

    const computedAge = calculateAge(age);

    const requestData = {
      DogeSize: dogSize,
      DogyEnergyLevel: energyLevel,
      DogySensitivity: sensitivity,
      DogyAge: computedAge.toString(),
      Latitude: coordinates.latitude,
      Longitude: coordinates.longitude,
    };

    try {
      setPending(true);
      const response = await fetch(`${baseUrl}dog-profile/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();

        setData(data);
        navigate("/assistant");
      } else {
        console.log(await response.json());
        throw new Error("Failed to submit dog details");
      }
    } catch (error) {
      toast.error("Error: failed to submit dog information");
    } finally {
      setPending(false);
    }
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

        <div className="mt-5 space-y-2">
          <p>How old is your dog?</p>
          <DogAge age={age} setAge={setAge} />
        </div>
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
                checked={energyLevel === "low"}
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
                checked={energyLevel === "medium"}
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
                checked={energyLevel === "high"}
                onChange={handleEnergyLevelChange}
              />
              high
            </label>
          </div>
        </fieldset>

        <div className="space-y-3 mb-6">
          <p className="">Is your dog reactive?</p>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => toggleSensitivity("noise")}
              className={cn(
                reactiveButtonStyles,
                sensitivity.noise ? "bg-state-success/60" : ""
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
                sensitivity.car ? "bg-state-success/60" : ""
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
                sensitivity.none ? "bg-state-success/60" : ""
              )}
              type="button"
            >
              Non-reactive
              <SquarePlus className="" color="#021927" size={"13.3px"} />
            </button>
          </div>
        </div>

        <button
          className="mt-auto bg-state-success border-2 border-[#A4BA60] text-foreground-col font-medium md:text-lg flex gap-2 items-center rounded-xl justify-center"
          type="submit"
        >
          {pending ? "Planning..." : " Plan your walk"}
          {pending ? <Loader /> : null}
        </button>
      </form>
    </>
  );
}

const DogAge = ({ age, setAge }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={cn("w-fit gap-5")}>
          {age ? format(age, "PPP") : <span>Birthdate</span>}
          <CalendarIcon className="" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Calendar mode="single" selected={age} onSelect={setAge} initialFocus />
      </PopoverContent>
    </Popover>
  );
};

const reactiveButtonStyles =
  "flex items-center gap-2 bg-[#F8F3DF] border-2 border-[#F2EBD8] rounded-[20px] px-2 py-1";
