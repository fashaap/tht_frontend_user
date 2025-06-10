import { useEffect, useState } from "react";
import backgroundImage from "../../assets/JPEG-2000.webp";
import logoTht from "../../assets/LOGO_THT_2_hitam.svg";
import PageLayouts from "../../components/layouts/PageLayouts";

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("width", width);

  const content1 = [
    {
      id: 1,
      title: "Walking Tour Exploring the History of Afdeeling Tjicalengka",
    },
    {
      id: 2,
      title: "Local Vacation",
    },
    {
      id: 3,
      title: "Tjicalengka Historical Camp",
    },
    {
      id: 4,
      title: "Ikuti Keseruan Lainnya!",
    },
  ];

  return (
    <div className="flex flex-col ">
      <div
        className="bg-cover md:bg-position-[center_bottom_-80px] lg:bg-position-[center_bottom_-140px] xl:bg-position-[center_bottom_-320px] h-100 md:h-120 flex items-center justify-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-gradient-to-b from-transparent to-black/50 w-full h-100 md:h-120" />
      </div>
      <PageLayouts>
        <div className="my-25 md:my-30 px-2">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white text-shadow-lg/30"
          >
            Selamat datang di website resmi kami
          </h1>
          <p className="text-center text-sm md:text-xl xl:text-2xl text-white text-shadow-lg/30">
            Menelusuri Jejak Waktu Lewat Cerita & Warisan Cicalengka
          </p>
          <p className="text-center text-sm md:text-md lg:text-lg xl:text-xl text-white  text-shadow-lg/30">
            "Kami Bangga Sedjarah Kota Ketjil Kami!"
          </p>
        </div>

        <div className="flex justify-center w-full h-auto shadow-sm bg-white py-4">
          <div className="container w-full grid md:flex lg:mx-40 xl:mx-60 px-4 gap-3  justify-center  items-center">
            <img
              className="h-20 xl:mx-8 mx-auto"
              src={logoTht}
              alt="logo_tht_2_orange"
            />

            {Object.values(content1).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center w-full lg:w-60 h-25 md:h-full px-3 py-3 bg-white rounded-xl border transition hover:scale-102 hover:shadow-lg "
              >
                <h1 className="text-sm md:text-md lg:text-lg text-center font-bold  ">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w- px-4 flex  mt-5 ">
          <h1 className="">Menjaga Jejak, Menghidupkan Sejarah</h1>
        </div>
      </PageLayouts>
    </div>
  );
};

export default HomePage;
