export default function ConsultationSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          Real Client Consultation
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img 
            src="/consult1.jpg" 
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
          />

          <img 
            src="/consult2.jpg" 
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
          />

          <img 
            src="/consult3.jpg" 
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
          />

        </div>

        <p className="text-center mt-10 text-lg text-gray-300">
          Private Consultation · Real Results · Trusted by Clients in Singapore
        </p>

      </div>
    </section>
  );
}
