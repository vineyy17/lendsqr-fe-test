import { useNavigate } from 'react-router-dom';
import '../styles/pages/PageNotFound.scss';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="pnf">
      <div className="pnf__wrapper">
        <p className="pnf__wrapper__text">Page not found 😢</p>

        <button onClick={() => navigate('/')} className="pnf__wrapper__button">
          Go back
        </button>
      </div>
    </div>
  );
}
