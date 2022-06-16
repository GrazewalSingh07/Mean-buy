import { Carousel } from 'antd';

const sliderdata=["https://d64lkarmo2mrq.cloudfront.net/img/home/fathersdaybanner.webp",
    "https://d64lkarmo2mrq.cloudfront.net/img/home/flash-sale-banner-01.webp",
    "https://d64lkarmo2mrq.cloudfront.net/img/home/womenswatches2022.webp",
    "https://d64lkarmo2mrq.cloudfront.net/img/home/nordic2022.webp"]
     
    const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        margin:"auto"
      };
      
export const Slider=()=>{
    return <Carousel autoplay>
        <div>
        <img  style={contentStyle} src={sliderdata[0]} alt="" />
        </div>
        <div>
        <img  style={contentStyle} src={sliderdata[1]} alt="" />
        </div>
        <div>
        <img  style={contentStyle} src={sliderdata[2]} alt="" />
        </div>
        <div>
        <img  style={contentStyle} src={sliderdata[3]} alt="" />
        </div>
  </Carousel>
}



