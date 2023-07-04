import Image from 'next/image';

import tennetLogo from '../../../../public/icons/Tennet_TSO_logo.svg';
import AdmingIcon from '../../../../public/icons/admin_panel_settings.svg';
import settingIcon from '../../../../public/icons/settings_suggest.svg';
import userIcon from '../../../../public/icons/users.svg';
import CardSettings from '../../components/CardSettings';
import NavBar from '../../components/NavBar';

const page = () => {
  return (
    <>
      {/* fake navbar  */}

      <NavBar />
      {/*end fake navbar  */}

      <main className="container lg:max-w-7xl mx-auto px-4 mt-12 space-y-40">
        {/* Company logo placeholder */}
        <div className="flex justify-center items-center">
          <Image
            src={tennetLogo}
            style={{
              width: 'auto',
              height: 'auto',
            }}
            alt="company placeholder"
          />
        </div>

        {/* Company logo placeholder */}

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 ">
          <CardSettings
            icon={userIcon}
            title="Users"
            description="The security dashboard lets you view the health of your security settings"
            link="../../super-admin/users"
          />

          <CardSettings
            icon={AdmingIcon}
            title="Admin"
            description="The security dashboard lets you view the health of your security settings"
            link="/"
          />

          <CardSettings
            icon={settingIcon}
            title="settings"
            description="The security dashboard lets you view the health of your security settings"
            link="/"
          />
        </div>
      </main>
    </>
  );
};

export default page;
