import { COMMUNITY_URL } from '@components/Layout';
import { syncCurrentUser } from '@services/session';
import { useEffect, useState } from 'react';

interface User {
  username: string;
}
/**
 * @TODO, transform this into a context/provider approach
 * in order to avoid requesting the user data multiple times
 */
const useUser = () => {
  const [user, setUser] = useState<User>();
  const [userStatus, setUserStatus] = useState('idle');

  const getUser = async () => {
    setUserStatus('pending');

    try {
      const user = await syncCurrentUser(COMMUNITY_URL);

      if (!user) setUserStatus('rejected');

      if (user) {
        setUserStatus('resolved');
        setUser(user);
      }
    } catch (error) {
      console.error(error);
      setUserStatus('rejected');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    user,
    isLoading: userStatus === 'loading',
    hasError: userStatus === 'rejected'
  };
};

export default useUser;
