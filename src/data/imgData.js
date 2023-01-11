import aquasFrescas from '../images/aquas_frescas.jpg'
import beanAndCheese from '../images/bean_and_cheese.jpg'
import bistekRanchero from '../images/bistek_ranchero.jpg'
import burrito from '../images/burrito.jpg'
import californiaBurrito from '../images/california_burrito.jpg'
import camarones_a_la_diabla from '../images/camarones_a_la_diabla.jpg'
import camarones_estillo_tepeque from '../images/camarones_estillo_tepeque.jpg'
import carne_asada from '../images/carne_asada.jpg'
import cervezas from '../images/cervezas.jpg'
import chile_rellenos from '../images/chile_rellenos.jpg'
import chileRellenoBurrito from '../images/chile_relleno_burrito.jpg'
import chimichanga from '../images/chimichanga.jpg'
import cocktel_de_camaron from '../images/cocktel_de_camaron.jpg'
import combo_plate from '../images/combo_plate.jpg'
import crispy_tacos_combo from '../images/crispy_tacos_combo.jpg'
import crunchyTaco from '../images/crispy_tacos.jpg'
import enchilada from '../images/enchilada.jpg'
import fajitasBurrito from '../images/fajitas_burrito.jpg'
import fajitas_de_camaron from '../images/fajitas_de_camaron.jpg'
import fajitas_plate from '../images/fajitas_plate.jpg'
import flautas from '../images/flautas.jpg'
import jarritos from '../images/jarritos.jpg'
import meatQuesadilla from '../images/meat_quesadilla.jpg'
import mexican_sodas from '../images/mexican_sodas.jpg'
import michelada_doble from '../images/michelada_doble.jpg'
import michelada from '../images/michelada.jpg'
import moleBurrito from '../images/mole_burrito.jpg'
import moleSuperBurrito from '../images/mole_super_burrito.jpg'
import mole_wet_style_burrito from '../images/mole_wet_style_burrito.jpg'
import nachos from '../images/nachos.jpg'
import nachoFries from '../images/nacho_fries.jpg'
import pescado_frito from '../images/pescado_frito.jpg'
import pozole from '../images/pozole.jpg'
import quesadilla from '../images/quesadilla.jpg'
import seafoodBurrito from '../images/seafood_burrito.jpg'
import sope from '../images/sope.jpg'
import super_nachos from '../images/super_nachos.jpg'
import superBurrito from '../images/super_burrito.jpg'
import superQuesadilla from '../images/super_quesadilla.jpg'
import superSeafoodBurrito from '../images/super_seafood_burrito.jpg'
import superTacos from '../images/super_tacos.jpg'
import superTacoVeggie from '../images/super_taco_veggie.jpg'
import tacos from '../images/tacos.jpg'
import taco_salad from '../images/taco_salad.jpg'
import tamale from '../images/tamales.jpg'
import torta from '../images/torta.jpg'
import tostada from '../images/tostada.jpg'
import seafoodTaco from '../images/seafood_taco.jpg'
import seafoodTostada from '../images/seafood_tostada.jpg'
import tostada_and_taco_combo_plate from '../images/tostada_and_taco_combo_plate.jpg'
import veggieBurrito from '../images/veggie_burrito.jpg'
import wet_burritos from '../images/wet_burritos.jpg'

