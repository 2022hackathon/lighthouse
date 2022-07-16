import React from 'react'
import Header from '../components/Header';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import settingHeading from '../images/settingheader.png'
import facebooklogin from '../images/fblogin.png'
import twitterlogin from '../images/twitterlogin.png'
import instagramlogin from '../images/instagramlogin.png'
import linkedinlogin from '../images/linkedinlogin.png'
import savebutton from '../images/savebutton.png'
import cancelbutton from '../images/cancelbutton.png'

const SettingMain = () => {
    return (
        <div className='settingMain'>
            <img src={settingHeading} alt="setting header" />
        
            <br/>

            <img src={facebooklogin} alt="facebook login" />
            <br/>
            <img src={twitterlogin} alt="twitter login"/>
            <br/>
            <img src={instagramlogin} alt="instagram login"/>
            <br/>
            <img src={linkedinlogin} alt="linkedin login"/>

            <br/>
            <br/>

            <div className='settingFontSize'>Fetch new Posts/Feeds every...</div>

            <br/>

            <select className='socialMediaDropDownMenu' name="time" id='time'>
                <option value="instant">1 hour</option>
                <option value="instant">2 hours</option>
                <option value="instant">6 hours</option>
                <option value="instant">24 hours</option>
            </select>
            
            <br/>
            

            <div className='settingFontSize'>Prioritise posts/feeds if it includes:</div>
            <input className="inputBox" type="text" />

            <div className='settingFontSize'>Filter posts/feeds if it includes:</div>
            <input className="inputBox" type="text" />

            <div>
                <img className='child' src={savebutton} alt="save button" />
                <img className='child' src={cancelbutton} alt="cancel button" />
            </div>
            

        </div>
    )
}

export default SettingMain