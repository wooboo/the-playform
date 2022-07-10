import Image from "next/image";

export type HeroProps = { image: string; name: string; role: string };
export const Hero: React.FC<HeroProps> = ({ image, name, role }) => {
  return (
    <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
      <div className="px-6">
        <div className="relative w-32 h-32 mx-auto rounded-full shadow-lg">
          <Image
            layout="fill"
            objectFit="contain"
            alt="Hero profile image"
            src={image}
            className="rounded-full"
          />
        </div>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm font-semibold uppercase text-slate-400">
            {role}
          </p>
          <div className="mt-6">
            <button
              className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
              type="button"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="w-8 h-8 mb-1 mr-1 text-white rounded-full outline-none bg-sky-400 focus:outline-none"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="w-8 h-8 mb-1 mr-1 text-white rounded-full outline-none bg-slate-700 focus:outline-none"
              type="button"
            >
              <i className="fab fa-instagram"></i>
            </button>
            <button
              className="w-8 h-8 mb-1 mr-1 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
            <button
              className="w-8 h-8 mb-1 mr-1 text-white rounded-full outline-none bg-sky-600 focus:outline-none"
              type="button"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
