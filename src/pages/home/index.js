import { Component, h } from 'preact';

import { namespacedTranslation } from '../../lib/i18n';
import MunicipalityLogos from '../../components/MunicipalityLogos';

import digidLogo from '../../assets/digidLogo.png';
import irmaLogo from '../../assets/irmaLogo.png';

const t = namespacedTranslation('Home');

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="homeContainer">
          <div class="homeSplashFade">
            <div class="wrapper homeWrapper">
              <div class="inner">
                <h1 class="projectTitle">{ t('.title') }</h1>
              </div>
              <div style={{margin: '0 auto', maxWidth: '800px'}}>
                <p>Haal je persoonsgegevens en adres op via DigiD. Je logt in bij de Gemeente Nijmegen, ook als je niet in Nijmegen woont.</p>
                <p>De <b>gemeente Nijmegen</b> stelt deze gegevens beschikbaar voor iedereen in Nederland.</p>
                <p>Je hebt hiervoor je DigiD nodig.</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '600px', margin: '50px auto'}}>
                <div style={{flex: 1, minWidth: '300px'}}>
                  <a href="issue">
                    <img src={digidLogo} />
                    <h3 style="display: inline-block; position: relative; top: -15px; left: 15px;">Inloggen met DigiD</h3>
                  </a>
                </div>
                { window.location.hostname !== 'services-test.nijmegen.nl' ? null :
                  <div style={{flex: 1, minWidth: '300px'}}>
                    <a href="re-issue">
                      <img src={irmaLogo} style={{width: '60px'}} />
                      <h3 style="display: inline-block; position: relative; top: -15px; left: 15px;">Inloggen met IRMA</h3>
                    </a>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <MunicipalityLogos />
      </div>
    );
  }
}
