import useDarkMode from '../../../hooks/useDarkMode';
import Button from '../Button';

const ModalFooter = ({ primaryAction, secondaryAction }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-4 border-t ${
        isDarkMode
          ? 'bg-slate-800 border-slate-700'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      {secondaryAction && (
        <Button variant='outline' onClick={secondaryAction.onClick}>
          {secondaryAction.label}
        </Button>
      )}
      {primaryAction && (
        <Button variant='primary' onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Button>
      )}
    </div>
  );
};

export default ModalFooter;
