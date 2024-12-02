// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div id='blogs' className="relative z-50 my-12 lg:my-24">
        <p className="text-center text-gray-500">No blogs available at the moment.</p>
      </div>
    );
  }

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.slice(0, 6).map((blog, i) => (
          blog?.cover_image ? (
            <BlogCard blog={blog} key={i} />
          ) : (
            <div key={i} className="p-4 bg-gray-100 rounded-lg text-center">
              <p>No image available for this blog</p>
            </div>
          )
        ))}
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <Link href="/blog" className="flex items-center text-violet-500 hover:underline">
          <span>View More</span>
          <FaArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default Blog;
