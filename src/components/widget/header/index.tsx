import { logo } from '@assets/icons';
import { useAuth } from '@hooks/useAuth';
import { Avatar } from '@radix-ui/themes';

const Header = ({ openNav }: any) => {
  const user = useAuth();

  const { user: person } = user;

  return (
    <nav>
      <section className="flex items-center justify-between bg-white p-8 md:px-16">
        <div className="flex items-center">
          <button onClick={openNav} className="block lg:hidden">
            menu
          </button>
          <div className="ml-5 block lg:hidden">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="flex items-center relative cursor-pointer">
          <div>{/* <img src={notification} alt="" /> */}</div>
          <div className="hidden md:flex items-center ml-6">
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            />
            <div className="ml-3">
              <p className="text-[#444444]">{person?.username}</p>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
