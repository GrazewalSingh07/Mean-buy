 
 import {FaShoppingCart} from"react-icons/fa"
 import { Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs" 
 
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space} from 'antd';
 import "./Navbar.css"

  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };




const menu = (
    <div className="megadropdown" >
            <div>
                <p><b>MEN</b></p>
                <Menu className="menu"onClick={handleMenuClick} items={[
                 { label: 'Watches', key: '1'},
                 {label: "Men's Watches", key: '2',}]} />
                  <p><b>WOMEN</b></p>
                <Menu className="menu"onClick={handleMenuClick} items={[
                 { label: 'Makeup Accessories', key: "1"},
                 {label: "Fashion", key: '2',},
                 { label: 'Jewelery',key: '3',},{ label: 'Watches',key: '4',}]} />
            </div>
            <div>
                <p><b>ELECTRONICS</b></p>
                <Menu className="menu"onClick={handleMenuClick} items={[
                 { label: 'Gaming Accessories', key: '1',},
                {label: 'Keyboards & Mouse', key: '2', },
                 { label: 'Laptops',key: '3', },
                 { label: 'Small Appliances',key: '3', }]} />
            </div>
            <div>
                <p><b>FLASH SALE</b></p>
                <Menu className="menu"onClick={handleMenuClick} items={[
                 { label: 'Flash Sale', key: '1',},
               ]} />
            </div>
            <div>
                <p><b>HOME & LIVING</b></p>
                <Menu className="menu"onClick={handleMenuClick} items={[
                 { label: 'Bath & Storage', key: '1'},
                {label: 'Fitness Merchandise', key: '2',},
                 { label: 'Gardening',key: '3' },
                 { label: 'Home Decor', key: '4'},
                 {label: 'Home Improvement', key: '5',},
                  { label: 'Kitchen Wares',key: '6',},
                  { label: 'Nordic Ceiling Lights', key: '7',},
                  {label: 'PetProducts', key: '8', },
                   { label: 'USB Fans',key: '9', }]} />
            </div>
            <div>
                <p> <b>KIDS & MOM</b></p>
                <Menu className="menu" onClick={handleMenuClick} items={[
                 { label: 'DIY Toys', key: '1',},
                {label: "Kids's shoes", key: '2', },
                 { label: 'SchoolBackpacks',key: '3', },
                 { label: 'Toys',key: '4', }]} />
            </div>
            <div>
                
                <p><b>MEANBUY DEALS</b></p>
                <Menu className="menu"onClick={handleMenuClick} items={[
                 { label: 'Electronics', key: '1'},
                {label: "Men's Watches", key: '2',},
                 { label: 'Ramdan Gifts',key: '3' },
                 { label: 'Smart Wathes',key: '4' },
                 { label: 'Top Selling Ear Buds',key: '5' },
                 { label: 'Top Selling Smart Watches',key: '6' }]} />
            </div>
            <div>
                <p><b>MOBILES & TABS</b></p>
                <Menu className="menu"onClick={handleMenuClick} items={[
                 { label: 'Apple Accessories', key: "1"},
                {label: 'Bluetooth Earphone', key: '2',},
                 { label: 'Mobiles Accessories',key: '3' },
                 { label: 'Power Banks', key: '4'},
                {label: 'Sporting Blut=etooth', key: '5',},
                 { label: '3Wired Headphones',key: "6" },
                 { label: 'Wireless Chargers', key: '7'},
                 {label: 'Wireless speakers', key: '8',} ]} />
            </div>
    </div>
    );
export const Navbar=()=>{
    return <div style={{width:"90%",margin:" 1rem auto"}}>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div className="logoandsearch">
                <span ><img className="logo" src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png" alt="" /></span>
               <span> <input type="text" placeholder="Search"className="inputbox" /> <BsSearch style={{marginLeft:"-3.5rem"}}/></span>
            </div>
            <div className="rightNavtop">
                <div style={{display:"flex", width:"100%"}}>
                    <p style={{padding:"10px"}}>Seller's Corner | </p>
                    <p  style={{padding:"10px"}}>Feedback | </p>
                    <p  style={{padding:"10px"}}>Delivery info</p>
                </div>
                <div className="siguplogin">
                    <p><Link style={{ color:"black"}}to="/login">LOGIN</Link> / <Link   style={{ color:"black"}}to="/signup">SIGN UP</Link></p>
                    <p><b>WELCOME GUEST</b></p>
                </div>
                <div>
                    <FaShoppingCart style={{fontSize:"2rem",color:"#F98D29"}}/>
                </div>
            </div>
        </div>
        <div className="navbottom">
        
                <Dropdown  overlay={menu}>
                    <Button  style={{border:"none"}}>
                        <Space>
                        Categories
                        <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
                <Link style={{color:"black"}}to="/flase-sale">Flash Sale</Link>
                <Link style={{color:"black"}} to="/Best-deals">Best Deals</Link>
                <Link style={{color:"black"}} to="/Shop-by-brand">Shop by Brand</Link>
                <Link style={{color:"black"}} to="/trending">Trending</Link>
                <Link style={{color:"black"}}to="/new-arrivals">NewArrivals</Link>
        </div>
    </div>
}