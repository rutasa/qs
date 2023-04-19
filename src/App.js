import logo from './logo.svg';
import './App.css';
import QdtComponent from './QdtComponent';
import { exportMultipleChartsToPdf } from "./utils";
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';
import image9 from './images/image9.png';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';
import image13 from './images/image13.jpg';
import image14 from './images/image14.jpg';
import { useLineChartSettings } from 'qdt-components';

const App = () => {
    return (
        <>
            <div className="App">
                <button className="button" onClick={exportMultipleChartsToPdf}>
                    Export to PDF
                </button>
                <header className="App-header">

                    { /*<p className="customChart">2022 METŲ PRASTOVOS</p>
                    <QdtComponent
                        options={{
                            id: '8a552098-0284-4a6b-90b2-daec4e7f1b51', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: '8dfbd6be-beae-4410-85cc-05250e3dbb3e', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'ad286025-176a-464f-9822-61fe76a86021', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: '15b60304-b693-472a-bff7-97c330af928c', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'f44b8da7-0328-42dc-9b4c-569f59412aba', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'bff64aa2-5638-40da-b0d3-67e931feaf40', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', }
                        }}
                        identity="0"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <div className="customChart" /> */}

                    <p className="customChart">2023 METŲ MĖNESINĖS PRASTOVOS</p> 
                    {/*<p className="customChart">2021 METŲ PRASTOVOS</p>*/}


                    <QdtComponent
                        options={{
                            id: '2c321fd9-dd5b-4ba9-9a84-366d33385bdc', height: 400, width: 1200,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2023', 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    {/*<QdtComponent
                        options={{
                            id: '8a552098-0284-4a6b-90b2-daec4e7f1b51', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: '8dfbd6be-beae-4410-85cc-05250e3dbb3e', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'ad286025-176a-464f-9822-61fe76a86021', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: '15b60304-b693-472a-bff7-97c330af928c', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'f44b8da7-0328-42dc-9b4c-569f59412aba', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'bff64aa2-5638-40da-b0d3-67e931feaf40', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />*/}


                    <QdtComponent
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2023', 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    /> 
                    {/*<QdtComponent
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />*/}

                    <QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2023', 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    {/*<QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021', }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />*/}


                    <QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2023', 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    {/*<QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021', }
                        }}
                        identity="1"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <div className="customChart" />*/}

                    <p className="customChart">2023m. vasario mėn. pagrindinės prastovos</p>
                    <table className="customChart">
                        <tr>
                            <td>02.05</td>
                        </tr>
                        <tr>
                            <td>RO306.24 veleno keitimas - PM3 darbo metu per kameras pastebėta, kad 6 dž. gr. 0 metre laša deganti layva. Skubiai imta gesinti po džiovykla esantį broką, dulkes. Pastebėta, kad pažeista RO306.24 veleno pavarinė guoliavietė. Gedimo šalinimas - išardžius pavarinės pusės guolį pastebėta, kad veleno kakliukas pasisukęs ant guolio. Pats guolis nebuvo labai pažeistas - riedėjimo elementai bei vidinis ir išorinis žiedas nepažeisti. Alyva pradėjo tekėti per guoliavietės korpusą, nes alyvos drenažas buvo visiškai užsikišęs nuo sutrinto kakliuko metalo drožlių. Dėl didelių veleno pažeidimų pakeistas visas velenėlis. Prastova - 6:45 val.</td>
                        </tr>
                        <tr>
                            <td>02.06</td>
                        </tr>
                        <tr>
                            <td>1 preso apat. audeklo įtempimo mechanizmo reduktoriaus gedimas -po prastovos paleidinėjant presinę dalį pastebėta, kad apatinis 1 preso audeklas neįsitempia. Aptiktas įtempimo mechanizmo reduktoriaus gedimas. Gedimo šalinimas - reduktoriaus kūginis krumpliaratis, kuris sukdama privalos kontaktuoti su įtempimo mechanizmo sliekine pavara buvo kiek atsitraukęs dėl jo išdilimo. Pakeitus mechaninius elementus (krumpliaračio įvorę, fiksacinius žiedus) įrenginys paleistas eksploatacijai.   Prastova - 2:57 val.</td>
                        </tr>
                        <tr>
                            <td>02.10</td>
                        </tr>
                        <tr>
                            <td>PPR uždelsimas (apsivertė VS14 diržai) -patikrinus, kaip dirba kątik sumontuotas VS14 siurblys pastebėta, kad diržinė pavara dirba netinkamai t.y. keletas diržų apsivertę ant skriemulių. Gedimo šalinimas - dėl šios priežasties įranga stabdyta 2 kartus. Atlikti centravimo darbai, kurie nebuvo itin tikslūs. Naudota įvairi įranga, tačiau rasti tinkamo skriemulių lygiagretumo nepavyko. Sekančią dieną VS14 stabdytas atlikti trečiam centravimui, kuris galiausiai buvo paskutinis. Privalomas centravimo įrangos atnaujinimas. Prastova - 2:20 val.</td>
                        </tr>
                        <tr>
                            <td>02.13</td>
                        </tr>
                        <tr>
                            <td>Angliško krano gedimas - sudegė varža, bei alyvos trūkumas stabžių sistemoje - kranas darbo metu ties vyniotuvu sustojo ir nebepajudėjo. Dėl didelės apkrovos sudegė įrengimo varža, o galiausiai pastebėta, kad krano stabdžiai prispausti ir dėl alyvos trūkumo negalėjo atsipalaiduoti. Gedimo šalinimas - elektriniai elementai pakeisti, alyva papildyta. Prieš tai Mažeikių ,,Strėlė&quot; vykdė patikras, revizijas, bet esminės problemos neaptiko. Galiausiai savo aplaidumą jie pripažino. Prastova - 2:39 val.</td>
                        </tr>
                        <tr>
                            <td>02.20</td>
                        </tr>
                        <tr>
                            <td>1 preso apatinio audeklo keitimas - dėl itin padidėjusių nutrūkimų nuspręsta pakeisti 1 preso apatinį audeklą. Tai dar įtakojo, kad jis jau turėjo kosmetinius pažeidimus, skyles. Gedimo šalinimas - sustabdžius gamybinį procesą operatoriai atlikę plovimo darbus pašalino senąjį audeklą ir sumontavo naują. Atlikus šią užduotį ir pradėjus vykdyti technologinį gamybos procesą nutrūkimų skaičius ir dažnumas nepasikeitė. Problema išsisprendė tik pakeitus 3 preso audeklą, nes ties šia zona ir vyko daugiausia nutrūkimų. Prastova - 2:19 val.</td>
                        </tr>
                    </table>
                    <div className="customChart"/>

                    <p className="customChart">2022 - 2023 METŲ PRASTOVŲ PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent
                        options={{
                            id: 'FHgJa', height: 400, width: 1200,
                            selections: { 'Metai': [2022, 2023], },
                            color: {
                                mode: 'byDimension',
                                dimensionScheme: '100',
                                auto: false
                            }
                            
                        }}
                        identity="2"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"

                    />
                    <QdtComponent
                        options={{
                            id: 'xJLhaK', height: 400, width: 1200,
                            selections: { 'Metai': [2022, 2023], },
                            color: {
                                mode: 'byDimension',
                                dimensionScheme: '100',
                                auto: false
                            }
                        }}
                        identity="2"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"

                    />
                    <QdtComponent
                        options={{
                            id: 'Qprcb', height: 200, width: 300,
                            selections: { 'Metai': [2022, 2023], 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="3"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'WxHNus', height: 200, width: 300,
                            selections: { 'Metai': [2022, 2023], 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="3"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'LjuqS', height: 200, width: 500,
                            selections: { 'Metai': [2022, 2023], 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="4"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'QCSRP', height: 200, width: 500,
                            selections: { 'Metai': [2022, 2023], 'PRODUCTION_DAY.autoCalendar.Month': 'vas.', }
                        }}
                        identity="4"
                        appId="KK Prastovos TECHNINĖ TARNYBA (2).qvf"
                    />
                    {/* naujas blokas */}
                    { /*<p className="customChart"> 2021 METŲ PAGAMINTAS GARAS </p>
                    <QdtComponent
                        options={{
                            id: 'bYtcCT', height: 400, width: 1200,
                            selections: { 'metai': '2021', }
                        }}
                        identity="42"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <p className="customChart"> 2022 METŲ PAGAMINTAS GARAS </p>
                    <QdtComponent
                        options={{
                            id: 'wjAfNk', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                        identity="43"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'bYtcCT', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                        identity="43"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <p className="customChart"> 2021 METŲ SUVARTOTA ELEKTRA </p>
                    <QdtComponent
                        options={{
                            id: 'mQwNHq', height: 400, width: 1200,
                            selections: { 'metai': '2021', }
                        }}
                        identity="42"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'wJZYcku', height: 400, width: 1200,
                            selections: { 'metai': '2021', }
                        }}
                        identity="42"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <p className="customChart"> 2022 METŲ SUVARTOTA ELEKTRA </p>
                    <QdtComponent
                        options={{
                            id: 'mQwNHq', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                        identity="43"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'wJZYcku', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                        identity="43"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <div className="customChart"/> */}
                    {/* naujas blokas close */}
                    <p className="customChart">2022 - 2023 METŲ PAGAMINTO GARO PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent
                        options={{
                            id: 'CHnEqy', height: 400, width: 1200,
                            selections: { 'metai': [2022, 2023], 'data_laikas.autoCalendar.Month': []}
                        }}
                        identity="4"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'EruP', height: 200, width: 500,
                            selections: { 'metai': [2022, 2023], 'data_laikas.autoCalendar.Month': 'vas.', }
                        }}
                        identity="42"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'feczFzD', height: 400, width: 1200,
                            selections: { 'metai': [2022, 2023], 'data_laikas.autoCalendar.Month': []}
                        }}
                        identity="4"
                        appId="KK Energetika (katilinė).qvf"
                    />
           
                    <p className="customChart">2022 - 2023 METŲ SUVARTOTOS ELEKTROS PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent
                        options={{
                            id: 'HdvpDbt', height: 400, width: 1200,
                            selections: { 'metai': [2022, 2023], 'data_laikas.autoCalendar.Month': []}
                        }}
                        identity="4"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'PTPjWG', height: 200, width: 500,
                            selections: { 'metai': [2022, 2023], 'data_laikas.autoCalendar.Month': 'vas.', }
                        }}
                        identity="42"
                        appId="KK Energetika (katilinė).qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'hnqJVC', height: 400, width: 1200,
                            selections: { 'metai': [2022, 2023], 'data_laikas.autoCalendar.Month': []}
                        }}
                        identity="4"
                        appId="KK Energetika (katilinė).qvf"
                    />                                                                                         
                    { /* naujas blokas */}

                    {/*<p className="customChart">TECHNIKOS PADALINIO SR IR WO 2021 STATISTIKA </p>
                    <QdtComponent
                        options={{
                            id: 'NpJTu', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2021' }
                        }}
                        identity="51"
                        appId="WO statistika.qvf"

                    />
                    <QdtComponent
                        options={{
                            id: 'MGTut', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2021' }
                        }}
                        identity="51"
                        appId="WO statistika.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'ypjpcdz', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2021' }
                        }}
                        identity="51"
                        appId="WO statistika.qvf"
                    />
                    <p className="customChart">TECHNIKOS PADALINIO SR IR WO 2022 STATISTIKA </p>
                    <QdtComponent
                        options={{
                            id: 'NpJTu', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2022' }
                        }}
                        identity="52"
                        appId="WO statistika.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'MGTut', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2022' }
                        }}
                        identity="52"
                        appId="WO statistika.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'ypjpcdz', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2022' }
                        }}
                        identity="52"
                        appId="WO statistika.qvf"
                    />*/}
                    { /* naujas blokas close */}
                <p className="customChart">SR IR WO 24 MĖNESIŲ POKYČIAI</p>
                    <QdtComponent
                        options={{
                            id: 'c4660de9-716f-4e45-8020-a7d67f0262b9', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], }
                        }}
                        identity="5"
                        appId="WO statistika.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'rYgMf', height: 400, width: 1200,
                            selections: { 'status year': '2023', 'status month': '2' }
                        }}
                        identity="6"
                        appId="KK Planned vs. Actuals.qvf"
                    />
                    <p className="customChart">ODR ATLIKIMAS</p>
                    <p className="customChart">ODR MG </p>
                    <p className="customChart">ODR EG </p>
                    <p className="customChart">ODR ŠG </p>
                    <QdtComponent
                        options={{
                            id: '3746b427-2384-4bfc-85a7-e736d225fdff', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2023', 'PRODUCTION_DAY.autoCalendar.Month': 'vas.' }
                        }}
                        identity="7"
                        appId="KK KPI.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: '9e681c5a-a104-4a12-af83-841b0c574eb3', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2023', 'PRODUCTION_DAY.autoCalendar.Month': 'vas.' }
                        }}
                        identity="7"
                        appId="KK KPI.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: '393280c0-f817-4b90-a14f-df7b80838775', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2023', 'PRODUCTION_DAY.autoCalendar.Month': 'vas.' }
                        }}
                        identity="7"
                        appId="KK KPI.qvf"
                    />                                                                                                                          
                    {/*<QdtComponent7
                        options={{
                            id: '3746b427-2384-4bfc-85a7-e736d225fdff', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022'}
                        }}
                        identity="7"
                        appId="KK KPI.qvf"
                    />
                    <QdtComponent7
                        options={{
                            id: '9e681c5a-a104-4a12-af83-841b0c574eb3', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="7"
                        appId="KK KPI.qvf"
                    />
                    <QdtComponent7
                        options={{
                            id: '393280c0-f817-4b90-a14f-df7b80838775', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                        identity="7"
                        appId="KK KPI.qvf"
                    />*/}
                   

                   <QdtComponent
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2023', 'month': '2' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2023', 'month': '2' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2023', 'month': '2' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2023', 'month': '2' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2023', 'month': '2' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />

                    <p className="customChart">2023m. vasario mėn. Kitų organizacijų darbai</p>
                    <table className="customChart">
                        <tr>
                            <td>Data</td>
                            <td>Kvitas</td>
                            <td>Dokumentas</td>
                            <td>Saskaita faktura</td>
                            <td>Pavadinimas</td>
                            <td>Operacijos tekstas</td>
                            <td>Valiuta</td>
                            <td>Sumos valiuta</td>
                            <td>Suma</td>
                            <td>Sukaupta</td>
                            <td>Padalinys</td>
                            <td>Išlaidu centras</td>
                            <td>Paskirtis</td>
                            <td>Komentaras</td>
                        </tr>
                        <tr>
                            <td>2023-02-15</td>
                            <td>ts101857</td>
                            <td>TPT144733</td>
                            <td>TPT144733</td>
                            <td>Technikos priežiuros tarnyba VšI</td>
                            <td>pi0102311 188637485 450LIEJUR</td>
                            <td>EUR</td>
                            <td>74,9</td>
                            <td>74,9</td>
                            <td>74 451,07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Tiltinio krano DTP patikrinimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-01</td>
                            <td>ts101869</td>
                            <td>AAA336276</td>
                            <td>AAA336276</td>
                            <td>UAB Intrac Lietuva</td>
                            <td>pi0102351 111713162 450LIEJUR</td>
                            <td>EUR</td>
                            <td>47,71</td>
                            <td>47,71</td>
                            <td>52 719,03</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Manitou kaištis</td>
                        </tr>
                        <tr>
                            <td>2023-02-01</td>
                            <td>ts101874</td>
                            <td>BT LTB0067627</td>
                            <td>BT LTB0067627</td>
                            <td>RAB Toyota Material Handling Baltic Lietuvos filialas</td>
                            <td>pi0102358 302331094 450LIEJUR</td>
                            <td>EUR</td>
                            <td>126,9</td>
                            <td>126,9</td>
                            <td>52 845,93</td>
                            <td>GKG</td>
                            <td>GKG</td>
                            <td>G4KG</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-02</td>
                            <td>ts102028</td>
                            <td>GRKL-0003</td>
                            <td>GRKL-0003</td>
                            <td>UAB Freidesk</td>
                            <td>pi0102510 304988879 450LIEJUR</td>
                            <td>EUR</td>
                            <td>255,1</td>
                            <td>255,1</td>
                            <td>53 101,03</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-13</td>
                            <td>ts101815</td>
                            <td>BCE0001509</td>
                            <td>BCE0001509</td>
                            <td>UAB Baltic Cranes Engineering</td>
                            <td>pi0102290 302331938 450LIEJUR</td>
                            <td>EUR</td>
                            <td>420</td>
                            <td>420</td>
                            <td>64 117,43</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Kelimo skersines remontas (traversa)</td>
                        </tr>
                        <tr>
                            <td>2023-02-03</td>
                            <td>ts101706</td>
                            <td>BT LTB0068046</td>
                            <td>BT LTB0068046</td>
                            <td>RAB Toyota Material Handling Baltic Lietuvos filialas</td>
                            <td>pi0102135 302331094 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 700,00</td>
                            <td>1 700,00</td>
                            <td>55 121,03</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-01</td>
                            <td>ts101663</td>
                            <td>BLS230000167</td>
                            <td>BLS230000167</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0102132 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 306,50</td>
                            <td>1 306,50</td>
                            <td>52 671,32</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>SVB smulkaus valymo lifto  remontas troso keitimas ir kita..</td>
                        </tr>
                        <tr>
                            <td>2023-02-08</td>
                            <td>ts101747</td>
                            <td>EKO 18562</td>
                            <td>EKO 18562</td>
                            <td>UAB Ekovalis</td>
                            <td>pi0102215 167392890 450LIEJUR</td>
                            <td>EUR</td>
                            <td>902,7</td>
                            <td>902,7</td>
                            <td>56 186,51</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2023-02-06</td>
                            <td>ts101765</td>
                            <td>BLS230000176</td>
                            <td>BLS230000176</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0102239 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>162,78</td>
                            <td>162,78</td>
                            <td>55 283,81</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Koriu desinio lifto duru uzrakto remontas</td>
                        </tr>
                        <tr>
                            <td>2023-02-17</td>
                            <td>ts101892</td>
                            <td>BLS230000185</td>
                            <td>BLS230000185</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0102329 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>543</td>
                            <td>543</td>
                            <td>84 402,28</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>SVB smulkaus valymo lifto  remontas po defektacijos duru stogelis, apsvietimas...</td>
                        </tr>
                        <tr>
                            <td>2023-02-24</td>
                            <td>ts101962</td>
                            <td>BLS230000273</td>
                            <td>BLS230000273</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0102439 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>360</td>
                            <td>360</td>
                            <td>101 883,88</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>liftu technine prieziura</td>
                        </tr>
                        <tr>
                            <td>2023-02-10</td>
                            <td>ts101836</td>
                            <td>DIC 7893</td>
                            <td>DIC 7893</td>
                            <td>UAB Dangu inžinerijos centras</td>
                            <td>pi0102297 135255360 450LIEJUR</td>
                            <td>EUR</td>
                            <td>3 268,00</td>
                            <td>3 268,00</td>
                            <td>63 457,03</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Ivoriu keraminis padengimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-09</td>
                            <td>ts101817</td>
                            <td>SKF108873</td>
                            <td>SKF108873</td>
                            <td>UAB SKF Lietuva</td>
                            <td>pi0102292 300146410 450LIEJUR</td>
                            <td>EUR</td>
                            <td>162</td>
                            <td>162</td>
                            <td>60 189,03</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-22</td>
                            <td>ts102118</td>
                            <td>DSP0013486</td>
                            <td>DSP0013486</td>
                            <td>UAB Danis sauga</td>
                            <td>pi0102614 125276356 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 584,45</td>
                            <td>1 584,45</td>
                            <td>101 523,88</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>DSS kelimo irangos patikrinimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-12</td>
                            <td>ts101884</td>
                            <td>ARG01495933</td>
                            <td>ARG01495933</td>
                            <td>UAB  Saugos tarnyba Argus</td>
                            <td>pi0102364 141237452 450LIEJUR</td>
                            <td>EUR</td>
                            <td>240,4</td>
                            <td>240,4</td>
                            <td>63 697,43</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Gaisrinės signalizacijos daviklių keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-13</td>
                            <td>ts101818</td>
                            <td>DTS762</td>
                            <td>DTS762</td>
                            <td>UAB Delta techniniai sprendimai</td>
                            <td>pi0101376 304897963 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 840,00</td>
                            <td>1 840,00</td>
                            <td>66 038,07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>reviziniu kopeciu gamyba nuoteku siurblinei</td>
                        </tr>
                        <tr>
                            <td>2023-02-13</td>
                            <td>ts101816</td>
                            <td>TD934141</td>
                            <td>TD934141</td>
                            <td>UAB Alwark</td>
                            <td>pi0102291 300638080 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>80,64</td>
                            <td>80,64</td>
                            <td>64 198,07</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-15</td>
                            <td>ts101868</td>
                            <td>DTS 764</td>
                            <td>DTS 764</td>
                            <td>UAB Delta techniniai sprendimai</td>
                            <td>pi0102336 304897963 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 673,75</td>
                            <td>2 673,75</td>
                            <td>81 001,30</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR VS14 vakuum siurblio keitimo darbai</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2023-02-17</td>
                            <td>ts101859</td>
                            <td>DTS763</td>
                            <td>DTS763</td>
                            <td>UAB Delta techniniai sprendimai</td>
                            <td>pi0102306 304897963 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 810,00</td>
                            <td>2 810,00</td>
                            <td>83 811,30</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai MPC bare transporterio hidropulperio remontas vamzdyno keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-03</td>
                            <td>ts101661</td>
                            <td>EDE112950</td>
                            <td>EDE112950</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0102131 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>320</td>
                            <td>320</td>
                            <td>53 421,03</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>MPC sklendes restauravimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-13</td>
                            <td>ts101862</td>
                            <td>MIN03002</td>
                            <td>MIN03002</td>
                            <td>UAB Minestas</td>
                            <td>pi0102331 142095319 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 750,00</td>
                            <td>2 750,00</td>
                            <td>72 341,07</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>Liuko įstatymas į C21 baseiną</td>
                        </tr>
                        <tr>
                            <td>2023-02-15</td>
                            <td>ts101867</td>
                            <td>EDE 113026</td>
                            <td>EDE 113026</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0102335 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>3 876,48</td>
                            <td>3 876,48</td>
                            <td>78 327,55</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai 1 preso atramu keitimas , itempimo mechan. remontas, manhop veleno keitimas...</td>
                        </tr>
                        <tr>
                            <td>2023-02-24</td>
                            <td>ts101983</td>
                            <td>EDE113050</td>
                            <td>EDE113050</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0102449 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>384</td>
                            <td>384</td>
                            <td>102 267,88</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>MPC siurblio veleno remontas</td>
                        </tr>
                        <tr>
                            <td>2023-02-14</td>
                            <td>ts101976</td>
                            <td>KGP0758909</td>
                            <td>KGP0758909</td>
                            <td>AB Kauno Grudai</td>
                            <td>pi0102450 133818917 450LIEJUR</td>
                            <td>EUR</td>
                            <td>91,6</td>
                            <td>91,6</td>
                            <td>73 755,17</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-15</td>
                            <td>ts101854</td>
                            <td>DTS 765</td>
                            <td>DTS 765</td>
                            <td>UAB Delta techniniai sprendimai</td>
                            <td>pi0102303 304897963 450LIEJUR</td>
                            <td>EUR</td>
                            <td>621</td>
                            <td>621</td>
                            <td>74 376,17</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Pelenų šneko keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-13</td>
                            <td>ts101858</td>
                            <td>GRTS23041</td>
                            <td>GRTS23041</td>
                            <td>UAB Garant Service</td>
                            <td>pi0102312 302573959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>420</td>
                            <td>420</td>
                            <td>69 591,07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR tepimo sistemos vamzdeliu keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-08</td>
                            <td>ts101764</td>
                            <td>1370658649</td>
                            <td>1370658649</td>
                            <td>UAB Hansa Flex Hidraulika</td>
                            <td>pi0102238 110776462 450LIEJUR</td>
                            <td>EUR</td>
                            <td>75,52</td>
                            <td>75,52</td>
                            <td>56 262,03</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>pneumo pavaros remontas</td>
                        </tr>
                        <tr>
                            <td>2023-02-21</td>
                            <td>ts101900</td>
                            <td>1370660957</td>
                            <td>1370660957</td>
                            <td>UAB Hansa Flex Hidraulika</td>
                            <td>pi0102383 110776462 450LIEJUR</td>
                            <td>EUR</td>
                            <td>85,3</td>
                            <td>85,3</td>
                            <td>98 687,24</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>pneumo cilindro remontas</td>
                        </tr>
                        <tr>
                            <td>2023-02-21</td>
                            <td>ts101901</td>
                            <td>1370660954</td>
                            <td>1370660954</td>
                            <td>UAB Hansa Flex Hidraulika</td>
                            <td>pi0102387 110776462 450LIEJUR</td>
                            <td>EUR</td>
                            <td>125,14</td>
                            <td>125,14</td>
                            <td>98 812,38</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>hidraulines dalys</td>
                        </tr>
                        <tr>
                            <td>2023-02-17</td>
                            <td>ts101861</td>
                            <td>BA2300912</td>
                            <td>BA2300912</td>
                            <td>UAB Baltic Auto</td>
                            <td>pi0102330 140699071 450LIEJUR</td>
                            <td>EUR</td>
                            <td>47,98</td>
                            <td>47,98</td>
                            <td>83 859,28</td>
                            <td>GKP</td>
                            <td>TDX</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2023-02-27</td>
                            <td>ts101963</td>
                            <td>LEM23064</td>
                            <td>LEM23064</td>
                            <td>UAB LEMBA</td>
                            <td>pi0102440 303229473 450LIEJUR</td>
                            <td>EUR</td>
                            <td>896</td>
                            <td>896</td>
                            <td>98 963,88</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR kondensato vamzdyno keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-17</td>
                            <td>ts101894</td>
                            <td>SKF108874</td>
                            <td>SKF108874</td>
                            <td>UAB SKF Lietuva</td>
                            <td>pi0102377 300146410 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 094,00</td>
                            <td>1 094,00</td>
                            <td>85 496,28</td>
                            <td>GKP</td>
                            <td>GPT</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-17</td>
                            <td>ts101895</td>
                            <td>SKF108875</td>
                            <td>SKF108875</td>
                            <td>UAB SKF Lietuva</td>
                            <td>pi0102378 300146410 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 400,00</td>
                            <td>1 400,00</td>
                            <td>86 896,28</td>
                            <td>GKP</td>
                            <td>GPT</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-17</td>
                            <td>ts102079</td>
                            <td>ŽAŽ0002500</td>
                            <td>ŽAŽ0002500</td>
                            <td>UAB Elektrilis</td>
                            <td>pi0102565 171714016 450LIEJUR</td>
                            <td>EUR</td>
                            <td>950</td>
                            <td>950</td>
                            <td>87 846,28</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-20</td>
                            <td>ts101866</td>
                            <td>9670023203</td>
                            <td>9670023203</td>
                            <td>ABB Oy Process Industries</td>
                            <td>pi0102342 9FIABB 450UZSTIE</td>
                            <td>EUR</td>
                            <td>3 128,36</td>
                            <td>3 128,36</td>
                            <td>90 974,64</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-20</td>
                            <td>ts101876</td>
                            <td>BT LTB0068169</td>
                            <td>BT LTB0068169</td>
                            <td>RAB Toyota Material Handling Baltic Lietuvos filialas</td>
                            <td>pi0102359 302331094 450LIEJUR</td>
                            <td>EUR</td>
                            <td>169,3</td>
                            <td>169,3</td>
                            <td>91 143,94</td>
                            <td>GKG</td>
                            <td>GKG</td>
                            <td>G4KG</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-27</td>
                            <td>ts102036</td>
                            <td>6741201072</td>
                            <td>6741201072</td>
                            <td>UAB Linde Gas</td>
                            <td>pi0102519 110178963 450LIEJUR</td>
                            <td>EUR</td>
                            <td>10,35</td>
                            <td>10,35</td>
                            <td>98 974,23</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>dujos virinimui</td>
                        </tr>
                        <tr>
                            <td>2023-02-09</td>
                            <td>ts101812</td>
                            <td>NFM1242</td>
                            <td>NFM1242</td>
                            <td>UAB Nafmera mechanik</td>
                            <td>pi0102271 302834359 450LIEJUR</td>
                            <td>EUR</td>
                            <td>3 000,00</td>
                            <td>3 000,00</td>
                            <td>60 027,03</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR Anglisko tiltinio krano ratu keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-20</td>
                            <td>ts102088</td>
                            <td>SIN10102</td>
                            <td>SIN10102</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102579 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>350</td>
                            <td>350</td>
                            <td>94 225,94</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>                    
                        <tr>
                            <td>2023-02-21</td>
                            <td>ts101871</td>
                            <td>BT23/01 05383</td>
                            <td>BT23/01 05383</td>
                            <td>UAB Baltic transline</td>
                            <td>pi0102354 235584990 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 800,00</td>
                            <td>1 800,00</td>
                            <td>96 025,94</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-20</td>
                            <td>ts101896</td>
                            <td>PE 23082</td>
                            <td>PE 23082</td>
                            <td>UAB Persolita</td>
                            <td>pi0101452 111618351 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 007,00</td>
                            <td>2 007,00</td>
                            <td>93 875,94</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>vamzdynu skardinimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-13</td>
                            <td>ts101835</td>
                            <td>SIN10083</td>
                            <td>SIN10083</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102301 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>3 133,00</td>
                            <td>3 133,00</td>
                            <td>69 171,07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krano remontas SVB reduktoriu keitimas</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2023-02-13</td>
                            <td>ts101863</td>
                            <td>SIN10087</td>
                            <td>SIN10087</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102332 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>340</td>
                            <td>340</td>
                            <td>72 681,07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krano remontas  </td>
                        </tr>
                        <tr>
                            <td>2023-02-14</td>
                            <td>ts101834</td>
                            <td>SIN 10090</td>
                            <td>SIN 10090</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102296 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>982,5</td>
                            <td>982,5</td>
                            <td>73 663,57</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krano remontas apdailos  lyno keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-21</td>
                            <td>ts101947</td>
                            <td>ADK221271</td>
                            <td>ADK221271</td>
                            <td>UAB Adukesta</td>
                            <td>pi0102431 302482801 450LIEJUR</td>
                            <td>EUR</td>
                            <td>448</td>
                            <td>448</td>
                            <td>99 260,38</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>Kelio greideriavimas</td>
                        </tr>                 
                        <tr>
                            <td>2023-02-22</td>
                            <td>ts102118</td>
                            <td>DSP0013486</td>
                            <td>DSP0013486</td>
                            <td>UAB Danis sauga</td>
                            <td>pi0102614 125276356 450LIEJUR</td>
                            <td>EUR</td>
                            <td>226,35</td>
                            <td>226,35</td>
                            <td>99 486,73</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-22</td>
                            <td>ts102118</td>
                            <td>DSP0013486</td>
                            <td>DSP0013486</td>
                            <td>UAB Danis sauga</td>
                            <td>pi0102614 125276356 450LIEJUR</td>
                            <td>EUR</td>
                            <td>452,7</td>
                            <td>452,7</td>
                            <td>99 939,43</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-20</td>
                            <td>ts101890</td>
                            <td>SDK00663</td>
                            <td>SDK00663</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102373 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>725</td>
                            <td>725</td>
                            <td>91 868,94</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krano rusisko remontas kruvio variklio montavimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102178</td>
                            <td>SDK00677</td>
                            <td>SDK00677</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102616 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>840</td>
                            <td>840</td>
                            <td>112 339,83</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krano rusisko lyno keitimas , taliu remontai</td>
                        </tr>
                        <tr>
                            <td>2023-02-08</td>
                            <td>ts101805</td>
                            <td>TO23-004775</td>
                            <td>TO23-004775</td>
                            <td>UAB Tobis</td>
                            <td>pi0102280 152040659 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>639</td>
                            <td>639</td>
                            <td>56 901,03</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR TR2 transporterio juostos gaminimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-27</td>
                            <td>td003671</td>
                            <td>IRL0005970S</td>
                            <td>IRL0005970S</td>
                            <td>UAB Iremas</td>
                            <td>pi0102659 256906220 450LIEJUR</td>
                            <td>EUR</td>
                            <td>-4 200,00</td>
                            <td>-4 200,00</td>
                            <td>98 067,88</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-08</td>
                            <td>ts101806</td>
                            <td>TO23-004779</td>
                            <td>TO23-004779</td>
                            <td>UAB Tobis</td>
                            <td>pi0102281 152040659 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>126</td>
                            <td>126</td>
                            <td>57 027,03</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR TR2 transporterio juostos keitimas</td>
                        </tr>
                        <tr>
                            <td>2023-02-21</td>
                            <td>ts101891</td>
                            <td>VS 633</td>
                            <td>VS 633</td>
                            <td>UAB Vakaru automatika</td>
                            <td>pi0102375 302612084 450LIEJUR</td>
                            <td>EUR</td>
                            <td>778</td>
                            <td>778</td>
                            <td>96 803,94</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR dziovykliniu velenu patikra</td>
                        </tr>
                        <tr>
                            <td>2023-02-27</td>
                            <td>ts102150</td>
                            <td>IRL0005970</td>
                            <td>IRL0005970</td>
                            <td>UAB Iremas</td>
                            <td>pi0102659 256906220 450LIEJUR</td>
                            <td>EUR</td>
                            <td>4 200,00</td>
                            <td>4 200,00</td>
                            <td>103 174,23</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-27</td>
                            <td>ts102155</td>
                            <td>IRL 0005970</td>
                            <td>IRL 0005970</td>
                            <td>UAB Iremas fil. Letenerga</td>
                            <td>pi0101306 156872518 450LIEJUR</td>
                            <td>EUR</td>
                            <td>4 200,00</td>
                            <td>4 200,00</td>
                            <td>107 374,23</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102034</td>
                            <td>JOR07 0491</td>
                            <td>JOR07 0491</td>
                            <td>UAB Jormeta</td>
                            <td>pi0102517 303105358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>280</td>
                            <td>280</td>
                            <td>107 654,23</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102074</td>
                            <td>VS632</td>
                            <td>VS632</td>
                            <td>UAB Vakaru automatika</td>
                            <td>pi0102562 302612084 450LIEJUR</td>
                            <td>EUR</td>
                            <td>434</td>
                            <td>434</td>
                            <td>108 088,23</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Eknomaizerio dūmsiurbės variklio guolių keitimas</td>
                        </tr>
                    </table>
                    <table className ="customChart">
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102082</td>
                            <td>EKK20202733</td>
                            <td>EKK20202733</td>
                            <td>UAB EKO Krantas</td>
                            <td>pi0102570 302743767 450LIEJUR</td>
                            <td>EUR</td>
                            <td>150</td>
                            <td>150</td>
                            <td>108 238,23</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Pakaitinio pelenų konteinerio remontas </td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102092</td>
                            <td>SDK00665</td>
                            <td>SDK00665</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102590 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>295</td>
                            <td>295</td>
                            <td>108 533,23</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102096</td>
                            <td>2302230000000</td>
                            <td>2302230000000</td>
                            <td>UAB Apsaugos komanda</td>
                            <td>pi0102599 122668722 450LIEJUR</td>
                            <td>EUR</td>
                            <td>50</td>
                            <td>50</td>
                            <td>108 583,23</td>
                            <td>GKP</td>
                            <td>GNB</td>
                            <td>G9NB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102097</td>
                            <td>1310/300/10044357</td>
                            <td>1310/300/10044357</td>
                            <td>Valmet Automation Oy</td>
                            <td>pi0102600 9FIMETSOA 450UZSTIE</td>
                            <td>EUR</td>
                            <td>580</td>
                            <td>580</td>
                            <td>109 163,23</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102100</td>
                            <td>SBK0185763</td>
                            <td>SBK0185763</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0102604 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>6,45</td>
                            <td>6,45</td>
                            <td>109 169,68</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102100</td>
                            <td>SBK0185763</td>
                            <td>SBK0185763</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0102604 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>29,54</td>
                            <td>29,54</td>
                            <td>109 199,22</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102100</td>
                            <td>SBK0185763</td>
                            <td>SBK0185763</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0102604 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>8,98</td>
                            <td>8,98</td>
                            <td>109 208,20</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102100</td>
                            <td>SBK0185763</td>
                            <td>SBK0185763</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0102604 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>26,23</td>
                            <td>26,23</td>
                            <td>109 234,43</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102134</td>
                            <td>SIN10130</td>
                            <td>SIN10130</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0102635 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 265,40</td>
                            <td>2 265,40</td>
                            <td>111 499,83</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2023-02-21</td>
                            <td>ts101897</td>
                            <td>VS 634</td>
                            <td>VS 634</td>
                            <td>UAB Vakaru automatika</td>
                            <td>pi0102376 302612084 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 798,00</td>
                            <td>1 798,00</td>
                            <td>98 601,94</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR SVB triju siurbliu remontas</td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102221</td>
                            <td>GSS 000118</td>
                            <td>GSS 000118</td>
                            <td>UAB GSS pro</td>
                            <td>pi0102705 306112742 450LIEJUR</td>
                            <td>EUR</td>
                            <td>400</td>
                            <td>400</td>
                            <td>112 739,83</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Gaisrinės signalizacijos periodinė patikra </td>
                        </tr>
                        <tr>
                            <td>2023-02-28</td>
                            <td>ts102234</td>
                            <td>GSS000113</td>
                            <td>GSS000113</td>
                            <td>UAB GSS pro</td>
                            <td>pi0102706 306112742 450LIEJUR</td>
                            <td>EUR</td>
                            <td>869</td>
                            <td>869</td>
                            <td>113 608,83</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>Gaisrinės signalizacijos aptarnavimas</td>
                        </tr>
                    </table>


                    { /* <p className="customChart">VISŲ PADALINIŲ SR STATISTIKA 2021</p>
                    <QdtComponent
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2021'}
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                        identity="8"
                        appId="SR pildymas.qvf"
                    />
                    <p className="customChart">VISŲ PADALINIŲ SR STATISTIKA 2022</p>
                    <QdtComponent
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                        identity="81"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                        identity="81"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                        identity="81"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                        identity="81"
                        appId="SR pildymas.qvf"
                    />
                    <QdtComponent
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                        identity="81"
                        appId="SR pildymas.qvf"
                    />
                    <div className="customChart"/>
                    <p className="customChart">PPR NUOKRYPIAI 2022 METAIS</p>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-sausis</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%"}}>Planuotas val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>11:00</td>
                            <td style={{ width: "33%" }}>10:30</td>
                            <td style={{ width: "33%" }}>95,45%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-vasaris</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>15:00</td>
                            <td style={{ width: "33%" }}>02:30</td>
                            <td style={{ width: "33%" }}>16,67%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-kovas (07-09)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>41:00</td>
                            <td style={{ width: "33%" }}>00:40</td>
                            <td style={{ width: "33%" }}>1,63%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-balandis</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>20:15</td>
                            <td style={{ width: "33%" }}>07:10</td>
                            <td style={{ width: "33%" }}>35,39%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-gegužė</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>14:15</td>
                            <td style={{ width: "33%" }}>00:00</td>
                            <td style={{ width: "33%" }}>0,00%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-birželis (02-07)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>42:30</td>
                            <td style={{ width: "33%" }}>01:00</td>
                            <td style={{ width: "33%" }}>2,35%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-liepa (04-07)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>34:00</td>
                            <td style={{ width: "33%" }}>03:00</td>
                            <td style={{ width: "33%" }}>8,82%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-rugpjūtis (01-09)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>61:15</td>
                            <td style={{ width: "33%" }}>00:15</td>
                            <td style={{ width: "33%" }}>0,41%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-rugsėjis (05-15)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotas PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>77:45</td>
                            <td style={{ width: "33%" }}>12:25</td>
                            <td style={{ width: "33%" }}>15,97%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-spalis (17-21)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotos PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>37:30</td>
                            <td style={{ width: "33%" }}>09:30</td>
                            <td style={{ width: "33%" }}>25,33%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-lapkritis (07-14)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotos PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>44:30</td>
                            <td style={{ width: "33%" }}>00:00</td>
                            <td style={{ width: "33%" }}>0,00%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">2022-gruodis (21-22)</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotos PPR val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas TP val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>24:45</td>
                            <td style={{ width: "33%" }}>02:30</td>
                            <td style={{ width: "33%" }}>10,10%</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td colspan="3">Bendras 2022 metų  techninių tarnybų PPR nuokrypis:</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>Planuotos val.</td>
                            <td style={{ width: "33%" }}>Uždelsimas val.</td>
                            <td style={{ width: "33%" }}>Nuokrypis %</td>
                        </tr>
                        <tr>
                            <td style={{ width: "33%" }}>356:45</td>
                            <td style={{ width: "33%" }}>35:50</td>
                            <td style={{ width: "33%" }} className="red">10,04%</td>
                        </tr>
                    </table>
                    <div className="customChart" style={{ width: "30%", height: "80px" }} />
                    <p className="customChart">PATIKIMUMO GRUPĖS DARBAI 2022 METAIS</p>
                    <table className="customChart">
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>1. Darbai su Grigeo App programėlės efektyvinimu - ODR, darbų užsakymai kiekvienam dabuotojui, valandų pildymas, medžiagų nurašymas. Taip pat pagal poreikį padaryti programėlės apmokymai, parašytos naudojimosi instrukcijos bei algoritmai.</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>2. Qlik programos išplėtimas - naujos ataskaitos, reportai, web aplikacijos sukūrimas duomenų generavimui iš Qlik.</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>3. Maximo funkcionalumo didinimas - defektinių aktų pildymas Maximo sistemoje, nauji reportai pagal poreikį, asset'ų susiejimas tarpusavyje, naujų asset'ų kūrimas.</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>4. Vibromonitoringo įrengimas 4-5 dž.grupėje ant velenų, taip pat įrengti davikliai ant visų pavarinių variklių. </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>5. Viso diagnozuota net apie 80 vnt. defektinių guolių.</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>6. Gauti pasiūlymai visoms tepimo sistemų atnaujinimams.</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '10px' }}>7. Altlikta darbuotojams įvairių mokymų, tiek su programine įranga, tiek su naujomis sitemomis.</td>
                        </tr>
                    </table> */}
                </header>            
            </div>
        </>
    )
}

export default App;
