// 3rd party imports
import {useState, useEffect} from 'react'

export const useDelayedRender = delay => {
  const [delayed, setDelayed] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return fn => !delayed && fn();
};