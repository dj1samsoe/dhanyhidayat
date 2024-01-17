import Image from '@/common/components/elements/Image';
import { PROFILE_URL } from '@/common/constant';

const Hero = () => {
  const coverImage = "url('/shiny_card_animated.svg')";

  return (
    <header className="flex flex-col items-center justify-center">
      <div
        className="w-full h-28 md:h-40 md:rounded-t-lg bg-cover "
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{
          backgroundImage: coverImage,
          backgroundPosition: 'center, center',
          background: 'radial-gradient(circle, rgba(36,58,78,1) 15%, rgba(125,190,172,1) 100%)'
        }}
      ></div>
      <div className="rounded-full bg-white border-2 -mt-[60px]" data-aos="zoom-in-down" data-aos-duration="1000">
        <Image
          src={PROFILE_URL}
          alt="Dhany Hidayat"
          width={100}
          height={100}
          rounded="rounded-full"
          className="lg:hover:scale-105"
        />
      </div>
      <div className="pt-5 px-8">
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="flex flex-col gap-1 items-center text-center">
            <h1 className="text-2xl font-medium">Achmad Fauzian Dhany Hidayat</h1>
            <div className="flex gap-2 text-[15px] text-neutral-500 dark:text-neutral-200">
              <span>Sidoarjo, Indonesia</span>
              <span className="text-neutral-300 dark:text-neutral-200">•</span>
              <span>he/him</span>
            </div>
          </div>
          <p className="text-center text-neutral-600 dark:text-neutral-300 text-[15px] md:text-base mx-1.5 leading-relaxed">
            Undergraduate Information System student at Brawijaya University | Frontend Developer Enthusiast
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
