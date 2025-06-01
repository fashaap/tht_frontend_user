import backgroundImage from "../../assets/JPEG-2000.png";
import logoTht from "../../assets/LOGO_THT_2_hitam.svg";
import PageLayouts from "../../components/layouts/PageLayouts";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <div
        className="bg-cover lg:bg-position-[center_bottom_-200px] xl:bg-position-[center_bottom_-350px] md:h-120 flex items-center justify-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-gradient-to-b from-transparent to-black/50 w-full h-120" />
      </div>
      <PageLayouts>
        <div className="my-34 ">
          <h1 className="text-5xl text-center font-bold text-white text-shadow-lg/30 ">
            Selamat datang di website resmi kami
          </h1>
          <p className="text-center text-2xl text-white text-shadow-lg/30">
            Menelusuri Jejak Waktu Lewat Cerita & Warisan Cicalengka
          </p>
          <p className="text-center text-xl text-white  text-shadow-lg/30">
            "Kami Bangga Sedjarah Kota Ketjil Kami!"
          </p>
        </div>
        <div className="flex justify-center w-full h-auto shadow-sm bg-white py-4">
          <div className="container lg:mx-40 xl:mx-60 px-4 gap-3 w-full justify-center flex items-center">
            <img className="h-20 mx-8" src={logoTht} alt="logo_tht_2_orange" />

            <div className="flex items-center  justify-center w-60 h-full px-3 py-3   bg-white rounded-xl border transition  ">
              <h1 className="text-lg text-center font-bold   ">
                Walking Tour Exploring the History of Afdeeling Tjicalengka
              </h1>
            </div>

            <div className="flex items-center  justify-center w-60 h-full px-3 py-3   bg-white rounded-xl border transition">
              <h1 className="text-md text-center font-bold ">
                Local Vacation
              </h1>
            </div>

            <div className="flex items-center  justify-center w-60 h-full px-3 py-3   bg-white rounded-xl border transition">
              <h1 className="text-md text-center font-bold ">
                Tjicalengka Historical Camp
              </h1>
            </div>

            <div className="flex items-center  justify-center w-60 h-full px-3 py-3  bg-white rounded-xl border transition">
              <h1 className="text-md text-center font-bold ">
                Ikuti Keseruan Lainnya
              </h1>
            </div>
          </div>
        </div>
      </PageLayouts>
    </div>
  );
};

export default HomePage;
