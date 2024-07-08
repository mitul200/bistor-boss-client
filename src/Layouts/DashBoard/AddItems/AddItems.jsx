// eslint-disable-next-line no-unused-vars
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../useHooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { useForm } from "react-hook-form";

const image_hosting_token = import.meta.env.VITE_Image_Uplode_token;
const AddItems = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponce) => {
        console.log(imageResponce);
        if (imageResponce.success) {
          const imgURL = imageResponce.data.display_url;
          console.log(imgURL);
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new items", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Insert successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  console.log(errors);

  console.log(image_hosting_token);
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="Add an items"
        heading="what's new"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-10">
        <div className="w-full">
          <div className="label ">
            <span className="label-text">Recipy name?</span>
          </div>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="flex gap-5">
          <div className="from-control w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              defaultValue="Pick one"
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled>Pick one</option>
              <option>pizza </option>
              <option>soup</option>
              <option>salad</option>
              <option>drinks</option>
              <option>dessert</option>
            </select>
          </div>
          <div className="w-1/2">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("price", { required: true, maxLength: 120 })}
            />
          </div>
        </div>
        <div className=" form-control w-full ">
          <div className="label w-1/2">
            <span className="label-text">recipe details</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-1/2">
          <div className="label">
            <span className="label-text">Items image</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className=" flex justify-start mt-6 items-center">
          <input className="btn btn-primary" type="submit" value="Add Items" />
          <ImSpoonKnife />
        </div>
      </form>
    </div>
  );
};

export default AddItems;
