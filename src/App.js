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

                    <p className="customChart">2022 METŲ PRASTOVOS</p>
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
                    <div className="customChart" />

                    {/* <p className="customChart">2022 METŲ MĖNESINĖS PRASTOVOS</p> */}
                    <p className="customChart">2021 METŲ PRASTOVOS</p>


                    {/*<QdtComponent
                        options={{
                            id: '2c321fd9-dd5b-4ba9-9a84-366d33385bdc', height: 400, width: 1200,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.', }
                        }}
                    />*/}
                    <QdtComponent
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
                    />


                    {/* <QdtComponent
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.', }
                        }}
                    /> */}
                    <QdtComponent
                        options={{
                            id: 'BLBq', height: 400, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021' }
                        }}
                    />

                    {/* <QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.', }
                        }}
                    /> */}
                    <QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021', }
                        }}
                    />


                    {/* <QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.', }
                        }}
                    /> */}
                    <QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2021', }
                        }}
                    />
                    <div className="customChart" />

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
                    {/* <QdtComponent3
                        options={{
                            id: 'Qprcb', height: 200, width: 300,
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.', }
                        }}
                    />
                    <QdtComponent3
                        options={{
                            id: 'WxHNus', height: 200, width: 300,
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.', }
                        }}
                    /> */}
                    {/* naujas blokas */}
                    <p className="customChart"> 2021 METŲ PAGAMINTAS GARAS </p>
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
                    <div className="customChart"/>
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
                    <p className="customChart">TECHNIKOS PADALINIO SR IR WO 2021 STATISTIKA </p>
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
                    />
                    { /* naujas blokas close */}
                    <p className="customChart">SR IR WO 24 MĖNESIŲ POKYČIAI</p>
                    <QdtComponent5
                        options={{
                            id: 'c4660de9-716f-4e45-8020-a7d67f0262b9', height: 400, width: 1200,
                            selections: { 'grupe': ['EG', 'MG'], }
                        }}
                    />
                    {/* <QdtComponent6
                        options={{
                            id: 'rYgMf', height: 400, width: 1200,
                            selections: { 'status year': '2022', 'status month': '11' }
                        }}
                    /> */}
                    <p className="customChart">ODR ATLIKIMAS</p>
                    <p className="customChart">ODR MG 2022</p>
                    <p className="customChart">ODR EG 2022</p>
                    <p className="customChart">ODR ŠG 2022</p>
                    { /* <QdtComponent7
                        options={{
                            id: '3746b427-2384-4bfc-85a7-e736d225fdff', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '9e681c5a-a104-4a12-af83-841b0c574eb3', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '393280c0-f817-4b90-a14f-df7b80838775', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'lapkr.' }
                        }}
                    /> */}
                    <QdtComponent7
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
                    />
                   

                    { /* <QdtComponent8
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '11' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '11' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '11' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '11' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '11' }
                        }}
                    /> */}
                    <p className="customChart">VISŲ PADALINIŲ SR STATISTIKA 2021</p>
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
                    </table>
                </header>            
            </div>
        </>
    )
}

export default App;
