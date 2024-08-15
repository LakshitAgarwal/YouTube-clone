import { buttonTags } from "../Utils/constants";

const ButtonTags = () => {
  return (
    <div>
      <div className="flex gap-3">
        {buttonTags.map((tag, i) => (
          <p
            key={i}
            className="text-white cursor-pointer bg-[#343434] hover:bg-[#4d4d4d] w-fit px-4 py-1 text-sm rounded-xl"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ButtonTags;
