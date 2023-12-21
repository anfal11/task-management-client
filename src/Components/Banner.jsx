import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="hero" style={{ minHeight: 'calc(100vh - 5rem)' }}>
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img src="https://i.ibb.co/HBLgXXY/photo-1611224923853-80b023f02d71-q-80-w-1939-auto-format-fit-crop-ixlib-rb-4-0.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">
      <Typewriter
    cursor
    cursorBlinking
    delaySpeed={1000}
    deleteSpeed={25}
    loop={0}
    typeSpeed={75}
    words={[
      'Welcome to Task Master',
      'Save your tasks and',
      'enjoy our amazing features'
    ]}
  />
      </h1>
      <p className="py-6 text-center">You can add, edit, delete task and also monitor the completed, ongoing and TODO lists.</p>
      <Link to='/dashboard'>
      <button className="btn bg-[#B55EEA] text-white hover:bg-[#382147]">Let&apos;s Explore</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Banner;