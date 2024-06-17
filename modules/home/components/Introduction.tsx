import TypeAnimation from '@/common/components/elements/TypingAnimation';

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
        <TypeAnimation sequence={["Hi, I'm Dhany Hidayat", "Hi, I'm Frontend Developer"]} delay={3000} />
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Remote Worker</li>
          <li>
            Based in Sidoarjo, Indonesia <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          Undergraduate Information Systems student at Brawijaya University who is a enthusiast in Software Engineer
          with a strong emphasis on frontend development. Proficient in Javascript, Typescript, React JS, Next JS and
          other elements of web technology.
        </p>
      </div>
    </section>
  );
}
