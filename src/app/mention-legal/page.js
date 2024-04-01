'use client'

import Header from '@/components/header'

import Footer from '@/components/footer';

export default function mentionslegales() {
  

  
  return (
    <main className="flex w-screen  flex-col items-center  bg-white ">
        <Header></Header>
        <div className='flex flex-col justify-start xl:px-20 lg:px-20 md:px-20 px-8 w-full '>
          <h1 className='pt-10 text-slate-800 text-3xl'>Mentions légales du site</h1>
          <p className='py-10 text-slate-600 text-base'>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l économie numérique, il est précisé aux utilisateurs du site Onigiri agence l identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          <br></br><br></br><b>Edition du site</b> <br></br> <br></br>
Le présent site, accessible à l’URL https://www.onigiriagence.com/ (le « Site »), est édité par :
Enzo Deniau de nationalité Française (France), né(e) le 06/11/2003,
<br></br><br></br><b> Hébergement</b> <br></br> <br></br>

Le Site est hébergé par la société Vercel, situé 340 S Lemon Ave #4133 Walnut, CA 91789 USA.
Directeur de publication

Le Directeur de la publication du Site est Enzo Deniau.
<br></br><br></br><b> Nous contacter</b> <br></br> <br></br>

Par email : enzodeniau2003@gmail.com</p>
        </div>
        <Footer></Footer>
    </main>
  );
}
