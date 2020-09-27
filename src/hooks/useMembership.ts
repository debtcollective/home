import { useEffect, useState } from 'react';

export const GATSBY_MEMBERSHIP_URL = process.env.GATSBY_MEMBERSHIP_URL;

type MembershipResponse = {
  id: number;
  email: string;
  // eslint-disable-next-line camelcase
  external_id?: number;
  name: string;
  confirmed: boolean;
  subscription: {
    active: boolean;
    amount: string;
  };
};

type FetchingStatus = boolean;

const useMembership = (): [MembershipResponse | null, FetchingStatus] => {
  const [membership, setMembership] = useState<MembershipResponse | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true);
    fetch(`${GATSBY_MEMBERSHIP_URL}/users/current.json`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(async (res) => {
        try {
          const response = await res.json();
          setMembership(response);
        } catch (error) {
          console.error(error);
          setMembership(null);
        } finally {
          setFetching(false);
        }
      })
      .catch((e) => {
        console.error(e);
        setFetching(false);
      });
  }, []);

  return [membership, fetching];
};

export default useMembership;
