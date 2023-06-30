import Image from 'next/image'
import Layout from './layout';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Committee from '../components/committee';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero 
        title="ECE Undergraduate Student Council"
        body="Representing all ECE Undergraduates at UCSD" 
      />
      <Image
        src="/images/background.jpg"
        alt="UCSD Falling Star Building"
        height="1800"
        width="3200"
        placeholder="blur"
        blurDataURL='data:...'
        key="backround.jpg"
        />
      
      <Committee />
      <Footer />
    </Layout>
  )
}
