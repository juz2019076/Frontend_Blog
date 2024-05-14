import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Blog from '../../components/blog/Blog';

const Dashboard = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await api.get('/publications');
        setPublications(response.data.publications); 
      } catch (error) {
        console.error('Error fetching publications', error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <div>
      <h1>Proyectos</h1>
      <Blog publications={publications} />
    </div>
  );
};

export default Dashboard;
