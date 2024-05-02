import {Link} from "react-router-dom";

export default function ErrorPage() {
    return(
        <div className='flexbox-center' style={{width: '100vw', height: '100vh', gap: '1rem'}}>
            <div className='container'>
                <h1>OOPS...</h1>
                <h4>It seems like page that you are looking for is still under construction</h4>
                <Link to='/'>
                    <button className='button-product' style={{marginTop: '1.5rem'}}>Take me back</button>
                </Link>
            </div>
        </div>
    )
}