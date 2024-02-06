import React from 'react';
import {Scene,Router,Stack} from 'react-native-router-flux';
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Setting from './pages/Setting';
import Belajar from './pages/belajar/Belajar';
import Sejarah from './pages/belajar/Sejarah';
import Pandawa from './pages/belajar/pandawa/Pandawa';
import PandawaHome from './pages/belajar/pandawa/PandawaHome';
import PandawaDetail from './pages/belajar/pandawa/PandawaDetail';
import VideoPandawa from './pages/belajar/pandawa/video/Pandawa';
import Yudistira from './pages/belajar/pandawa/detail/Yudhistira';
import Bima from './pages/belajar/pandawa/detail/Bima';
import Arjuna from './pages/belajar/pandawa/detail/Arjuna';
import Nakula from './pages/belajar/pandawa/detail/Nakula';
import Sadewa from './pages/belajar/pandawa/detail/Sadewa';
import Panakawan from './pages/belajar/panakawan/Panakawan';
import PanakawanHome from './pages/belajar/panakawan/PanakawanHome';
import PanakawanDetail from './pages/belajar/panakawan/PanakawanDetail';
import Semar from './pages/belajar/panakawan/detail/Semar';
import Cepot from './pages/belajar/panakawan/detail/Cepot';
import Dawala from './pages/belajar/panakawan/detail/Dawala';
import Gareng from './pages/belajar/panakawan/detail/Gareng';
import Kurawa from './pages/belajar/kurawa/Kurawa';
import KurawaHome from './pages/belajar/kurawa/KurawaHome';
import KurawaDetail from './pages/belajar/kurawa/KurawaDetail';
import Duryudana from './pages/belajar/kurawa/detail/Duryudana';
import Dursasana from './pages/belajar/kurawa/detail/Dursasana';
import Citraksi from './pages/belajar/kurawa/detail/Citraksi';
import Citrayuda from './pages/belajar/kurawa/detail/Citrayuda';
import Register from './pages/auth/Daftar/Daftar';
  
const Routes: () => React$Node = () => {
    return (
        <Router >
            <Stack 
                key="root" 
                hideNavBar
                transitionConfig={() => ({
                    screenInterpolator: (props) => {
                        switch (props.scene.route.params.direction) {
                            case 'vertical':
                                return StackViewStyleInterpolator.forVertical(props);
                            case 'fromBottom':
                                return StackViewStyleInterpolator.forFadeFromBottomAndroid(props);
                            case 'toBottom':
                                return StackViewStyleInterpolator.forFadeToBottomAndroid(props);
                            case 'fade':
                                return StackViewStyleInterpolator.forFade(props);
                            case 'none':
                                return StackViewStyleInterpolator.forInitial
                            case 'horizontal':
                            default:
                                return StackViewStyleInterpolator.forHorizontal(props)
                        }
                    }
                })}
            >                
                <Scene key="loading" component={Loading} direction='fade' initial={true}/>  
                <Scene key="home" component={Home} direction='horizontal'/>      
                <Scene key="menu" component={Menu} direction='horizontal'/>
                <Scene key="daftar" component={Register} direction='horizontal'/>
                <Scene key="setting" component={Setting} direction='horizontal'/>
                <Scene key="belajar" component={Belajar} direction='horizontal'/>
                <Scene key="sejarah" component={Sejarah} direction='horizontal'/>
                <Scene key="pandawa" component={Pandawa} direction='horizontal'/>
                <Scene key="pandawahome" component={PandawaHome} direction='horizontal'/>
                <Scene key="pandawadetail" component={PandawaDetail} direction='horizontal'/>                
                <Scene key="videopandawa" component={VideoPandawa} direction='horizontal'/>
                <Scene key="yudhistira" component={Yudistira} direction='horizontal'/>                
                <Scene key="bima" component={Bima} direction='horizontal'/>                
                <Scene key="arjuna" component={Arjuna} direction='horizontal'/>                
                <Scene key="nakula" component={Nakula} direction='horizontal'/>                
                <Scene key="sadewa" component={Sadewa} direction='horizontal'/>
                <Scene key="panakawan" component={Panakawan} direction='horizontal'/>
                <Scene key="panakawanhome" component={PanakawanHome} direction='horizontal'/>
                <Scene key="panakawandetail" component={PanakawanDetail} direction='horizontal'/>
                <Scene key="semar" component={Semar} direction='horizontal'/>
                <Scene key="cepot" component={Cepot} direction='horizontal'/>
                <Scene key="dawala" component={Dawala} direction='horizontal'/>
                <Scene key="gareng" component={Gareng} direction='horizontal'/>
                <Scene key="kurawa" component={Kurawa} direction='horizontal'/>
                <Scene key="kurawahome" component={KurawaHome} direction='horizontal'/>
                <Scene key="kurawadetail" component={KurawaDetail} direction='horizontal'/>
                <Scene key="duryudana" component={Duryudana} direction='horizontal'/>
                <Scene key="dursasana" component={Dursasana} direction='horizontal'/>
                <Scene key="citraksi" component={Citraksi} direction='horizontal'/>
                <Scene key="citrayuda" component={Citrayuda} direction='horizontal'/>
            </Stack>
        </Router>
    );
  };
   
  export default Routes;