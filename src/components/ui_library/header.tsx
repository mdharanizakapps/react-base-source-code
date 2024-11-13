

const Header = ({ headerValue }: { headerValue: string | undefined }) => {

  return (
    <div>
      <div className="flex items-center py-2 px-5 border-b border-[#E2E2E2]">
        <span className='whitespace-nowrap text-lg'>{headerValue}</span>
      </div>
    </div>
  );
};

export default Header;
