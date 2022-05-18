import React, { useEffect, useState } from 'react';
import List from '../Components/hocs/List';
import WithLoading from '../Components/hocs/Loading';

const ListWithLoading = WithLoading(List);

const Hocs = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/farskid/repos`)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setRepos(res);
        }, 3000);
      });
  }, []);

  return <ListWithLoading isLoading={loading} repos={repos} />;
};

export default Hocs;
