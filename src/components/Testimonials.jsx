import Individual from "./Individual-testimonial";

export default function Testimonials() {
  return (
    <div>
      <div className="flex flex-col items-center w-3/4 mx-auto py-28 space-y-16">
        <p className="font-secondary text-[#a7abae] tracking-wider text-xl uppercase font-black">Client Testimonials</p>
        <div className="sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 flex flex-col space-y-16">
          <Individual photo={'../Assets/image-emily.jpg'} name={'Emily R'} position={'Marketing Director'}/>
          <Individual photo={'../Assets/image-thomas.jpg'} name={'Thomas S'} position={'Cheif Operating Officer'}/>
          <Individual photo={'../Assets/image-jennie.jpg'} name={'Jennie F'} position={'Bussiness Owner'}/>
        </div>
      </div>
    </div>
  );
}
