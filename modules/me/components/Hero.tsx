import Image from '@/common/components/elements/Image';
import { PROFILE_URL } from '@/common/constant';

const Hero = () => {
  const coverImage = "url('/shiny_card_animated.svg'), url('/cover.webp')";

  return (
    <header className="flex flex-col items-center justify-center">
      <div
        className="w-full h-28 md:h-40 md:rounded-t-lg bg-cover"
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{
          backgroundImage: coverImage,
          backgroundPosition: 'center, center'
        }}
      ></div>
      <div
        className="rounded-full bg-white border border-2 -mt-[60px]"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
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
        <div
          className="flex flex-col justify-center items-center space-y-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-1 items-center text-center">
            <h1 className="text-2xl font-medium">Achmad Fauzian Dhany Hidayat</h1>
            <div className="flex gap-2 text-[15px] text-neutral-500">
              <span>Malang, Indonesia</span>
              <span className="text-neutral-300">•</span>
              <span>he/him</span>
            </div>
          </div>
          <p className="text-center text-neutral-600 text-[15px] md:text-base mx-1.5 leading-relaxed">
            Undergraduate Information Systems student at Brawijaya University who is a enthusiast in Software Engineer
            with a strong emphasis on frontend development.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
