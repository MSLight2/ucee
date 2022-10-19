import Loading from './Loading';
import CircleRing from './components/CircleRing';
import CircleRolling from './components/CircleRolling';
import DanceBar from './components/DanceBar';
import Spinner from './components/Spinner';
import './index.scss';

export type {
  ILoadingProps,
  IconTypeProps,
  LoadingType,
} from './Loading';

export { LOADING_TYPE } from './Loading';

export const LoadingIcon = {
  CircleRing,
  CircleRolling,
  DanceBar,
  Spinner
}

export default Loading;