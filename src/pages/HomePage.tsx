import landingimage from '../assets/landing.png';
import appDownloadimage from '../assets/appDownload.png';


const HomePage = () => {
    return(
        <div className="flex flex-col gap-12">
            <div className=" bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-700">
                   Experience a takeaway today
                </h1>
                <span className="text-xl">
                   Delicacies at your doorstep!
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <img
                  src={landingimage}
                />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                       Accelerate your takeaway order!
                    </span>
                    <span>Download the DishDelight App for faster ordering and personalised recommendations</span>
                    <img src={appDownloadimage}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;