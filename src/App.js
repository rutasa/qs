import logo from './logo.svg';
import './App.css';
import QdtComponent from './QdtComponent';
import QdtComponent1 from './QdtComponent1';
import QdtComponent2 from './QdtComponent2';
import QdtComponent3 from './QdtComponent3';
import QdtComponent4 from './QdtComponent4';
import QdtComponent42 from './QdtComponent42';
import QdtComponent43 from './QdtComponent43';
import QdtComponent5 from './QdtComponent5';
import QdtComponent51 from './QdtComponent51';
import QdtComponent52 from './QdtComponent52';
import QdtComponent6 from './QdtComponent6';
import QdtComponent7 from './QdtComponent7';
import QdtComponent8 from './QdtComponent8';
import QdtComponent81 from './QdtComponent81';
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
                    <QdtComponent1
                        options={{
                            id: '8a552098-0284-4a6b-90b2-daec4e7f1b51', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: '8dfbd6be-beae-4410-85cc-05250e3dbb3e', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: 'ad286025-176a-464f-9822-61fe76a86021', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: '15b60304-b693-472a-bff7-97c330af928c', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: 'f44b8da7-0328-42dc-9b4c-569f59412aba', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: 'bff64aa2-5638-40da-b0d3-67e931feaf40', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', }
                        }}
                    />
                    <QdtComponent1
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', }
                        }}
                    />
                    <div className="customChart" /> */}

                    <p className="customChart">2022 METŲ MĖNESINĖS PRASTOVOS</p> 
                    {/*<p className="customChart">2021 METŲ PRASTOVOS</p>*/}


                    <QdtComponent
                        options={{
                            id: '2c321fd9-dd5b-4ba9-9a84-366d33385bdc', height: 400, width: 1200,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.', }
                        }}
                    />
                    {/*<QdtComponent
                        options={{
                            id: '8a552098-0284-4a6b-90b2-daec4e7f1b51', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />
                    <QdtComponent
                        options={{
                            id: '8dfbd6be-beae-4410-85cc-05250e3dbb3e', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />
                    <QdtComponent
                        options={{
                            id: 'ad286025-176a-464f-9822-61fe76a86021', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />
                    <QdtComponent
                        options={{
                            id: '15b60304-b693-472a-bff7-97c330af928c', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />
                    <QdtComponent
                        options={{
                            id: 'f44b8da7-0328-42dc-9b4c-569f59412aba', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />
                    <QdtComponent
                        options={{
                            id: 'bff64aa2-5638-40da-b0d3-67e931feaf40', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />*/}


                    <QdtComponent
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.', }
                        }}
                    /> 
                    {/*<QdtComponent
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />*/}

                    <QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.', }
                        }}
                    />
                    {/*<QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021', }
                        }}
                    />*/}


                    <QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.', }
                        }}
                    />
                    {/*<QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021', }
                        }}
                    />
                    <div className="customChart" />*/}

                    <p className="customChart">2022m. gruodžio mėn. pagrindinės prastovos</p>
                    <table className="customChart">
                        <tr>
                            <td>12.04</td>
                        </tr>
                        <tr>
                            <td>STU-1 sieto keitimas - sietas neilgai užsibuvęs vėl pakeistas nauju. Šiuo atveju visas sieto korpūsas pažeistas - eksploatuoti nebeįmanoma. Gedimo šalinimas - įdėtas naujas sietas, po trumpo darbo laiko įrengimas stabdytas ir sietas pažymėtas, kad būtų galima matyti, ar jis juda korposo atžvilgiu. Taip pat sietas truputį privirintas prie korpuso jo sustiprinimui.  Prastova - 3:02 val.</td>
                        </tr>
                        <tr>
                            <td>12.14</td>
                        </tr>
                        <tr>
                            <td>Nebepasidavė oras į MPC - staigiai oro temperatūrai pasiekus minusinę ribą iškilo problemų su suspasuto oro padavimu į MPC. Tikėtina, kad oro sistemoje susdaręs kondensatas užšąlo ir užkirto kelią oro tekėjimui. Gedimo šalinimas - pajungta oro linija esanti siurblinėje šalia makulatūros aikštelės. Dienos metu išsinuomuotas pagalbinis kompresorius. Prastova - 4:36 val.</td>
                        </tr>
                        <tr>
                            <td>12.18</td>
                        </tr>
                        <tr>
                            <td>Sustabdyta KGM dėl pasibaigusios makulatūros - pritrūko makulatūros žaliavų produkcijos gamybai. Problemos šalinimas - žaliavos užsakytos, jos atgabentos ir pradėtos apdoroti 09:00 val. ryto. Prastova - 4:40 val.</td>
                        </tr>
                        <tr>
                            <td>12.22</td>
                        </tr>
                        <tr>
                            <td>PPR uždelsimas (audeklas bėgo į pavaros pusę, pakeista autopataisymo mechanizmas) - pradėjus paleidinėti presinę dalį, 2 preso audeklas pradėjo slinkti į pavaros pusę. Keletą kartų visą tam pasikartojus nuspręsta, kad reiktų pakoreguoti P2VL1 ir P2VL4. Tai rezultatų nedavė, todėl galiausiai prisiimta, kad reikia pakeisti audeklo autopataisymo mechanizmą. Gedimo šalinimas - pakeistas audeklo autopataisymo mechanizmas, kurio dėka audeklas išlaiko savo poziciją ant velenų.  Prastova - 7:10 val.</td>
                        </tr>
                    </table>
                    <div className="customChart"/>

                    <p className="customChart">2021 - 2022 METŲ PRASTOVŲ PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent2
                        options={{
                            id: 'FHgJa', height: 400, width: 1200,
                            selections: { 'Metai': [2021, 2022], },
                            color: {
                                mode: 'byDimension',
                                dimensionScheme: '100',
                                auto: false
                            }
                            
                        }}

                    />
                    <QdtComponent2
                        options={{
                            id: 'xJLhaK', height: 400, width: 1200,
                            selections: { 'Metai': [2021, 2022], },
                            color: {
                                mode: 'byDimension',
                                dimensionScheme: '100',
                                auto: false
                            }
                        }}

                    />
                    <QdtComponent3
                        options={{
                            id: 'Qprcb', height: 200, width: 300,
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.', }
                        }}
                    />
                    <QdtComponent3
                        options={{
                            id: 'WxHNus', height: 200, width: 300,
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.', }
                        }}
                    />
                    {/* naujas blokas */}
                    { /*<p className="customChart"> 2021 METŲ PAGAMINTAS GARAS </p>
                    <QdtComponent42
                        options={{
                            id: 'bYtcCT', height: 400, width: 1200,
                            selections: { 'metai': '2021', }
                        }}
                    />
                    <p className="customChart"> 2022 METŲ PAGAMINTAS GARAS </p>
                    <QdtComponent43
                        options={{
                            id: 'wjAfNk', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                    />
                    <QdtComponent43
                        options={{
                            id: 'bYtcCT', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                    />
                    <p className="customChart"> 2021 METŲ SUVARTOTA ELEKTRA </p>
                    <QdtComponent42
                        options={{
                            id: 'mQwNHq', height: 400, width: 1200,
                            selections: { 'metai': '2021', }
                        }}
                    />
                    <QdtComponent42
                        options={{
                            id: 'wJZYcku', height: 400, width: 1200,
                            selections: { 'metai': '2021', }
                        }}
                    />
                    <p className="customChart"> 2022 METŲ SUVARTOTA ELEKTRA </p>
                    <QdtComponent43
                        options={{
                            id: 'mQwNHq', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                    />
                    <QdtComponent43
                        options={{
                            id: 'wJZYcku', height: 400, width: 1200,
                            selections: { 'metai': '2022', }
                        }}
                    />
                    <div className="customChart"/> */}
                    {/* naujas blokas close */}
                    <p className="customChart">2021 - 2022 METŲ PAGAMINTO GARO PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent4
                        options={{
                            id: 'CHnEqy', height: 400, width: 1200,
                            selections: { 'metai': [2021, 2022], }
                        }}
                    />
                    <QdtComponent4
                        options={{
                            id: 'feczFzD', height: 400, width: 1200,
                            selections: { 'metai': [2021, 2022], }
                        }}
                    />
                    <p className="customChart">2021 - 2022 METŲ SUVARTOTOS ELEKTROS PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent4
                        options={{
                            id: 'HdvpDbt', height: 400, width: 1200,
                            selections: { 'metai': [2021, 2022], }
                        }}
                    />
                    <QdtComponent4
                        options={{
                            id: 'hnqJVC', height: 400, width: 1200,
                            selections: { 'metai': [2021, 2022], }
                        }}
                    />
                    { /* naujas blokas */}

                    {/*<p className="customChart">TECHNIKOS PADALINIO SR IR WO 2021 STATISTIKA </p>
                    <QdtComponent51
                        options={{
                            id: 'NpJTu', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2021' }
                        }}
                    />
                    <QdtComponent51
                        options={{
                            id: 'MGTut', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2021' }
                        }}
                    />
                    <QdtComponent51
                        options={{
                            id: 'ypjpcdz', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2021' }
                        }}
                    />
                    <p className="customChart">TECHNIKOS PADALINIO SR IR WO 2022 STATISTIKA </p>
                    <QdtComponent52
                        options={{
                            id: 'NpJTu', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2022' }
                        }}
                    />
                    <QdtComponent52
                        options={{
                            id: 'MGTut', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2022' }
                        }}
                    />
                    <QdtComponent52
                        options={{
                            id: 'ypjpcdz', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], 'metai': '2022' }
                        }}
                    />*/}
                    { /* naujas blokas close */}
                    <p className="customChart">SR IR WO 24 MĖNESIŲ POKYČIAI</p>
                    <QdtComponent5
                        options={{
                            id: 'c4660de9-716f-4e45-8020-a7d67f0262b9', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], }
                        }}
                    />
                    <QdtComponent6
                        options={{
                            id: 'rYgMf', height: 400, width: 1200,
                            selections: { 'status year': '2022', 'status month': '12' }
                        }}
                    />
                    <p className="customChart">ODR ATLIKIMAS</p>
                    <p className="customChart">ODR MG 2022</p>
                    <p className="customChart">ODR EG 2022</p>
                    <p className="customChart">ODR ŠG 2022</p>
                    <QdtComponent7
                        options={{
                            id: '3746b427-2384-4bfc-85a7-e736d225fdff', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '9e681c5a-a104-4a12-af83-841b0c574eb3', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '393280c0-f817-4b90-a14f-df7b80838775', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'gruod.' }
                        }}
                    />
                    {/*<QdtComponent7
                        options={{
                            id: '3746b427-2384-4bfc-85a7-e736d225fdff', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022'}
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '9e681c5a-a104-4a12-af83-841b0c574eb3', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '393280c0-f817-4b90-a14f-df7b80838775', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022' }
                        }}
                    />*/}
                   

                    <QdtComponent8
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '12' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '12' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '12' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '12' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '12' }
                        }}
                    />

                    <p className="customChart"> 2022m. gruodžio mėn. atsargos</p>
                    <table className="customChart">
                        <tr>
                            <td>Pinigai</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Sum of Fin. išlaidų suma</td>
                            <td>Column Labels</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Row Labels</td>
                            <td>1. iki 30</td>
                            <td>2. 31-60</td>
                            <td>3. 61-90</td>
                            <td>4. 91-270</td>
                            <td>5. 271-365</td>
                            <td>6. virs 365</td>
                            <td>Grand Total</td>
                            <td>2022.11 likutis</td>
                            <td>Skirtumas</td>
                        </tr>
                        <tr>
                            <td>CHEMS</td>
                            <td>195 068,71</td>
                            <td>55 019,25</td>
                            <td>4 873,84</td>
                            <td>20,09</td>
                            <td>0,01</td>
                            <td></td>
                            <td>254 981,90</td>
                            <td>285 587,66</td>
                            <td className="green">-30 605,76</td>
                        </tr>
                        <tr>
                            <td>ENERGB</td>
                            <td>623,94</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>623,94</td>
                            <td>671,08</td>
                            <td className="green">-47,14</td>
                        </tr>
                        <tr>
                            <td>GBK1</td>
                            <td>35 851,08</td>
                            <td>1 123,64</td>
                            <td>1 090,71</td>
                            <td>2 760,35</td>
                            <td>949,00</td>
                            <td>1 533,07</td>
                            <td>43 307,85</td>
                            <td>89 158,39</td>
                            <td className="green">-45 850,54</td>
                        </tr>
                        <tr>
                            <td>GET1</td>
                            <td>6 541,77</td>
                            <td>5 848,68</td>
                            <td>3 966,75</td>
                            <td>48 275,50</td>
                            <td>8 760,06</td>
                            <td>7 994,52</td>
                            <td>81 387,28</td>
                            <td>86 671,53</td>
                            <td className="green">-5 284,25</td>
                        </tr>
                        <tr>
                            <td>GKG1</td>
                            <td>38 642,44</td>
                            <td>47 793,02</td>
                            <td>10 200,30</td>
                            <td>21 275,40</td>
                            <td>1 148,57</td>
                            <td>14 031,24</td>
                            <td>133 090,97</td>
                            <td>148 456,46</td>
                            <td className="green">-15 365,49</td>
                        </tr>
                        <tr>
                            <td>GKP1</td>
                            <td>209 702,31</td>
                            <td>52 423,37</td>
                            <td>125 941,44</td>
                            <td>278 154,46</td>
                            <td>22 581,97</td>
                            <td>67 785,35</td>
                            <td>756 588,90</td>
                            <td>643 387,35</td>
                            <td className="red">113 201,55</td>
                        </tr>
                        <tr>
                            <td>GMT1</td>
                            <td>20 217,57</td>
                            <td>24 899,62</td>
                            <td>34 012,94</td>
                            <td>91 443,06</td>
                            <td>44 965,74</td>
                            <td>113 088,36</td>
                            <td>328 627,29</td>
                            <td>344 375,22</td>
                            <td className="green">-15 747,93</td>
                        </tr>
                        <tr>
                            <td>GSK1</td>
                            <td></td>
                            <td>0,00</td>
                            <td>903,15</td>
                            <td>38,09</td>
                            <td></td>
                            <td>209,76</td>
                            <td>1 151,00</td>
                            <td>1 745,32</td>
                            <td className="green">-594,32</td>
                        </tr>
                        <tr>
                            <td>GST1</td>
                            <td>17,00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>17,00</td>
                            <td>0,00</td>
                            <td className="red">17,00</td>
                        </tr>
                        <tr>
                            <td>KPGPS</td>
                            <td>1 875 428,51</td>
                            <td>124 890,46</td>
                            <td>29 946,92</td>
                            <td>65 300,67</td>
                            <td>521,77</td>
                            <td>2 237,09</td>
                            <td>2 098 325,42</td>
                            <td>863 463,19</td>
                            <td className="red">1 234 862,23</td>
                        </tr>
                        <tr>
                            <td>KURBAK</td>
                            <td>370,62</td>
                            <td>5,83</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>376,45</td>
                            <td>391,62</td>
                            <td className="green">-15,17</td>
                        </tr>
                        <tr>
                            <td>KURKOL1</td>
                            <td>2 901,72</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>2 901,72</td>
                            <td>3 790,29</td>
                            <td className="green">-888,57</td>
                        </tr>
                        <tr>
                            <td>KURKOL2</td>
                            <td>906,15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>906,15</td>
                            <td>826,09</td>
                            <td className="red">80,06</td>
                        </tr>
                        <tr>
                            <td>MAKS</td>
                            <td>52 334,06</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>52 334,06</td>
                            <td>165 649,89</td>
                            <td className="green">-113 315,83</td>
                        </tr>
                        <tr>
                            <td>PLS1</td>
                            <td>224,35</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>224,35</td>
                            <td>213,42</td>
                            <td className="red">10,93</td>
                        </tr>
                        <tr>
                            <td>REZER</td>
                            <td></td>
                            <td></td>
                            <td>16 610,00</td>
                            <td>390,88</td>
                            <td>8 050,00</td>
                            <td>377 120,09</td>
                            <td>402 170,97</td>
                            <td>409 785,17</td>
                            <td className="green">-7 614,20</td>
                        </tr>
                        <tr>
                            <td>SEGPS</td>
                            <td>4 957,19</td>
                            <td>23 462,94</td>
                            <td>1 291,96</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>29 712,09</td>
                            <td>57 295,23</td>
                            <td className="green">-27 583,14</td>
                        </tr>
                        <tr>
                            <td>VDZ1</td>
                            <td>578,00</td>
                            <td>505,48</td>
                            <td></td>
                            <td>8,18</td>
                            <td>56,10</td>
                            <td></td>
                            <td>1 147,76</td>
                            <td>606,44</td>
                            <td className="red">541,32</td>
                        </tr>
                        <tr>
                            <td>Grand Total</td>
                            <td>2 444 365,42</td>
                            <td>335 972,29</td>
                            <td>228 838,01</td>
                            <td>507 666,68</td>
                            <td>87 033,22</td>
                            <td>583 999,48</td>
                            <td>4 187 875,10</td>
                            <td>3 102 074,35</td>
                            <td className="red">1 085 800,75</td>
                        </tr>
                    </table>

                    <table className="customChart">
                        <tr>
                            <td>Kiekis</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>1. iki 30</td>
                            <td>2. 31-60</td>
                            <td>3. 61-90</td>
                            <td>4. 91-270</td>
                            <td>5. 271-365</td>
                            <td>6. virs 365</td>
                            <td>Grand Total</td>
                            <td>2022.11 likutis</td>
                            <td>Skirtumas</td>
                        </tr>
                        <tr className="bold">
                            <td>KPGPS</td>
                            <td>4 511,20</td>
                            <td>171,06</td>
                            <td>15,21</td>
                            <td>112,88</td>
                            <td>0,00</td>
                            <td>5,37</td>
                            <td>4 815,72</td>
                            <td>1 719,56</td>
                            <td>3 096,16</td>
                        </tr>
                        <tr>
                            <td>Fliutingas LCM1</td>
                            <td>1 950,90</td>
                            <td>57,88</td>
                            <td></td>
                            <td>50,15</td>
                            <td></td>
                            <td>5,37</td>
                            <td>2 064,29</td>
                            <td>754,07</td>
                            <td>1 310,22</td>
                        </tr>
                        <tr>
                            <td>Litlaineris korių gamybai</td>
                            <td>31,01</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>31,01</td>
                            <td>156,54</td>
                            <td>-125,53</td>
                        </tr>
                        <tr>
                            <td>Litlaineris TL2 dažytas</td>
                            <td>2 342,42</td>
                            <td>84,32</td>
                            <td>14,36</td>
                            <td>60,69</td>
                            <td></td>
                            <td></td>
                            <td>2 501,79</td>
                            <td>725,10</td>
                            <td>1 776,69</td>
                        </tr>
                        <tr>
                            <td>Litlaineris TLK (pard)</td>
                            <td>153,12</td>
                            <td>14,63</td>
                            <td></td>
                            <td>2,04</td>
                            <td></td>
                            <td></td>
                            <td>169,80</td>
                            <td>0,00</td>
                            <td>169,80</td>
                        </tr>
                        <tr>
                            <td>Ritės</td>
                            <td>33,75</td>
                            <td>14,23</td>
                            <td>0,86</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>48,84</td>
                            <td>83,85</td>
                            <td>-35,01</td>
                        </tr>
                        <tr>
                            <td>Korio gaminiai</td>
                            <td>104,89</td>
                            <td>149,19</td>
                            <td>100,30</td>
                            <td>9,90</td>
                            <td>1,75</td>
                            <td></td>
                            <td>366,03</td>
                            <td>276,07</td>
                            <td>89,96</td>
                        </tr>
                        <tr className="bold">
                            <td>MAKS</td>
                            <td>648,88</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>648,88</td>
                            <td>1 841,64</td>
                            <td>-1 192,76</td>
                        </tr>
                        <tr>
                            <td>Žaliavos</td>
                            <td>648,88</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>648,88</td>
                            <td>1 841,64</td>
                            <td>-1 192,76</td>
                        </tr>
                        <tr className="bold">
                            <td>SEGPS</td>
                            <td>12,24</td>
                            <td>56,80</td>
                            <td>1,93</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>70,97</td>
                            <td>127,36</td>
                            <td>-56,39</td>
                        </tr>
                        <tr>
                            <td>Litlaineris TL2 dažytas</td>
                            <td>12,24</td>
                            <td>56,80</td>
                            <td>1,93</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>70,97</td>
                            <td>127,36</td>
                            <td>-56,39</td>
                        </tr>
                    </table>
                    <div className="customChart" />

                    <p className="customChart">2022m. gruodžio mėn. Kitų organizacijų darbai</p>
                    <table className="customChart">
                        <tr>
                            <td>2022-12-01</td>
                            <td>ts100876</td>
                            <td>VR 221201/1</td>
                            <td>VR 221201/1</td>
                            <td>UAB Vakaru resta</td>
                            <td>pi0101292 305140023 450LIEJUR</td>
                            <td>EUR</td>
                            <td>6 635,00</td>
                            <td>6 635,00</td>
                            <td>1 131 369,84</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>PPR darbai - ventiliacijos kamerų sandarinimas, durų įstatymas, kiti smulkūs darbai</td>
                        </tr>
                        <tr>
                            <td>2022-12-01</td>
                            <td>ts101031</td>
                            <td>SKF108841</td>
                            <td>SKF108841</td>
                            <td>UAB SKF Lietuva</td>
                            <td>pi0101445 300146410 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 094,00</td>
                            <td>1 094,00</td>
                            <td>1 132 463,84</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Guolių vibromonitoringas</td>
                        </tr>
                        <tr>
                            <td>2022-12-01</td>
                            <td>ts101032</td>
                            <td>SKF108842</td>
                            <td>SKF108842</td>
                            <td>UAB SKF Lietuva</td>
                            <td>pi0101446 300146410 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 400,00</td>
                            <td>1 400,00</td>
                            <td>1 133 863,84</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Guolių vibromonitoringas</td>
                        </tr>
                        <tr>
                            <td>2022-12-01</td>
                            <td>ts101249</td>
                            <td>EDE112597</td>
                            <td>EDE112597</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0101623 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>272,00</td>
                            <td>272,00</td>
                            <td>1 134 135,84</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Virinimo darbai katilinėje.</td>
                        </tr>
                        <tr>
                            <td>2022-12-05</td>
                            <td>ts100814</td>
                            <td>APS198</td>
                            <td>APS198</td>
                            <td>Petras Antanaitis ind.veik.687376</td>
                            <td>pi0101229 IIANTANAIT 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>30,00</td>
                            <td>30,00</td>
                            <td>1 134 165,84</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>korių siganlizacijos panelės patikra/ remontas</td>
                        </tr>
                        <tr>
                            <td>2022-12-06</td>
                            <td>ts100988</td>
                            <td>KGP 0747118</td>
                            <td>KGP 0747118</td>
                            <td>AB Kauno Grudai</td>
                            <td>pi0101401 133818917 450LIEJUR</td>
                            <td>EUR</td>
                            <td>91,60</td>
                            <td>91,60</td>
                            <td>1 134 257,44</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-06</td>
                            <td>ts101146</td>
                            <td>PJE007578</td>
                            <td>PJE007578</td>
                            <td>UAB Elektros varikliai</td>
                            <td>pi0101558 141021942 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 588,00</td>
                            <td>1 588,00</td>
                            <td>1 135 845,44</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>2 vnt. 40kW variklių remontas</td>
                        </tr>
                        <tr>
                            <td>2022-12-07</td>
                            <td>ts100846</td>
                            <td>AIR220201</td>
                            <td>AIR220201</td>
                            <td>UAB Airplus1 Lituanica</td>
                            <td>pi0101255 304434260 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 499,44</td>
                            <td>2 499,44</td>
                            <td>1 138 344,88</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-08</td>
                            <td>ts100849</td>
                            <td>GRTS22437</td>
                            <td>GRTS22437</td>
                            <td>UAB Garant Service</td>
                            <td>pi0101265 302573959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>120,00</td>
                            <td>120,00</td>
                            <td>1 138 464,88</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Dziovyklinio cilindro kakliukų defektacija</td>
                        </tr>
                        <tr>
                            <td>2022-12-08</td>
                            <td>ts100850</td>
                            <td>SP122-03242</td>
                            <td>SP122-03242</td>
                            <td>UAB Šalnos prekyba</td>
                            <td>pi0101266 300107806 450LIEJUR</td>
                            <td>EUR</td>
                            <td>70,00</td>
                            <td>70,00</td>
                            <td>1 138 534,88</td>
                            <td>GSK</td>
                            <td>GSK</td>
                            <td>G8SK</td>
                            <td>Garinio kaloriferio virinimo darbai.</td>
                        </tr>
                        <tr>
                            <td>2022-12-08</td>
                            <td>ts100851</td>
                            <td>ARMI1344592</td>
                            <td>ARMI1344592</td>
                            <td>UAB Armi servisas</td>
                            <td>pi0101267 141392965 450LIEJUR</td>
                            <td>EUR</td>
                            <td>70,66</td>
                            <td>70,66</td>
                            <td>1 138 605,54</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2022-12-09</td>
                            <td>ts100874</td>
                            <td>BT LTB0067050</td>
                            <td>BT LTB0067050</td>
                            <td>RAB Toyota Material Handling Baltic Lietuvos filialas</td>
                            <td>pi0101291 302331094 450LIEJUR</td>
                            <td>EUR</td>
                            <td>29,23</td>
                            <td>29,23</td>
                            <td>1 138 634,77</td>
                            <td>GKG</td>
                            <td>GKG</td>
                            <td>G4KG</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-09</td>
                            <td>ts100897</td>
                            <td>GT1385</td>
                            <td>GT1385</td>
                            <td>UAB GT Transport</td>
                            <td>pi0101318 302736687 450LIEJUR</td>
                            <td>EUR</td>
                            <td>940,00</td>
                            <td>940,00</td>
                            <td>1 139 574,77</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Avarinis inžineriniu tinklų gedimo šalinimas</td>
                        </tr>
                        <tr>
                            <td>2022-12-12</td>
                            <td>ts100898</td>
                            <td>MC0083158</td>
                            <td>MC0083158</td>
                            <td>UAB Nordic Metrology Science</td>
                            <td>pi0101317 120229395 450LIEJUR</td>
                            <td>EUR</td>
                            <td>99,20</td>
                            <td>99,20</td>
                            <td>1 139 673,97</td>
                            <td>GSK</td>
                            <td>GSK</td>
                            <td>G8SK</td>
                            <td>Metrologinė patikra matuoklio.</td>
                        </tr>
                        <tr>
                            <td>2022-12-13</td>
                            <td>ts100891</td>
                            <td>NAR 0084713</td>
                            <td>NAR 0084713</td>
                            <td>UAB Narvija</td>
                            <td>pi0101302 141499878 450LIEJUR</td>
                            <td>EUR</td>
                            <td>447,00</td>
                            <td>447,00</td>
                            <td>1 140 120,97</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-13</td>
                            <td>ts100906</td>
                            <td>EKO18209</td>
                            <td>EKO18209</td>
                            <td>UAB Ekovalis</td>
                            <td>pi0101303 167392890 450LIEJUR</td>
                            <td>EUR</td>
                            <td>3 807,60</td>
                            <td>3 807,60</td>
                            <td>1 143 928,57</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-13</td>
                            <td>ts101234</td>
                            <td>AXI 607166</td>
                            <td>AXI 607166</td>
                            <td>UAB AXIS Transport</td>
                            <td>pi0101631 300617563 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 850,00</td>
                            <td>1 850,00</td>
                            <td>1 145 778,57</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-14</td>
                            <td>ts100894</td>
                            <td>ADK 221192</td>
                            <td>ADK 221192</td>
                            <td>UAB Adukesta</td>
                            <td>pi0101319 302482801 450LIEJUR</td>
                            <td>EUR</td>
                            <td>200,00</td>
                            <td>200,00</td>
                            <td>1 145 978,57</td>
                            <td>GKP</td>
                            <td>GNB</td>
                            <td>G9NB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-15</td>
                            <td>ts100907</td>
                            <td>BLS220001757</td>
                            <td>BLS220001757</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0101337 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>552,00</td>
                            <td>552,00</td>
                            <td>1 146 530,57</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krakmolo lifto gedimo šalinimas</td>
                        </tr>
                        <tr>
                            <td>2022-12-16</td>
                            <td>ts100941</td>
                            <td>BLS220001832</td>
                            <td>BLS220001832</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0101356 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>360,00</td>
                            <td>360,00</td>
                            <td>1 146 890,57</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Liftų patikra</td>
                        </tr>
                        <tr>
                            <td>2022-12-16</td>
                            <td>ts100951</td>
                            <td>SKF108858</td>
                            <td>SKF108858</td>
                            <td>UAB SKF Lietuva</td>
                            <td>pi0101370 300146410 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 400,00</td>
                            <td>1 400,00</td>
                            <td>1 148 290,57</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Guolių vibromonitoringas</td>
                        </tr>
                        <tr>
                            <td>2022-12-16</td>
                            <td>ts100952</td>
                            <td>SKF108857</td>
                            <td>SKF108857</td>
                            <td>UAB SKF Lietuva</td>
                            <td>pi0101371 300146410 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 094,00</td>
                            <td>1 094,00</td>
                            <td>1 149 384,57</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Guolių vibromonitoringas</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2022-12-19</td>
                            <td>ts100982</td>
                            <td>BLS220001866</td>
                            <td>BLS220001868</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0101320 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>4 880,00</td>
                            <td>4 880,00</td>
                            <td>1 154 264,57</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-19</td>
                            <td>ts100983</td>
                            <td>TPT123923</td>
                            <td>TPT123923</td>
                            <td>Technikos priežiuros tarnyba VšI</td>
                            <td>pi0101396 188637485 450LIEJUR</td>
                            <td>EUR</td>
                            <td>54,60</td>
                            <td>54,60</td>
                            <td>1 154 319,17</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Liftu patikra</td>
                        </tr>
                        <tr>
                            <td>2022-12-19</td>
                            <td>ts101115</td>
                            <td>SDK 00570</td>
                            <td>SDK 00570</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0101519 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>617,21</td>
                            <td>617,21</td>
                            <td>1 154 936,38</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Kranu patikra</td>
                        </tr>
                        <tr>
                            <td>2022-12-20</td>
                            <td>ts101004</td>
                            <td>PE22729</td>
                            <td>PE22729</td>
                            <td>UAB Persolita</td>
                            <td>pi0099851 111618351 450LIEJUR</td>
                            <td>EUR</td>
                            <td>8 077,12</td>
                            <td>8 077,12</td>
                            <td>1 163 013,50</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>4dz,grupes šiltinimo/skardinimo darbai.</td>
                        </tr>
                        <tr>
                            <td>2022-12-21</td>
                            <td>ts101006</td>
                            <td>BT LTB0067181</td>
                            <td>BT LTB0067181</td>
                            <td>RAB Toyota Material Handling Baltic Lietuvos filialas</td>
                            <td>pi0101413 302331094 450LIEJUR</td>
                            <td>EUR</td>
                            <td>807,49</td>
                            <td>807,49</td>
                            <td>1 163 820,99</td>
                            <td>GKG</td>
                            <td>GKG</td>
                            <td>G4KG</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-21</td>
                            <td>ts101007</td>
                            <td>SOL127719</td>
                            <td>SOL127719</td>
                            <td>UAB Solorina</td>
                            <td>pi0101415 240518180 450LIEJUR</td>
                            <td>EUR</td>
                            <td>66,93</td>
                            <td>66,93</td>
                            <td>1 163 887,92</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-21</td>
                            <td>ts101116</td>
                            <td>BLS220001878</td>
                            <td>BLS220001878</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0101520 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 208,20</td>
                            <td>1 208,20</td>
                            <td>1 165 096,12</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Koriu lifto remontas</td>
                        </tr>
                        <tr>
                            <td>2022-12-21</td>
                            <td>ts101120</td>
                            <td>9670023832</td>
                            <td>9670023832</td>
                            <td>ABB Oy Process Industries</td>
                            <td>pi0101522 9FIABB 450UZSTIE</td>
                            <td>EUR</td>
                            <td>3 128,36</td>
                            <td>3 128,36</td>
                            <td>1 168 224,48</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-21</td>
                            <td>ts101132</td>
                            <td>JKK0045577</td>
                            <td>JKK0045577</td>
                            <td>UAB KJKK Bega</td>
                            <td>pi0101544 140451567 450LIEJUR</td>
                            <td>EUR</td>
                            <td>600,00</td>
                            <td>600,00</td>
                            <td>1 168 824,48</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-22</td>
                            <td>ts101009</td>
                            <td>VKL358526</td>
                            <td>VKL358526</td>
                            <td>UAB Virenda</td>
                            <td>pi0101443 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 322,00</td>
                            <td>1 322,00</td>
                            <td>1 170 146,48</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-22</td>
                            <td>ts101010</td>
                            <td>EKO18247</td>
                            <td>EKO18247</td>
                            <td>UAB Ekovalis</td>
                            <td>pi0101444 167392890 450LIEJUR</td>
                            <td>EUR</td>
                            <td>810,30</td>
                            <td>810,30</td>
                            <td>1 170 956,78</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-22</td>
                            <td>ts101035</td>
                            <td>1370649656</td>
                            <td>1370649656</td>
                            <td>UAB Hansa Flex Hidraulika</td>
                            <td>pi0101462 110776462 450LIEJUR</td>
                            <td>EUR</td>
                            <td>408,69</td>
                            <td>408,69</td>
                            <td>1 171 365,47</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Hidrocilindro keitimas/remontas.</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2022-12-22</td>
                            <td>ts101173</td>
                            <td>VR221222/1</td>
                            <td>VR221222/1</td>
                            <td>UAB Vakaru resta</td>
                            <td>pi0101567 305140023 450LIEJUR</td>
                            <td>EUR</td>
                            <td>16 766,00</td>
                            <td>16 766,00</td>
                            <td>1 188 131,47</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>Perdangos makulatūriniame remontas, GRA aikšteelės remontas, langų sandarinimas šlifavimo bare, kiti smulkūs statybiniai darbai</td>
                        </tr>
                        <tr>
                            <td>2022-12-27</td>
                            <td>ts101034</td>
                            <td>SDK 00592</td>
                            <td>SDK 00592</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0101461 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>767,50</td>
                            <td>767,50</td>
                            <td>1 188 898,97</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Anglisko krano remontas</td>
                        </tr>
                        <tr>
                            <td>2022-12-27</td>
                            <td>ts101075</td>
                            <td>M22 0321</td>
                            <td>M22 0321</td>
                            <td>UAB Tilta</td>
                            <td>pi0101489 142151650 450LIEJUR</td>
                            <td>EUR</td>
                            <td>600,00</td>
                            <td>600,00</td>
                            <td>1 189 498,97</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>PPR darbai 12 mėn.</td>
                        </tr>
                        <tr>
                            <td>2022-12-28</td>
                            <td>ts101074</td>
                            <td>VS609</td>
                            <td>VS609</td>
                            <td>UAB Vakaru automatika</td>
                            <td>pi0101488 302612084 450LIEJUR</td>
                            <td>EUR</td>
                            <td>816,00</td>
                            <td>816,00</td>
                            <td>1 190 314,97</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai neturint savo zmogiskuju resursu</td>
                        </tr>
                        <tr>
                            <td>2022-12-28</td>
                            <td>ts101087</td>
                            <td>JOR07 0467</td>
                            <td>JOR07 0467</td>
                            <td>UAB Jormeta</td>
                            <td>pi0101497 303105358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>630,00</td>
                            <td>630,00</td>
                            <td>1 190 944,97</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Kond.ekonomaizerio siurbimo darbai.</td>
                        </tr>
                        <tr>
                            <td>2022-12-28</td>
                            <td>ts101088</td>
                            <td>THS0004277</td>
                            <td>THS0004277</td>
                            <td>UAB Tehis</td>
                            <td>pi0101495 304317862 450LIEJUR</td>
                            <td>EUR</td>
                            <td>400,00</td>
                            <td>400,00</td>
                            <td>1 191 344,97</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai neturint savo zmogiskuju resursu</td>
                        </tr>
                        <tr>
                            <td>2022-12-28</td>
                            <td>ts101089</td>
                            <td>DTS724</td>
                            <td>DTS724</td>
                            <td>UAB Delta techniniai sprendimai</td>
                            <td>pi0101496 304897963 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 875,00</td>
                            <td>1 875,00</td>
                            <td>1 193 219,97</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai neturint savo zmogiskuju resursu</td>
                        </tr>
                        <tr>
                            <td>2022-12-28</td>
                            <td>ts101324</td>
                            <td>PRO 2022/12-28</td>
                            <td>PRO 2022/12-28</td>
                            <td>UAB Proinfra</td>
                            <td>pi0101733 304175263 450LIEJUR</td>
                            <td>EUR</td>
                            <td>6 534,00</td>
                            <td>6 534,00</td>
                            <td>1 199 753,97</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>Apmokėjimas už projektavimo darbus (neįteisintas vamzdis Dumpiuose)</td>
                        </tr>
                        <tr>
                            <td>2022-12-29</td>
                            <td>ts101187</td>
                            <td>PE 22777</td>
                            <td>PE 22777</td>
                            <td>UAB Persolita</td>
                            <td>pi0101576 111618351 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1 558,00</td>
                            <td>1 558,00</td>
                            <td>1 201 311,97</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai vamzdynų siltinimas</td>
                        </tr>
                        <tr>
                            <td>2022-12-29</td>
                            <td>ts101188</td>
                            <td>PE 22778</td>
                            <td>PE 22778</td>
                            <td>UAB Persolita</td>
                            <td>pi0101577 111618351 450LIEJUR</td>
                            <td>EUR</td>
                            <td>132,50</td>
                            <td>132,50</td>
                            <td>1 201 444,47</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai vamzdynų siltinimas</td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101113</td>
                            <td>1310/300/10041623</td>
                            <td>1310/300/10041623</td>
                            <td>Valmet Automation Oy</td>
                            <td>pi0101517 9FIMETSOA 450UZSTIE</td>
                            <td>EUR</td>
                            <td>580,00</td>
                            <td>580,00</td>
                            <td>1 202 024,47</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Abonentis valdymo sistemos palaikymo mokestis.</td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101186</td>
                            <td>SDK 00595</td>
                            <td>SDK 00595</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0101575 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>651,63</td>
                            <td>651,63</td>
                            <td>1 202 676,10</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Metinis krano patikrinimas</td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101252</td>
                            <td>GT 1394</td>
                            <td>GT 1394</td>
                            <td>UAB GT Transport</td>
                            <td>pi0101661 302736687 450LIEJUR</td>
                            <td>EUR</td>
                            <td>890,00</td>
                            <td>890,00</td>
                            <td>1 203 566,10</td>
                            <td>GKP</td>
                            <td>GNB</td>
                            <td>G9NB</td>
                            <td></td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101262</td>
                            <td>BS0008491</td>
                            <td>BS0008491</td>
                            <td>UAB Blue Solutions</td>
                            <td>pi0101690 302460281 450LIEJUR</td>
                            <td>EUR</td>
                            <td>90,00</td>
                            <td>90,00</td>
                            <td>1 203 656,10</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101262</td>
                            <td>BS0008491</td>
                            <td>BS0008491</td>
                            <td>UAB Blue Solutions</td>
                            <td>pi0101690 302460281 450LIEJUR</td>
                            <td>EUR</td>
                            <td>30,00</td>
                            <td>30,00</td>
                            <td>1 203 686,10</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101335</td>
                            <td>EDE11 2834/2</td>
                            <td>EDE11 2834/2</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0100767 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 994,00</td>
                            <td>2 994,00</td>
                            <td>1 206 680,10</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai neturint savo zmogiskuju resursu</td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101336</td>
                            <td>EDE112834</td>
                            <td>EDE112834</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0101754 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>900,00</td>
                            <td>900,00</td>
                            <td>1 207 580,10</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai neturint savo zmogiskuju resursu</td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101337</td>
                            <td>VR221230/8</td>
                            <td>VR221230/8</td>
                            <td>UAB Vakaru resta</td>
                            <td>pi0101753 305140023 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2 594,00</td>
                            <td>2 594,00</td>
                            <td>1 210 174,10</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>PPR darbai ventiliacijoje, grindų remontas</td>
                        </tr>
                        <tr>
                            <td>2022-12-30</td>
                            <td>ts101358</td>
                            <td>PE 22787</td>
                            <td>PE 22787</td>
                            <td>UAB Persolita</td>
                            <td>pi0099851 111618351 450LIEJUR</td>
                            <td>EUR</td>
                            <td>6 513,81</td>
                            <td>6 513,81</td>
                            <td>1 216 687,91</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>3dz,grupes šiltinimo/skardinimo darbai.</td>
                        </tr>
                        <tr>
                            <td>2022-12-31</td>
                            <td>ts101117</td>
                            <td>TPV012513</td>
                            <td>TPV012513</td>
                            <td>UAB TP AIM</td>
                            <td>pi0101521 124587112 450LIEJUR</td>
                            <td>EUR</td>
                            <td>122,50</td>
                            <td>122,50</td>
                            <td>1 216 810,41</td>
                            <td>GKP</td>
                            <td>GPT</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-31</td>
                            <td>ts101200</td>
                            <td>2 212 221 204 325</td>
                            <td>2 212 221 204 325</td>
                            <td>UAB Apsaugos komanda</td>
                            <td>pi0101588 122668722 450LIEJUR</td>
                            <td>EUR</td>
                            <td>50,00</td>
                            <td>50,00</td>
                            <td>1 216 860,41</td>
                            <td>GKP</td>
                            <td>GNB</td>
                            <td>G9NB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-31</td>
                            <td>ts101204</td>
                            <td>SBK0179708</td>
                            <td>SBK0179708</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0101592 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>8,45</td>
                            <td>8,45</td>
                            <td>1 216 868,86</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2022-12-31</td>
                            <td>ts101204</td>
                            <td>SBK0179708</td>
                            <td>SBK0179708</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0101592 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>8,45</td>
                            <td>8,45</td>
                            <td>1 216 877,31</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                        </tr>
                    </table>


                    { /* <p className="customChart">VISŲ PADALINIŲ SR STATISTIKA 2021</p>
                    <QdtComponent8
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2021'}
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2021' }
                        }}
                    />
                    <p className="customChart">VISŲ PADALINIŲ SR STATISTIKA 2022</p>
                    <QdtComponent81
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                    />
                    <QdtComponent81
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                    />
                    <QdtComponent81
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                    />
                    <QdtComponent81
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
                    />
                    <QdtComponent81
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2022' }
                        }}
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
