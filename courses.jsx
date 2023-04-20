import logo from '../images/download.jfif';

const Course = ({title,text,id,backGround}) => {
    return (
        <div>
<div className="cours" style={{backgroundColor:backGround}}>
            <h3>{title}
            </h3>
            <h4>{text}</h4>
            <h2>{id}</h2>
            <img src={logo} alt="" />
        </div>
        </div>
        
      );
}
 
export default Course ;