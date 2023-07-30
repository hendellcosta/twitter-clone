import user1 from "../assets/user1.jpg";
//import user2 from "../assets/user2.jpg";

import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
import { useEffect, useState } from "react";

function Posts() {
  useEffect(() => {
    document.title = 'Twitter | Home'
  }, [])

  const [posts, setPosts] = useState([
    {
      image: user1,
      name: "Devon Lane",
      time: "23s",
      comments: 10,
      reposts: 10,
      likes: 10,
      originalLikes: 10, // New property to store the original likes count
      shares: 10,
      content:
        "I interviewed over 70 back-end engineers. I created a Notion based Learn Backend Development Pack V2 that contains a learning path and practice tasks to become a backend dev based on ONLY FREE resources. Retweet and reply with free and I'll DM it to you. (need to follow)",
      isClicked: false,
    },
    {
      image: user1,
      name: 'Devon Lane',
      time: '1m',
      comments: 10,
      reposts: 10,
      likes: 10,
      originalLikes: 10, // New property to store the original likes count
      shares: 10,
      content: "I interviewed over 70 back-end engineers. I created a Notion based Learn Backend Development Pack V2 that contains a learning path and practice tasks to become a backend dev based on ONLY FREE resources. Retweet and reply with free and I'll DM it to you. (need to follow)"
    },
    {
      image: user1,
      name: 'Devon Lane',
      time: '5h',
      comments: 10,
      reposts: 10,
      likes: 10,
      originalLikes: 10,
      shares: 10,
      content: "I interviewed over 70 back-end engineers. I created a Notion based Learn Backend Development Pack V2 that contains a learning path and practice tasks to become a backend dev based on ONLY FREE resources. Retweet and reply with free and I'll DM it to you. (need to follow)"
    },
    // ... other post objects
  ]);

  const handleLikes = (index) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      if (!updatedPosts[index].isClicked) {
        updatedPosts[index].likes += 1;
      }
      updatedPosts[index].isClicked = true;
      return updatedPosts;
    });
  };

  const handleRemoveLikes = (index) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      if (updatedPosts[index].isClicked) {
        updatedPosts[index].likes = updatedPosts[index].originalLikes; // Restore the original likes count
      }
      updatedPosts[index].isClicked = false;
      return updatedPosts;
    });
  };

  return (
    <div className="flex flex-col py-4 border-y-2 border-slate-600 border-spacing-4 divide-y-2 divide-slate-600 px-10">
      {/* ONE POST */}

      {posts.map((p, index) => (
        <div className="pt-8" key={index}>
          <div className="flex flex-row items-center gap-3 text-white text-xl">
            <img
              src={p.image}
              alt="Twitter Profile Picture"
              className="rounded-full"
            />
            <h1 className="font-bold">{p.name}</h1>
            <p className="text-slate-500 lowercase">@{p.name.replace(/[ ]/g, "")}</p>
            <p className="text-slate-500">•</p>
            <p className="text-slate-500">{p.time}</p>
          </div>

          <div className="px-20 text-2xl">
            <p>{p.content}</p>
          </div>

          <div className="flex flex-row justify-between items-center pl-20 pr-32 text-2xl text-slate-400">
            <p className="cursor-pointer flex flex-row items-center gap-3 py-10">
              <BiMessageRounded /> {p.comments}
            </p>
            <p className="cursor-pointer flex flex-row items-center gap-3 py-10">
              <BiRepost /> {p.reposts}
            </p>
            <p
              className={`${
                p.isClicked ? "text-pink-600" : ""
              } cursor-pointer flex flex-row items-center gap-3 py-10`}
              onClick={() =>
                !p.isClicked ? handleLikes(index) : handleRemoveLikes(index)
              }
            >
              {p.isClicked ? <AiFillHeart /> : <AiOutlineHeart />} {p.likes}
            </p>
            <p className="cursor-pointer flex flex-row items-center gap-3 py-10">
              <LuShare /> {p.shares}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;

{/**  import user1 from "../assets/user1.jpg";
//import user2 from "../assets/user2.jpg";

import {BiMessageRounded, BiRepost} from 'react-icons/bi'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {LuShare} from 'react-icons/lu'
import { useState } from "react";

function Posts() {
  const [isClicked, setIsClicked] = useState(false);
  const [likes, setLikes] = useState(10);
  
  const [posts, setPosts] = useState([
    {
      image: user1,
      name: 'Devon Lane',
      time: '23s',
      comments: 10,
      reposts: 10,
      likes: 10,
      shares: 10,
      content: "I interviewed over 70 back-end engineers. I created a Notion based Learn Backend Development Pack V2 that contains a learning path and practice tasks to become a backend dev based on ONLY FREE resources. Retweet and reply with free and I'll DM it to you. (need to follow)"
    },
    {
      image: user1,
      name: 'Devon Lane',
      time: '1m',
      comments: 10,
      reposts: 10,
      likes: 10,
      shares: 10,
      content: "I interviewed over 70 back-end engineers. I created a Notion based Learn Backend Development Pack V2 that contains a learning path and practice tasks to become a backend dev based on ONLY FREE resources. Retweet and reply with free and I'll DM it to you. (need to follow)"
    },
    {
      image: user1,
      name: 'Devon Lane',
      time: '5h',
      comments: 10,
      reposts: 10,
      likes: 10,
      shares: 10,
      content: "I interviewed over 70 back-end engineers. I created a Notion based Learn Backend Development Pack V2 that contains a learning path and practice tasks to become a backend dev based on ONLY FREE resources. Retweet and reply with free and I'll DM it to you. (need to follow)"
    },
  ])

  setPosts;

  const handleLikes = () => {
    setIsClicked(true);
    setLikes(likes + 1)
  }

  const handleRemoveLikes = () => {
    setIsClicked(false);
    setLikes(likes - 1)
  }

  return (
    <div className="flex flex-col py-4 border-y-2 border-slate-600 border-spacing-4 divide-y-2 divide-slate-600 px-10"> */}
      {/* ONE POST */}

  {/*}
      {posts.map((p, index) => (
      <div className="pt-8" key={index}>
        <div className="flex flex-row items-center gap-3 text-white text-xl">
          <img src={p.image} alt="Twitter Profile Picture" className="rounded-full" />
          <h1 className="font-bold">{p.name}</h1>
          <p className="text-slate-500">@{p.name.replace(/[ ]/g, '')}</p>
          <p className="text-slate-500">•</p>
          <p className="text-slate-500">{p.time}</p>
        </div>

        <div className="px-20 text-2xl">
          <p>{p.content}</p>
        </div>

        <div className="flex flex-row justify-between items-center pl-20 pr-32 text-2xl text-slate-400">
            <p className="cursor-pointer flex flex-row items-center gap-3 py-10"><BiMessageRounded /> {p.comments}</p>
            <p className="cursor-pointer flex flex-row items-center gap-3 py-10"><BiRepost /> {p.reposts}</p>
            <p className={`${isClicked ? 'text-pink-600' : ''} cursor-pointer flex flex-row items-center gap-3 py-10`} onClick={!isClicked ? handleLikes : handleRemoveLikes}>{isClicked ? <AiFillHeart /> : <AiOutlineHeart />} {likes}</p>
            <p className="cursor-pointer flex flex-row items-center gap-3 py-10"><LuShare /> {p.shares}</p>
        </div>
      </div>
      ))}

    </div>
  );
}

export default Posts;

*/}