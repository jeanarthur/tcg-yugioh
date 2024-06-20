import PropTypes from 'prop-types'
import { register } from 'swiper/element/bundle';
register();


function Slider({images, reverse=false}){
    return(
        <swiper-container slides-per-view="8" speed="2000" loop="true" autoplay-delay="0" autoplay-reverse-direction={reverse}>
            {
                images.map((card, i) => 
                    <swiper-slide className="w-64 h-80 m-0 p-0" key={`${card}_${i}_top`}>
                        <img className="p-2 h-full w-full hover:p-0 transition-all duration-300" src={card}/>
                    </swiper-slide>
                )
            }
        </swiper-container>
    )
}

Slider.prototype = {
    images: PropTypes.array,
    reverse: PropTypes.bool
}

export default Slider;