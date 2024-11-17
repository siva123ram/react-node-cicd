import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import './Footercss.css';
export default function Footer(){
    return(
        <div>
        <div className="container-fluid f1">
  <div className="row">  
    <div className="col"><img src={image1} alt = " " ></img></div>
    <div className="col"><img src={image2} alt = " "></img></div>
    <div className="col"><img src={image3} alt = " "></img></div>
    <div className="col"><img src={image4} alt = " "></img></div>
    <div className="col"><img src={image5} alt = " "></img></div>
    <div className="col"><img src={image6} alt = " "></img></div>
    <div className="col"><img src={image7} alt = " "></img></div>
    <div className="col"><img src={image8} alt = " "></img></div>
  </div>
</div>
<div className="container-fluid f2">
      <p>Thank you for choosing us!</p>
    </div>
        </div>
    )
}