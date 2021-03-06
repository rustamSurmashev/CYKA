let butStartEl = document.getElementById("start");
butStartEl.addEventListener("click", () => {
    check(0);
});

let answer1El = document.getElementById("answer1");
answer1El.addEventListener("click", () => {
    check(1);
});

let answer2El = document.getElementById("answer2");
answer2El.addEventListener("click", () => {
    check(2);
});

let answer3El = document.getElementById("answer3");
answer3El.addEventListener("click", () => {
    check(3);
});

let answer4El = document.getElementById("answer4");
answer4El.addEventListener("click", () => {
    check(4);
});

answer1El.style.display = "none";
answer2El.style.display = "none";
answer3El.style.display = "none";
answer4El.style.display = "none";

let questionsTheme1 = [
    ["Нефть – это смесь, состоящая", "Только из жидких углеводородов", "Только из газообразных углеводородов", "Только из твердых углеводородов", "Из жидких и растворенных в них газообразных и твердых углеводородов", 4],
    ["Укажите свойство, которое не относится к нефти", "Легче воды", "Растворима в воде", "Густая темная жидкость", "Не имеет постоянной температуры кипения", 2],
    ["Вязкость нефти при подъеме от забоя к устью скважины", "Уменьшается", "Увеличивается", "Не изменяется", "Зависит от химического состава нефти", 2],
    ["Укажите несуществующую теорию происхождения нефти", "Биогенная", "Неорганическая", "Космогенная", "Криогенная", 4],
    ["Нефть под землей находится в виде:", "Жидкости, пропитывающей горные породы, как вода губку", "В виде подземных озёр и полостей различного масштаба", "Пребывает в различных фазовых состояниях, вплоть до кристаллического", "В газообразном состоянии, при этом по мере поднятия по стволу скважины переходит в жидкую фазу", 1],
];
let questionsTheme2 = [
    ["В каких типах горных пород выявлено подавляющее большинство месторождений нефти?", "Магматических", "Метаморфических", "Осадочных", "Во всех примерно одинаково", 3],
    ["Часть природного резервуара, имеющего непроницаемые препятствия для дальнейшей миграции нефти и газа, в котором соответственно могут накапливаться нефть и газ называется:", "Складка", "Ловушка", "Коллектор", "Нефтесбор", 2],
    ["Давление, при котором газ начинает выделяться из жидкости, называют:", "Давлением насыщения", "Пластовым давлением", "Забойным давлением", "Критическим давлением", 1],
    ["Укажите перечень, в котором правильно расположены геологические элементы от крупного к более мелкому:", "Залежь - месторождение – ловушка", "Коллектор – месторождение - залежь", "Бассейн – месторождение - залежь", "Залежь – ловушка - месторождение", 3],
    ["Назовите свойство, не характерное для песчаной породы-коллектора:", "Пористость", "Проницаемость", "Вязкость", "Известковистость", 3],
];
let questionsTheme3 = [
    ["Самый популярный способ добычи нефти в России это:", "Газлифтный метод", "Фонтанный метод", "Скважинными насосами", "Пьезоэлектрический метод", 3],
    ["Методы увеличения нефтеотдачи (МУН) относятся к ________способам добычи", "Первичным", "Вторичным", "Третичным", "Четвертичным", 3],
    ["Обычно эксплуатационные скважины располагают на нефтяном месторождении в соответствии с:", "Планом горных работ", "Проектом на строительство скважин", "Сеткой скважин", "В произвольном порядке", 3],
    ["Сейсморазведка, электроразведка, гравиразведка и магниторазведка к каким методам поисково-разведочных работ относятся?", "Геофизическим", "Геологическим", "Гидрогеохимическим", "Ни к одному из вышеперечисленных", 1],
    ["Расшифруйте общепринятую аббревиатуру СППД:", "Система поддержания пластового давления", "Система поддержания повышенной добычи", "Скважинно-параметрический пластовый двигатель", "Скважина поисковая параметрическая добывающая", 1],
];
let questionsTheme4 = [
    ["Образец горной породы в виде цилиндрического столбика, извлеченный из скважины посредством специально предназначенного для этого вида бурения с целью изучения характеристики проходимых бурением горных пород, называется:", "Целик", "Керн", "Шлам", "Колонка", 2],
    ["Верхняя часть эксплуатационной добывающей скважины называется:", "Устье", "Забой", "Зумпф", "Башмак", 1],
    ["Для защиты эксплуатационной колонны в скважину спускают колонну стальных труб меньшего диаметра, которая называется:", "Техническая колонна", "Колонна штанг", "Колонна насосно-компрессорных труб", "Обсадная колонна", 3],
    ["Типовая конструкция нефтяной скважины состоит из следующих обязательных элементов: направление, _____________ , эксплуатационная колонна", "Кондуктор", "Колонна штанг", "Зумпф", "Вспомогательная колонна", 1],
    ["Производство работ по бурению скважин осуществляется в соответствии с:", "Паспортом скважины", "Журналом буровых работ", "ГОСТ 21.001-2013", "Геолого-техническим нарядом", 4],
];
let questionsTheme5 = [
    ["Какая из нижеперечисленных стран не является участником ОПЭК?", "Габон", "Катар", "Конго", "Кувейт", 2],
    ["Расшифруйте аббревиатуру API:", "Application programming interface", "American Petroleum Institute", "Amsterdam progressive insurance", "Ale Pale Indian", 2],
    ["Укажите самую крупную нефтяную компанию России (по объемам добычи):", "Роснефть", "Сургутнефтегаз", "Лукойл", "Газпром нефть", 1],
    ["Какая из нижеперечисленных стран является лидером по запасам нефти?", "ОАЭ", "Венесуэла", "Россия", "Саудовская Аравия", 2],
    ["Какая из этих стран бывшего СССР обладает наибольшими запасами нефти?", "Узбекистан", "Туркменистан", "Азербайджан", "Казахстан", 4],
];
function mix(questionsTheme) {
    let index;
    let valueIndex;
    for (let i=0; i<=questionsTheme.length-1; i++) {
        index = Math.floor(Math.random()*i);
        valueIndex = questionsTheme[index];
        questionsTheme[index] = questionsTheme[i];
        questionsTheme[i] = valueIndex;
    }
    return questionsTheme;
}

