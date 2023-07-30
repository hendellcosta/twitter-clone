import { useState } from 'react'
import profilePicture from '../assets/profile-picture.jpg'

import {BsTwitter, BsBookmark, BsPerson} from 'react-icons/bs'
import {BiHomeSmile, BiHash} from 'react-icons/bi'
import {RiNotification2Line} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineFeaturedPlayList} from 'react-icons/md'
import {CgMoreO} from 'react-icons/cg'

import {RiMoreLine} from 'react-icons/ri'


function SideMenu() {

  const [pages, setPages] = useState([
    {
      icon: <BiHomeSmile />,
      name: 'Home',
      textColor: 'text-customBlue'
    },
    {
      icon: <BiHash />,
      name: 'Explore'
    },
    {
      icon: <RiNotification2Line />,
      name: 'Notifications'
    },
    {
      icon: <AiOutlineMail />,
      name: 'Messages'
    },
    {
      icon: <BsBookmark />,
      name: 'Bookmarks'
    },
    {
      icon: <MdOutlineFeaturedPlayList />,
      name: 'Lists'
    },
    {
      icon: <BsPerson />,
      name: 'Profile'
    },
    {
      icon: <CgMoreO />,
      name: 'More'
    },
  ]);
  setPages;

  return (
    <div className="w-[40rem] flex flex-col justify-between px-[1.875rem] border-slate-600">
      <div className='flex flex-col gap-10'>
      <BsTwitter className='text-4xl' />

      <div className='flex flex-col gap-8 font-bold'>
        {pages.map(p => (
          <span key={p.name} className={`flex flex-row gap-5 ${p.textColor} cursor-pointer`}>
            <p className='text-3xl'>{p.icon}</p>
            <p className='text-xl'>{p.name}</p>
          </span>
        ))}
      </div>
        <button className='bg-customBlue py-4 rounded-full font-bold'>Tweet</button>
        </div>

      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <img src={profilePicture} alt="Twitter Profile Picture" className='rounded-full cursor-pointer' />
          <span>
            <h1 className='font-bold cursor-pointer'>Davide Biscuso</h1>
            <p className='text-slate-400 cursor-pointer'>@biscuttu</p>
          </span>
        </div>
        <RiMoreLine className='text-xl cursor-pointer' />
      </div>
      
    </div>
  )
}

export default SideMenu