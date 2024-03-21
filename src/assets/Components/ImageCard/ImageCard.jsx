import './ImageCard.css'
import img from '../../../assets/img.avif'
function ImageCard({imageUrl}){
    return(
        <>
            <div className='imgCardContainer  bg-slate-600 h-96 w-80 m-4' >
                <div className='imgCardinnerContainer  bg-red-500 h-80 w-80 '>
                    <figure>
                        <img src={imageUrl} alt='image' className='h-80 w-80'/>
                    </figure>
                </div>

            </div>
        </>
    )
}
export default ImageCard;