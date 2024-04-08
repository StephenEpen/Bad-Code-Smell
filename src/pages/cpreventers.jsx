import Body from "../Components/Fragments/Content/Body";
import Footer from "../Components/Fragments/Content/Footer";
import Header from "../Components/Fragments/Content/Header";
import Footers from "../Components/Fragments/Home/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ParticleBackground from "../Components/Particles/Particle";
import { references, smells } from "../Data/ChangePreventersData";

const ChangePreventersPage = () => {
  return (
    <>
      <Navbar/>
      <ParticleBackground/>
      <div className="text-white pt-20 md:pt-28 md:px-48 px-10 flex-col justify-center min-h-screen">
        <div>
          <Header title="Change Preventers" id={"divergentchange"} explanation="Smell change preventers terjadi ketika adanya perubahan 
            kode pada sebuah method yang menyebabkan method lain harus mengalami perubahan. Keadaan tersebut akan
          memengaruhi kompleksitas kode serta efektivitas yang diperlukan untuk merubah method lain."/>
        </div>
        <div>
          {smells.map((smell) => (
            <Body key={smell.id} id={smell.section} title={smell.title} image={smell.image} paragraph1={smell.paragraph1} paragraph2={smell.paragraph2} paragraph3={smell.paragraph3} code1={smell.code1} code2={smell.code2} source={smell.source} />
          ))}
        </div>
        <div>
          <div className="flex justify text-2xl font-semibold pt-8 pb-1">References :</div>
          {references.map((reference) => (
            <Footer key={reference.id} url={reference.url} />
          ))}
        </div>
      </div>
      <Footers/>
    </>
   
  );
}

export default ChangePreventersPage;
