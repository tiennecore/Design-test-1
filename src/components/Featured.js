import React from 'react';

const Featured = () => {
    return (
        <section className="featured-section" data-scroll-section>
            <div className="featured-row-layout">
                <h6 >Pierre</h6>
                <img
                    data-scroll
                    src='https://photos.gammvert.fr/v5/section/subsection_620/3609-toutes-nos-plantes-vertes.jpg'
                    alt=""
                />
            </div>
            <div className="featured-colum-layout">
                <h6>Lisa</h6>
                <img
                    data-scroll
                    src="https://www.gammvert.fr/conseils/sites/default/files/i-doceasy-projecten-pr00191-woonplant-van-de-maand-2012-fotografie-07-palm-07-palm9resize_0.jpg"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Featured;
