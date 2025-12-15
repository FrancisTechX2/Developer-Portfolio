function Quote() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative quotation marks */}
        <div className="absolute -top-8 -left-8 text-[#A020F0] text-8xl font-bold opacity-50 z-0">"</div>
        <div className="absolute -bottom-8 -right-8 text-[#A020F0] text-8xl font-bold opacity-50 z-0">"</div>
        
        <div className="border-2 border-white p-6 sm:p-8 md:p-12 relative z-10 bg-black">
          <p className="text-white text-base sm:text-lg md:text-xl text-center mb-6 font-mono">
          "The only way to do great work is to love what you do."
          </p>
          <p className="text-white text-sm sm:text-base text-right font-mono">
          - Steve Jobs
          </p>
        </div>
      </div>
    </section>
  )
}

export default Quote

