import userIcon from '../../../../public/icons/users.svg';
import CardSettings from '../../components/CardSettings';

const page = () => {
  return (
    <div>
      <CardSettings
        icon={userIcon}
        title="Users"
        description="The security dashboard lets you view the health of your security settings"
        link="/"
      />

      <CardSettings
        icon={userIcon}
        title="Admin"
        description="The security dashboard lets you view the health of your security settings"
        link="/"
      />

      <CardSettings
        icon={userIcon}
        title="settings"
        description="The security dashboard lets you view the health of your security settings"
        link="/"
      />
    </div>
  );
};

export default page;
