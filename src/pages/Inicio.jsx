import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="container mt-5 text-center" style={{ minHeight: '70vh' }}>
      <h1 className="display-3 fw-bold text-white mb-4 mt-5">LLEVA TU SETUP AL <span className="text-accent">SIGUIENTE NIVEL</span></h1>
      <p className="lead text-secondary mb-5">Los mejores periféricos para dominar cada partida.</p>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="bg-card-custom p-5 rounded-4 border border-secondary shadow">
                <h3 className="text-white mb-4">Oferta Especial de Temporada</h3>
                <p className="text-secondary mb-4 fs-5">Descuentos exclusivos en periféricos seleccionados. ¡No te quedes sin stock!</p>
                <Link to="/productos" className="btn btn-accent btn-lg fw-bold px-5 py-3 text-uppercase shadow">
                    Ver Catálogo Completo
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;