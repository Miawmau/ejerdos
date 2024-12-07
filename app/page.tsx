import Image from "next/image";
import "./page.css";
export default function Home() {
  return (
    <div className="tablaejercicios">
      <div className="ejercicios">
        <p>Exercícios</p>
      </div>
      <div className="numejercicios">
        <div className="tarjeta">
          <div className="datos">
            <div className="datosejer">
              <p className="nombre">Puxada frontal</p>
              <p className="series">3 séries x 12 repetições</p>
            </div>
          </div>
          <div className="vector"></div>
        </div>
        <div className="tarjeta">
          <div className="datos">
            <div className="datosejer">
              <p className="nombre">Puxada frontal</p>
              <p className="series">3 séries x 12 repetições</p>
            </div>
          </div>
          <div className="vector"></div>
        </div>
        <div className="tarjeta">
          <div className="datos">
            <div className="datosejer">
              <p className="nombre">Puxada frontal</p>
              <p className="series">3 séries x 12 repetições</p>
            </div>
          </div>
          <div className="vector"></div>
        </div>
      </div>
    </div>
  );
}
