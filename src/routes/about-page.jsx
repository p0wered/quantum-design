import {TitleSection} from "./catalog-page";
import AboutImg from '../assets/about-us.jpg';
import SketchImg from '../assets/sketch.jpg';
import SupportImg from '../assets/support.jpg';
import BuildImg from '../assets/pc_building.webp'
import {Footer} from "../App";
import {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function AboutPage() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div>
            <TitleSection title='ABOUT US' desc='Learn more about our company' image={AboutImg}/>
            <div className='about-section dark-bg'>
                <div className='container-small'>
                    <div className='text-box' data-aos='fade-in' data-aos-duration='800'>
                        <h2>Our story</h2>
                        <p>
                            Quantum Design is a leading designer and manufacturer of premium PC hardware including
                            cases,
                            cooling,
                            power supplies and more.
                        </p>
                        <p>Based in Gothenburg and with offices in the US as well as Taiwan, Fractal Design has gained a
                            global
                            reputation for innovative design, elegant aesthetics and solid build quality. Fractal Design
                            products
                            are available in over 45 countries worldwide, and are still growing.
                        </p>
                    </div>
                </div>
            </div>
            <div className='about-section image-left'>
                <div className='text-box about-text' data-aos='fade-in' data-aos-duration='800'>
                    <h2>It was just an idea</h2>
                    <p>
                        What if you made a case that was built on design and function, rather than flair and
                        fanfare?
                        That is what created Quantum Design: one single idea being sold one order at a time, all
                        over
                        Europe. The keyword here is “idea”, because this was before even a single prototype existed.
                        Many said no thanks, but more than enough said “yes” to take us confidently from napkin
                        sketches
                        all the way to mass production.
                    </p>
                </div>
                <div className='in-text-image' style={{backgroundImage: `url(${SketchImg})`}} data-aos='fade-in' data-aos-duration='800'></div>
            </div>
            <div className='about-section dark-bg image-right'>
                <div className='text-box about-text' data-aos='fade-in' data-aos-duration='800'>
                    <h2>Boom</h2>
                    <p>
                        The Define R2 was a game-changer. We started getting emails from people all over the world,
                        wanting to buy our case. Distributors who had turned us down were suddenly calling us back with
                        a change of heart. The R2 struck a chord in the marketplace, and its success gave Hannes the
                        artistic license and credibility to push forward.
                    </p>
                </div>
                <div className='in-text-image' style={{backgroundImage: `url(${SupportImg})`}} data-aos='fade-in' data-aos-duration='800'></div>
            </div>
            <div className='about-section image-left'>
                <div className='text-box about-text' data-aos='fade-in' data-aos-duration='800'>
                    <h2>Fast forward</h2>
                    <p>
                        We’ll skip ahead here. Because while the differences between models are interesting and
                        noteworthy in themselves, the broad strokes paint a clear picture of our first ten years. The
                        forces that drives us are still the same. We’re reinventing, rediscovering and developing as we
                        go, but we always stay true to the same guidelines.
                    </p>
                </div>
                <div className='in-text-image' style={{backgroundImage: `url(${BuildImg})`}} data-aos='fade-in' data-aos-duration='800'></div>
            </div>
            <Footer/>
        </div>
    );
}