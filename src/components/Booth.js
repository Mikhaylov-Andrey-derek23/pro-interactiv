import React from 'react';

function Booth(){

    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="img/booth.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="img/booth.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="img/booth.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="img/booth.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="img/booth.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>

            </div>

            <h5 className="mt-3">Фотобудка с ширмой</h5>
            <p className="fw-light">Размер: 2м x 1.5м x 2 м</p>

            <p className="text-danger border-bottom border-danger" style={{fontSize: '14px', width: '75px'}}>Доп. опции</p>
            <div className="bg-secondary overflow-auto" style={{height: '152px'}}>
                <div className="d-flex justify-content-around align-items-center">
                    <img src="img/booth.png" class="d-block w-25" alt="..."/>
                    <div>
                        <p className="fw-bold">Разработка макета рамки</p>
                        <p className="text-danger fw-bold">От {new Intl.NumberFormat('ru-RU', {currency : 'rub',style : 'currency' }).format(17000)}</p>
                    </div>
                    <div>
                        <input class="form-check-input" type="checkbox" value="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <img src="img/booth.png" class="d-block w-25" alt="..."/>
                    <div>
                        <p className="fw-bold">Разработка макета рамки1</p>
                        <p className="text-danger fw-bold">От {new Intl.NumberFormat('ru-RU', {currency : 'rub',style : 'currency' }).format(17000)}</p>
                    </div>
                    <div>
                        <input class="form-check-input" type="checkbox" value="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <img src="img/booth.png" class="d-block w-25" alt="..."/>
                    <div>
                        <p className="fw-bold">Разработка макета рамки2</p>
                        <p className="text-danger fw-bold">От {new Intl.NumberFormat('ru-RU', {currency : 'rub',style : 'currency' }).format(17000)}</p>
                    </div>
                    <div>
                        <input class="form-check-input" type="checkbox" value="" />
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default Booth