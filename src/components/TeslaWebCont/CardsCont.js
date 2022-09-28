import React from 'react'

const CardsCont = ({ menuData }) => {

    return (
        <>
            <main>
                <section className="cards-container">
                    <div className="container">
                        <h2>TESLA MOTORS</h2>
                        <div className="grid-cards" >

                            {
                                menuData.map((curElem) => {
                                    // destructuring.............
                                    const { id, name, image, description, introImage } = curElem;
                                    return (
                                        <>
                                            {/* <img src={introImage} alt="tesla-models" className='introImg'/> */}
                                            <div className="card" key={curElem.id} >
                                                <div className="card-num">{id}</div>
                                                <div className="card-name">{name}</div>
                                                <img src={image} alt="Resturant-Image" />
                                                <p className="card-description">{description}</p>
                                                <button title='click to order'>Order Now</button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CardsCont