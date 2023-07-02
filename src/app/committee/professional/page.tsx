import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";

export default function Professional() {
    let titles = [
        "Professional Events",
        "Previous Workshop Slides"
    ]
    let desc = [
        "The professional committee works to ensure that ECE students are competent in the realm of professional development. While technical skills are important for industry and academia, learning how to utilize a network or making a good impression is equally important.",
        "From workshops to build a good LinkedIn and resume reviews, to elevator pitch workshops and panels with industry professionals, the Professional committee is a great place to learn how to build a successful professional foundation."
    ]
    let images = [
        "/committees/professional/professPic3.JPG",
        "/committees/professional/professPic4.jpg",
    ]
    let files = [
        "/committees/professional/Presentation-01_27_2021.pdf",
        "/committees/professional/Presentation-10_15_2020.pdf"
    ]

    return (
        <Layout>
            <Navbar pageLocation="Committees" hideInitialNav={false}/>
            <Background>
                <CommitteeBody titles={titles} desc={desc} images={images} files={files}/>
            </Background>
            <Footer />
        </Layout>
    )
}