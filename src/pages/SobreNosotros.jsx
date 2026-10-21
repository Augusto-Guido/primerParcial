import NosotrosHardSop from '../components/NosotrosHardSop';
import NosotrosCard from '../components/NosotrosCard';
import NosotrosPorQue from '../components/NosotrosPorQue';
import NosotrosEstadisticas from '../components/NosotrosEstadisticas';
import NosotrosPresentacion from '../components/NosotrosPresentacion';


function SobreNosotros() {
  return (
    <div className="min-vh-100 py-5">
      <div className="container">

        <NosotrosPresentacion />

        <NosotrosEstadisticas />

        <NosotrosPorQue />

        <NosotrosCard />

        <NosotrosHardSop />

      </div>
    </div>
  );
}

export default SobreNosotros;
