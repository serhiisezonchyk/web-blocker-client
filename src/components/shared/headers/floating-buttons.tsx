import ToggleLocale from '../toggle-locale';
import { ModeToggle } from '../toggle-theme';

type Props = {};

const FloatingButtons = (props: Props) => {
  return (
    <div className="absolute top-2 left-4 sm:static flex flex-row">
      <ToggleLocale />
      <ModeToggle />
    </div>
  );
};

export default FloatingButtons;
