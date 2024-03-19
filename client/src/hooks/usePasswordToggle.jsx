import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const usePasswordToggle = () => {
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);

  const Icon1 = visibility1 ? <FaEyeSlash /> : <FaEye />;
  const Icon2 = visibility2 ? <FaEyeSlash /> : <FaEye />;

  const toggleVisibility1 = () => {
    setVisibility1(!visibility1);
  };

  const toggleVisibility2 = () => {
    setVisibility2(!visibility2);
  };

  const Type1 = visibility1 ? 'text' : 'password';
  const Type2 = visibility2 ? 'text' : 'password';

  return [Type1, Icon1, toggleVisibility1, Type2, Icon2, toggleVisibility2];
};

export default usePasswordToggle;
