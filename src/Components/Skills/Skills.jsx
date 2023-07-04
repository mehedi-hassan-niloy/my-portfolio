import img1 from '../../assets/img/css.png'
import img2 from '../../assets/img/github.png'
import img3 from '../../assets/img/html.png'
import img4 from '../../assets/img/javascript.png'
import img5 from '../../assets/img/nextjs.png'
import img6 from '../../assets/img/node.png'
import img7 from '../../assets/img/react.png'
import img8 from '../../assets/img/tailwind.png'

const Skills = () => {
    return (
        <div name= 'skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex felx-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6'>My Skills this technoligies</p>
                </div>
                <div className='w-full grid grid-cols-3 sm:grid-col gap-8 py-8 px-12 sm:px-0 lg:pt-32'>
                <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={img3} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>HTML</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 shadow-red-500 rounded-lg'>
                    <img src={img1} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>CSS</p>
                </div>
                <div className='shadow-md shadow-sky-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={img8} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-white hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={img2} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={img4} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={img5} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>NEXT JS</p>
                </div>
                <div className='shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={img6} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-cyan-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={img7} alt="" className='w-20 mx-auto' />
                    <p className='mt-4 text-center'>REACT</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;