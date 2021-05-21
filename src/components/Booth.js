import React from 'react';

function Booth( {item} ){
    // console.log(item);
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

            <h5 className="mt-3">{item.name}</h5>
            <p className="fw-light">{item.description}</p>

            <p className="text-danger border-bottom border-danger" style={{fontSize: '14px', width: '75px'}}>Доп. опции</p>

            <div className="bg-secondary overflow-auto list-service" style={{height: '152px'}}>
                <div className="d-flex justify-content-around align-items-center">
                    <img src="img/booth.png" className="d-block w-25" alt="..."/>
                    <div>
                        <p className="fw-bold">Разработка макета рамки</p>
                        <p className="text-danger fw-bold">От {new Intl.NumberFormat('ru-RU', {currency : 'rub',style : 'currency' }).format(item.price)}</p>
                    </div>
                    <div>
                        <input className="form-check-input" type="checkbox" value="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <img src="img/booth.png" className="d-block w-25" alt="..."/>
                    <div>
                        <p className="fw-bold">Разработка макета рамки1</p>
                        <p className="text-danger fw-bold">От {new Intl.NumberFormat('ru-RU', {currency : 'rub',style : 'currency' }).format(item.price +100)}</p>
                    </div>
                    <div>
                        <input className="form-check-input" type="checkbox" value="" />
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <img src="img/booth.png" className="d-block w-25" alt="..."/>
                    <div>
                        <p className="fw-bold">Разработка макета рамки2</p>
                        <p className="text-danger fw-bold">От {new Intl.NumberFormat('ru-RU', {currency : 'rub',style : 'currency' }).format(item.price + 200)}</p>
                    </div>
                    <div>
                        <input className="form-check-input" type="checkbox" value="" />
                    </div>
                </div>
            </div>
            <p className="text-muted my-3">Укажите время аренды</p>

            <div>
                <button className="btn btn-danger text-light m-1 fs-6">1 час</button>
                <button className="btn btn-info m-1 fs-6">2 часа</button>
                <button className="btn btn-info m-1 fs-6">3 часа</button>
                <button className="btn btn-info m-1 fs-6">5 часов</button>
                <button className="btn btn-info m-2 fs-6">выставка 2 дня</button>
                <button className="btn btn-info m-2 fs-6">выставка 3 дня</button>
            </div>

            <div className="d-flex justify-content-around align-items-center py-3">
                <h2 className="fs-1 fw-bold mx-2">{new Intl.NumberFormat('ru-RU', {currency : 'rub',style : 'currency' }).format(item.price)}</h2>
                <button className="btn btn-danger text-white fs-4 fw-bold">Оставить заявку</button>
            </div>

        
        </div>
    )
}

export default Booth