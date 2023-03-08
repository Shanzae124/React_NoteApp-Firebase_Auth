import AuthProvider, {AuthContext} from './AuthProvider';
import Routes from './Routes';

const Provider = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Provider;
