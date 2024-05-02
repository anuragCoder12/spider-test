"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import demoImage from "../../public/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg"

const Single = ({ params }: any) => {
  const id = params.blogId;
  const blog = `https://kilton-dashboard.spider.ws/api/blogs/${id}`;
  const [singleBlog, setSingleBlog]: any = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(blog);
        setSingleBlog(res?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false); 
      }
    };
    fetchBlog();
  }, []);

  console.log(singleBlog);

  if (loading) {
    return <div className="w-full h-[100vh] flex items-center justify-center">Loading...</div>;
  }

  // Check if the featured image exists, if not, display demo image
  const imageUrl = singleBlog?.featured_image?.file_path || demoImage;

  return (
    <>
      <div className="w-full h-[100px] ">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-5xl font-bold">{singleBlog.slug}</h2>
        </div>
        <div className="flex flex-col  lg:flex-row mt-[80px] gap-[40px]">
          <div className="w-full lg:w-[60%] h-[100vh] flex  justify-center ">
            <img src={imageUrl} alt="Demo Image" className="w-[400px] h-[400px]" />
          </div>
          <div>
            <p className="text-xl font-semibold font-serif">{singleBlog.meta_description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
