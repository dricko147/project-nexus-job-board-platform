import { RiseLoader } from 'react-spinners';

export const Loader = () => (
  <RiseLoader
    color="#FFD700"
    margin={6}
    size={10}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 13000,
    }}
  />
);