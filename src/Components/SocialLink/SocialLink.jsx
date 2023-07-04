import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFilePersonFill} from 'react-icons/bs'


const SocialLink = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li  className="flex justify-between items-center w-40 h-10 px-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" >
                <a className='flex items-center justify-between w-full p-4 text-white rounded-tr-md' href="https://www.linkedin.com/in/mehedi-hassan-niloy-646a24249" >LinkdIn<span ><FaLinkedin size={25}/></span></a>
                </li>
            <li  className="flex justify-between items-center w-40 h-10 px-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" >
                <a className='flex items-center justify-between w-full p-4 text-white rounded-tr-md' href="https://github.com/mehedi-hassan-niloy" >GitHub<span ><FaGithub size={25}/></span></a>
                </li>
            <li  className="flex justify-between items-center w-40 h-10 px-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" >
                <a className='flex items-center justify-between w-full p-4 text-white rounded-tr-md' href="mailto:neloy1435@gmail.com" >Mail<span ><HiOutlineMail size={25}/></span></a>
                </li>
            <li  className="flex justify-between items-center w-40 h-10 px-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" >
                <a className='flex items-center justify-between w-full p-4 text-white rounded-tr-md' href="/resume.pdf" download={true} >Resume<span ><BsFilePersonFill size={25}/></span></a>
                </li>
        </ul>
    </div>
    );
};

export default SocialLink;