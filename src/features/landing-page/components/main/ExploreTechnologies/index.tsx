export default function ExploreTechnologies() {
  return (
    <section>
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold">
          Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
        </h1>
        <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-9 grid grid-cols-3">

        </div>

        <div className="col-span-3 col-start-10">
          <StackSelector />
        </div>
      </div>
    </section>
  );
}
