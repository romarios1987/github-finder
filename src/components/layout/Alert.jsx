import { useContext } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-5 gap-8"
      style={{ visibility: alert ? 'visible' : 'hidden' }}
    >
      <div className={`alert ${alert ? 'alert-' + alert.type : ''} shadow-lg `}>
        <div>
          <FiAlertCircle size="24" />
          <strong>{alert?.message}</strong>
        </div>
      </div>
    </div>
  );
};

export default Alert;
