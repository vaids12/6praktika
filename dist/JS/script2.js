console.log("2 turas")


// 1 uzdavinys
console.log("1 uždavinys")

let v1 = 120;
let n1 = 800;

let k1 = Math.round(v1 * 12 / n1);
console.log(k1);

// 2 uzdavinys
console.log("2 uždavinys")

let n2 = 100;
let m2 = 20;
let v2 = 4;

k2 = Math.round((n2 - m2) / v2);
console.log(k2);

// 3 uzdavinys
console.log("3 uždavinys")

let n3 = 54000;
let p3 = 60000;

if ((n3 * 1.25) === p3) {
    console.log("Kaina nurodyta teisingai" + " " + (n3 * 1.25));
} else {
    console.log("Kaina nurodyta neteisingai, turi būti" + " " + (n3 * 1.25));
}

// 4 uzdavinys
console.log("4 uždavinys")

let n4 = 40.2;
let m4 = 0.4;

// let sum = n4+m4;
console.log("Abiejuose ūkiuose surinkta" + " " + (n4 + (n4 - m4)));


// 5 uzdavinys
console.log("5 uždavinys")

let r1 = 1;

let r2 = 2 * r1;
let r3 = 2 * r2;

S1 = 3.14 * (r1 * r1)
S2 = 3.14 * (r2 * r2)
S3 = 3.14 * (r3 * r3)

console.log("Skritulių plotai" + " " + S1 + "," + " " + S2 + " " + "ir" + " " + S3);

// // 6 uzdavinys
// console.log("6 uždavinys")

// let sk1 = 1210;
// let sk2 = 1215;
// let sk3 = 1211;
// let sk4 = 1300;
// let sk5 = 1502;
// let sk6 = 1012;

// if (sk1 !== sk2 && sk1 !== sk3 && sk1 !== sk4 && sk1 !== sk5 && sk1 !== sk6 && sk2 !== sk3 && sk2 !== sk4 && sk2 !== sk5 && sk2 !== sk6 && sk3 !== sk4 && sk3 !== sk5 && sk3 !== sk6 && sk4 !== sk5 && sk4 !== sk6 && sk5 !== sk6) {
//     if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4 && sk1 < sk5 && sk1 < sk6) {
//         if (sk2 < sk3 && sk2 < sk4 && sk2 < sk5 && sk2 < sk6) {
//             if (sk3 < sk4 && sk3 < sk5 && sk3 < sk6) {
//                 if (sk4 < sk5 && sk4 < sk6) {
//                     if (sk5 < sk6) {
//                         console.log(sk1, sk2, sk3, sk4, sk5, sk6);
//                     }
//                 }
//             }

//         }
//     }
//     if (sk2 < sk1 && sk2 < sk3 && sk2 < sk4 && sk2 < sk5 && sk2 < sk6) {
//         if (sk1 < sk3 && sk1 < sk4 && sk1 < sk5 && sk1 < sk6) {
//             if (sk3 < sk4 && sk3 < sk5 && sk3 < sk6) {
//                 if (sk4 < sk5 && sk4 < sk6) {
//                     if (sk5 < sk6){
//                          console.log(sk2, sk1, sk3, sk4, sk5, sk6);
//                     }

//                 }
//             }

//         }
//     }
//     if (sk3 < sk1 && sk3 < sk2 && sk3 < sk4 && sk3 < sk5 && sk3 < sk6) {
//         if (sk1 < sk2 && sk1 < sk4 && sk1 < sk5 && sk1 < sk6) {
//             if (sk2 < sk4 && sk2 < sk5 && sk2 < sk6) {
//                 if (sk4 < sk5 && sk4 < sk6) {
//                     if (sk5 < sk6){
//                            console.log(sk3, sk1, sk2, sk4, sk5, sk6);
//                     }

//                 }
//             }

