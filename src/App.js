import logo from './logo.svg';
import './App.css';
import QdtComponent from './QdtComponent';
import QdtComponent2 from './QdtComponent2';
import QdtComponent3 from './QdtComponent3';
import QdtComponent4 from './QdtComponent4';
import QdtComponent5 from './QdtComponent5';
import QdtComponent6 from './QdtComponent6';
import QdtComponent7 from './QdtComponent7';
import QdtComponent8 from './QdtComponent8';
import { exportMultipleChartsToPdf } from "./utils";
import { useLineChartSettings } from 'qdt-components';

const App = () => {
    return (
        <>
            <div className="App">
                <button className="button" onClick={exportMultipleChartsToPdf}>
                    Export to PDF
                </button>
                <header className="App-header">
                    <p className="customChart">2022 METŲ MĖNESINĖS PRASTOVOS</p>
                                <QdtComponent
                                    options={{
                            id: '2c321fd9-dd5b-4ba9-9a84-366d33385bdc', height: 400, width: 1200,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.', }
                                    }}

                    />
                                <QdtComponent
                                    options={{
                                        id: 'BLBq', height: 400, width: 500,
                                        selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.', }
                                    }}
                    />
                    <QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.', }
                        }}
                    />
                    <QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.', }
                        }}
                    />
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
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.', }
                        }}
                    />
                    <QdtComponent3
                        options={{
                            id: 'WxHNus', height: 200, width: 300,
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.', }
                        }}
                    />
                    <p className="customChart">2021 - 2022 METŲ PAGAMINTO GARO PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent4
                        options={{
                            id: 'CHnEqy', height: 400, width: 1200,
                            selections: { 'data_laikas.autoCalendar.Year': [2021, 2022], }
                        }}
                    />
                    <QdtComponent4
                        options={{
                            id: 'feczFzD', height: 400, width: 1200,
                            selections: { 'data_laikas.autoCalendar.Year': [2021, 2022], }
                        }}
                    />
                    <p className="customChart">2021 - 2022 METŲ SUVARTOTOS ELEKTROS PALYGINIMAS (PAGAL EINAMĄJĮ MĖNESĮ)</p>
                    <QdtComponent4
                        options={{
                            id: 'HdvpDbt', height: 400, width: 1200,
                            selections: { 'data_laikas.autoCalendar.Year': [2021, 2022], }
                        }}
                    />
                    <QdtComponent4
                        options={{
                            id: 'hnqJVC', height: 400, width: 1200,
                            selections: { 'data_laikas.autoCalendar.Year': [2021, 2022], }
                        }}
                    />
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
                            selections: { 'status year': '2022', 'status month': '8' }
                        }}
                    />
                    <p className="customChart">ODR ATLIKIMAS</p>
                    <p className="customChart">ODR MG</p>
                    <p className="customChart">ODR EG</p>
                    <p className="customChart">ODR ŠG</p>
                    <QdtComponent7
                        options={{
                            id: '3746b427-2384-4bfc-85a7-e736d225fdff', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '9e681c5a-a104-4a12-af83-841b0c574eb3', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '393280c0-f817-4b90-a14f-df7b80838775', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'rugp.' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '8' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '8' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '8' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '8' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '8' }
                        }}
                    />
                </header>            
            </div>
        </>
    )
}

export default App;
