import img1 from '../../assets/img/Screenshot 2023-07-04 115518.png'
import img2 from '../../assets/img/Screenshot 2023-07-04 115352.png'
import img from '../../assets/img/Screenshot 2023-07-04 115640.png'

const Project = () => {
    return (
        <div name="project" className="w-full text-white bg-gradient-to-b from-black to-gray-800 lg:h-screen">
            <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
                <div>
                    <p className='text=4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check Out some of my Projects right here</p>
                </div>
                <div className='grid gap-4 sm:grid-col lg:grid-cols-3 sm:px-0'>
                 
                 <div className='duration-200 rounded-md shadow-md shadow-gray-600 hover:scale-105'>
                        <img className='duration-200 rounded-md hover:scale-105' src={img1} alt="" />
                        <div className='flex justify-between p-2'>
                            <button className='w-1/2 py-3 duration-200 hover:scale-105'><a href="https://sports-camp.web.app">Demo</a></button>
                            <button className='w-1/2 py-3 duration-200 hover:scale-105'><a href="https://github.com/mehedi-hassan-niloy/Summer-camp-server">Server Code</a></button>
                            <button className='w-1/2 duration-200 hover:scale-105'><a href="https://github.com/mehedi-hassan-niloy/Summer-camp">Client Code</a></button>
                        </div>
                    </div>
                    <div className='duration-200 rounded-md shadow-md shadow-gray-600 hover:scale-105'>
                        <img className='duration-200 rounded-md hover:scale-105' src={img2} alt="" />
                        <div className='flex justify-between p-2'>
                            <button className='w-1/2 py-3 duration-200 hover:scale-105'><a href="https://babybo-toys.web.app">Demo</a></button>
                            <button className='w-1/2 py-3 duration-200 hover:scale-105'><a href="https://github.com/mehedi-hassan-niloy/babybo-toys-server">Server Code</a></button>
                            <button className='w-1/2 duration-200 hover:scale-105'><a href="https://github.com/mehedi-hassan-niloy/babybo-toys">Client Code</a></button>
                        </div>
                    </div>
                    <div  className='duration-200 rounded-md shadow-md shadow-gray-600 hover:scale-105'>
                        <img className='duration-200 rounded-md hover:scale-105' src={img} alt="" />
                        <div className='flex justify-between p-2'>
                            <button className='w-1/2 py-3 duration-200 hover:scale-105'><a href="https://chef-recipe-hunter-c2fcd.web.app">Demo</a></button>
                            <button className='w-1/2 py-3 duration-200 hover:scale-105'><a href="https://github.com/mehedi-hassan-niloy/chafe-team-server">Server Code</a></button>
                            <button className='w-1/2 duration-200 hover:scale-105'><a href="https://github.com/mehedi-hassan-niloy/chafe-team">Client Code</a></button>
                        </div>
                    </div>
                 </div>
        
                </div>
            </div>

      
    );
};

export default Project;