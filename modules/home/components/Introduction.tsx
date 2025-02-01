import TypeAnimation from '@/common/components/elements/TypingAnimation';

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-bricolage">
        <TypeAnimation
          sequence={["Hi, I'm Dhany Hidayat", "Hi, I'm Frontend Developer", "Hi, I'm Web Developer"]}
          delay={3000}
        />
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>
            Based in Sidoarjo, Indonesia <span className="ml-1">🇮🇩</span>
          </li>
          <li>Working remotely</li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          I&apos;m a skilled front-end developer with expertise in React.js and Next.js, dedicated to translating design
          concepts into clean, maintainable code. I excel at crafting responsive, pixel-perfect web applications that
          provide an exceptional user experience while reflecting your brand&apos;s identity and innovation. With a
          strong focus on attention to detail, I ensure that every project is delivered with seamless UI/UX integration
          and aligns perfectly with your vision.
        </p>
      </div>
    </section>
  );
}
