'use client';

import { WixClientContext } from '@/context/wixContext';
import exp from 'constants';
import { useContext } from 'react';

export const useWixClient = () => {
  return useContext(WixClientContext);
};
