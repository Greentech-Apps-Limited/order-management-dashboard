import { UtilityContext } from '@/contexts/utility-context';
import { useContext } from 'react';

const useUtility = () => {
  return useContext(UtilityContext);
};

export default useUtility;