export const menuItems = [
    {
        id: 100,
        img: tacos,
        name: 'Taco',
        desc: 'Soft corn tortilla topped with choice of meat, onions & cilantro, hot salsa',
        price: 3.25,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 101,
        img: superTacos,
        name: 'Super Taco',
        desc: 'Corn tortilla topped with choice of meat, whole pinto beans, lettuce, sour cream, cheese, pico de gallo, hot salsa',
        price: 3.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 102,
        img: superTacoVeggie,
        name: 'Super Taco Veggie',
        desc: 'Corn tortilla topped with rice, whole pinto beans, lettuce, cabbage, guacamole, sour cream, cheese, pico de gallo, hot salsa',
        price: 3.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: true
    },
    {
        id: 103,
        img: chile_rellenos,
        name: 'Chile Relleno',
        desc: 'One roasted poblano pepper stuffed with cheese, covered with egg batter topped with mild chili sauce and sour cream',
        price: 6.50,
        section: 'A La Carte',
        glutenFree: false,
        seafoodOrVeggie: true
    },
    {
        id: 104,
        img: tostada,
        name: 'Tostada',
        desc: 'Crispy fried corn tortilla topped with refried pinto beans, choice of meat, lettuce, sour cream, guacamole, cheese, pico de gallo, hot salsa',
        price: 6.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 105,
        img: seafoodTostada,
        name: 'Seafood Tostada',
        desc: 'Choice of grilled shrimp or fish (Tilapia) served on a crispy fried corn tortilla topped with rice, lettuce, guacamole, sour cream, pico de gallo, hot salsa',
        price: 7.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: true
    },
    {
        id: 106,
        img: seafoodTaco,
        name: 'Seafood Taco',
        desc: 'One taco with choice of grilled shrimp or fish (Tilapia) served on a soft corn tortilla topped with rice, cabbage, onions & cilantro, hot salsa',
        price: 4.50,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: true
    },
    {
        id: 107,
        img: nachos,
        name: 'Nachos',
        desc: 'Crispy corn tortilla chips topped with beans and cheese',
        price: 5.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 108,
        img: super_nachos,
        name: 'Super Nachos',
        desc: 'Crispy corn tortilla chips topped with refried pinto beans, choice of meat, cheese, sour cream, guacamole, pico de gallo, and jalapeños',
        price: 9.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 109,
        img: nachoFries,
        name: 'Nacho Fries',
        desc: 'French fries topped with cheese, choice of meat, sour cream, guacamole, pico de gallo, and jalapeños',
        price: 9.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 110,
        img: sope,
        name: 'Sope',
        desc: 'Corn tortilla grilled in chili sauce topped with refried beans, choice of meat, lettuce, sour cream, mexican cheese (queso cotija), pico de gallo, and hot salsa',
        price: 4.50,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 111,
        img: enchilada,
        name: 'Enchilada',
        desc: 'Corn tortilla stuffed with choice of meat, topped with enchilada sauce, cheese, and sour cream',
        price: 3.25,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 112,
        img: flautas,
        name: 'Flautas',
        desc: 'Aka Taquitos, set of four corn tortillas stuffed with choice of chicken or beef, deep fried topped with lettuce, sour cream, guacamole, and pico de gallo',
        price: 5.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 113,
        img: torta,
        name: 'Torta',
        desc: 'Mexican sandwich on grilled Telera roll, made with choice of meat, mayonnaise, lettuce, guacamole, pico de gallo, and jalapeños',
        price: 6.95,
        section: 'A La Carte',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 114,
        img: quesadilla,
        name: 'Flour Quesadilla',
        desc: 'Grilled flour tortilla stuffed with cheese',
        price: 4.50,
        section: 'A La Carte',
        glutenFree: false,
        seafoodOrVeggie: true
    },
    {
        id: 115,
        img: meatQuesadilla,
        name: 'Quesadilla with meat',
        desc: 'Grilled flour quesadilla stuffed with cheese and choice of meat',
        price: 6.50,
        section: 'A La Carte',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 116,
        img: superQuesadilla,
        name: 'Super Quesadilla',
        desc: 'Two flour tortillas stuffed with cheese choice of meat topped with lettuce, sour cream, guacamole, and pico de gallo',
        price: 8.95,
        section: 'A La Carte',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 117,
        img: tamale,
        name: 'Tamale',
        desc: 'Tamale made out of corn dough stuffed with pork or chicken topped with enchilada sauce, cheese, and sour cream',
        price: 3.25,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 118,
        img: crunchyTaco,
        name: 'Crispy Crunchy Taco',
        desc: 'Deef fried corn tortilla topped with beans, choice of meat, lettuce, sour cream, cheese, pico de gallo, and hot salsa',
        price: 3.95,
        section: 'A La Carte',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 200,
        img: burrito,
        name: 'Regular Burrito',
        desc: 'Choice of meat, rice, refried beans, pico de gallo, and hot salsa',
        price: 7.75,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 201,
        img: superBurrito,
        name: 'Super Burrito',
        desc: 'Choice of meat, rice, reafried beans,cabbage, cheese, sour cream, guacamole, pico de gallo, hot salsa',
        price: 8.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 202,
        img: veggieBurrito,
        name: 'Veggie Burrito',
        desc: 'Whole pinto beans, rice, lettuce, cabbage, sour cream, cheese, guacamole, pico de gallo, and hot salsa',
        price: 7.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: true
    },
    {
        id: 203,
        img: fajitasBurrito,
        name: 'Fajitas Burrito',
        desc: 'Choice of Carne Asada or Chicken grilled with bell peppers and onions, rice, refried beans, sour cream, cheese, guacamole, pico de gallo, and hot salsa',
        price: 9.50,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 204,
        img: moleBurrito,
        name: 'Mole Burrito',
        desc: 'Mole sauce, chicken, rice, beans, hot salsa',
        price: 7.50,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 205,
        img: moleSuperBurrito,
        name: 'Mole Super Burrito',
        desc: 'Mole sauce, chicken, rice, beans, cabbage, sour cream, cheese, guacamole, pico de gallo, hot salsa',
        price: 9.50,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 206,
        img: wet_burritos,
        name: 'Wet Burrito',
        desc: 'Choice of meat, rice beans, hot salsa, topped with enchilada sauce, cheese, sour cream, guacamole, and pico de gallo',
        price: 9.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 207,
        img: chimichanga,
        name: 'Chimichanga',
        desc: 'Deep Fried Burrito prepared with choice of meat, rice, beans, cheese, sour cream, guacamole, pico de gallo, and hot salsa',
        price: 9.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 208,
        img: beanAndCheese,
        name: 'Bean & Cheese',
        desc: 'Refried beans and cheese only',
        price: 4.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: true
    },
    {
        id: 209,
        img: seafoodBurrito,
        name: 'Regular Seafood Burrito',
        desc: 'Choice of grilled shrimp or fish (Tilapia), rice, beans, pico de gallo, and hot salsa',
        price: 7.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: true
    },
    {
        id: 210,
        img: superSeafoodBurrito,
        name: 'Super Seafood Burrito',
        desc: 'Choice of grilled shrimp or fish (Tilapia), rice, beans, cabbage, cheese, sour cream, guacamole, pico de gallo, and hot salsa',
        price: 9.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: true
    },
    {
        id: 211,
        img: californiaBurrito,
        name: 'California Burrito',
        desc: 'Carne Asada with grilled potatoes, rice, beans, sour cream, cheese, guacamole, pico de gallo, and hot salsa',
        price: 8.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 212,
        img: mole_wet_style_burrito,
        name: 'Mole Sause Wet Burrito',
        desc: 'Burrito with Chicken, rice, beans, hot salsa. Topped with Mole sauce, cheese, sour cream, guacamole, and pico de gallo',
        price: 9.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 213,
        img: chileRellenoBurrito,
        name: 'Chile Relleno Burrito',
        desc: 'Burrito made with a roasted pobano pepper stuffed with cheese covered with egg batter, beans, rice, sour cream, and hot salsa',
        price: 8.95,
        section: 'Burritos',
        glutenFree: false,
        seafoodOrVeggie: true
    },
    {
        id: 300,
        img: tostada_and_taco_combo_plate,
        name: 'Tostada and Taco Plate',
        price: 13.95,
        section: 'Lunch and Dinner',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 301,
        img: bistekRanchero,
        name: 'Bistek Ranchero Plate',
        price: 13.95,
        section: 'Lunch and Dinner',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 302,
        img: crispy_tacos_combo,
        name: 'Crispy Tacos Plate',
        price: 11.50,
        section: 'Lunch and Dinner',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 303,
        img: fajitas_plate,
        name: 'Fajitas Plate',
        price: 13.95,
        section: 'Lunch and Dinner',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 400,
        img: camarones_a_la_diabla,
        name: 'Camarones A La Diabla',
        price: 12.95,
        section: 'Mariscos / Seafood',
        glutenFree: true,
        seafoodOrVeggie: true
        
    },
    {
        id: 800,
        img: cervezas,
        name: 'Cervezas',
        price: 4.00,
        section: 'Beverages',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 801,
        img: aquasFrescas,
        name: 'Aquas Frescas',
        price: 3.00,
        section: 'Beverages',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 802,
        img: michelada,
        name: 'Michelada',
        price: 12.00,
        section: 'Beverages',
        glutenFree: false,
        seafoodOrVeggie: false
    },
    {
        id: 803,
        img: jarritos,
        name: 'Jarritos',
        price: 3.00,
        section: 'Beverages',
        glutenFree: true,
        seafoodOrVeggie: false
    },
    {
        id: 804,
        img: mexican_sodas,
        name: 'Soft Drinks',
        price: 2.00,
        section: 'Beverages',
        glutenFree: true,
        seafoodOrVeggie: false
    },
]

export const imgArray = [
    {
        id: 0,
        img: camarones_estillo_tepeque
    },
    {
        id: 1,
        img: carne_asada
    },
    {
        id: 2,
        img: chimichanga
    },
    {
        id: 3,
        img: cocktel_de_camaron
    },
    {
        id: 4,
        img: combo_plate
    },
    {
        id: 5,
        img: fajitas_de_camaron
    },
    {
        id: 6,
        img: flautas
    },
    {
        id: 7,
        img: michelada_doble
    },
    {
        id: 8,
        img: mole_wet_style_burrito
    },
    {
        id: 9,
        img: pescado_frito
    },
    {
        id: 10,
        img: pozole
    },
    {
        id: 11,
        img: taco_salad
    },
    {
        id: 12,
        img: wet_burritos
    }
]