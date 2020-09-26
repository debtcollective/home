import { useEffect, useState } from 'react';

export const MEMBERSHIP_URL = process.env.MEMBERSHIP_URL;

type Membership = {
  status: 'pending' | 'active';
  email: string;
};

type FetchingStatus = boolean;

const useMembership = (): [Membership | null, FetchingStatus] => {
  const [membership, setMembership] = useState<Membership | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true);
    fetch(`${MEMBERSHIP_URL}/users/current.json`, {
      // credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(async (res) => {
      try {
        const response = await res.json();
        setMembership(response);
      } catch (error) {
        console.error(error);
        setMembership(null);
      } finally {
        setFetching(false);
      }
    });
  }, []);

  return [membership, fetching];
};

export default useMembership;
