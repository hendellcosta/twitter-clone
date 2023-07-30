import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import trending1 from '../assets/trending-1.png'
import trending2 from '../assets/trending-2.png'
import trending3 from '../assets/trending-3.png'
import trending4 from '../assets/trending-4.jpg'
import trending5 from '../assets/trending-5.jpg'

import follow1 from '../assets/follow-1.png'
import follow2 from '../assets/follow-2.png'
import follow3 from '../assets/follow-3.jpg'
import follow4 from '../assets/follow-4.jpg'
import follow5 from '../assets/follow-5.jpg'

function SideColumn() {

  const [availableTrending, setAvailableTrending] = useState(3);
  const [availableFollow, setAvailableFollow] = useState(3);
  const [allVisibleTrending, setAllVisibleTrending] = useState(false);
  const [allVisibleFollow, setAllVisibleFollow] = useState(false);

  const handleTrending = () => {
    setAvailableTrending(8 - availableTrending)
    setAllVisibleTrending(true);
  }

  const closeTrending = () => {
    setAvailableTrending(8 - [...trending].length);
    setAllVisibleTrending(false);
  }

  const handleFollow = () => {
    setAvailableFollow(8 - availableFollow)
    setAllVisibleFollow(true);
  }

  const closeFollow = () => {
    setAvailableFollow(8 - [...follow].length);
    setAllVisibleFollow(false);
  }

  const handleFollowing = (index) => {
    // Create a copy of the 'follow' state array
    const updatedFollow = [...follow];
    // Toggle the 'following' property for the person at the specified index
    updatedFollow[index].following = !updatedFollow[index].following;
    // Update the 'follow' state with the modified array
    setFollow(updatedFollow);
  };

  const [trending, setTrending] = useState([
    {
      subject: 'COVID 19',
      time: '7m ago',
      title: "England's Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
      hashtag: 'covid19',
      image: trending1
    },
    {
      subject: 'US News',
      time: '50m ago',
      title: 'Parler may go offline following suspensions by Amazon, Apple and Google',
      hashtag: 'trump',
      image: trending2
    },
    {
      subject: 'India',
      time: '1h ago',
      title: 'India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test',
      hashtag: 'sport',
      image: trending3
    },
    {
      subject: 'Argentina',
      time: '4h ago',
      title: "Argentina eliminated. There's Brazil tomorrow",
      hashtag: 'argentinavsbrazil',
      image: trending4
    },
    {
      subject: 'Neymar',
      time: 'Last night',
      title: 'Neymar is unstoppable',
      hashtag: 'neymar',
      image: trending5
    }
  ]);

  const [follow, setFollow] = useState([
    {
      image: follow1,
      name: 'Bessie Cooper'
    },
    {
      image: follow2,
      name: 'Jenny Wilson'
    },
    {
      image: follow3,
      name: 'Michael Avelar'
    },
    {
      image: follow4,
      name: 'Liza Berry'
    },
    {
      image: follow5,
      name: 'Charles Wittmer'
    },
  ])
  setTrending;
  setFollow;

  return (
    <div className="w-[60rem] px-[1.875rem] flex flex-col gap-6">
      <label className='flex flex-row items-center gap-2 w-full bg-slate-700 px-4 py-2 rounded-full'>
        <AiOutlineSearch className='text-slate-400 text-2xl' />
        <input type="text" placeholder="Search Twitter" className='w-full bg-transparent px-1 outline-none' />
      </label>

      <div className='flex flex-col bg-slate-800 rounded-lg px-4 divide-y-2 divide-slate-600'>
        <h1 className='py-4 font-bold text-xl'>What&apos;s happening</h1>
        {trending.slice(0, availableTrending).map((p, index) => (
        <div key={index} className='flex flex-row items-center justify-between py-2'>
          <span className='flex flex-col gap-2'>
            <p className='text-slate-400'>{p.subject} • {p.time}</p>
            <p className='font-semibold text-lg cursor-pointer'>{p.title}</p>
            <h1 className='flex flex-row gap-2'><p className='text-slate-400'>Trending with</p> <p className='text-customBlue cursor-pointer hover:underline'>#{p.hashtag}</p></h1>
          </span>

          <img src={p.image} alt="Twitter Trending" className='rounded-2xl' />
        </div>
        ))}
        <p className='text-customBlue py-4 text-xl font-semibold cursor-pointer' onClick={!allVisibleTrending ? handleTrending : closeTrending}>{allVisibleTrending ? 'Show Less' : 'Show More'}</p>
      </div>

      <div className='flex flex-col bg-slate-800 rounded-lg px-4 divide-y-2 divide-slate-600'>
        <h1 className='py-4 font-bold text-xl'>Who to follow</h1>
        {follow.slice(0, availableFollow).map((m, index) => (
          <div key={index} className='flex flex-row items-center justify-between py-4'>
          <div className='flex flex-row items-center gap-4'>
            <img src={m.image} alt="Twitter Person" className='rounded-full cursor-pointer' />
            <span>
              <h1 className='font-bold text-xl cursor-pointer'>{m.name}</h1>
              <p className='text-slate-500 text-lg lowercase cursor-pointer'>@{m.name.replace(/[ ]/g, '')}</p>
            </span>
          </div>
          <button className={`${m.following ? 'border-slate-500 text-slate-300' : 'border-customBlue text-customBlue hover:text-opacity-75 hover:border-opacity-75'} font-bold rounded-full px-8 py-2 border-2 transition-all duration-100`} onClick={() => handleFollowing(index)}>
              {m.following ? 'Following' : 'Follow'}
            </button>
        </div>
        ))}
        <p className='text-customBlue py-4 text-xl font-semibold cursor-pointer' onClick={!allVisibleFollow ? handleFollow : closeFollow}>{allVisibleFollow ? 'Show Less' : 'Show More'}</p>
      </div>
    </div>
  )
}

export default SideColumn