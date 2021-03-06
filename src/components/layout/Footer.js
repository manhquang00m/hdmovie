import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <div className='container footer'>
            <div className='row mt-5 pb-4 justify-content-center'>
                <div className='col-lg-8 col-10 text-center'>
                    <span><i style={{ marginRight: '12px' }} className='bx bx-movie'></i>
                        A simple website was coded by Manh Quang using React and The MovieDB API.
                    </span>
                    <div>
                        <a href="https://github.com/manhquang00m/hdmovie"><i className='bx bxl-github' ></i></a>
                        <a href="https://www.facebook.com/mquang00m"><i className='bx bxl-facebook' ></i></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
