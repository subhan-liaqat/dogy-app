import { Loader as Spinner } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex gap-2 justify-center items-center capitalize h-full">
      <Spinner className="animate-spin" />
    </div>
  );
}
