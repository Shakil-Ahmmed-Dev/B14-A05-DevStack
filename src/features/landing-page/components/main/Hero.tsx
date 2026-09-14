export default function Hero() {
  return (
    <section className="grid grid-cols-12">
      <div className="col-span-6 col-start-1">
        <div className="max-w-xl">
          <h1 className="text-6xl font-inter font-extrabold text-[60px]">
            Build Your Ideal
          </h1>
          <h1 className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] via-50% to-[#7C3AED] bg-clip-text text-transparent text-6xl font-inter font-extrabold text-[60px]">
            Development Stack
          </h1>
          <br />
          <p className="text-[#475569] text-[18px]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        <br />
        <br />
        <div className="flex gap-2">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] px-4 py-2 text-white rounded-lg text-sm font-semibold">
            Explore Technologies
          </button>
          <button className="px-4 py-2 text-sm outline outline-[#E5E7EB] rounded-lg">Learn More</button>
        </div>
      </div>

      <div className="col-start-9 col-span-4">
        <img src="./hero.png" alt="" />
      </div>
    </section>
  );
}
