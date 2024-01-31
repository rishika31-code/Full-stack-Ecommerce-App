import banners from "../../assets/constants/images";
const TopBanner = () => {
  return (
    <div>
      <img src={banners.topBanner} className="w-full mt-2" />
    </div>
  );
};

export default TopBanner;
