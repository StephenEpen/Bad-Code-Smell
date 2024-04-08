import CardContent from "../../Elements/Home/Card"

const HomeBody = () => {
    return(
        <>
            <div className="h-52 pt-20 md:h-72 flex flex-col justify-end items-center">
                <h1 className="text-4xl md:text-7xl font-bold text-white">Bad Code Smell</h1>
                <p className="pt-2 text-white text-2xl">Martin Fowler</p>
            </div>
            <div className="mt-5 flex justify-center md:py-10 flex-wrap mx-5">
                <CardContent image={"/images/changepreventers.png"} title={"Change Preventers"} explanation={"Smell change preventers terjadi ketika adanya perubahan kode pada sebuah method yang menyebabkan method lain harus mengalami perubahan. Keadaan tersebut akan memengaruhi kompleksitas kode serta efektivitas yang diperlukan untuk merubah method lain. "} linked={"/ChangePreventers"}/>
                <CardContent image={"/images/dispensables.png"} title={"Dispensables"} explanation={"Semua smell yang berada pada grup dispensables adalah smell-smell yang terjadi diakibatkan bagian-bagian dari code yang tak berarti dan dapat dibuang saja. Dengan membersihkan code dari dispensables, maka kode menjadi lebih mudah dibaca dan dimengerti. "} linked={"/Dispensables"}/>
            </div>
        </>
    )
}

export default HomeBody