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
                    <p className="customChart">2022 METŲ MĖNESINĖS PRASTOVOS</p>
                                <QdtComponent
                                    options={{
                            id: '2c321fd9-dd5b-4ba9-9a84-366d33385bdc', height: 400, width: 1200,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'spal.', }
                                    }}

                    />
                                <QdtComponent
                                    options={{
                                        id: 'BLBq', height: 400, width: 500,
                                        selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'spal.', }
                                    }}
                    />
                    <QdtComponent
                        options={{
                            id: 'hprFeQG', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'spal.', }
                        }}
                    />
                    <QdtComponent
                        options={{
                            id: 'xsSaS', height: 250, width: 500,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'spal.', }
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
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'spal.', }
                        }}
                    />
                    <QdtComponent3
                        options={{
                            id: 'WxHNus', height: 200, width: 300,
                            selections: { 'Metai': [2021, 2022], 'PRODUCTION_DAY.autoCalendar.Month': 'spal.', }
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
                            selections: { 'status year': '2022', 'status month': '10' }
                        }}
                    />
                    <p className="customChart">ODR ATLIKIMAS</p>
                    <p className="customChart">ODR MG</p>
                    <p className="customChart">ODR EG</p>
                    <p className="customChart">ODR ŠG</p>
                    <QdtComponent7
                        options={{
                            id: '3746b427-2384-4bfc-85a7-e736d225fdff', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'spal.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '9e681c5a-a104-4a12-af83-841b0c574eb3', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'spal.' }
                        }}
                    />
                    <QdtComponent7
                        options={{
                            id: '393280c0-f817-4b90-a14f-df7b80838775', height: 400, width: 400,
                            selections: { 'PRODUCTION_DAY.autoCalendar.Year': '2022', 'PRODUCTION_DAY.autoCalendar.Month': 'spal.' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'khtgcs', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '10' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JEPkPPG', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '10' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'gcMxkF', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '10' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'JbpBjZ', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '10' }
                        }}
                    />
                    <QdtComponent8
                        options={{
                            id: 'XpbPud', height: 250, width: 500,
                            selections: { 'year': '2022', 'month': '10' }
                        }}
                    />
                    <p className="customChart">DARBO SĄLYGŲ GERINIMAS</p>
                    <p className="customChart">Spalio mėnesį buvo baigtas naujų darbo vietų įrengimo ir laboratorijos remonto projektas. Patalpose buvo pakeista elektros instaliacija, nuglaistytos ir nudažytos sienos, įrengti apšvietimo tinklai ir sumontuoti šviestuvai, išlygintos grindys ir įrengta moderni grindų danga, pakeistos durys.</p>
                    <img className="customChart" src={image1} />
                    <img className="customChart" src={image2} />
                    <p className="customChart">Mechaninė grupė taip pat ruošiasi persikelti į naujas patalpas, kur buvo įrengtos 7 naujos darbo vietos.</p>
                    <img className="customChart" src={image3} />
                    <img className="customChart" src={image4} />
                    <p className="customChart">UŽDARYTI PROJEKTAI</p>
                    <p className="customChart">Metalo pjaustimo zonoje įrengtas naujas gembinis kranas, stelažai lakštų laikymui.</p>
                    <img className="customChart" src={image5} />
                    <img className="customChart" src={image6} />
                    <p className="customChart">Baigti įrengti stelažai atsarginių dalių sandėlyje.</p>
                    <img className="customChart" src={image7} />
                    <p className="customChart">Krakmolo siurblių vamzdyno atnaujinimas.Tas pats vamzdyno mazgas prieš perdarymą ir po:</p>
                    <img className="customChart" src={image8} />
                    <img className="customChart" src={image9} />
                    <p className="customChart">BH3.1 hidropulperiui perdarytas guolių mazgas.</p>
                    <img className="customChart" src={image10} />
                    <p className="customChart">Įrengta poilsio zona prie mech. dirbtuvių ir sutvarkytos mech. dirbtuvės.</p>
                    <img className="customChart" src={image11} />
                    <img className="customChart" src={image12} />
                    <p className="customChart">Pabaigėme įrengti zonuojamą LED apšvietimą balinto ir atsarginių medžiagų sandėliuose. Šviesos užsidega tik tam tikrose zonose kur fiksuojamas judesys bei užgęsta jei 5min. nefiksuojamas judesys. Taip yra taupoma elektros energija. Apšvietimas atitinka higienos normas. Taip pat užbaigtas klijų talpos projektas. Visas automatikos valdymas bei jos išpildymas atliktas savo darbuotojų jėgomis.</p>
                    <img className="customChart" src={image13} />
                    <img className="customChart" src={image14} />
                    <p className="customChart">Atsargos - Pinigai</p>
                    <table className="customChart">
                        <tr className="aqua">
                            <td>Sum of Likutis, Suma</td>
                            <td>Column Labels</td>
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
                        <tr className="aqua">
                            <td>Row Labels</td>
                            <td>1. iki 30</td>
                            <td>2. 31-60</td>
                            <td>3. 61-90</td>
                            <td>4. 91-270</td>
                            <td>5. 271-365</td>
                            <td>6. virs 365</td>
                            <td>Grand Total</td>
                            <td>2022.09 likutis</td>
                            <td>Skirtumas</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CHEMS</td>
                            <td>210,082.02</td>
                            <td>3,102.20</td>
                            <td>22,788.03</td>
                            <td>45,299.99</td>
                            <td>7,320.86</td>
                            <td></td>
                            <td>288,593.10</td>
                            <td>372,264.99</td>
                            <td className="green">-83,671.89</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ENERGB</td>
                            <td>454.72</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>454.72</td>
                            <td>908.71</td>
                            <td className="green">-453.99</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GBK1</td>
                            <td>57,760.94</td>
                            <td>279.31</td>
                            <td>150.88</td>
                            <td>3,796.56</td>
                            <td>433.82</td>
                            <td>1,570.69</td>
                            <td>63,992.20</td>
                            <td>82,627.54</td>
                            <td className="green">-18,635.34</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GET1</td>
                            <td>7,155.72</td>
                            <td>18,518.18</td>
                            <td>11,935.11</td>
                            <td>46,053.46</td>
                            <td>4,875.81</td>
                            <td>7,528.72</td>
                            <td>96,067.00</td>
                            <td>99,596.76</td>
                            <td className="green">-3,529.76</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GKG1</td>
                            <td>119,717.83</td>
                            <td>27,354.50</td>
                            <td>24,776.71</td>
                            <td>25,214.57</td>
                            <td>1,691.93</td>
                            <td>13,641.18</td>
                            <td>212,396.72</td>
                            <td>226,987.72</td>
                            <td className="green">-14,591.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GKP1</td>
                            <td>266,803.25</td>
                            <td>93,022.61</td>
                            <td>86,793.53</td>
                            <td>211,721.24</td>
                            <td>26,267.54</td>
                            <td>78,167.86</td>
                            <td>762,776.03</td>
                            <td>680,045.82</td>
                            <td className="red">82,730.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GMT1</td>
                            <td>34,815.95</td>
                            <td>33,036.30</td>
                            <td>20,437.05</td>
                            <td>109,205.48</td>
                            <td>37,841.90</td>
                            <td>117,482.17</td>
                            <td>352,818.85</td>
                            <td>342,169.31</td>
                            <td className="red">10,649.54</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GSK1</td>
                            <td>1,589.59</td>
                            <td>38.09</td>
                            <td></td>
                            <td>302.31</td>
                            <td>57.75</td>
                            <td>212.00</td>
                            <td>2,199.74</td>
                            <td>956.87</td>
                            <td className="red">1,242.87</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>KPGPS</td>
                            <td>1,090,361.27</td>
                            <td>98,168.89</td>
                            <td>24,895.26</td>
                            <td>31,465.94</td>
                            <td>3,212.13</td>
                            <td>2,237.09</td>
                            <td>1,250,340.58</td>
                            <td>1,674,689.81</td>
                            <td className="green">-424,349.23</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>KURBAK</td>
                            <td>357.20</td>
                            <td>45.94</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>403.14</td>
                            <td>312.30</td>
                            <td className="red">90.84</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>KURKOL1</td>
                            <td>3,458.56</td>
                            <td>96.95</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>3,555.51</td>
                            <td>2,983.19</td>
                            <td className="red">572.32</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>KURKOL2</td>
                            <td>757.76</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>757.76</td>
                            <td>556.85</td>
                            <td className="red">200.91</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MAKS</td>
                            <td>127,305.08</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>127,305.08</td>
                            <td>234,780.29</td>
                            <td className="green">-107,475.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>PLS1</td>
                            <td>300.68</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>300.68</td>
                            <td>268.62</td>
                            <td className="red">32.06</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>REZER</td>
                            <td>213.50</td>
                            <td>2.00</td>
                            <td></td>
                            <td>7,338.88</td>
                            <td>20,041.74</td>
                            <td>369,289.17</td>
                            <td>396,885.29</td>
                            <td>400,454.64</td>
                            <td className="green">-3,569.35</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SEGPS</td>
                            <td>34,544.76</td>
                            <td>13,211.70</td>
                            <td>12,043.60</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>59,800.06</td>
                            <td>34,641.01</td>
                            <td className="red">25,159.05</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>VDZ1</td>
                            <td>15.58</td>
                            <td></td>
                            <td></td>
                            <td>118.05</td>
                            <td>119.02</td>
                            <td></td>
                            <td>252.65</td>
                            <td>356.28</td>
                            <td className="green">-103.63</td>
                            <td></td>
                        </tr>
                        <tr className="aqua">
                            <td>Grand Total</td>
                            <td>1,955,694.41</td>
                            <td>286,876.67</td>
                            <td>203,820.17</td>
                            <td>480,516.48</td>
                            <td>101,862.50</td>
                            <td>590,128.88</td>
                            <td>3,618,899.11</td>
                            <td>4,154,655.52</td>
                            <td className="green">-535,756.41</td>
                            <td></td>
                        </tr>
                    </table>
                    <p className="customChart">Atsargos - Kiekis</p>
                    <table className="customChart">    
                        <tr className="aqua">
                            <td>Row Labels</td>
                            <td>1. iki 30</td>
                            <td>2. 31-60</td>
                            <td>3. 61-90</td>
                            <td>4. 91-270</td>
                            <td>5. 271-365</td>
                            <td>6. virs 365</td>
                            <td>Grand Total</td>
                            <td>2022.09 likutis</td>
                            <td>Skirtumas</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>KPGPS</td>
                            <td>2,426.84</td>
                            <td>151.62</td>
                            <td>39.49</td>
                            <td>54.38</td>
                            <td>6.81</td>
                            <td>5.37</td>
                            <td>2,684.51</td>
                            <td>2,457.63</td>
                            <td>226.88</td>
                            <td>popierius</td>
                        </tr>
                        <tr>
                            <td>3GLCM1</td>
                            <td>606.90</td>
                            <td>96.05</td>
                            <td>16.31</td>
                            <td>18.66</td>
                            <td>4.40</td>
                            <td>5.37</td>
                            <td>747.69</td>
                            <td>974.542</td>
                            <td>-226.86</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3GLCM2</td>
                            <td>0.00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>0.00</td>
                            <td></td>
                            <td>0.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3GRITE</td>
                            <td>63.06</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>63.06</td>
                            <td>10.798</td>
                            <td>52.27</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3GTL2C</td>
                            <td>1,661.29</td>
                            <td>51.57</td>
                            <td>21.14</td>
                            <td>35.72</td>
                            <td>2.41</td>
                            <td></td>
                            <td>1,772.13</td>
                            <td>1337.751</td>
                            <td>434.38</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3GTLKO</td>
                            <td>76.24</td>
                            <td>4.00</td>
                            <td>2.04</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>82.27</td>
                            <td>134.542</td>
                            <td>-52.27</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3PTLKO</td>
                            <td>19.35</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>19.35</td>
                            <td>0</td>
                            <td>19.35</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4GKORY</td>
                            <td>126.07</td>
                            <td>12.33</td>
                            <td>1.70</td>
                            <td>18.73</td>
                            <td></td>
                            <td></td>
                            <td>158.82</td>
                            <td>152.76</td>
                            <td>6.06</td>
                            <td>korys</td>
                        </tr>
                        <tr>
                            <td>MAKS</td>
                            <td>1,140.63</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1,140.63</td>
                            <td>1,449.79</td>
                            <td>-309.16</td>
                            <td>makulatūra</td>
                        </tr>
                        <tr>
                            <td>01ZALIAVA</td>
                            <td>1,140.63</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1,140.63</td>
                            <td>1,449.79</td>
                            <td>-309.16</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>30MAKU</td>
                            <td>0.00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SEGPS</td>
                            <td>85.31</td>
                            <td>21.74</td>
                            <td>17.95</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>125.00</td>
                            <td>52.95</td>
                            <td>72.06</td>
                            <td>popierius</td>
                        </tr>
                        <tr>
                            <td>3GTL2C</td>
                            <td>85.31</td>
                            <td>21.74</td>
                            <td>17.95</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>125.00</td>
                            <td>164.70</td>
                            <td>-39.69</td>
                        </tr>
                    </table>
                    <p className="customChart">KITŲ ORGANIZACIJŲ DARBAI</p>
                    <table className="customChart">
                        <tr className="aqua">
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
                            <td>10/1/22</td>
                            <td>td003537</td>
                            <td>0841/FV/2022s</td>
                            <td>0841/FV/2022s</td>
                            <td>P.P.U.H. Statech Molenda Stanislaw</td>
                            <td>pi0100760 9PLSTATEC 450UZSTIE</td>
                            <td>EUR</td>
                            <td>-9,260.00</td>
                            <td>-9,260.00</td>
                            <td>1,013,052.28</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/1/22</td>
                            <td>ts100163</td>
                            <td>SDK 00479</td>
                            <td>SDK 00479</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0100582 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>797.5</td>
                            <td>797.5</td>
                            <td>1,013,849.78</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Rusisko krano remontas el.dalies</td>
                        </tr>
                        <tr>
                            <td>10/1/22</td>
                            <td>ts100251</td>
                            <td>SIN 09778</td>
                            <td>SIN 09778</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0100673 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>500</td>
                            <td>500</td>
                            <td>1,014,349.78</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Tiltinio krano (Angliškas) krūvio galinio išjungėjo remontas bei sumontavimas.</td>
                        </tr>
                        <tr>
                            <td>10/1/22</td>
                            <td>ts100252</td>
                            <td>SIN 09780</td>
                            <td>SIN 09780</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0100674 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1,400.29</td>
                            <td>1,400.29</td>
                            <td>1,015,750.07</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Tiltinio krano (sumalimo) krano ir talės eigos galiniai išjungėjai.</td>
                        </tr>
                        <tr>
                            <td>10/1/22</td>
                            <td>ts100335</td>
                            <td>0842/FV/2022</td>
                            <td>0842/FV/2022</td>
                            <td>P.P.U.H. Statech Molenda Stanislaw</td>
                            <td>pi0100759 9PLSTATEC 450UZSTIE</td>
                            <td>EUR</td>
                            <td>7,350.00</td>
                            <td>7,350.00</td>
                            <td>1,023,100.07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Džiovyklinio veleno guoliaviečiu remont.</td>
                        </tr>
                        <tr>
                            <td>10/1/22</td>
                            <td>ts100336</td>
                            <td>0841/FV/2022</td>
                            <td>0841/FV/2022</td>
                            <td>P.P.U.H. Statech Molenda Stanislaw</td>
                            <td>pi0100760 9PLSTATEC 450UZSTIE</td>
                            <td>EUR</td>
                            <td>9,260.00</td>
                            <td>9,260.00</td>
                            <td>1,032,360.07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/1/22</td>
                            <td>ts100344</td>
                            <td>0841/FV/2022.</td>
                            <td>0841/FV/2022.</td>
                            <td>P.P.U.H. Statech Molenda Stanislaw</td>
                            <td>pi0097473 9PLSTATEC 450UZSTIE</td>
                            <td>EUR</td>
                            <td>9,260.00</td>
                            <td>9,260.00</td>
                            <td>1,041,620.07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Džiovyklinio veleno šlifavimas  .</td>
                        </tr>
                        <tr>
                            <td>10/3/22</td>
                            <td>ts099845</td>
                            <td>SKA 0021886</td>
                            <td>SKA 0021886</td>
                            <td>UAB Skaidrola</td>
                            <td>pi0100218 242082810 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>80</td>
                            <td>80</td>
                            <td>1,041,700.07</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/3/22</td>
                            <td>ts099967</td>
                            <td>DIKI000521</td>
                            <td>DIKI000521</td>
                            <td>UAB Dikova</td>
                            <td>pi0099639 302449527 450LIEJUR</td>
                            <td>EUR</td>
                            <td>650</td>
                            <td>650</td>
                            <td>1,042,350.07</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>laiptų prie klijų talpos, rampoje, išpjovimas</td>
                        </tr>
                        <tr>
                            <td>10/4/22</td>
                            <td>ts099948</td>
                            <td>MC0078208</td>
                            <td>MC0078208</td>
                            <td>UAB Nordic Metrology Science</td>
                            <td>pi0100360 120229395 450LIEJUR</td>
                            <td>EUR</td>
                            <td>83.4</td>
                            <td>83.4</td>
                            <td>1,042,433.47</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/4/22</td>
                            <td>ts099949</td>
                            <td>MC0078222</td>
                            <td>MC0078222</td>
                            <td>UAB Nordic Metrology Science</td>
                            <td>pi0100361 120229395 450LIEJUR</td>
                            <td>EUR</td>
                            <td>52</td>
                            <td>52</td>
                            <td>1,042,485.47</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/4/22</td>
                            <td>ts100048</td>
                            <td>KGP 0736089</td>
                            <td>KGP 0736089</td>
                            <td>AB Kauno Grudai</td>
                            <td>pi0100485 133818917 450LIEJUR</td>
                            <td>EUR</td>
                            <td>91.6</td>
                            <td>91.6</td>
                            <td>1,042,577.07</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/6/22</td>
                            <td>ts099898</td>
                            <td>DIC 7731</td>
                            <td>DIC 7731</td>
                            <td>UAB Dangu inžinerijos centras</td>
                            <td>pi0100300 135255360 450LIEJUR</td>
                            <td>EUR</td>
                            <td>4,610.00</td>
                            <td>4,610.00</td>
                            <td>1,047,187.07</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>8 įvoriu maišyklems dengimas keramika </td>
                        </tr>
                        <tr>
                            <td>10/6/22</td>
                            <td>ts099939</td>
                            <td>VKL358210</td>
                            <td>VKL358210</td>
                            <td>UAB Virenda</td>
                            <td>pi0100350 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>147</td>
                            <td>147</td>
                            <td>1,047,334.07</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/10/22</td>
                            <td>ts099942</td>
                            <td>GPF2203446</td>
                            <td>GPF2203446</td>
                            <td>UAB Garant ProTech</td>
                            <td>pi0100362 304863046 450LIEJUR</td>
                            <td>EUR</td>
                            <td>229</td>
                            <td>229</td>
                            <td>1,047,563.07</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Aerozolinės gesinimo sistemos remonto darbai</td>
                        </tr>
                        <tr>
                            <td>10/11/22</td>
                            <td>ts099891</td>
                            <td>GKL-0220001</td>
                            <td>GKL-0220001</td>
                            <td>UAB Gitana</td>
                            <td>pi0100295 140581297 450LIEJUR</td>
                            <td>EUR</td>
                            <td>133.16</td>
                            <td>133.16</td>
                            <td>1,047,696.23</td>
                            <td>GKP</td>
                            <td>GNB</td>
                            <td>G9NB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/13/22</td>
                            <td>ts099981</td>
                            <td>BLS220001419</td>
                            <td>BLS220001419</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0100442 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>728</td>
                            <td>728</td>
                            <td>1,048,424.23</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Koriu lifto remontas</td>
                        </tr>
                        <tr>
                            <td>10/13/22</td>
                            <td>ts099986</td>
                            <td>BLS220001418</td>
                            <td>BLS220001418</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0100444 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>3,269.52</td>
                            <td>3,269.52</td>
                            <td>1,051,693.75</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krakmolo baro lifto remontas</td>
                        </tr>
                        <tr>
                            <td>10/14/22</td>
                            <td>ts100136</td>
                            <td>VKL358248</td>
                            <td>VKL358248</td>
                            <td>UAB Virenda</td>
                            <td>pi0100421 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>42</td>
                            <td>42</td>
                            <td>1,051,735.75</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/14/22</td>
                            <td>ts100249</td>
                            <td>VKL358249</td>
                            <td>VKL358249</td>
                            <td>UAB Virenda</td>
                            <td>pi0100662 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>880</td>
                            <td>880</td>
                            <td>1,052,615.75</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/17/22</td>
                            <td>ts099950</td>
                            <td>GPF2203516</td>
                            <td>GPF2203516</td>
                            <td>UAB Garant ProTech</td>
                            <td>pi0100394 304863046 450LIEJUR</td>
                            <td>EUR</td>
                            <td>34.4</td>
                            <td>34.4</td>
                            <td>1,052,650.15</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Gesintuvų katilinėje patikra</td>
                        </tr>
                        <tr>
                            <td>10/19/22</td>
                            <td>ts099979</td>
                            <td>BA2205571</td>
                            <td>BA2205571</td>
                            <td>UAB Baltic Auto</td>
                            <td>pi0100433 140699071 450LIEJUR</td>
                            <td>EUR</td>
                            <td>350.17</td>
                            <td>350.17</td>
                            <td>1,053,000.32</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/19/22</td>
                            <td>ts099982</td>
                            <td>SP122-02854</td>
                            <td>SP122-02854</td>
                            <td>UAB Šalnos prekyba</td>
                            <td>pi0100451 300107806 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1,508.60</td>
                            <td>1,508.60</td>
                            <td>1,054,508.92</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/19/22</td>
                            <td>ts099989</td>
                            <td>DSP 0013150</td>
                            <td>DSP 0013150</td>
                            <td>UAB Danis sauga</td>
                            <td>pi0100454 125276356 450LIEJUR</td>
                            <td>EUR</td>
                            <td>516</td>
                            <td>516</td>
                            <td>1,055,024.92</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Kopėčių, stropų, talių patikra</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr className="aqua">
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
                            <td>10/19/22</td>
                            <td>ts100103</td>
                            <td>AAB697386</td>
                            <td>AAB697386</td>
                            <td>UAB STOKKER</td>
                            <td>pi0100540 211660860 450LIEJUR</td>
                            <td>EUR</td>
                            <td>26.14</td>
                            <td>26.14</td>
                            <td>1,055,051.06</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Įrankio remontas</td>
                        </tr>
                        <tr>
                            <td>10/20/22</td>
                            <td>ts099983</td>
                            <td>VKL358259</td>
                            <td>VKL358259</td>
                            <td>UAB Virenda</td>
                            <td>pi0100450 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>297</td>
                            <td>297</td>
                            <td>1,055,348.06</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/20/22</td>
                            <td>ts099983</td>
                            <td>VKL358259</td>
                            <td>VKL358259</td>
                            <td>UAB Virenda</td>
                            <td>pi0100450 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>297</td>
                            <td>297</td>
                            <td>1,055,645.06</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/20/22</td>
                            <td>ts100079</td>
                            <td>SOL125537</td>
                            <td>SOL125537</td>
                            <td>UAB Solorina</td>
                            <td>pi0100504 240518180 450LIEJUR</td>
                            <td>EUR</td>
                            <td>54.04</td>
                            <td>54.04</td>
                            <td>1,055,699.10</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Toyota Hillux aptarnavimas prieš TA</td>
                        </tr>
                        <tr>
                            <td>10/20/22</td>
                            <td>ts100080</td>
                            <td>MIN02952</td>
                            <td>MIN02952</td>
                            <td>UAB Minestas</td>
                            <td>pi0100505 142095319 450LIEJUR</td>
                            <td>EUR</td>
                            <td>8,250.00</td>
                            <td>8,250.00</td>
                            <td>1,063,949.10</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td>liukų įrengimas C28 baseine, 3 vnt.</td>
                        </tr>
                        <tr>
                            <td>10/20/22</td>
                            <td>ts100082</td>
                            <td>TO22-039395</td>
                            <td>TO22-039395</td>
                            <td>UAB Tobis</td>
                            <td>pi0100506 152040659 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>378.1</td>
                            <td>378.1</td>
                            <td>1,064,327.20</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PVB TR3 transporterio juostos remontas</td>
                        </tr>
                        <tr>
                            <td>10/20/22</td>
                            <td>ts100085</td>
                            <td>NAR0083112</td>
                            <td>NAR0083112</td>
                            <td>UAB Narvija</td>
                            <td>pi0100517 141499878 450LIEJUR</td>
                            <td>EUR</td>
                            <td>336</td>
                            <td>336</td>
                            <td>1,064,663.20</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Ekonomaizerio mechaninio sandariklio keitimas</td>
                        </tr>
                        <tr>
                            <td>10/20/22</td>
                            <td>ts100165</td>
                            <td>VKL358256</td>
                            <td>VKL358256</td>
                            <td>UAB Virenda</td>
                            <td>pi0100596 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>534.28</td>
                            <td>534.28</td>
                            <td>1,065,197.48</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/21/22</td>
                            <td>ts099988</td>
                            <td>SDK 00499</td>
                            <td>SDK 00499</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0100445 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>187.5</td>
                            <td>187.5</td>
                            <td>1,065,384.98</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Angliško krano lyno keitimas</td>
                        </tr>
                        <tr>
                            <td>10/21/22</td>
                            <td>ts099990</td>
                            <td>TPT 144702</td>
                            <td>TPT 144702</td>
                            <td>Technikos priežiuros tarnyba VšI</td>
                            <td>pi0100453 188637485 450LIEJUR</td>
                            <td>EUR</td>
                            <td>137.2</td>
                            <td>137.2</td>
                            <td>1,065,522.18</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Angliško krano patikra</td>
                        </tr>
                        <tr>
                            <td>10/21/22</td>
                            <td>ts100123</td>
                            <td>HKLS0014353</td>
                            <td>HKLS0014353</td>
                            <td>UAB Hokla</td>
                            <td>pi0100556 110644539 450LIEJUR</td>
                            <td>EUR</td>
                            <td>69.8</td>
                            <td>69.8</td>
                            <td>1,065,591.98</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/24/22</td>
                            <td>ts100065</td>
                            <td>401,173,962</td>
                            <td>401,173,962</td>
                            <td>UAB Transkona</td>
                            <td>pi0100500 140949984 450LIEJUR</td>
                            <td>EUR</td>
                            <td>21.4</td>
                            <td>21.4</td>
                            <td>1,065,613.38</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Toyota Hillux TA</td>
                        </tr>
                        <tr>
                            <td>10/24/22</td>
                            <td>ts100102</td>
                            <td>EDE112523</td>
                            <td>EDE112523</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0100539 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>4,330.00</td>
                            <td>4,330.00</td>
                            <td>1,069,943.38</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>BH3.1 hidropulperio veleno su guoliavietemis gamyba  </td>
                        </tr>
                        <tr>
                            <td>10/24/22</td>
                            <td>ts100358</td>
                            <td>LEM22227</td>
                            <td>LEM22227</td>
                            <td>UAB LEMBA</td>
                            <td>pi0100311 303229473 450LIEJUR</td>
                            <td>EUR</td>
                            <td>4,435.00</td>
                            <td>4,435.00</td>
                            <td>1,074,378.38</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krakmolo siurbliu vamzdyno permontavimas</td>
                        </tr>
                        <tr>
                            <td>10/24/22</td>
                            <td>ts100412</td>
                            <td>SIN09837</td>
                            <td>SIN09837</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0100598 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1,967.50</td>
                            <td>1,967.50</td>
                            <td>1,076,345.88</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Apdailos krano lyno keitimas ,remontas, patikra</td>
                        </tr>
                        <tr>
                            <td>10/25/22</td>
                            <td>ts100091</td>
                            <td>BLS220001519</td>
                            <td>BLS220001519</td>
                            <td>UAB Baltic Lift Service</td>
                            <td>pi0100520 302514430 450LIEJUR</td>
                            <td>EUR</td>
                            <td>360</td>
                            <td>360</td>
                            <td>1,076,705.88</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>liftu aptarnavimas, patikra</td>
                        </tr>
                        <tr>
                            <td>10/25/22</td>
                            <td>ts100100</td>
                            <td>VOL20220567</td>
                            <td>VOL20220567</td>
                            <td>UAB Voltas</td>
                            <td>pi0100536 140587745 450LIEJUR</td>
                            <td>EUR</td>
                            <td>500</td>
                            <td>500</td>
                            <td>1,077,205.88</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Aukštos įtampos VS-3 variklio apsaugų relės perderinimas</td>
                        </tr>
                        <tr>
                            <td>10/25/22</td>
                            <td>ts100101</td>
                            <td>SKA0021955</td>
                            <td>SKA0021955</td>
                            <td>UAB Skaidrola</td>
                            <td>pi0100537 242082810 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>80</td>
                            <td>80</td>
                            <td>1,077,285.88</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/25/22</td>
                            <td>ts100119</td>
                            <td>EDE 112531</td>
                            <td>EDE 112531</td>
                            <td>UAB Edelmeta</td>
                            <td>pi0100544 263749050 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2,873.90</td>
                            <td>2,873.90</td>
                            <td>1,080,159.78</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>PPR darbai , velenu, nusiurbimo dėžių keitimas, šandoru remontas</td>
                        </tr>
                        <tr>
                            <td>10/26/22</td>
                            <td>ts100099</td>
                            <td>TPT144653</td>
                            <td>TPT144653</td>
                            <td>Technikos priežiuros tarnyba VšI</td>
                            <td>pi0100535 188637485 450LIEJUR</td>
                            <td>EUR</td>
                            <td>244</td>
                            <td>244</td>
                            <td>1,080,403.78</td>
                            <td>GSK</td>
                            <td>GSK</td>
                            <td>G8SK</td>
                            <td>Veikiančio katilo patikra, TPT.</td>
                        </tr>
                        <tr>
                            <td>10/26/22</td>
                            <td>ts100121</td>
                            <td>RTV0019737</td>
                            <td>RTV0019737</td>
                            <td>UAB Rytvita</td>
                            <td>pi0100543 110600037 450LIEJUR</td>
                            <td>EUR</td>
                            <td>3,363.15</td>
                            <td>3,363.15</td>
                            <td>1,083,766.93</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Oro kompresoriaus pagrind. aptarnavimas</td>
                        </tr>
                        <tr>
                            <td>10/26/22</td>
                            <td>ts100294</td>
                            <td>9670023035</td>
                            <td>9670023035</td>
                            <td>ABB Oy Process Industries</td>
                            <td>pi0100707 9FIABB 450UZSTIE</td>
                            <td>EUR</td>
                            <td>3,128.36</td>
                            <td>3,128.36</td>
                            <td>1,086,895.29</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/27/22</td>
                            <td>ts100160</td>
                            <td>M22 0266</td>
                            <td>M22 0266</td>
                            <td>UAB Tilta</td>
                            <td>pi0100580 142151650 450LIEJUR</td>
                            <td>EUR</td>
                            <td>313</td>
                            <td>313</td>
                            <td>1,087,208.29</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>PPR rangoviniai darbai 1diena.</td>
                        </tr>
                    </table>
                    <table className="customChart">
                        <tr className="aqua">
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
                            <td>10/28/22</td>
                            <td>ts100150</td>
                            <td>TPT144798</td>
                            <td>TPT144798</td>
                            <td>Technikos priežiuros tarnyba VšI</td>
                            <td>pi0100581 188637485 450LIEJUR</td>
                            <td>EUR</td>
                            <td>78.4</td>
                            <td>78.4</td>
                            <td>1,087,286.69</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Lifto patikra</td>
                        </tr>
                        <tr>
                            <td>10/28/22</td>
                            <td>ts100156</td>
                            <td>BT LTB0066183</td>
                            <td>BT LTB0066183</td>
                            <td>RAB Toyota Material Handling Baltic Lietuvos filialas</td>
                            <td>pi0100589 302331094 450LIEJUR</td>
                            <td>EUR</td>
                            <td>530.83</td>
                            <td>530.83</td>
                            <td>1,087,817.52</td>
                            <td>GKG</td>
                            <td>GKG</td>
                            <td>G4KG</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/28/22</td>
                            <td>ts100188</td>
                            <td>SOL125907</td>
                            <td>SOL125907</td>
                            <td>UAB Solorina</td>
                            <td>pi0100626 240518180 450LIEJUR</td>
                            <td>EUR</td>
                            <td>319.66</td>
                            <td>319.66</td>
                            <td>1,088,137.18</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/28/22</td>
                            <td>ts100193</td>
                            <td>NAR 0083385</td>
                            <td>NAR 0083385</td>
                            <td>UAB Narvija</td>
                            <td>pi0100629 141499878 450LIEJUR</td>
                            <td>EUR</td>
                            <td>480</td>
                            <td>480</td>
                            <td>1,088,617.18</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100164</td>
                            <td>VKL358260</td>
                            <td>VKL358260</td>
                            <td>UAB Virenda</td>
                            <td>pi0100587 134174959 450LIEJUR</td>
                            <td>EUR</td>
                            <td>156</td>
                            <td>156</td>
                            <td>1,088,773.18</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100248</td>
                            <td>NM004531</td>
                            <td>NM004531</td>
                            <td>UAB Alwark</td>
                            <td>pi0100664 300638080 450LIEFIZ</td>
                            <td>EUR</td>
                            <td>126</td>
                            <td>126</td>
                            <td>1,088,899.18</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100253</td>
                            <td>SIN 09881</td>
                            <td>SIN 09881</td>
                            <td>UAB Strele industrial</td>
                            <td>pi0100675 302317358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>2,088.00</td>
                            <td>2,088.00</td>
                            <td>1,090,987.18</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Krano bandymui svoriu atvezimas/nuoma</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100255</td>
                            <td>JOR07 0440</td>
                            <td>JOR07 0440</td>
                            <td>UAB Jormeta</td>
                            <td>pi0100652 303105358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>245</td>
                            <td>245</td>
                            <td>1,091,232.18</td>
                            <td>GBK</td>
                            <td>GBK</td>
                            <td>G8BK</td>
                            <td>Ekonomaizerio pelenų siurbimas</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100255</td>
                            <td>JOR07 0440</td>
                            <td>JOR07 0440</td>
                            <td>UAB Jormeta</td>
                            <td>pi0100652 303105358 450LIEJUR</td>
                            <td>EUR</td>
                            <td>752.5</td>
                            <td>752.5</td>
                            <td>1,091,984.68</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>G3KP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100269</td>
                            <td>SBK0173278</td>
                            <td>SBK0173278</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0100690 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>8.26</td>
                            <td>8.26</td>
                            <td>1,091,992.94</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>SMAP</td>
                            <td>Automobilio plovimas</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100269</td>
                            <td>SBK0173278</td>
                            <td>SBK0173278</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0100690 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>18.18</td>
                            <td>18.18</td>
                            <td>1,092,011.12</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100269</td>
                            <td>SBK0173278</td>
                            <td>SBK0173278</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0100690 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>8.26</td>
                            <td>8.26</td>
                            <td>1,092,019.38</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100269</td>
                            <td>SBK0173278</td>
                            <td>SBK0173278</td>
                            <td>UAB Švaros broliai</td>
                            <td>pi0100690 122538045 450LIEJUR</td>
                            <td>EUR</td>
                            <td>16.53</td>
                            <td>16.53</td>
                            <td>1,092,035.91</td>
                            <td>GKP</td>
                            <td>GKP</td>
                            <td>SMAP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100271</td>
                            <td>1310/300/10037133</td>
                            <td>1310/300/10037133</td>
                            <td>Valmet Automation Oy</td>
                            <td>pi0100682 9FIMETSOA 450UZSTIE</td>
                            <td>EUR</td>
                            <td>580</td>
                            <td>580</td>
                            <td>1,092,615.91</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>Abonentis valdymo sistemos palaikymo mokestis</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100272</td>
                            <td>KLP084337</td>
                            <td>KLP084337</td>
                            <td>UAB Ecoservice</td>
                            <td>pi0100691 123044722 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1,900.00</td>
                            <td>1,900.00</td>
                            <td>1,094,515.91</td>
                            <td>GKP</td>
                            <td>GNB</td>
                            <td>G9NB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100332</td>
                            <td>2,210,221,004,220</td>
                            <td>2,210,221,004,220</td>
                            <td>UAB Apsaugos komanda</td>
                            <td>pi0100748 122668722 450LIEJUR</td>
                            <td>EUR</td>
                            <td>50</td>
                            <td>50</td>
                            <td>1,094,565.91</td>
                            <td>GKP</td>
                            <td>GNB</td>
                            <td>G9NB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100341</td>
                            <td>VOL20220612</td>
                            <td>VOL20220612</td>
                            <td>UAB Voltas</td>
                            <td>pi0100766 140587745 450LIEJUR</td>
                            <td>EUR</td>
                            <td>703.8</td>
                            <td>703.8</td>
                            <td>1,095,269.71</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>VS-3 ir VS-6 galinių movų montavimas. Kabelių bandymas.</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100375</td>
                            <td>SKF108845</td>
                            <td>SKF108845</td>
                            <td>Sukauptos duju , ryšiu, elektr. sanaudos</td>
                            <td>pi0100800 _VSUKPASL VSUKPASLA</td>
                            <td>EUR</td>
                            <td>2,494.00</td>
                            <td>2,494.00</td>
                            <td>1,097,763.71</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Guoliu SKF vibromonitotingas</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100407</td>
                            <td>pi0100798</td>
                            <td>pi0100798</td>
                            <td>Sukauptos duju , ryšiu, elektr. sanaudos</td>
                            <td>pi0100798 _VSUKPASL VSUKPASLA</td>
                            <td>EUR</td>
                            <td>270</td>
                            <td>270</td>
                            <td>1,098,033.71</td>
                            <td>GKP</td>
                            <td>GMT</td>
                            <td>G3KP</td>
                            <td>Guoliu SKF vibromonitotingas</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>ts100444</td>
                            <td>AXSS2206442</td>
                            <td>AXSS2206442</td>
                            <td>UAB AXIOMA servisas</td>
                            <td>pi0100859 304602530 450LIEJUR</td>
                            <td>EUR</td>
                            <td>1,656.00</td>
                            <td>1,656.00</td>
                            <td>1,099,689.71</td>
                            <td>GKP</td>
                            <td>GET</td>
                            <td>G3KP</td>
                            <td>VS-3 ir VS-6 variklių keitimas pozicijomis, tvirtinimo padų perdarymas. VS-6 variklio guolių keitimas.</td>
                        </tr>
                        <tr>
                            <td>10/31/22</td>
                            <td>Pabaigos likutis</td>
                            <td>1,099,689.71</td>
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
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>EUR</td>
                            <td>77,377.43</td>
                            <td>77,377.43</td>
                            <td>77,377.43</td>
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
                    </table>
                </header>            
            </div>
        </>
    )
}

export default App;
