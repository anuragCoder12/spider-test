import Middle from "@/components/middle/Middle";
import Link from "next/link";

const fetchData = async () => {
  const response = await fetch("https://kilton-dashboard.spider.ws/api/blogs");
  // console.log(response)
  if (!response.ok) {
    throw new Error("api not fetched");
  }
  return response.json();
};

const HomePage = async () => {
  const api = await fetchData();
  return (
    <>
      {/* {api &&
        api?.data.map((data: any) => (
          <Link href={`/home/${data.slug}`} key={data.id}>
            {data.title && (
              <>
                <div className="w-[200px] h-[100px] bg-green-400 text-white mt-[30px]">
                  {data.title}
                </div>
                <img
                  src={data?.featured_image?.file_path}
                  alt=""
                  className="w-[100px] h-[100px] "
                />
              </>
            )}
          </Link>
        ))} */}
        <Middle/>
    </>
  );
};

export default HomePage;
