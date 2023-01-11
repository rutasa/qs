import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import domtoimage from 'dom-to-image';
import * as fs from "fs";
var path = require("path");

const loadBinaryResource = function (url) {
    var result = "";
    try {
        result = fs.readFileSync(path.resolve(__dirname + url), {
            encoding: "latin1"
        });
    } catch (e) {
        console.log(e);
    }
    return result;
};

export async function exportMultipleChartsToPdf() {
    const doc = new jsPDF("landscape", "px");

    const elements = document.getElementsByClassName("customChart"); 

    await creatPdf({ doc, elements });

    doc.save(`charts.pdf`);
}

async function creatPdf({
    doc,
    elements,
}){
    let padding = 10;
    const marginTop = 20;
    let top = marginTop;
    const PTSans = loadBinaryResource("PTSans.ttf");
    doc.addFileToVFS("PTSans.ttf", PTSans);
    doc.addFont("PTSans.ttf", "PTSans", "normal");
    doc.setFont("PTSans");

    for (let i = 0; i < elements.length; i++) {
        const el = elements.item(i);
        //const imgData = await htmlToImage.toPng(el, { skipAutoScale: true, style: { 'margin': 0, 'padding': 0}});
        const imgData = await htmlToImage.toJpeg(el);

        let elHeight = el.offsetHeight;
        let elWidth = el.offsetWidth;

        const pageWidth = doc.internal.pageSize.getWidth();

        if (i === 0) {
            //doc.text("2022 metinė ataskaita", 250, 10);
            elHeight = 18;
            elWidth = 200;
            padding = 220;
        }
        if (i === 1) {
            elHeight = 150;
            elWidth = 180;
            padding = 10;
            top = 40;
        }
        if (i === 2) {
            elHeight = 150;
            elWidth = 180;
            padding = 200;
            top = 40;
        }
        if (i === 3) {
            elHeight = 150;
            elWidth = 180;
            padding = 390;
            top = 40;
        }
        if (i === 4) {
            elHeight = 150;
            elWidth = 180;
            padding = 10;
            top = 140;
        }
        if (i === 5) {
            elHeight = 150;
            elWidth = 180;
            padding = 200;
            top = 140;
        }
        if (i === 6) {
            elHeight = 150;
            elWidth = 180;
            padding = 390;
            top = 140;
        }
        if (i === 7) {
            elHeight = 180;
            elWidth = 250;
            padding = 10;
            top = 250
        }
        if (i === 8) {
            elHeight = 110;
            elWidth = 170;
            padding = 270;
            top = 285
        }
        if (i === 9) {
            elHeight = 110;
            elWidth = 170;
            padding = 430;
            top = 285
        }
        if (i === 10) {
            elHeight = 18;
            elWidth = 200;
            padding = 220;
        }
        if (i === 11) {
            elHeight = 18;
            elWidth = 200;
            padding = 220;
        }
        if (i === 12) {
            elHeight = 150;
            elWidth = 180;
            padding = 10;
            top = 40;
        }
        if (i === 13) {
            elHeight = 150;
            elWidth = 180;
            padding = 200;
            top = 40;
        }
        if (i === 14) {
            elHeight = 150;
            elWidth = 180;
            padding = 390;
            top = 40;
        }
        if (i === 15) {
            elHeight = 150;
            elWidth = 180;
            padding = 10;
            top = 140;
        }
        if (i === 16) {
            elHeight = 150;
            elWidth = 180;
            padding = 200;
            top = 140;
        }
        if (i === 17) {
            elHeight = 150;
            elWidth = 180;
            padding = 390;
            top = 140;
        }
        if (i === 18) {
            elHeight = 180;
            elWidth = 250;
            padding = 10;
            top = 250
        }
        if (i === 19) {
            elHeight = 110;
            elWidth = 170;
            padding = 270;
            top = 285
        }
        if (i === 20) {
            elHeight = 110;
            elWidth = 170;
            padding = 430;
            top = 285
        }
        if (i === 21) {
            elHeight = 18;
            elWidth = 200;
            padding = 220;
        }
        if (i === 22) {
            elHeight = 18;
            elWidth = 450;
            padding = 80;
        }
        if (i === 23) {
            padding = 10
            top = 40
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 24) {
            padding = 10
            top = 230
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 25) {
            elHeight = 18;
            elWidth = 200;
            padding = 60;
        }
        if (i === 26) {
            top = 40;
            elHeight = 80;
            elWidth = 160;
            padding = 160;
        }
        if (i === 27) {
            top = 20;
            elHeight = 18;
            elWidth = 200;
            padding = 360;
        }
        if (i === 28) {
            top = 40;
            elHeight = 80;
            elWidth = 160;
            padding = 300;
        }
        if (i === 29) {
            top = 40;
            elHeight = 80;
            elWidth = 160;
            padding = 450;
        }
        if (i === 30) {
            top = 130;
            elHeight = 18;
            elWidth = 200;
            padding = 60;
        }
        if (i === 31) {
            top = 160;
            elHeight = 80;
            elWidth = 160;
            padding = 10;
        }
        if (i === 32) {
            top = 160;
            elHeight = 80;
            elWidth = 160;
            padding = 160;
        }
        if (i === 33) {
            top = 130;
            elHeight = 18;
            elWidth = 200;
            padding = 360;
        }
        if (i === 34) {
            top = 160;
            elHeight = 80;
            elWidth = 160;
            padding = 300;
        }
        if (i === 35) {
            top = 160;
            elHeight = 80;
            elWidth = 160;
            padding = 450;
        }
        if (i === 36) {
            top = 250;
            elHeight = 160;
            elWidth = 200;
            padding = 10;
        }
        if (i === 37) {
            elHeight = 18;
            elWidth = 450;
            padding = 80;
        }
        if (i === 38) {
            padding = 10
            top = 40
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 39) {
            padding = 10
            top = 230
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 40) {
            elHeight = 18;
            elWidth = 450;
            padding = 80;
        }
        if (i === 41) {
            padding = 10
            top = 40
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 42) {
            padding = 10
            top = 230
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 43) {
            elHeight = 18;
            elWidth = 300;
            padding = 180;
        }
        if (i === 44) {
            elHeight = 90;
            elWidth = 180;
            padding = 10;
            top = 40;
        }
        if (i === 45) {
            elHeight = 90;
            elWidth = 180;
            padding = 200;
            top = 40;
        }
        if (i === 46) {
            elHeight = 90;
            elWidth = 180;
            padding = 390;
            top = 40;
        }
        if (i === 47) {
            top = 130;
            elHeight = 18;
            elWidth = 300;
            padding = 180;
        }
        if (i === 48) {
            elHeight = 90;
            elWidth = 180;
            padding = 10;
            top = 150;
        }
        if (i === 49) {
            elHeight = 90;
            elWidth = 180;
            padding = 200;
            top = 150;
        }
        if (i === 50) {
            elHeight = 90;
            elWidth = 180;
            padding = 390;
            top = 150;
        }
        if (i === 51) {
            top = 250;
            elHeight = 18;
            elWidth = 200;
            padding = 220;
        }
        if (i === 52) {
            top = 270;
            padding = 10;
            elHeight = 150;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 53) {
            elHeight = 18;
            elWidth = 120;
            padding = 260;
        }
        if (i === 54) {
            top = 40;
            elHeight = 18;
            elWidth = 120;
            padding = 120;
        }
        if (i === 55) {
            top = 40;
            elHeight = 18;
            elWidth = 120;
            padding = 370;
        }
        if (i === 56) {
            top = 250;
            elHeight = 18;
            elWidth = 120;
            padding = 120;
        }
        if (i === 57) {
            top = 60;
            elHeight = 160;
            elWidth = 160;
            padding = 90;
        }
        if (i === 58) {
            top = 60;
            elHeight = 160;
            elWidth = 160;
            padding = 340;
        }
        if (i === 59) {
            top = 270;
            elHeight = 160;
            elWidth = 160;
            padding = 90;
        }
        if (i === 60) {
            elHeight = 18;
            elWidth = 200;
            padding = 210;
        }
        if (i === 61) {
            top = 40;
            elHeight = 80;
            elWidth = 140;
            padding = 50;
        }
        if (i === 62) {
            top = 40;
            elHeight = 80;
            elWidth = 140;
            padding = 230;
        }
        if (i === 63) {
            top = 40;
            elHeight = 80;
            elWidth = 140;
            padding = 390;
        }
        if (i === 64) {
            top = 130;
            elHeight = 80;
            elWidth = 140;
            padding = 50;
        }
        if (i === 65) {
            top = 130;
            elHeight = 80;
            elWidth = 140;
            padding = 230;
        }
        if (i === 66) {
            elHeight = 18;
            elWidth = 200;
            padding = 210;
            top = 215;
        }
        if (i === 67) {
            top = 235;
            elHeight = 80;
            elWidth = 140;
            padding = 50;
        }
        if (i === 68) {
            top = 235;
            elHeight = 80;
            elWidth = 140;
            padding = 230;
        }
        if (i === 69) {
            top = 235;
            elHeight = 80;
            elWidth = 140;
            padding = 390;
        }
        if (i === 70) {
            top = 325;
            elHeight = 80;
            elWidth = 140;
            padding = 50;
        }
        if (i === 71) {
            top = 325;
            elHeight = 80;
            elWidth = 140;
            padding = 230;
        }
        if (i === 72) {
            elHeight = 20;
            elWidth = 200;
        }
        if (i === 73) {
            elHeight = 18;
            elWidth = 200;
            padding = 210;
        }
        if (i === 74) {
            elHeight = 50;
            padding = 10;
            top = 40;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 75) {
            elHeight = 50;
            padding = 10;
            top = 95;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 76) {
            elHeight = 50;
            padding = 10;
            top = 150;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 77) {
            elHeight = 50;
            padding = 10;
            top = 205;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 78) {
            elHeight = 50;
            padding = 10;
            top = 260;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 79) {
            elHeight = 50;
            padding = 10;
            top = 315;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 80) {
            elHeight = 50;
            padding = 10;
            top = 370;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 81) {
            elHeight = 50;
            padding = 10;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 82) {
            elHeight = 50;
            padding = 10;
            top = 75;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 83) {
            elHeight = 50;
            padding = 10;
            top = 130;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 84) {
            elHeight = 50;
            padding = 10;
            top = 185;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 85) {
            elHeight = 50;
            padding = 10;
            top = 240;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 86) {
            elHeight = 50;
            padding = 10;
            top = 295;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 87) {
            elHeight = 80;
            padding = 10;
            top = 350;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 88) {
            elHeight = 18;
            padding = 150;
            elWidth = 280;
        }
        if (i === 89) {
            elHeight = 150;
            padding = 10;
            top = 100;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        /*
        if (i === 1) {
            padding = 10
            top = 40
            const ratio = pageWidth / elWidth;
            elHeight = 200;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 2) {
            elHeight = 180;
            elWidth = 260;
        }
        if (i === 3) {
            top = 358;
            padding = 290;
            elHeight = 80;
            elWidth = 150;
        }
        if (i === 4) {
            top = 358;
            padding = 290 + 150;
            elHeight = 80;
            elWidth = 180;
        }

        if (i === 5) {
            elHeight = 18;
            elWidth = 400;
            padding = 80;
        }
        if (i === 6) {
            padding = 10
            const ratio = pageWidth / elWidth;
            elHeight = 130;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 7) {
            const ratio = pageWidth / elWidth;
            elHeight = 130;
            elWidth = elWidth * ratio - padding * 2;
        }

        if (i === 8) {
            top = 358;
            padding = 300;
            elHeight = 80;
            elWidth = 150;
        }
        if (i === 9) {
            top = 358;
            padding = 450;
            elHeight = 80;
            elWidth = 150;
        }
        if (i === 10) {
            elHeight = 18;
            elWidth = 400;
            padding = 80;
        }
        if (i === 11) {
            padding = 10;
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 12) {
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 13) {
            elHeight = 18;
            elWidth = 400;
            padding = 80;
        }
        if (i === 14) {
            padding = 10;
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 15) {
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 16) {
            elHeight = 18;
            elWidth = 200;
            padding = 180;
        }
        if (i === 17) {
            padding = 10;
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 18) {
            const ratio = pageWidth / elWidth;
            elHeight = 180;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 19) {
            padding = 240;
            elHeight = 18;
            elWidth = 100;
        }
        if (i === 20) {
            top = 45;
            padding = 100;
            elHeight = 12;
            elWidth = 40;
        }
        if (i === 21) {
            top = 45;
            padding = 260;
            elHeight = 12;
            elWidth = 40;
        }
        if (i === 22) {
            top = 45;
            padding = 420;
            elHeight = 12;
            elWidth = 40;
        }
        if (i === 23) {
            padding = 10;
            elHeight = 150;
            elWidth = 180;
        }
        if (i === 24) {
            top = 45 + 30;
            padding = 200;
            elHeight = 150;
            elWidth = 180;
        }
        if (i === 25) {
            top = 45 + 30;
            padding = 10 + 180 + 180 + 20;
            elHeight = 150;
            elWidth = 180;
        }
        if (i === 26) {
            padding = 10;
            elHeight = 80;
            elWidth = 150;
        }
        if (i === 27) {
            top = 75 + 168
            padding = 10 + 150;
            elHeight = 80;
            elWidth = 150;
        }
        if (i === 28) {
            top = 75 + 168
            padding = 10 + 150 + 150;
            elHeight = 80;
            elWidth = 150;
        }
        if (i === 29) {
            top = 75 + 168
            padding = 10 + 150 + 150 + 150;
            elHeight = 80;
            elWidth = 150;
        }
        if (i === 30) {
            padding = 10;
            elHeight = 80;
            elWidth = 150;
        } */

        //else if (elWidth > pageWidth) {
        //    const ratio = pageWidth / elWidth;
        //    elHeight = elHeight * ratio - padding * 2;
        //    elWidth = elWidth * ratio - padding * 2;
        //}

        

        const pageHeight = doc.internal.pageSize.getHeight();

        if (top + elHeight > pageHeight) {
            doc.addPage();
            top = marginTop;
        }

        //doc.addImage(imgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
        doc.addImage(imgData, "JPEG", padding, top, elWidth, elHeight, `image${i}`);
        top += elHeight + marginTop;
    }
}