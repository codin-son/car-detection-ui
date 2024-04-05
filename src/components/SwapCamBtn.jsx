import axios from "axios";
const SwapCamBtn = () =>{
    const apiUrl = import.meta.env.PUBLIC_API_URL;
    const nextCam = () =>{
        axios.get(apiUrl+'/next_cam')
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const prevCam = () =>{
        axios.get(apiUrl+'/prev_cam')
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return(
        <div className="grid grid-cols-2 gap-2 mt-2">
            <button className="btn btn-primary btn-block" onClick={prevCam}>Previous Camera</button>
            <button className="btn btn-primary btn-block" onClick={nextCam}>Next Camera</button>
        </div>
    )

}

export default SwapCamBtn;