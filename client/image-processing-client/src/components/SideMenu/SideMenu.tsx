import { Link } from 'react-router-dom';
import { BsImages, BsGear } from 'react-icons/bs';
import { BiInfoCircle } from 'react-icons/bi';
import logo from '../../assets/logo4.svg';
import top_curve from '../../assets/top_curve.svg';
import bottom_curve from '../../assets/bottom_curve.svg';
import './sidemenu.scss';
import { useReactPath } from '../../hooks/useReactPath';

const SideMenu = () => {
  const page = useReactPath();

  return (
    <div className="sidemenu">
      <div className="sidemenu__top">
        <img src={logo} alt="logo" className="sidemenu__top--logo" />
        <h1 className="sidemenu__top--title">LavenderLens</h1>
      </div>
      <div className="sidemenu__pages">
        <img
          src={top_curve}
          alt="top-curve"
          className={
            page === 'images'
              ? 'selected-curve curve top-curve'
              : 'curve top-curve'
          }
        />
        <Link
          className={
            page === 'images'
              ? 'link sidemenu__pages__page selected'
              : 'link sidemenu__pages__page'
          }
          to={'/images'}
        >
          <BsImages className="sidemenu__pages__page--icon" />
          <span className="sidemenu__pages__page--title">Images</span>
        </Link>
        <img
          src={bottom_curve}
          alt="bottom-curve"
          className={
            page === 'images'
              ? 'selected-curve curve bottom-curve'
              : 'curve bottom-curve'
          }
        />

        <img
          src={top_curve}
          alt="top-curve"
          className={
            page === 'processing'
              ? 'selected-curve curve top-curve'
              : 'curve top-curve'
          }
        />
        <Link
          className={
            page === 'processing'
              ? 'link sidemenu__pages__page selected'
              : 'link sidemenu__pages__page'
          }
          to={'/processing'}
        >
          <BsGear className="sidemenu__pages__page--icon" />
          <span className="sidemenu__pages__page--title">Processing</span>
        </Link>
        <img
          src={bottom_curve}
          alt="bottom-curve"
          className={
            page === 'processing'
              ? 'selected-curve curve bottom-curve'
              : 'curve bottom-curve'
          }
        />

        <img
          src={top_curve}
          alt="top-curve"
          className={
            page === 'about'
              ? 'selected-curve curve top-curve'
              : 'curve top-curve'
          }
        />
        <Link
          className={
            page === 'about'
              ? 'link sidemenu__pages__page selected'
              : 'link sidemenu__pages__page'
          }
          to={'/about'}
        >
          <BiInfoCircle className="sidemenu__pages__page--icon" />
          <span className="sidemenu__pages__page--title">About</span>
        </Link>
        <img
          src={bottom_curve}
          alt="bottom-curve"
          className={
            page === 'about'
              ? 'selected-curve curve bottom-curve'
              : 'curve bottom-curve'
          }
        />
      </div>
    </div>
  );
};

export default SideMenu;
