export default function ImageContent() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-3">
      <div className="flex flex-col lg:p-36 md:pt-5 md:space-y-4 lg:space-y-8">
        <p className="lg:heading font-secondary font-black text-4xl text-[#23303e] text-center">
          Transform your brand
        </p>
        <p className="sm:text-[#5a636c] text-center text-sm text-[#5a636c] md:text-base">
          We are a full service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you
        </p>
        <p className="sm:learn-section font-secondary uppercase tracking-wider text-lg text-center cursor-pointer text-[#23303e] hover:underline decoration-4 decoration-yellow-400">
          Learn more
        </p>
      </div>
      <div>
        <img src="./Assets/image-transform.jpg" className="w-full" />
      </div>
      <div>
        <img src="./Assets/image-stand-out.jpg" className="w-full" />
      </div>
      <div className="flex flex-col md:space-y-4 md:pt-5 lg:p-36 lg:space-y-8">
        <p className="lg:heading font-secondary font-black text-4xl text-[#23303e] text-center">
          Stand out to the right audience
        </p>
        <p className="sm:text-[#5a636c] text-center text-sm text-[#5a636c]">
          Using a collabrative formula of designers,researchers,photographers,
          videographers, and copywriters, we'll build and extend your brand in
          digital places
        </p>
        <p className="sm:learn-section font-secondary uppercase tracking-wider text-lg text-center cursor-pointer text-[#23303e] hover:underline decoration-4 decoration-red-400">
          Learn More
        </p>
      </div>
      <div className="bg-[url('../Assets/image-graphic-design.jpg')] bg-cover sm:relative sm:h-auto h-96 ">
        <div className="flex flex-col sm:px-20 text-center sm:absolute sm:bottom-36 sm:my-0 my-52">
          <p className="font-secondary text-3xl text-[#25564b] py-4">
            Graphic Design
          </p>
          <p className="text-[#25564b] text-center">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention
          </p>
        </div>
      </div>
      <div className="bg-[url('../Assets/image-photography.jpg')] bg-cover sm:relative sm:h-auto h-96">
        <div className="flex flex-col px-20 text-center sm:absolute sm:bottom-36 sm:my-0 my-52">
          <p className="font-secondary text-3xl text-[#25564b] py-4">
            Photography
          </p>
          <p className="text-[#25564b] text-center">
            Increase the creadibility by getting the most stunning, high quality
            photos that improve your business image
          </p>
        </div>
      </div>
    </div>
  );
}
