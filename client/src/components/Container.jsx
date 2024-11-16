/* eslint-disable react/prop-types */
const Container = ({children}) => {
  return (
    <div className="max-w-[1620px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
