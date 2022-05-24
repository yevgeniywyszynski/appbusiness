import React from 'react'
import styles from './Slider.module.scss';
import Slider from 'react-slick';

const Carusel  = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

    return(
        <div className={styles.portfolioWrapper}>
          <div className={styles.stepWrapper}>
            <p className={styles.number}>03</p>
            <div className={styles.stepDescription}>
                <p className={styles.upTitle}>PORTFOLIO</p>
                <h2 className={styles.title}><span className={styles.canStyl}>CHOOSE A</span> HPROFESSIONAL DESIGN</h2>
                <p className={styles.subtitle}>Websites</p>
            </div>
          </div>
          <div className={styles.sliderWrapper}>
            <Slider {...settings}>
              <div className={styles.slideItem}>
                <div className={styles.imgSliderWrapper}>
                  <div className={styles.btnWrapper}>
                    < button type="button" className={styles.btnMore}>View More</button>
                  </div>
                </div>
              </div>
              <div className={styles.slideItem}>
                <div className={styles.imgSliderWrapper2}>
                <div className={styles.btnWrapper}>
                    < button type="button" className={styles.btnMore}>View More</button>
                  </div>
                </div>
              </div>
              <div className={styles.slideItem}>
                <div className={styles.imgSliderWrapper3}>
                <div className={styles.btnWrapper}>
                    < button type="button" className={styles.btnMore}>View More</button>
                  </div>
                </div>
              </div>
              <div className={styles.slideItem}>
                <div className={styles.imgSliderWrapper}>
                <div className={styles.btnWrapper}>
                    < button type="button" className={styles.btnMore}>View More</button>
                  </div>
                </div>
              </div>
              <div className={styles.slideItem}>
                <div className={styles.imgSliderWrapper2}>
                  <div className={styles.btnWrapper}>
                    < button type="button" className={styles.btnMore}>View More</button>
                  </div>
                </div>
              </div>
              <div className={styles.slideItem}>
                <div className={styles.imgSliderWrapper3}>
                <div className={styles.btnWrapper}>
                    < button type="button" className={styles.btnMore}>View More</button>
                  </div>
                </div>
              </div>
          </Slider>
          </div>
          <div className={styles.descriptionWebWrapper}>
            <p className={styles.description}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
            </p>
          </div>
          <div className={styles.seeMoreBtnWrapper}>
            <button type="button" className={styles.btnSeeMore}>See More</button>
          </div>
        </div>
    )
}

export default Carusel;