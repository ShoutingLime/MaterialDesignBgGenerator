// Плагин для Adobe Illustrator, генерирующий фоны в стиле Material Design

#target Illustrator

/*
// Задаем размеры артборда
var artboardWidth = +prompt("Enter artboard width, px", "");
var artboardHeight = +prompt("Enter artboard height, px", "");
*/

/*
// Вариант: задаем артборд с соотношением 16/9, 6,1 Mpx
var artboardWidth = 3293;
var artboardHeight = 1852;
*/

// Слегка варьируем размер артборда, 6,1 Mpx
function getRandomIntArtboardWidth(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
var artboardWidth = getRandomIntArtboardWidth(3000, 3300);
var artboardHeight = 6100000 / artboardWidth;

var docPreset = new DocumentPreset;

docPreset.colorMode = DocumentColorSpace.RGB;
docPreset.title  = "Background in Material design";
docPreset.units = RulerUnits.Pixels;

var presetArt = app.startupPresetsList[3];

// Создаем новый документ с цветовым пространством RGB
var doc = app.documents.addDocument(presetArt, docPreset);

// Устанавливаем размер артборда
doc.artboards[0].artboardRect = new Array(0, 0, artboardWidth, -artboardHeight);

// Начинаем рисовать
var groupMain = app.activeDocument.groupItems.add(); // создаем группу для всех элементов на артборде

// Палитра MaterialUI
matSwatches = [[[255, 235, 238], [255, 205, 210], [239, 154, 154], [229, 115, 115], [239, 83, 80], [244, 67, 54], [229, 57, 53], [211, 47, 47], [198, 40, 40], [183, 28, 28], [255, 138, 128], [255, 82, 82], [255, 23, 68], [213, 0, 0]],
               [[252, 228, 236], [248, 187, 208], [244, 143, 177], [240, 98, 146], [236, 64, 122], [233, 30, 99], [216, 27, 96], [194, 24, 91], [173, 20, 87], [136, 14, 79], [255, 128, 171], [255, 64, 129], [245, 0, 87], [197, 17, 98]],
               [[243, 229, 245], [225, 190, 231], [206, 147, 216], [186, 104, 200], [171, 71, 188], [156, 39, 176], [142, 36, 170], [123, 31, 162], [106, 27, 154], [74, 20, 140], [234, 128, 252], [224, 64, 251], [213, 0, 249], [170, 0, 255]],
               [[237, 231, 246], [209, 196, 233], [179, 157, 219], [186, 104, 200], [126, 87, 194], [103, 58, 183], [94, 53, 177], [81, 45, 168], [69, 39, 160], [49, 27, 146], [179, 136, 255], [124, 77, 255], [101, 31, 255], [98, 0, 234]],
               [[232, 234, 246], [197, 202, 233], [159, 168, 218], [121, 134, 203], [92, 107, 192], [63, 81, 181], [57, 73, 171], [48, 63, 159], [40, 53, 147], [26, 35, 126], [140, 158, 255], [83, 109, 254], [61, 90, 254], [48, 79, 254]],
               [[227, 242, 253], [187, 222, 251], [144, 202, 249], [100, 181, 246], [66, 165, 245], [33, 150, 243], [30, 136, 229], [25, 118, 210], [21, 101, 192], [13, 71, 161], [130, 177, 255], [68, 138, 255], [41, 121, 255], [41, 98, 255]],
               [[225, 245, 254], [179, 229, 252], [129, 212, 250], [79, 195, 247], [41, 182, 246], [3, 169, 244], [3, 155, 229], [2, 136, 209], [2, 119, 189], [1, 87, 155], [128, 216, 255], [64, 196, 255], [0, 176, 255], [0, 145, 234]],
               [[224, 247, 250], [178, 235, 242], [128, 222, 234], [77, 208, 225], [38, 198, 218], [0, 188, 212], [0, 172, 193], [0, 151, 167], [0, 131, 143], [0, 96, 100], [132, 255, 255], [24, 255, 255], [0, 229, 255], [0, 184, 212]],
               [[224, 242, 241], [178, 223, 219], [128, 203, 196], [77, 182, 172], [38, 166, 154], [0, 150, 136], [0, 137, 123], [0, 121, 107], [0, 105, 92], [0, 77, 64], [167, 255, 235], [100, 255, 218], [29, 233, 182], [0, 191, 165]],
               [[232, 245, 233], [200, 230, 201], [165, 214, 167], [129, 199, 132], [102, 187, 106], [76, 175, 80], [67, 160, 71], [56, 142, 60], [46, 125, 50], [27, 94, 32], [185, 246, 202], [105, 240, 174], [0, 230, 118], [0, 200, 83]],
               [[241, 248, 233], [220, 237, 200], [197, 225, 165], [174, 213, 129], [156, 204, 101], [139, 195, 74], [124, 179, 66], [104, 159, 56], [85, 139, 47], [51, 105, 30], [204, 255, 144], [178, 255, 89], [118, 255, 3], [100, 221, 23]],
               [[249, 251, 231], [240, 244, 195], [230, 238, 156], [220, 231, 117], [212, 225, 87], [205, 220, 57], [192, 202, 51], [175, 180, 43], [158, 157, 36], [130, 119, 23], [244, 255, 129], [238, 255, 65], [198, 255, 0], [174, 234, 0]],
               [[255, 253, 231], [255, 249, 196], [255, 245, 157], [255, 241, 118], [255, 238, 88], [255, 235, 59], [253, 216, 53], [251, 192, 45], [249, 168, 37], [245, 127, 23], [255, 255, 141], [255, 255, 0], [255, 234, 0], [255, 214, 0]],
               [[255, 248, 225], [255, 236, 179], [255, 224, 130], [255, 213, 79], [255, 202, 40], [255, 193, 7], [255, 179, 0], [255, 160, 0], [255, 143, 0], [255, 111, 0], [255, 229, 127], [255, 215, 64], [255, 196, 0], [255, 171, 0]],
               [[255, 243, 224], [255, 224, 178], [255, 204, 128], [255, 183, 77], [255, 167, 38], [255, 152, 0], [251, 140, 0], [245, 124, 0], [239, 108, 0], [230, 81, 0], [255, 209, 128], [255, 171, 64], [255, 145, 0], [255, 109, 0]],
               [[251, 233, 231], [255, 204, 188], [255, 171, 145], [255, 138, 101], [255, 112, 67], [255, 87, 34], [244, 81, 30], [230, 74, 25], [216, 67, 21], [191, 54, 12], [255, 158, 128], [255, 110, 64], [255, 61, 0], [221, 44, 0]],
               [[239, 235, 233], [215, 204, 200], [188, 170, 164], [161, 136, 127], [141, 110, 99], [121, 85, 72], [109, 76, 65], [93, 64, 55], [78, 52, 46], [62, 39, 35]],
               [[250, 250, 250], [245, 245, 245], [238, 238, 238], [224, 224, 224], [189, 189, 189], [158, 158, 158], [117, 117, 117], [97, 97, 97], [66, 66, 66], [33, 33, 33]],
               [[236, 239, 241], [207, 216, 220], [176, 190, 197], [144, 164, 174], [120, 144, 156], [96, 125, 139], [84, 110, 122], [69, 90, 100], [55, 71, 79], [38, 50, 56]]];


// Выбор случайного цвета из палитры
function SelectColor() {
    subArray = matSwatches[Math.floor(Math.random() * matSwatches.length)];
    colorItem = subArray[Math.floor(Math.random() * subArray.length)];
    return colorItem;
}


// Выбор случайного цвета из ограниченной палитры
// Вариант с контрастной схемой
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
//var m = getRandomInt(0, 7);

// Генератор случайных координат
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var docCurrent = app.activeDocument;
// Фон
var bg = docCurrent.pathItems.rectangle(0, 0, artboardWidth, artboardHeight);
bg.stroked = false;
bg.filled = true;
var currentColor = SelectColor();
var bgColor = new RGBColor();
bgColor.red = currentColor[0];
bgColor.green = currentColor[1];
bgColor.blue = currentColor[2];
bg.fillColor = bgColor;
bg.moveToBeginning(groupMain); // помещаем фон в начало общей группы

// Вычисляем ширину теней
var shadowWidth;
if (artboardWidth > artboardHeight) {
    shadowWidth = artboardWidth * 0.0075;
} else {
    shadowWidth = artboardHeight * 0.0075;
} // 1% от большего габарита артборда

// Задаем градиент тени окружности
var startColor = new RGBColor();
startColor.red = 0;
startColor.green = 0;
startColor.blue = 0;

var endColor = new RGBColor();
endColor.red = 255;
endColor.green = 255;
endColor.blue = 255;

for (var x = 0; x < 3; x++) {

    // Прямоугольники
    for (var j = 0; j < getRandomInt(2, 5); j++) {
        // координаты центра прямоугольников - основного и тени
        var rectCenterX = getRandomInt((artboardWidth / -10), (artboardWidth + artboardWidth / 10));
        var rectCenterY = -1 * getRandomInt((artboardHeight / -10), (artboardHeight + artboardHeight / 10));
        // ширина и высота прямоугольника
        rectWidth = getRandomInt(100, 4 * artboardHeight / 5);
        rectHeight = artboardHeight * 6;
        // рисуем тень прямоугольника
        var rect = docCurrent.pathItems.rectangle(rectCenterY + rectHeight / 2, rectCenterX - rectWidth / 2, rectWidth, rectHeight);
        rectAngle = getRandomInt(0, 360);

        rect.stroked = false;
        rect.filled = true;
        rect.moveToBeginning(groupMain);

        // Конструируем градиент тени
        var shadowGradient = docCurrent.gradients.add();
        shadowGradient.type = GradientType.LINEAR;
        var shadowGradientColor = new GradientColor();
        shadowGradientColor.gradient = shadowGradient;

        var scaleNum = 100 * (rectWidth - shadowWidth) / rectWidth; // Коэффициент масштаба для ресайза градиента
        var scaleNum2 = 100 * (rectWidth - shadowWidth * 2) / rectWidth;
        
        // Корректируем первую стоп-точку градиента
        shadowGradient.gradientStops[0].rampPoint = 0;
        shadowGradient.gradientStops[0].color = endColor;
        shadowGradient.gradientStops[0].opacity = 66; // прозрачность точки градиента

        // Корректируем вторую стоп-точку градиента
        shadowGradient.gradientStops[1].rampPoint = 100 - scaleNum;
        shadowGradient.gradientStops[1].color = startColor;
        shadowGradient.gradientStops[1].opacity = 66; // прозрачность точки градиента

        // Добавляем две стоп-точки градиента
        var thirdStopPoint = shadowGradient.gradientStops.add();
        shadowGradient.gradientStops[2].rampPoint = scaleNum;
        shadowGradient.gradientStops[2].color = startColor;
        thirdStopPoint.opacity = 66; // прозрачность точки градиента

        var fourthStopPoint = shadowGradient.gradientStops.add();
        shadowGradient.gradientStops[3].rampPoint = 100;
        shadowGradient.gradientStops[3].color = endColor;
        fourthStopPoint.opacity = 66; // прозрачность точки градиента

        rect.fillColor = shadowGradientColor;
        rect.rotate(rectAngle);
        rect.blendingMode = BlendModes.MULTIPLY;

        // Задаем цвет основого прямоугольника
        var currentColor = SelectColor();
        var selectColor = new RGBColor();
        selectColor.red = currentColor[0];
        selectColor.green = currentColor[1];
        selectColor.blue = currentColor[2];

        // Рисуем основной прямоугольник дублированием и ресайзом 
        var duplicatedRect = rect.duplicate();
        duplicatedRect.resize(scaleNum2, scaleNum2);
        duplicatedRect.fillColor = selectColor;
        duplicatedRect.blendingMode = BlendModes.NORMAL;
    }

    // Окружности
    for (var i = 0; i < getRandomInt(2, 5); i++) {
        // координаты центра окружностей - основной и тени
        var circleCenterX = getRandomInt((artboardWidth / -10), (artboardWidth + artboardWidth / 10));
        var circleCenterY = -1 * getRandomInt((artboardHeight / -10), (artboardHeight + artboardHeight / 10));
        // радиус окружности тени
        var circleRadius = getRandomInt(250, 3 * artboardHeight / 4);
        // рисуем окружность тени
        var circle = docCurrent.pathItems.ellipse(circleCenterY + circleRadius, circleCenterX - circleRadius, 2 * circleRadius, 2 * circleRadius);
        circle.stroked = false;
        circle.filled = true;
        circle.moveToBeginning(groupMain);

        // "Случайно" рисуем концентрические окружности
        var randomCirclesCount = getRandomInt(0, 5);
        for (var k = 0; k < randomCirclesCount; k++) {
            var randomCircleRadius = (Math.random() * (0.85 - 0.4) + 0.4) * circleRadius;
            var randomCircle = docCurrent.pathItems.ellipse(circleCenterY + randomCircleRadius, circleCenterX - randomCircleRadius, 2 * randomCircleRadius, 2 * randomCircleRadius);
            randomCircle.stroked = false;
            randomCircle.filled = true;
            randomCircle.moveToBeginning(groupMain);

            // Конструируем градиент тени
            var shadowGradient = docCurrent.gradients.add();
            shadowGradient.type = GradientType.RADIAL;
            var shadowGradientColor = new GradientColor();
            shadowGradientColor.gradient = shadowGradient;

            var randomScaleNum = 100 * (randomCircleRadius - shadowWidth) / randomCircleRadius; // Коэффициент масштаба для ресайза случайных концентрических кругов

            // Корректируем первую стоп-точку градиента
            shadowGradient.gradientStops[0].rampPoint = randomScaleNum;
            shadowGradient.gradientStops[0].color = startColor;
            shadowGradient.gradientStops[0].opacity = 66; // прозрачность точки градиента

            // Корректируем вторую стоп-точку градиента
            shadowGradient.gradientStops[1].rampPoint = 100;
            shadowGradient.gradientStops[1].color = endColor;
            shadowGradient.gradientStops[1].opacity = 66; // прозрачность точки градиента

            randomCircle.fillColor = shadowGradientColor;
            randomCircle.blendingMode = BlendModes.MULTIPLY;

            // Задаем цвет основого круга
            var currentColor = SelectColor();
            var selectColor = new RGBColor();
            selectColor.red = currentColor[0];
            selectColor.green = currentColor[1];
            selectColor.blue = currentColor[2];

            // Рисуем основной круг дублированием и ресайзом 
            var duplicatedRandomCircle = randomCircle.duplicate();
            duplicatedRandomCircle.resize(randomScaleNum, randomScaleNum);
            duplicatedRandomCircle.fillColor = selectColor;
            duplicatedRandomCircle.blendingMode = BlendModes.NORMAL;
        }

        // Конструируем градиент тени
        var shadowGradient = docCurrent.gradients.add();
        shadowGradient.type = GradientType.RADIAL;
        var shadowGradientColor = new GradientColor();
        shadowGradientColor.gradient = shadowGradient;

        var scaleNum = 100 * (circleRadius - shadowWidth) / circleRadius; // Коэффициент масштаба для ресайза основных кругов

        // Корректируем первую стоп-точку градиента
        shadowGradient.gradientStops[0].rampPoint = scaleNum;
        shadowGradient.gradientStops[0].color = startColor;
        shadowGradient.gradientStops[0].opacity = 66; // прозрачность точки градиента

        // Корректируем вторую стоп-точку градиента
        shadowGradient.gradientStops[1].rampPoint = 100;
        shadowGradient.gradientStops[1].color = endColor;
        shadowGradient.gradientStops[1].opacity = 66; // прозрачность точки градиента

        circle.fillColor = shadowGradientColor;
        circle.blendingMode = BlendModes.MULTIPLY;

        // Задаем цвет основого круга
        var currentColor = SelectColor();
        var selectColor = new RGBColor();
        selectColor.red = currentColor[0];
        selectColor.green = currentColor[1];
        selectColor.blue = currentColor[2];

        // Рисуем основной круг дублированием и ресайзом 
        var duplicatedCircle = circle.duplicate();
        duplicatedCircle.resize(scaleNum, scaleNum);
        duplicatedCircle.fillColor = selectColor;
        duplicatedCircle.blendingMode = BlendModes.NORMAL;
    }
}

// Создаем маску по размерам артборда
var clipMask = docCurrent.pathItems.rectangle(0, 0, artboardWidth, artboardHeight);
clipMask.stroked = false;
clipMask.filled = false;
clipMask.moveToBeginning(groupMain);
clipMask.clipping = true;
groupMain.clipped = true;

// Масштабируем и центрируем артборд
app.executeMenuCommand ('fitall');
