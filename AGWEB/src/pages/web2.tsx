import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Aprender from "../components/Aprender";
import IArecom from "../components/IArecom";
import IABenefits from "../components/IABenefits";
import IAStudies from "../components/Studies";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";


export default function Web2() {
    // Hacer scroll hacia arriba cuando se monte el componente
    useScrollToTop();

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Home />
            <Aprender />
            <IArecom />
            <IABenefits />
            <IAStudies />
            <Footer />
        </div>
    );
}
