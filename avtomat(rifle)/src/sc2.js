let a;
let answ = [0];
let answ2 = [];
let str = ["T0 = 0"];
let str2 = [];
let out = document.querySelector('.output');
let out2 = document.querySelector('.output2');
let table = document.querySelector('table');
let key;
let s1;
let s2;
let chislo;



function finder1(s2, answ1) {
    let n;
    for (let j = 0; j < s2.length; j++) {
        if (s2[j].options[s2[j].selectedIndex].value === answ1) {
            n = j;
            break;
        }
    }
    return n
}

function finder2(s1, answ2) {
    let n;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i].options[s1[i].selectedIndex].value === answ2) {
            n = i;
        }
    }
    return n
}

function zapis_rez() {
    for (let i = 0; i < str.length; i++) {
        out.innerHTML += "<div class='out-str'> "+str[i]+"</div>" ;
        out2.innerHTML += "<div class='out-str'>"+str2[i]+"</div>" ;
    }
}

function sravn() {
    let td1;
    let td2;
    let td3;
    let td4;
    for (let i = 0; i < answ.length; i++) {
        td1 = i;
        td2 = answ[i];
        td3 = answ2[i]
        td4 = answ2[i] - answ[i];
        table.insertAdjacentHTML("beforeend", "<tbody><tr><td>"+td1+"</td><td>"+td2+"</td><td>"+td3+"</td><td>"+td4+"</td></tr></tbody>");
    }

}

window.onload = function () {
    s1 = document.querySelectorAll('.select1');
    s2 = document.querySelectorAll('.select2');
    let inp = document.querySelectorAll('.input');
    let num;
    let inp_num;
    //let s1_selected = s1.options[s1.selectedIndex].value;
    //let s2_selected = s2.options[s2.selectedIndex].value;
    //let rep = [];
    for (let i = 0; i < s1.length; i++) {
        if (answ[s2[i].options[s2[i].selectedIndex].value] === undefined) {
            answ[s2[i].options[s2[i].selectedIndex].value] = (parseFloat(answ[s1[i].options[s1[i].selectedIndex].value]) + parseFloat(inp[i].value));
            str[s2[i].options[s2[i].selectedIndex].value] = "T"  + s2[i].options[s2[i].selectedIndex].value + " = " + answ[s1[i].options[s1[i].selectedIndex].value] + " + " + inp[i].value + " = " + answ[s2[i].options[s2[i].selectedIndex].value];
        } else {
            chislo = s2[i].options[s2[i].selectedIndex].value;
            num = answ[finder1(s2, chislo)];
            inp_num = inp[finder1(s2, chislo)].value;
            //key = answ.indexOf(toString(s1[i].options[s1[i].selectedIndex].value),0);
            a = parseFloat(answ[s1[i].options[s1[i].selectedIndex].value]) + parseFloat(inp[i].value);
            if (a > answ[s2[i].options[s2[i].selectedIndex].value]) {
                answ[s2[i].options[s2[i].selectedIndex].value] = a;
            }
            str[s2[i].options[s2[i].selectedIndex].value] = "T" + s2[i].options[s2[i].selectedIndex].value + " = " + "[" + answ[s1[i].options[s1[i].selectedIndex].value] + "+" + inp[i].value + "]" + "; [" + num + "+" + inp_num + "]" + " = " + answ[s2[i].options[s2[i].selectedIndex].value];
        }
        console.log(str[i]);
    }
    answ2[answ.length - 1] = answ[answ.length - 1];
    str2[str.length - 1] = "T" + (str.length - 1) + " = " + answ2[answ.length - 1];
    for (let i = s2.length - 1; i >= 0; i--) {
        if (answ2[s1[i].options[s1[i].selectedIndex].value] === undefined) {
            answ2[s1[i].options[s1[i].selectedIndex].value] = (parseFloat(answ2[s2[i].options[s2[i].selectedIndex].value]) - parseFloat(inp[i].value));
            str2[s1[i].options[s1[i].selectedIndex].value] = "T"  + s1[i].options[s1[i].selectedIndex].value + " = " + answ2[s2[i].options[s2[i].selectedIndex].value] + " - " + inp[i].value + " = " + answ2[s1[i].options[s1[i].selectedIndex].value];
        } else {
            chislo = s1[i].options[s1[i].selectedIndex].value;
            num = answ[finder2(s1, chislo)];
            inp_num = inp[finder2(s1, chislo)].value;
            a = parseFloat(answ2[s2[i].options[s2[i].selectedIndex].value]) - parseFloat(inp[i].value);
            if (a < answ2[s1[i].options[s1[i].selectedIndex].value]) {
                answ2[s1[i].options[s1[i].selectedIndex].value] = a;
            }
            str2[s1[i].options[s1[i].selectedIndex].value] = "T" + s1[i].options[s1[i].selectedIndex].value + " = " + "[" + answ2[s2[i].options[s2[i].selectedIndex].value] + "-" + inp[i].value + "]" + "; [" + num + "-" + inp_num + "]" + " = " + answ2[s1[i].options[s1[i].selectedIndex].value];
        }
        console.log(str2[i]);
    }
    zapis_rez();
    sravn();
}


///В массив записыватьв правильном порядке для дальнейшего сравнения, а в выводе делать рекурсию

///Сделать функцию поиска по индексу, для проверки второго значения
//Разобраться и индексами в выводе
//// Решить что делать если не 2 повтора а 3
////Решить проблему с суммой