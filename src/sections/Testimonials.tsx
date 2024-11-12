import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="pb-12 md:pb-20 lg:pb-32 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="py-12 px-6 bg-[#27322F]/20 rounded-3xl backdrop-blur-sm"
            >
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#3D544D] mb-6">
                <img src="./images/comma.png" width={16} alt="" />
              </div>
              <p className="mb-6">{testimonial.text} </p>

              <div className="flex gap-4">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
