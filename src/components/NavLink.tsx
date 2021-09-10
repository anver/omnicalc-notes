type Props = {
  selected: boolean;
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
};

const NavLink: React.FC<Props> = ({ Icon, title = "", selected = false }) => {
  return (
    <a
      href="https://google.com"
      className={
        selected
          ? `bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md`
          : `text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md`
      }
    >
      <Icon
        className={
          selected
            ? `text-gray-500 mr-4 h-6 w-6`
            : `text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6`
        }
        aria-hidden="true"
      />
      {title}
    </a>
  );
};

export default NavLink;
