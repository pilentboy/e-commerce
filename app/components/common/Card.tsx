import { Link } from "react-router";

export default function Card({
  target,
  title,
  image,
  rate,
  price,
  prePrice,
  offer,
}: {
  target: string;
  title: string;
  image: string;
  price: string;
  rate?: string;
  prePrice?: string;
  offer?: string;
}) {
  return (
    <Link to={target}>
      <div className="w-43 lg:w-50 h-65 rounded-4xl flex flex-col relative overflow-hidden justify-around py-2 px-3   bg-white">
        {offer && (
          <span className="w-11 flex items-center justify-center  h-6 bg-primary text-white rounded-[15px]  p-2 absolute left-3 top-4 text-[12px] outline-4 outline-gray-200 border-none ">
            {offer}%
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="w-40  h-35 mt-5 object-contain"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-black"> {title}</h3>
          {rate && <span className="text-orange-400">{rate}</span>}
        </div>
        <div className="flex justify-between items-center">
          <img
            src="/svg/Bag 4.svg"
            alt="bag"
            className="bg-gray-2 p-2 rounded-full w-9"
          />
          <div className="flex flex-col items-end ">
            {prePrice && (
              <span className="text-gray-400    line-through text-sm">
                {prePrice} تومان
              </span>
            )}

            <span className="text-primary    font-bold text-[16px]">
              {price} تومان
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
