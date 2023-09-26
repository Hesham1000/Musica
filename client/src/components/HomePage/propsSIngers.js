import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const PropsSingers = (props) => {
    const singers = props.singers;
    return (
        <>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >
            {singers.map(singer => (
            <SwiperSlide>
                <div className='singerCard' key={singer._id}>
                    <img src={require(`../../../../server/public/photos/${singer.image}`)} alt="not found" />
                    <div className="content">
                        <h3>{singer.name}</h3>
                        <Link to={singer.url} className="playlist"><i className="fa-solid fa-play"></i></Link>
                        <div className="icons">
                            <a href="#ww" className="y"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#fff" className="sc"><i className="fa-brands fa-soundcloud"></i></a>
                            <a href="#sss" className="s"><i className="fa-brands fa-spotify"></i></a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
            
        </>
    );
}

export default PropsSingers;