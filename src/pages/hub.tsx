import Layout from '@components/Layout';
import useUser from '@hooks/useUser';
import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

const MemberHub = () => {
  const { user, isLoading, hasError } = useUser();

  useEffect(() => {
    if (hasError) {
      alert('Please login');
      navigate('/');
    }
  }, [hasError]);

  if (isLoading || hasError) return null;

  return <Layout>{user && <section>WELCOME {user?.username}</section>}</Layout>;
};

export default MemberHub;
