import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from './input';

type Props = {} & React.ComponentProps<typeof Input>;

const PasswordInput = (props: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="relative">
      <Input type={isPasswordVisible ? 'text' : 'password'} {...props} />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-2 text-gray-500"
        aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
      >
        {isPasswordVisible ? <EyeClosed className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default PasswordInput;
