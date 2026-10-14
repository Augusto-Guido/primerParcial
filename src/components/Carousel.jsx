function Carousel() {
    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-white fw-bold tracking-wide">DESTACADOS VIPER</h4>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-light btn-sm rounded-circle" type="button" data-bs-target="#carouselViper" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="btn btn-outline-light btn-sm rounded-circle" type="button" data-bs-target="#carouselViper" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>

            {/* Contenedor principal del carrusel con altura controlada */}
            <div id="carouselViper" className="carousel slide shadow-lg rounded-4 overflow-hidden border border-secondary" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ maxHeight: '400px' }}>
                    
                    <div className="carousel-item active">
                        <img 
                            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop" 
                            className="d-block w-100 object-fit-cover" 
                            style={{ height: '400px' }} 
                            alt="Setup Gamer RGB" 
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
                            <h5 className="text-white mb-0">Teclados Mecánicos de Competición</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img 
                            src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop" 
                            className="d-block w-100 object-fit-cover" 
                            style={{ height: '400px' }} 
                            alt="Hardware de alta gama" 
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
                            <h5 className="text-white mb-0">Periféricos de Máxima Precisión</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img 
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" 
                            className="d-block w-100 object-fit-cover" 
                            style={{ height: '400px' }} 
                            alt="Componentes PC" 
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
                            <h5 className="text-white mb-0">Tecnología de Nueva Generacion para tu Setup</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Carousel;