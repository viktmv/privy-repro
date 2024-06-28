import Image from "next/image";
import WithPrivy from "./WithPrivy";
import { Main } from "./Main";

export default function Home() {
  return (
	  <WithPrivy> 
      <div className="flex justify-center items-center mt-20">
          <Main />
      </div>
	  </WithPrivy>
  );
}
