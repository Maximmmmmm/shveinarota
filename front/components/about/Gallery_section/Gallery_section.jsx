import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Gallery_section.css';

import { Autoplay, FreeMode } from 'swiper/modules';

const Gallery_section = () => {
	return (
		<div className="page__gallery gallery">
			<div className="gallery__container">
				<div className="gallery__body">
					<Swiper
						modules={[Autoplay, FreeMode]}
						loop={true}
						spaceBetween={16}
						freeMode={true}
						slidesPerView="auto"
						speed={14500}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						grabCursor={true}
						className="gallery__items-swiper"
					>
						{[...Array(9)].map((_, i) => (
							<SwiperSlide key={i} className="gallery__column-slide">
								<div className="gallery__column">
									<div className="gallery__row row-gallery row-gallery_left-top">
										<div className="row-gallery__item"><img src="39cfcf11aa7913e5f927.jpg" alt="Image" /></div>
										<div className="row-gallery__item"><img src="9ee25d14fbf32f22e06d.jpg" alt="Image" /></div>
										<div className="row-gallery__item"><img src="09222e2a4565ab345d5a.jpg" alt="Image" /></div>
									</div>
									<div className="gallery__row row-gallery row-gallery_left-bottom">
										<div className="row-gallery__item"><img src="ff67b4ef334bd1a464cb.jpg" alt="Image" /></div>
										<div className="row-gallery__item"><img src="fc70758827e1a10bd1fa.jpg" alt="Image" /></div>
										<div className="row-gallery__item"><img src="9de9606e052ed7b2ee76.jpg" alt="Image" /></div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Gallery_section;
