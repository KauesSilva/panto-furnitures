import materials from "/public/assets/sections-img/materials.png";
import { HiArrowLongRight } from "react-icons/hi2";

import Image from "next/image";

function Materials(): JSX.Element {
  return (
    <section id="materials" className="flex min-h-screen w-full items-center justify-around bg-white py-12 lg:flex-col-reverse lg:px-4">
      <div className="flex max-w-[556px] flex-col gap-5 ">
        <small className="text-lg font-light uppercase text-amber">
          EXPERIENCES
        </small>
        <h2 className="overflow-hidden text-4xl font-semibold text-obsidian">
          We Provide You The Best Experience
        </h2>
        <p className="text-lg font-light text-obsidian ">
          You don&apos;t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <div className="mt-1 flex items-center">
          <a className="text-sm font-medium text-amber" href="#">
            More Info
          </a>
          <HiArrowLongRight className="h-6 w-12 text-amber" />
        </div>
      </div>
      <div>
        <Image
          src={materials}
          width={629}
          height={445}
          alt="Image"
          className="md:h-[326px] md:w-[375px]"
        />
      </div>
    </section>
  );
}

export default Materials;
