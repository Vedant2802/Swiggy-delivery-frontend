import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  // const { resName, cuisine } = props;
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="w-[220px] h-[160px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 tetx-lg">{name}</h3>
      <h4 className="px-4 py-2 font-semibold overflow-hidden">
        {cuisines.join(",")}
      </h4>
      <h4 className="px-4 py-2">{avgRating} stars</h4>
      <h4 className="px-4 py-2">Rs {costForTwo / 100} FOR TWO</h4>
      <h4 className="px-4 py-2">Estimated Time: {sla.deliveryTime} mins</h4>
    </div>
  );
};
// Higher order component
export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="promoted-label">Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
