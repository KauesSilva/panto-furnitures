interface ButtonGroupProps {
  selectedCategory: string;
  handleButtonClick: (buttonName: string) => void;
}

function ButtonGroup({selectedCategory, handleButtonClick}: ButtonGroupProps): JSX.Element {

  return (
    <div className="flex items-center justify-center gap-2 rounded-[44px] bg-[#EEEEEE] p-2 shadow-sm sm:p-1">
      <button
        onClick={() => handleButtonClick("chair")}
        className={`h-11 w-20 rounded-[32px] p-1 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "chair"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } transition-all`}
      >
        Chair
      </button>
      <button
        onClick={() => handleButtonClick("beds")}
        className={`h-11 w-20 rounded-[32px] p-1 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "beds"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } transition-all`}
      >
        Beds
      </button>
      <button
        onClick={() => handleButtonClick("sofa")}
        className={`h-11 w-20 rounded-[32px] p-1 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "sofa"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } selectedCategory-all`}
      >
        Sofa
      </button>
      <button
        onClick={() => handleButtonClick("lamp")}
        className={`h-11 w-20 rounded-[32px] p-1 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "lamp"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } transition-all`}
      >
        Lamp
      </button>
    </div>
  );
}

export default ButtonGroup;
