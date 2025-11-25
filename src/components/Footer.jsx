

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">My Portofolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Home</a>
            <a href="#tentang">About </a>
            <a href="#proyek">Project</a>
        </div>
        <div className="flex items-center gap-3 ">
            <a href="https://github.com/RasyifIbnu">
                <i className="ri-github-fill ri-2x"></i>
            </a>
             <a href="https://www.instagram.com/rasyif_ibnu?igsh=a3V2YWpnYzBkeGpq">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
             <a href="https://www.linkedin.com/in/rasyif-ibnu-hasri-8b0867311/">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
             <a href="https://youtube.com/@nuninuch?si=0bKN2ezZyLpEwsRJ">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
            <a href="https://www.tiktok.com/@nuinu19?_r=1&_t=ZS-91hFOqQ0wAW">
                <i className="ri-tiktok-fill ri-2x"></i>
            </a>
        </div>
    </div>
  );
};

export default Footer