import Link from "next/link";
import { Card } from "../ui/Card";
import Image from "next/image";
import demoImage from '../../public/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg'

const fetchData = async () => {
    const response = await fetch("https://kilton-dashboard.spider.ws/api/blogs");
    // console.log(response)
    if (!response.ok) {
      throw new Error("api not fetched");
    }
    return response.json();
  };
const Middle = async () => {
    const api = await fetchData();
    
    return ( 
        <>
         <div className="w-full flex items-center justify-center mt-[150px]">
        <div className=" flex  flex-col items-start gap-[40px] w-[90%] lg:gap-[60px] ">
            <div className="flex flex-wrap gap-[20px]">
            {
                api && api?.data.map((data:any) => (
                    <Link href={`/${data.slug}`} key={data.id}>
                    <Card> 
                    <div className="border w-[90%] h-[120px] lg:h-[240px]">
                        {
                           data?.featured_image?.file_path  ?  (<img src={data?.featured_image?.file_path} alt=""className="w-[300px] h-[120px] lg:h-[240px]" />) :
                           <Image
                           src={demoImage}
                           alt=""
                           width={250}
                           height={200}
                           className="w-[250px] h-[260px] object-cover "
                         />
                        }
                        
                    </div>
                    <h3 className="text-xl font-semibold">{data.slug}</h3>
                </Card>
                </Link>
                ))
            }
            </div>
       
        </div>
        </div>
        
        </>
     );
}
 
export default Middle;