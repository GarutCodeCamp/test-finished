/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Navigation from "../components/bottomnNav";
import data from '../data.json';
const Video = () => {
    return(
        <>
            <div className="row container m-auto">
            {data.map(res =>(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-2" key={res.id}>
                    <div  className="card">
                        <img className="card-img-top" src={res.snippet.thumbnails.high.url} />
                        <div className="card-body">
                            <div className="h5">{res.snippet.title}</div>
                            <div className="p">{res.snippet.channelTitle}</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <Navigation />
        </>
    )
}
export default Video;