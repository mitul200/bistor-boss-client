import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const recomends = [
  {
    _id: "642c155b2c4774f05c36ee7a",
    name: "Roast Duck Breast",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
    category: "popular",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb9",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    category: "drinks",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee7c",
    name: "Escalope de Veau",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
    category: "popular",
    price: 14.5,
  },
];

const RecommendsRecipe = () => {
  return (
    <section>
      <div className="h-[180px] bg-black my-32">
        <h1 className="text-white text-5xl text-center p-16">
          Call Us: +88 0192345678910
        </h1>
      </div>
      <SectionTitle heading="---Should Try---" subHeading="CHEF RECOMMENDS" />
      <div className="grid grid-cols-3">
        {recomends.map((item) => (
          <div key={item._id}>
            <div className="card w-96 bg-base-100  ">
              <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className=" " />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <button className="btn btn-outline border-0 border-b-4 uppercase text-yellow-800">
                  add to cart
                </button>
              </div>
            </div>
            ;
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendsRecipe;
