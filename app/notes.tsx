<section className="mb-10">
      <div className="h-[500px] w-auto object-cover overflow-hidden relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="max-w-full max-h-full h-full w-auto lg:h-auto lg:w-full object-cover"
          src="/video.mp4"
        ></video>
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="absolute inset-0 z-20 flex items-start flex-col  text-white  gap-2 ml-4 justify-end pb-6 lg:max-w-[60rem] lg:pl-10">
          <h1 className="text-[36px] lg:text-[70px] font-bold">
            Web development for digitally-driven businesses
          </h1>
          <ul className="flex flex-col list-disc pl-8">
            <li>No page builders</li>
            <li>No wordpress</li>
          </ul>
          <p className="pr-4 text-wrap lg:max-w-[40rem] mb-2">
            We build 100% hand-coded websites that are lightning-fast,
            mobile-optimized, and SEO-ready — starting at $120/mo
          </p>
          <Button className="lg:px-10 lg:py-6 lg:text-lg">
            <Link href="/contact">Get started</Link>Add commentMore actions
          </Button>
        </div>
      </div>
    </section>