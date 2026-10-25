import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_NETLIFY_SUBDOMAIN } from '../data/portfolioData';

interface NetlifyContextType {
  subdomain: string;
  setSubdomain: (val: string) => void;
  resetSubdomain: () => void;
  getBaseUrl: () => string;
  getUrlForSlug: (slug: string) => string;
  isCustomized: boolean;
  isConfigOpen: boolean;
  setIsConfigOpen: (open: boolean) => void;
}

const NetlifyContext = createContext<NetlifyContextType | undefined>(undefined);

export const NetlifyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [subdomain, setSubdomainState] = useState<string>(() => {
    try {
      return localStorage.getItem('user_netlify_subdomain') || DEFAULT_NETLIFY_SUBDOMAIN;
    } catch {
      return DEFAULT_NETLIFY_SUBDOMAIN;
    }
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('user_netlify_subdomain', subdomain);
    } catch {
      // storage disabled
    }
  }, [subdomain]);

  const setSubdomain = (val: string) => {
    const cleaned = val.trim().replace(/^https?:\/\//, '').replace(/\.netlify\.app\/?$/, '');
    setSubdomainState(cleaned || DEFAULT_NETLIFY_SUBDOMAIN);
  };

  const resetSubdomain = () => {
    setSubdomainState(DEFAULT_NETLIFY_SUBDOMAIN);
  };

  const getBaseUrl = () => {
    return `https://${subdomain}.netlify.app`;
  };

  const getUrlForSlug = (slug: string) => {
    const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug;
    return `${getBaseUrl()}/${cleanSlug}`;
  };

  const isCustomized = subdomain !== DEFAULT_NETLIFY_SUBDOMAIN;

  return (
    <NetlifyContext.Provider
      value={{
        subdomain,
        setSubdomain,
        resetSubdomain,
        getBaseUrl,
        getUrlForSlug,
        isCustomized,
        isConfigOpen,
        setIsConfigOpen,
      }}
    >
      {children}
    </NetlifyContext.Provider>
  );
};

export const useNetlify = () => {
  const context = useContext(NetlifyContext);
  if (!context) {
    throw new Error('useNetlify must be used within a NetlifyProvider');
  }
  return context;
};