let questionsTheme1Mixed = mix(questionsTheme1);
let questionsTheme2Mixed = mix(questionsTheme2);
let questionsTheme3Mixed = mix(questionsTheme3);
let questionsTheme4Mixed = mix(questionsTheme4);
let questionsTheme5Mixed = mix(questionsTheme5);

let questionsTheme1Cutted = questionsTheme1Mixed.slice(0,3);
let questionsTheme2Cutted = questionsTheme2Mixed.slice(0,3);
let questionsTheme3Cutted = questionsTheme3Mixed.slice(0,3);
let questionsTheme4Cutted = questionsTheme4Mixed.slice(0,3);
let questionsTheme5Cutted = questionsTheme5Mixed.slice(0,3);

let questions = questionsTheme1Cutted.concat(questionsTheme2Cutted, questionsTheme3Cutted, questionsTheme4Cutted, questionsTheme5Cutted);

let plus = 0;
let time = 0;
let cur_answer = 0;
let count_answer = questions.length;

function sec() {
    time++;
    document.getElementById('time').innerHTML = 'Затрачено времени: ' + time + ' сек';
}

function check(num) {

    if (num == 0) {

        document.getElementById('answer1').style.display = 'block';
        document.getElementById('answer2').style.display = 'block';
        document.getElementById('answer3').style.display = 'block';
        document.getElementById('answer4').style.display = 'block';
        document.getElementById('question').style.display = 'block';

        document.getElementById('answer1').innerHTML = questions[cur_answer][1];
        document.getElementById('answer2').innerHTML = questions[cur_answer][2];
        document.getElementById('answer3').innerHTML = questions[cur_answer][3];
        document.getElementById('answer4').innerHTML = questions[cur_answer][4];
        document.getElementById('question').innerHTML = questions[cur_answer][0];

        document.getElementById('start').style.display = 'none';
        document.getElementById('end').style.display = 'inline';

        let intervalID = setInterval(sec, 1000);

    } else {

        if (num == questions[cur_answer][5]) {
            plus++;
            document.getElementById('result').style.color = "#16a085";
            document.getElementById('result').innerHTML = 'Верно!';
        } else {
            document.getElementById('result').style.color = "red";
            document.getElementById('result').innerHTML = "Неверно! Правильный ответ: " + questions[cur_answer][questions[cur_answer][5]];
        }

        cur_answer++;
        if (cur_answer < count_answer) {

            document.getElementById('answer1').innerHTML = questions[cur_answer][1];
            document.getElementById('answer2').innerHTML = questions[cur_answer][2];
            document.getElementById('answer3').innerHTML = questions[cur_answer][3];
            document.getElementById('answer4').innerHTML = questions[cur_answer][4];
            document.getElementById('question').innerHTML = questions[cur_answer][0];

        } else {

            document.getElementById('time').id = 'stop';
            document.getElementById('answer1').style.display = 'none';
            document.getElementById('answer2').style.display = 'none';
            document.getElementById('answer3').style.display = 'none';
            document.getElementById('answer4').style.display = 'none';
            document.getElementById('question').style.display = 'none';
            document.getElementById('end').style.display = 'inline';

            let percent = Math.round(plus / count_answer * 100);
            let res = 'Плохо!';
            if (percent > 70) res = 'Хорошо!';
            if (percent == 100) res = 'Отлично!';

            document.getElementById('result').innerHTML = 'Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
        }
    }
}