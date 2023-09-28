import Image from 'next/image'

export default function Home() {
  return (
    <div className="backdrop-blur-sm bg-white/90 min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-dark text-4xl font-bold mb-4">Under construction</h1>
      <p className="text-dar text-lg mb-4 p-5">We are building the Courier Finders website. Leave us your email to receive updates on our progress</p>
      <div className='flex'>
        <button className="bg-gray-800 m-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          <a href="https://github.com/arturoken/courier-finders" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.167 6.839 9.491.5.091.682-.218.682-.486 0-.24-.009-.875-.013-1.715-2.782.603-3.369-1.338-3.369-1.338-.455-1.16-1.112-1.468-1.112-1.468-.908-.621.069-.608.069-.608 1 .071 1.527 1.028 1.527 1.028.889 1.522 2.332 1.083 2.897.828.091-.645.35-1.083.635-1.333-2.223-.252-4.56-1.112-4.56-4.937 0-1.09.389-1.986 1.028-2.683-.103-.253-.447-1.274.098-2.65 0 0 .84-.269 2.75 1.024a9.523 9.523 0 012.473-.335c.841 0 1.684.113 2.473.335 1.91-1.293 2.75-1.024 2.75-1.024.545 1.376.201 2.397.098 2.65.639.697 1.028 1.593 1.028 2.683 0 3.833-2.341 4.682-4.571 4.928.359.308.678.916.678 1.846 0 1.334-.012 2.409-.012 2.732 0 .269.18.583.688.485C17.138 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />
            </svg>
            GitHub
          </a>
        </button>

        <button className="bg-gray-800 m-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          <a href="https://twitter.com/kendrikgz" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" viewBox="0 0 50 50" fill="currentColor">
            <path fill-rule="evenodd" d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
          </svg>
            Twitter
          </a>
        </button>
      </div>
    </div>
  );

}
 