//         }
//     }
//     if (sk4 < sk1 && sk4 < sk2 && sk4 < sk3 && sk4 < sk5 && sk4 < sk6) {
//         if (sk1 < sk2 && sk1 < sk3 && sk1 < sk5 && sk1 < sk6) {
//             if (sk2 < sk3 && sk2 < sk5 && sk2 < sk6) {
//                 if (sk3 < sk5 && sk3 < sk6) {
//                     if (sk5 < sk6){
//                            console.log(sk4, sk1, sk2, sk3, sk5, sk6);
//                     }

//                 }
//             }

//         }
//     }
//     if (sk5 < sk1 && sk5 < sk2 && sk5 < sk3 && sk5 < sk4 && sk5 < sk6) {
//         if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4 && sk1 < sk6) {
//             if (sk2 < sk3 && sk2 < sk4 && sk2 < sk6) {
//                 if (sk3 < sk4 && sk3 < sk6) {
//                     if (sk4 < sk6){
//                            console.log(sk5, sk1, sk2, sk3, sk4, sk6);
//                     }

//                 }
//             }

//         }
//     }
//     if (sk6 < sk1 && sk6 < sk2 && sk6 < sk3 && sk6 < sk4 && sk6 < sk5) {
//         if (sk1 < sk2 && sk1 < sk3 && sk1 < sk5 && sk1 < sk4) {
//             if (sk2 < sk3 && sk2 < sk5 && sk2 < sk4) {
//                 if (sk3 < sk5 && sk3 < sk4) {
//                     if (sk4 < sk5){
//                            console.log(sk6, sk1, sk2, sk3, sk4, sk5);
//                     }

//                 }
//             }

//         }
//     }



// }

// 6.1 uzdavinys
console.log("6.1 uždavinys")


let sk1 = 6954
let sk2 = 2100
let sk3 = 9900
let sk4 = 7100


