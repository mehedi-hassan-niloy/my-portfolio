import img from '../../assets/img/myphoto.png'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
      <div >
          <div  name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
                <div data-aos="zoom-in" className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl font-bold text-orange-800 sm:4xl'>I am Mehedi Hassan Niloy.</h2>
                    <h2 className='text-3xl font-bold text-white sm:7xl'>MERN Stack Developer</h2>
                    <p className='max-w-md py-4 text-gray-300'>I am a MERN Stack developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent web page that imporves the live those around me.</p>
                    <div>
                        <button className='flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portfolio<span className='duration-300 group-hover:rotate-90'><MdKeyboardArrowRight size={25}/></span>
                        </button>
                    </div>
                </div>
                <div data-aos="zoom-in">
                    <img className='w-2/3 mx-auto rounded-2xl lg:w-2/3 ' src={img} alt="" />
                </div>
            </div>

        </div>
      </div>
    );
};

export default Home;