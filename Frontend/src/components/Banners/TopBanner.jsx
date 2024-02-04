import banners from "../../assets/constants/images";
const TopBanner = () => {
  return (
    <div>
      <img src={banners.topBanner} className="w-full mt-2 px-5 md:px-0" />
    </div>
  );
};

export default TopBanner;
