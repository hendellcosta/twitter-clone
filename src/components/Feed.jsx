import { useState } from 'react'

import {BsStars} from 'react-icons/bs'
import {IoMdPhotos} from 'react-icons/io'
import {HiGif} from 'react-icons/hi2'
import {BiPoll} from 'react-icons/bi'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import {TbCalendarTime} from 'react-icons/tb'

import profilePicture from '../assets/profile-picture.jpg';
import Posts from './Posts'

function Feed() {
  const [icons, setIcons] = useState([
    {
      icon: <IoMdPhotos />
    },
    {
      icon: <HiGif />
    },
    {
      icon: <BiPoll />
    },
    {
      icon: <HiOutlineEmojiHappy />
    },
    {
      icon: <TbCalendarTime />
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIcons('');
  }
  //
  const [input, setInput] = useState('')
  const postLength = input.length;
  const maxLength = 280;

  const [maxReached, setMaxReached] = useState(false);

  const max = postLength === maxLength;
  
  const handleMax = () => {
    if(maxReached) {
      max;
      setMaxReached(true);
    }
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  }
  //
  const disabled = true;

  return (
    <div className="border-x-2 border-slate-600 w-full flex flex-col">
      <div className='flex flex-row items-center justify-between pb-4 px-10'>
        <h1 className='text-2xl font-bold'>Home</h1>
        <BsStars className='text-3xl text-customBlue cursor-pointer' />
      </div>

      <div className='flex flex-row w-full py-8 border-y-2 border-slate-600 px-10'>
        <div>
        <img src={profilePicture} alt="Twitter Profile Picture" className='rounded-full' />
        </div>

        <form onSubmit={()=> handleSubmit} className='px-10'>
          <div>
            <textarea onChange={handleInput} value={input} type='text' maxLength={280} rows={5} className='resize-none bg-transparent outline-none text-2xl w-[1000px] break-all' placeholder="What's happening?"></textarea>
          </div>

          <div>
            <p className={`${max ? 'text-red-500' : 'text-slate-400'} font-semibold`} onChange={handleMax}>Characters: {postLength}/280</p>
          </div>

          <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center gap-6 text-3xl text-customBlue'>
                {icons.map((p, index) => (
                  <p key={index} className='cursor-pointer'>{p.icon}</p>
                ) )}
              </div>
            <button className={`${input === '' ? 'cursor-not-allowed' : ''} bg-customBlue px-10 py-3 rounded-full disabled:opacity-50`} disabled={input === '' ? disabled: ''}>Tweet</button>
          </div>
        </form>
      </div>
      <div className='py-4 bg-[#1C2733]'>

      </div>

      <Posts />
    </div>
  )
}

export default Feed