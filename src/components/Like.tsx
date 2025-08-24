import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Like = () => {
  const [status, setStatus] = useState(false);
  // if the status is true return the below when clicked using the onclick function
  if (status)
    return (
      <AiFillHeart color="red" size="70px" onClick={() => setStatus(false)} />
    );
  // otherwise return the below
  return <AiOutlineHeart size="70px" onClick={() => setStatus(true)} />;
};

export default Like;