if (sk1 !== sk2 && sk1 !== sk3 && sk1 !== sk4 && sk2 !== sk3 && sk2 !== sk4 && sk3 !== sk4 && sk1 >= 0 && sk1 <= 9999 && sk2 >= 0 && sk2 <= 9999 && sk3 >= 0 && sk3 <= 9999 && sk4 >= 0 && sk4 <= 9999) {
    if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4) {
        if (sk2 < sk3 && sk2 < sk4) {
            if (sk3 < sk4) {
                console.log(sk1, sk2, sk3, sk4);
            }
        }
    }
    if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4) {
        if (sk2 < sk3 && sk2 < sk4) {
            if (sk4 < sk3) {
                console.log(sk1, sk2, sk4, sk3);
            }
        }
    }
    if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4) {
        if (sk3 < sk2 && sk3 < sk4) {
            if (sk2 < sk4) {
                console.log(sk1, sk3, sk2, sk4);
            }
        }
    }
    if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4) {
        if (sk3 < sk2 && sk3 < sk4) {
            if (sk4 < sk2) {
                console.log(sk1, sk3, sk4, sk2);
            }
        }
    }
    if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4) {
        if (sk4 < sk2 && sk4 < sk3) {
            if (sk2 < sk3) {
                console.log(sk1, sk4, sk2, sk3);
            }
        }
    }
    if (sk1 < sk2 && sk1 < sk3 && sk1 < sk4) {
        if (sk4 < sk2 && sk4 < sk3) {
            if (sk3 < sk2) {
                console.log(sk1, sk4, sk3, sk2);
            }
        }
    }
    if (sk2 < sk1 && sk2 < sk3 && sk2 < sk4) {
        if (sk1 < sk3 && sk1 < sk4) {
            if (sk3 < sk4) {
                console.log(sk2, sk1, sk3, sk4);
            }
        }
    }
    if (sk2 < sk1 && sk2 < sk3 && sk2 < sk4) {
        if (sk1 < sk3 && sk1 < sk4) {
            if (sk4 < sk3) {
                console.log(sk2, sk1, sk4, sk3);
            }
        }
    }
    if (sk2 < sk1 && sk2 < sk3 && sk2 < sk4) {
        if (sk3 < sk1 && sk3 < sk4) {
            if (sk1 < sk4) {
                console.log(sk2, sk3, sk1, sk4);
            }
        }
    }
    if (sk2 < sk1 && sk2 < sk3 && sk2 < sk4) {
        if (sk3 < sk1 && sk3 < sk4) {
            if (sk4 < sk1) {
                console.log(sk2, sk3, sk4, sk1);
            }
        }
    }
    if (sk2 < sk1 && sk2 < sk3 && sk2 < sk4) {
        if (sk4 < sk3 && sk4 < sk1) {
            if (sk1 < sk3) {
                console.log(sk2, sk4, sk1, sk3);
            }
        }
    }
    if (sk2 < sk1 && sk2 < sk3 && sk2 < sk4) {
        if (sk4 < sk3 && sk4 < sk1) {
            if (sk3 < sk1) {
                console.log(sk2, sk4, sk3, sk1);
            }
        }
    }
    if (sk3 < sk1 && sk3 < sk2 && sk3 < sk4) {
        if (sk1 < sk2 && sk1 < sk4) {
            if (sk2 < sk4) {
                console.log(sk3, sk1, sk2, sk4);
            }
        }
    }
    if (sk3 < sk1 && sk3 < sk2 && sk3 < sk4) {
        if (sk1 < sk2 && sk1 < sk4) {
            if (sk4 < sk2) {
                console.log(sk3, sk1, sk4, sk2);
            }
        }
    }
    if (sk3 < sk1 && sk3 < sk2 && sk3 < sk4) {
        if (sk2 < sk1 && sk2 < sk4) {
            if (sk1 < sk4) {
                console.log(sk3, sk2, sk1, sk4);
            }
        }
    }
    if (sk3 < sk1 && sk3 < sk2 && sk3 < sk4) {
        if (sk2 < sk1 && sk2 < sk4) {
            if (sk4 < sk1) {
                console.log(sk3, sk2, sk4, sk1);
            }
        }
    }
    if (sk3 < sk1 && sk3 < sk2 && sk3 < sk4) {
        if (sk4 < sk1 && sk4 < sk2) {
            if (sk1 < sk2) {
                console.log(sk3, sk4, sk1, sk2);
            }
        }
    }
    if (sk3 < sk1 && sk3 < sk2 && sk3 < sk4) {
        if (sk4 < sk1 && sk4 < sk2) {
            if (sk2 < sk1) {
                console.log(sk3, sk4, sk2, sk1);
            }
        }
    }
    if (sk4 < sk1 && sk4 < sk2 && sk4 < sk3) {
        if (sk1 < sk2 && sk1 < sk3) {
            if (sk2 < sk3) {
                console.log(sk4, sk1, sk2, sk3);
            }
        }
    }
    if (sk4 < sk1 && sk4 < sk2 && sk4 < sk3) {
        if (sk1 < sk2 && sk1 < sk3) {
            if (sk3 < sk2) {
                console.log(sk4, sk1, sk3, sk2);
            }
        }
    }
    if (sk4 < sk1 && sk4 < sk2 && sk4 < sk3) {
        if (sk2 < sk1 && sk2 < sk3) {
            if (sk1 < sk3) {
                console.log(sk4, sk2, sk1, sk3);
            }
        }
    }
    if (sk4 < sk1 && sk4 < sk2 && sk4 < sk3) {
        if (sk2 < sk1 && sk2 < sk3) {
            if (sk3 < sk1) {
                console.log(sk4, sk2, sk3, sk1);
            }
        }
    }
    if (sk4 < sk1 && sk4 < sk2 && sk4 < sk3) {
        if (sk3 < sk1 && sk3 < sk2) {
            if (sk1 < sk2) {
                console.log(sk4, sk3, sk1, sk2);
            }
        }
    }
    if (sk4 < sk1 && sk4 < sk2 && sk4 < sk3) {
        if (sk3 < sk1 && sk3 < sk2) {
            if (sk2 < sk1) {
                console.log(sk4, sk3, sk2, sk1);
            }
        }
    }
} else {
    console.log(" Tarp įvestų skaičių yra  vienodos reikšmės arba ne intervale nuo 0 iki 9999")
}