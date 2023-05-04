import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './SearchResultPage.css';
export default function SearchResultPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobTitle = queryParams.get('jobTitle');
  const city = queryParams.get('city');

  let content;

  if (jobTitle === 'web-developer' && city === 'new-york') {
    content = <div>Web developer search results for New York</div>;
  } else if (jobTitle === 'data-analyst' && city === 'los-angeles') {
    content = <div>Data analyst search results for Los Angeles</div>;
  } else if (jobTitle === 'marketing-manager' && city === 'chicago') {
    content = <div>Marketing manager search results for Chicago</div>;
  } else if (jobTitle === 'graphic-designer' && city === 'miami') {
    content = <div>Graphic designer search results for Miami</div>;
  } else {
    content = <div>No results found for your search</div>;
  }

  return (
    <div>
      <div className='n'><Navbar /></div>
      <div>
        <h1>Search Results</h1>
        {content}
      </div>
    </div>
  );
}
