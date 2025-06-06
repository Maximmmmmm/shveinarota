"use client";

import { getData } from "api";
import "./PartnersBlock.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const PartnersBlockEn = () => {
	const [partners, setPartners] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData("partners", (data) => {
			setPartners(data)
			setLoading(false)
		})
	}, [])

	return (
		<div className="partners">
			<h1 className="partners__title _main-title">Our partners</h1>
			<div className="partners__wrapper">
				<div className="partners__container">
					<div className="partners__box">
						{loading
							?
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
							: <Swiper
								slidesPerView="auto"
								spaceBetween={30}
								freeMode={true}
								speed={900}
								modules={[Autoplay]}
								autoplay={{
									delay: 1000,
									disableOnInteraction: false,
								}}
							>
								{partners.map(partner =>
									<SwiperSlide className="partners__slide" key={partner.id}>
										<div className="partners__partner">
											<Image src={'http://drive.google.com/uc?export=view&id=' + partner.path} width={130} height={130} alt="img" />
										</div>
									</SwiperSlide>
								)}
							</Swiper>
						}

					</div>
				</div>
			</div>
		</div>
	);
};

export default PartnersBlockEn;