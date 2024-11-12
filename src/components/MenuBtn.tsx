type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuBtn = ({ setIsOpen }: Props) => {
  return (
    <button
      className="flex flex-col gap-2 md:hidden"
      onClick={() => setIsOpen(true)}
    >
      <span className="w-8 h-0.5 bg-white" />
      <span className="w-8 h-0.5 bg-white" />
      <span className="w-8 h-0.5 bg-white" />
    </button>
  );
};

export default MenuBtn;
