import React from 'react'
import './style.scss'
import dev from '../images/devlopercircle.png';
//import Portfolio from '../portfolio';

const About = () => {
    return (
        <div>
            <section className='about' id='about'>
                <div className='about-img'>
                    <div className="img-container">  
                    <img className='img' src={dev} alt='' />
                    </div>
                </div>
                <div className='about-text'>
                    <h2>About<span>Me</span></h2>
                    <h4>Full Stack Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est,
                        iure itaque ipsum nesciunt maxime perferendis qui beatae odio ullam nulla vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae hic
                        aspernatur. Modi totam tenetur unde ut, sed libero obcaecati.</p>
                </div>
            </section>
            <section>
                <div className='services' id='services'>
                    <div className='container'>
                        <h1 className='sub-title'>My <span>Skills</span></h1>
                        <div className='services-list'>
                            <div className='tab'>
                                {/* <i className='bx bx-code' style={{ color: '#00eeff' }}></i>*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" viewBox="0 0 24 24" className="svg-icon" style={{ fill: 'rgba(0, 238, 255, 1)' }}>
                                    <path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"></path>
                                </svg>
                                <h2>Front-end Developer</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                                    maxime deleniti illum vel optio qui soluta eaque adipisci quidem repudiandae!</p>
                                <a href='Portfolio' className='read'>Learn more</a>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" viewBox="0 0 24 24" className="svg-icon" style={{ fill: 'rgba(0, 238, 255, 1)' }}>
                                    <path d="M19 7c0-1.103-.897-2-2-2H7V2H5v3H2v2h15v15h2v-3h3v-2h-3V7z"></path>
                                    <path d="M5 9v8c0 1.103.897 2 2 2h8v-2H7V9H5z"></path>
                                </svg>

                                <h2>Back-end Developer</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                                    maxime deleniti illum vel optio qui soluta eaque adipisci quidem repudiandae!</p>
                                <a href='Portfolio' className='read'>Learn more</a>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" viewBox="0 0 24 24" className="svg-icon" style={{ fill: 'rgba(0, 238, 255, 1)', transform: '', msFilter: '' }}>
                                    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path></svg>
                                <h2>FullStack Developer</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                                    maxime deleniti illum vel optio qui soluta eaque adipisci quidem repudiandae!</p>
                                {/* <button onClick={() => { }} className='read'>Learn more</button> */}
                                <a href='Portfolio' className='read'>Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;