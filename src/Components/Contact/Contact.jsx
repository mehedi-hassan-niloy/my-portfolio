

const Contact = () => {
    return (
        <div name="contact" className="w-full g-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className=" p-4 flex flex-col justify-center mx-auto max-w-screen-lg w-full h-full text-white">
             <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
             </div>
             <div className="flex justify-center items-center">
                <form className="flex flex-col w-full lg:w-1/2">
                 <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                 <input type="text" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none" />
                 <textarea name="Message" id=""  rows="10" placeholder="Type your Message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                </form>
             </div>
             <button className=" text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto hover:scale-110 duration-300">Let's Talk</button>
            </div>
        </div>
    );
};

export default Contact;