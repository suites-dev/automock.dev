import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

/**
 * Override the SearchPage component to redirect to the home page.
 * This ensures that if someone navigates to /search, they'll be redirected.
 */
export default function SearchPage() {
  const history = useHistory();

  useEffect(() => {
    // Redirect to home page
    history.replace('/');
  }, [history]);

  // Return null while redirecting
  return null;
} 