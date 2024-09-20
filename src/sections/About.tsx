import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('dont mess with the ubaid.');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <span className="flex flex-row">
                <p className="grid-headtext">Hi, I'm Ubaid</p>
                <p className="text-white text-[10px]">John</p>
              </span>
              <p className="grid-subtext">With 267 years of experience in the bazaars in the UK, I have proven to be the ultra sigma with a focus on animating 3D water bottles</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Burger</p>
              <p className="grid-subtext">I specialize in Selling chicken tikka masala and I program python games in the jungle ecoysystems in the west of Tariyanga South Africa</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm-h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I am based in Tariyanga, South Africa Capetown in street 5 block 2 tree 83 next to the supermarket
              </p>
              <Button name="find me." isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My passion for sharwarmas</p>
              <p className="grid-subtext">I love solving chess problems made by big taim fatyer man and buildong things through microwaves set at 50 degrees celcius plus 3.2 degrees farhenite. Microwaves isn't just my passion, it's my hobby as well. We love microwqaves</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"  />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container flex flex-row" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="ml-3 text-sm text-white">Click to copy ubaid details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About