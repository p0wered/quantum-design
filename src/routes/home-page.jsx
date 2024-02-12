import NorthImg from '../assets/north.jpg'

function ProductSection({image, title, desc}) {
    let backgroundImg = {backgroundImage: `url(${image})`}

    return (
        <div className='product-section image-box' style={backgroundImg}>
            <h1>{title}</h1>
            <h4 style={{fontWeight: 400, letterSpacing: 4}}>{desc}</h4>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <ProductSection image={NorthImg} title='NORTH' desc='Transform your gaming space'/>
        </div>
    );
}

