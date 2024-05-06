/* eslint-disable react/prop-types */
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCateGory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover menuImg={img} title={title} />}
      <div className="grid grid-cols-2 gap-6 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCateGory;
