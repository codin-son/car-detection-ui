import axios from "axios";
const SwapCamBtn = () =>{
    const apiUrl = import.meta.env.PUBLIC_API_URL;
    const nextCam = () =>{
        axios.get(apiUrl+'/next-cam')
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const prevCam = () =>{
        axios.get(apiUrl+'/prev-cam')
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return(
        <div>
            <button className="btn btn-primary me-2" onClick={prevCam}>Previous Camera</button>
            <button className="btn btn-primary" onClick={nextCam}>Next Camera</button>
        </div>
    )

}

export default SwapCamBtn;