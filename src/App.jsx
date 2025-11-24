import DataImage from "./data";
import {listTools , listProyek} from "./data"

function App() {
  {/* Beranda */}
  return (
    <>
      <div className="md:hidden pt-20 pb-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Portofolio
        </h1>
      </div>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex rounded items-center gap-3 mb-6 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 w-fit p-4Â rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-b-md"
              loading="lazy"
            />
            <p>
              {" "}
              "It's not about whether you can or can't do it. It's about whether
              you do it or not."
              <br />
              -Shirou Emiya
            </p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Rasyif Ibnu Hasri
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya adalah pemula dalam dunia IT yang luas dan penuh peluang.
            <br />
            Meski masih di awal perjalanan, saya berkomitmen untuk terus
            mengasah
            <br />
            kemampuan dan mempelajari teknologi baru. Setiap tantangan baru
            <br />
            adalah kesempatan bagi saya untuk berkembang dan menjadi lebih baik.
          </p>

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
              Lihat Proyek <i className="ri-arrow-down-line" ri-lg></i>
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
      <div className="tentang mt-32 py-10" id="tentang">
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
          <p className="text-base/loose mb-10">
            Hi, saya Rasyif Ibnu Hasri. Saya sorang mahasiswa jurusan
            informatika. saya masih pemula dalam dunia IT yang luas, tetapi rasa
            ingin tahu membuat saya terus belajar dan mencoba hal-hal baru. Saya
            percaya bahwa teknologi bukan hanya soal tampilannya saja, tetapi
            juga bagaimana ia memberikan pengalaman terbaik bagi penggunanya.
            Meskipun perjalanan saya baru dimulai, saya selalu berusaha
            berkembang dan menghasilkan karya yang lebih baik dari waktu ke
            waktu.
          </p>
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
                  4<span className="text-blue-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-blue-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
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
          Tools yang dipakai{" "}
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut ini beberapa tools yang pernah digunakan:
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
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut ini beberapa proyek yang telah dibuat:
        </p>
        <div className="Proyek-box mt-14 grid grid-cols-1 sm:grid-cols-3  gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
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
                    Lihat Proyek
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*tentang*/}
      {/*Kontak*/}
      <div className="kontak mt-32 sm:p-10 p-0 " id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Mari terkoneksi dengan saya
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
              <label className="font-semibold ">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama...."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email...."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold ">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan...."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;
