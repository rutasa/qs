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
            doc.text("2022 spal.", 250, 10);
            elHeight = 18;
            elWidth = 200;
            padding = 180;
        }
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
        }

        //else if (elWidth > pageWidth) {
        //    const ratio = pageWidth / elWidth;
        //    elHeight = elHeight * ratio - padding * 2;
        //    elWidth = elWidth * ratio - padding * 2;
        //}

        if (i === 31) {
            padding = 200;
            elHeight = 16;
            elWidth = 200;
        }
        if (i === 32) {
            top = 45;
            padding = 10;
            elHeight = 16;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 33) {
            top = 70;
            padding = 20;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 34) {
            top = 70;
            padding = 240;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 35) {
            top = 250;
            padding = 10;
            elHeight = 10;
            elWidth = 300;
        }
        if (i === 36) {
            top = 270;
            padding = 20;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 37) {
            top = 270;
            padding = 240;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 38) {
            padding = 200;
            elHeight = 16;
            elWidth = 150;
        }
        if (i === 39) {
            top = 45;
            padding = 10;
            elHeight = 10;
            elWidth = 300;
        }
        if (i === 40) {
            top = 70;
            padding = 20;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 41) {
            top = 70;
            padding = 240;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 42) {
            top = 250;
            padding = 10;
            elHeight = 10;
            elWidth = 200;
        }
        if (i === 43) {
            top = 270;
            padding = 20;
            elHeight = 170;
            elWidth = 300;
        }
        if (i === 44) {
            padding = 10;
            elHeight = 10;
            elWidth = 280;
        }
        if (i === 45) {
            top = 50;
            padding = 20;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 46) {
            top = 50;
            padding = 240;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 47) {
            top = 250;
            padding = 10;
            elHeight = 10;
            elWidth = 150;
        }
        if (i === 48) {
            top = 270;
            padding = 20;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 49) {
            padding = 10;
            elHeight = 10;
            elWidth = 200;
        }
        if (i === 50) {
            top = 50;
            padding = 20;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 51) {
            top = 50;
            padding = 240;
            elHeight = 170;
            elWidth = 170;
        }
        if (i === 52) {
            top = 235;
            padding = 10;
            elHeight = 30;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 53) {
            top = 270;
            padding = 20;
            elHeight = 160;
            elWidth = 160;
        }
        if (i === 54) {
            top = 270;
            padding = 240;
            elHeight = 160;
            elWidth = 160;
        }
        if (i === 55) {
            padding = 230;
            elHeight = 16;
            elWidth = 120;
        }
        if (i === 56) {
            top = 50;
            padding = 10;
            elHeight = 170;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 57) {
            top = 250;
            padding = 230;
            elHeight = 16;
            elWidth = 120;
        }
        if (i === 58) {
            top = 270;
            padding = 10;
            elHeight = 170;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 59) {
            padding = 230;
            elHeight = 16;
            elWidth = 120;
        }
        if (i === 60) {
            top = 45;
            padding = 10;
            elHeight = 400;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 61) {
            padding = 10;
            elHeight = 400;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }
        if (i === 62) {
            padding = 10;
            elHeight = 400;
            const ratio = pageWidth / elWidth;
            elWidth = elWidth * ratio - padding * 2;
        }


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