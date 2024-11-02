import { useNavigate } from 'react-router-dom';

export function useGoBack(): () => void {
  const navigate = useNavigate();
  return () => navigate(-1);
}
