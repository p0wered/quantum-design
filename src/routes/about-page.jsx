import {TitleSection} from "./catalog-page";
import AboutImg from '../assets/about-us.jpg';
import SketchImg from '../assets/sketch.jpg';

export default function AboutPage() {
    return (
        <div>
            <TitleSection title='ABOUT US' desc='Learn more about our company' image={AboutImg}/>
            <div className='about-section'>
                <div className='container-small'>
                    <div className='text-box'>
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

            TODO
            <div className='about-section image-left'>
                <div className='text-box' style={{padding: '2rem'}}>
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
                <div className='in-text-image' style={{backgroundImage: `url(${SketchImg})`}}></div>
            </div>
        </div>
    );
}