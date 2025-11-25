import DataImage from "./data";
import {listTools , listProyek} from "./data"
import {listInspirasi} from "./data"

function App() {
  {/* Beranda */}
  return (
    <>
      <div className="md:hidden pt-20 pb-8">
        <h1 className="text-3xl font-bold text-white text-center">
         My Portofolio
        </h1>
      </div>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          
          <h1 className="text-5xl/tight font-bold mb-6">
            Hello, I am <span className="text-blue-600"> Rasyif Ibnu Hasri</span>
          </h1>
          <p className="text-base/loose mb-6 opacity-100 "><span className="text-gray-200">
           As an emerging developer, I am deeply committed to developing high-quality software solutions.
            I believe that coding is more than just writing syntax; it is about solving real-world problems.
            I dedicate my time to mastering modern technologies and applying them to build applications that deliver seamless performance and meaningful value.
          </span></p>

          <div className="flex items-center sm:gap-4 gap-2 ">
            <a
              href="https://docs.google.com/document/d/1_l4UAQ0645idk8-i2LND2MmSNvdgPlNr_OgHLyX0oC0/edit?usp=sharing"
              className=" bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className=" bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              View Projects <i className="ri-arrow-down-line" ri-lg></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* TENTANG */}
      <div className="tentang mt-32 py-40" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-15 sm:hidden"
            loading="lazy"
          />
          <div className="text-base leading-loose mb-10 space-y-6 text-gray-200">
  
            {/* Paragraf 1 */}
            <p>
              Hey there! I’m Rasyif. My journey into tech wasn't just about getting a degree; it was sparked by the realization that code is a superpower to <span >build cool things</span>. 
              What started as simple curiosity has evolved into a serious passion for understanding how complex systems work and how to <span >build them from scratch</span>.
            </p>

            {/* Paragraf 2 */}
            <p>
              While pursuing my <span >Informatics degree</span>, I refused to stay within the bounds of textbooks. 
              Over the last <span >1+ year</span>, I’ve been getting my hands dirty with real code, successfully shipping <span >3+ diverse projects</span>. 
              My technical focus has expanded from crafting interactive web interfaces to training intelligent <span >Machine Learning models</span> for real-world applications.
            </p>

            {/* Paragraf 3 */}
            <p>
              What excites me most is the continuous evolution of technology.
               I’m always eager to dive into new challenges and pick up <span >fresh skills</span>—whether it’s exploring <span >AI-powered solutions</span> or mastering the latest frontend frameworks. 
              I believe in constant growth, and I’m ready to take on the next big challenge.
            </p>

          </div>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-blue-500">+</span>
                </h1>
                <p>Projects</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-blue-500">+</span>
                </h1>
                <p>Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div className="tools mt-32 ">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Tools & Technologies{" "}
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Here are some tools I have worked with:
        </p>

        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listTools.map((tool) => (
            <a // 1. Ubah <div> menjadi <a>
              href={tool.link} // 2. Masukkan link dari data.js
              target="_blank" // 3. Agar terbuka di tab baru
              rel="noopener noreferrer" // 4. Keamanan untuk tab baru
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 hover:border-zinc-400 transition-all group cursor-pointer" // 5. Saya tambahkan hover:border dan transition agar lebih halus
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 rounded-sm group-hover:bg-zinc-900 transition-colors" // Opsional: tambahkan transition
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50 text-sm">{tool.ket}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/*tentang*/}



      {/*proyek*/}
      <div className="proyek mt-32 py-25" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Projects
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          projects I have worked on:
        </p>
        <div className="Proyek-box mt-14 grid grid-cols-1 sm:grid-cols-3  gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-zinc-800 p-8 rounded-lg text-center border border-zinc-700 hover:border-blue-600 transition-all group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.delay}
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-800 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link} // Ubah bagian ini
                    target="_blank" // Tambahan: agar membuka tab baru
                    rel="noopener noreferrer" // Tambahan: keamanan untuk target="_blank"
                    className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* TOKOH YANG MENGINSPIRASI */}
      <div className="inspirasi mt-32" id="inspirasi">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Inspirations
        </h1>
        <p
          className="text-base/loose text-center opacity-50 mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Figures who motivate my journey:
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listInspirasi.map((tokoh) => (
            <div
              key={tokoh.id}
              className="bg-zinc-800 p-8 rounded-lg text-center border border-zinc-700 hover:border-blue-600 transition-all group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tokoh.delay}
            >
              {/* Gambar Lingkaran */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-2 border-zinc-600 group-hover:border-blue-500 transition-colors">
                <img
                  src={tokoh.gambar}
                  alt={tokoh.nama}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Nama & Role */}
              <h3 className="text-xl font-bold text-white mb-1">{tokoh.nama}</h3>
              <p className="text-blue-500 text-sm font-medium mb-4 uppercase tracking-wide">
                {tokoh.role}
              </p>
              
              {/* Quote */}
              <div className="relative">
                 <p className="text-gray-400 text-sm italic leading-relaxed">
                  "{tokoh.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/*Kontak*/}
      <div className="kontak mt-32 sm:p-22 p-0 " id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
         Let's Connect
        </p>
        <form
          action="https://formsubmit.co/sragenkota87@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold ">Full Name</label>
              <input
                type="text"
                name="nama"
                placeholder="Enter your name..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold ">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Write your message here..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;
