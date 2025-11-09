const Marquee = () => {
  const items = ['FITNESS', 'YOGA', 'MEDITATION', 'STRENGTH', 'CARDIO', 'WELLNESS']
  
  return (
    <section className="relative py-8 bg-gradient-to-r from-accent-neon via-accent-cyan to-accent-pink overflow-hidden isolate animate-gradient">
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {/* First set of items */}
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className="inline-flex items-center shrink-0"
          >
            <span className="text-4xl md:text-6xl font-orbitron font-black text-black mx-8 select-none">
              {item}
            </span>
            <span className="text-4xl md:text-6xl text-black mx-8 select-none">•</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className="inline-flex items-center shrink-0"
          >
            <span className="text-4xl md:text-6xl font-orbitron font-black text-black mx-8 select-none">
              {item}
            </span>
            <span className="text-4xl md:text-6xl text-black mx-8 select-none">•</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee

