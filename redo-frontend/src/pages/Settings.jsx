import settingHeading from '../images/settingheader.png'
import SettingsLeft from '../components/SettingsLeft';
import SettingMain from '../components/SettingMain';
import SettingRight from '../components/SettingRight';

import {Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';

const Settings = () => {
  return (
    <div className="setting-page">
      <SettingsLeft />
      <SettingMain />
      <SettingRight/>
    </div>
  );
};

export default Settings;