import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HandleAuth = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('Authorization code:', code); // Debugging the authorization code

    // Function to exchange the authorization code for tokens
    const exchangeCodeForTokens = async (code) => {
      const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
      const redirectUri = process.env.REACT_APP_COGNITO_REDIRECT_URI;
      const domain = process.env.REACT_APP_COGNITO_DOMAIN;

      const data = {
        grant_type: 'authorization_code',
        client_id: clientId,
        redirect_uri: redirectUri,
        code: code,
      };

      try {
        // Log the request data
        console.log('Request data for token exchange:', data);

        const response = await fetch(`${domain}/oauth2/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(data).toString(),
        });

        // Log the response status and body
        console.log('Token exchange response status:', response.status);
        const responseBody = await response.json();
        console.log('Token exchange response body:', responseBody);

        if (!response.ok) {
          throw new Error('Token exchange failed');
        }

        // Store tokens in sessionStorage
        const { access_token, id_token } = responseBody;

        if (access_token && id_token) {
          sessionStorage.setItem('accessToken', access_token);
          sessionStorage.setItem('idToken', id_token);
          console.log('Tokens stored in sessionStorage'); // Confirm token storage

          // Update the authentication state
          setIsAuthenticated(true);

          // Clean the URL to remove the code parameter
          window.history.replaceState({}, document.title, '/');

          // Navigate to dashboard after authentication
          navigate('/dashboard');
        } else {
          throw new Error('Tokens are missing from the response');
        }
      } catch (error) {
        setError('Failed to authenticate. Please try again.');
        console.error('Error exchanging code for tokens:', error);
      } finally {
        setLoading(false);
      }
    };

    if (code) {
      exchangeCodeForTokens(code);
    } else {
      setError('Authorization code not found. Redirecting...');
      console.error('Authorization code not found');
      navigate('/auth'); // Redirect to login if code is missing
    }
  }, [setIsAuthenticated, navigate]);

  // Render a loading state while exchanging tokens
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if there's an error
  if (error) {
    return <div>{error}</div>;
  }

  return null; // If no error and loading is done, return nothing
};

export default HandleAuth;
