const WA_NUMBER = '525533948170';
const productos = [
  {
    id: "270",
    imagenes: [
      "resources/img/nike/af1/AF1_White.jpg",
      "resources/img/nike/af1/AF1_White_b.jpg",
      "resources/img/nike/af1/AF1_White_c.jpg"
    ],
    nombre: "Nike Air Force One",
    precio: 575,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/travis/importado/Air_Jordan_1_Travis_Low_Fragment_Blue_White_Import.jpg",
      "resources/img/nike/travis/importado/Air_Jordan_1_Travis_Low_Fragment_Blue_White_Import_b.jpg",
      "resources/img/nike/travis/importado/Air_Jordan_1_Travis_Low_Fragment_Blue_White_Import_c.jpg"
    ],
    nombre: "Travis Scott x Air Jordan 1 📦Importado",
    precio: 1557,
    moneda: "$",
    nuevo: true,
    disc: false,
    imported: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/dunk/Dunk_Negro.jpg",
      "resources/img/nike/dunk/Dunk_Negro_b.jpg",
      "resources/img/nike/dunk/Dunk_Negro_c.jpg"
    ],
    nombre: "Nike Dunk Negro",
    precio: 700,
    moneda: "$",
    nuevo: false
  },
  {
    id: "https://articulo.mercadolibre.com.mx/MLM-2588323869-tenis-mujer-skechers-lite-transpirables-textil-_JM?searchVariation=187481486258",
    official: true,
    imagenes: [
      "resources/img/skechers/original/Skechers_Cherry.jpg",
      "resources/img/skechers/original/Skechers_Cherry_b.jpg",
      "resources/img/skechers/original/Skechers_Cherry_c.jpg",
      "resources/img/skechers/original/Skechers_Cherry_d.jpg",
      "resources/img/skechers/original/Skechers_Cherry_e.jpg",
    ],
    nombre: "Skechers Guinda",
    precio: 1169,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "https://www.mercadolibre.com.mx/tenis-reebok-mujer-bb-1000-mid-clip-blanco-gris-casual/up/MLMU3777193722#polycard_client=search-desktop&search_layout=grid&position=31&type=product&tracking_id=0454f298-f05e-4e6f-9ea9-3a4dca633d07&wid=MLM2728592599&sid=search",
    official: true,
    imagenes: [
      "resources/img/reebok/original/Reebok_Mid_White.jpg",
      "resources/img/reebok/original/Reebok_Mid_White_b.jpg",
      "resources/img/reebok/original/Reebok_Mid_White_c.jpg",
      "resources/img/reebok/original/Reebok_Mid_White_d.jpg",
    ],
    nombre: "Reebok Mid Blancos",
    precio: 987,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/adidas/samba/Samba_White_Black_Gray.jpg",
      "resources/img/adidas/samba/Samba_White_Black_Gray_b.jpg",
      "resources/img/adidas/samba/Samba_White_Black_Gray_c.jpg"
    ],
    nombre: "Adidas Samba Blanco Negro & Gris",
    precio: 655,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/travis/Air_Jordan_1_Travis_Low_Fragment_Blue_White.jpg",
      "resources/img/nike/travis/Air_Jordan_1_Travis_Low_Fragment_Blue_White_b.jpg",
      "resources/img/nike/travis/Air_Jordan_1_Travis_Low_Fragment_Blue_White_c.jpg"
    ],
    nombre: "Travis Scott x Air Jordan 1",
    precio: 887,
    moneda: "$",
    nuevo: false
  },
  {
    id: "90",
    imagenes: [
      "resources/img/nike/air_max/Air_Max_White_Black.jpg",
      "resources/img/nike/air_max/Air_Max_White_Black_b.jpg",
      "resources/img/nike/air_max/Air_Max_White_Black_c.jpg"
    ],
    nombre: "Nike Air Max Blancos",
    precio: 655,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "",
    official: false,
    imagenes: [
      "resources/img/nike/dunk/importado/Nike_Dunk_Blue_Imported.jpg",
      "resources/img/nike/dunk/importado/Nike_Dunk_Blue_Imported_b.jpg",
      "resources/img/nike/dunk/importado/Nike_Dunk_Blue_Imported_c.jpg",
    ],
    nombre: "Nike Dunk Azules 📦Importado",
    precio: 1159,
    moneda: "$",
    nuevo: true,
    disc: false
  },
  {
    id: "270",
    imagenes: [
      "resources/img/nike/af1/AF1_White_JustDoIt.jpg",
      "resources/img/nike/af1/AF1_White_JustDoIt_b.jpg",
      "resources/img/nike/af1/AF1_White_JustDoIt_c.jpg"
    ],
    nombre: "Nike Air Force One Just Do It",
    precio: 589,
    moneda: "$",
    nuevo: true
  },
  {
    id: "270",
    imagenes: [
      "resources/img/nike/af1/AF1_White_Black_Swoosh.jpg",
      "resources/img/nike/af1/AF1_White_Black_Swoosh_b.jpg",
      "resources/img/nike/af1/AF1_White_Black_Swoosh_c.jpg"
    ],
    nombre: "Nike AF1 Blanco Con Negro",
    precio: 575,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/dunk/Nike_Dunk_White_Blue.jpg",
      "resources/img/nike/dunk/Nike_Dunk_White_Blue_b.jpg",
      "resources/img/nike/dunk/Nike_Dunk_White_Blue_c.jpg"
    ],
    nombre: "Nike Dunk Blanco Niebla",
    precio: 685,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "",
    official: false,
    imagenes: [
      "resources/img/nike/dunk/importado/Nike_Dunk_White_Grey_Imported.jpg",
      "resources/img/nike/dunk/importado/Nike_Dunk_White_Grey_Imported_b.jpg",
      "resources/img/nike/dunk/importado/Nike_Dunk_White_Grey_Imported_c.jpg",
    ],
    nombre: "Nike Dunk Gris 📦Importado",
    precio: 1159,
    moneda: "$",
    nuevo: true,
    disc: false
  },   
  {
    id: "",
    imagenes: [
      "resources/img/nike/dunk/Nike_Dunk_White_Sky.jpg",
      "resources/img/nike/dunk/Nike_Dunk_White_Sky_b.jpg",
      "resources/img/nike/dunk/Nike_Dunk_White_Sky_c.jpg"
    ],
    nombre: "Nike Dunk Blanco Cielo",
    precio: 757,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/dunk/Nike_Dunk_White_Amber.jpg",
      "resources/img/nike/dunk/Nike_Dunk_White_Amber_b.jpg",
      "resources/img/nike/dunk/Nike_Dunk_White_Amber_c.jpg"
    ],
    nombre: "Nike Dunk Blanco Ámbar",
    precio: 685,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "https://www.mercadolibre.com.mx/tenis-para-mujer-adidas-duramo-rc2-w-correr-js4434/up/MLMU3430224253#polycard_client=search-desktop&search_layout=grid&position=2&type=product&tracking_id=9deaf553-4eb3-4395-8e06-8937726d87cc&wid=MLM5035178492&sid=search",
    official: true,
    imagenes: [
      "resources/img/adidas/duramo/original/Adidas_Duramo_Ocean.jpg",
      "resources/img/adidas/duramo/original/Adidas_Duramo_Ocean_b.jpg",
      "resources/img/adidas/duramo/original/Adidas_Duramo_Ocean_c.jpg",
      "resources/img/adidas/duramo/original/Adidas_Duramo_Ocean_d.jpg",
      "resources/img/adidas/duramo/original/Adidas_Duramo_Ocean_e.jpg",
    ],
    nombre: "Adidas Ocean",
    precio: 1359,
    moneda: "$",
    nuevo: true,
    disc: true
  },
//  {
//    id: "ttps://articulo.mercadolibre.com.mx/MLM-2502920243-tenis-de-mujer-adidas-grand-court-k-comodos-y-casuales-uso-diario-_JM?searchVariation=191805769321#polycard_client=search-desktop&searchVariation=191805769321&search_layout=grid&position=5&type=item&tracking_id=449d7bcf-0821-4802-823f-7498b37945d5",
//    official: true,
//    imagenes: [
//      "resources/img/adidas/court/original/Adidas_GCK_Pink.jpg",
//      "resources/img/adidas/court/original/Adidas_GCK_Pink_b.jpg",
//      "resources/img/adidas/court/original/Adidas_GCK_Pink_c.jpg",
//      "resources/img/adidas/court/original/Adidas_GCK_Pink_d.jpg",
//      "resources/img/adidas/court/original/Adidas_GCK_Pink_e.jpg",
//    ],
//    nombre: "Adidas Court Rosas",
//    precio: 933,
//    moneda: "$",
//    nuevo: true,
//    disc: true
//  },
  {
    id: "510",
    imagenes: [
      "resources/img/adidas/galaxy/Adidas_Galaxy_7.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_b.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_c.jpg"
    ],
    nombre: "Adidas Galaxy Gris",
    precio: 675,
    moneda: "$",
    nuevo: true,
    disc: true
  },
//  {
//    id: "fttps://articulo.mercadolibre.com.mx/MLM-4426142654-tenis-adidas-casual-streettalk-hombre-jp8276-negro-_JM?searchVariation=187483877730#polycard_client=search-desktop&searchVariation=187483877730&search_layout=grid&position=8&type=item&tracking_id=449d7bcf-0821-4802-823f-7498b37945d5",
//    official: true,
//    imagenes: [
//      "resources/img/adidas/street/original/Adidas_Street.jpg",
//      "resources/img/adidas/street/original/Adidas_Street_b.jpg",
//      "resources/img/adidas/street/original/Adidas_Street_c.jpg",
//      "resources/img/adidas/street/original/Adidas_Street_d.jpg",
//    ],
//    nombre: "Adidas Street",
//    precio: 1045,
//    moneda: "$",
//    nuevo: true,
//    disc: true
//  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Chicago_Black.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Chicago_Black_b.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Chicago_Black_c.jpg"
    ],
    nombre: "Nike Air Jordan Mid Chicago Black",
    precio: 1000,
    moneda: "$",
    nuevo: false,
    disc: false
  },
  {
    id: "510",
    imagenes: [
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Oxford.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Oxford_b.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Oxford_c.jpg"
    ],
    nombre: "Adidas Galaxy Oxford",
    precio: 675,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/adidas/superstar/Adidas_SuperStar_Black.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_Black_b.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_Black_c.jpg"
    ],
    nombre: "Adidas SuperStar Negros",
    precio: 667,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "270",
    imagenes: [
      "resources/img/nike/af1/1_1/AF1_Black_1.jpg",
      "resources/img/nike/af1/1_1/AF1_Black_1_b.jpg",
      "resources/img/nike/af1/1_1/AF1_Black_1_c.jpg",
      "resources/img/nike/af1/1_1/AF1_Black_1_d.jpg",
      "resources/img/nike/af1/1_1/AF1_Black_1_e.jpg",
    ],
    nombre: "Air Force One Negro Premium 1:1",
    precio: 943,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "018",
    imagenes: [
      "resources/img/adidas/xplr/Adidas_XPLR_Negro.jpg",
      "resources/img/adidas/xplr/Adidas_XPLR_Negro_b.jpg",
      "resources/img/adidas/xplr/Adidas_XPLR_Negro_c.jpg"
    ],
    nombre: "Adidas XPLR Negros",
    precio: 685,
    moneda: "$",
    nuevo: false
  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/af1/AF1_Blanco_1.jpg",
      "resources/img/nike/af1/AF1_Blanco_1_b.jpg",
      "resources/img/nike/af1/AF1_Blanco_1_c.jpg",
      "resources/img/nike/af1/AF1_Blanco_1_d.jpg",
      "resources/img/nike/af1/AF1_Blanco_1_e.jpg"
    ],
    nombre: "Air Force One Blanco Piel 1:1",
    precio: 1219,
    moneda: "$",
    nuevo: true
  },
  {
    id: "510",
    imagenes: [
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Pink.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Pink_b.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Pink_c.jpg"
    ],
    nombre: "Adidas Galaxy Rosas",
    precio: 675,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "841",
    imagenes: [
      "resources/img/nike/af1/AF1_Mid_Black.jpg",
      "resources/img/nike/af1/AF1_Mid_Black_b.jpg",
      "resources/img/nike/af1/AF1_Mid_Black_c.jpg"
    ],
    nombre: "Nike Mid Negro Total",
    precio: 650,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "175",
    imagenes: [
      "resources/img/vans/old_school/Vans_Old_School_Black_White.jpg",
      "resources/img/vans/old_school/Vans_Old_School_Black_White_b.jpg",
      "resources/img/vans/old_school/Vans_Old_School_Black_White_c.jpg"
    ],
    nombre: "Vans Old School Negro Blanco",
    precio: 615,
    moneda: "$",
    nuevo: false,
    disc: false
  },
  {
    id: "270",
    imagenes: [
      "resources/img/nike/af1/AF1_Black.jpg",
      "resources/img/nike/af1/AF1_Black_b.jpg",
      "resources/img/nike/af1/AF1_Black_c.jpg",
    ],
    nombre: "Air Force One Negro",
    precio: 550,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Lila.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Lila_b.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Lila_c.jpg"
    ],
    nombre: "Nike Air Jordan Mid Lila",
    precio: 1000,
    moneda: "$",
    nuevo: true,
    disc: false
  },
  {
    id: "018",
    imagenes: [
      "resources/img/adidas/xplr/Adidas_XPLR_Black_Silver.jpg",
      "resources/img/adidas/xplr/Adidas_XPLR_Black_Silver_b.jpg",
      "resources/img/adidas/xplr/Adidas_XPLR_Black_Silver_c.jpg"
    ],
    nombre: "Adidas XPLR Negro Plata",
    precio: 685,
    moneda: "$",
    nuevo: false,
    disc: false
  },
  {
    id: "",
    imagenes: [
      "resources/img/adidas/samba/Adidas_Samba_Black_White.jpg",
      "resources/img/adidas/samba/Adidas_Samba_Black_White_b.jpg",
      "resources/img/adidas/samba/Adidas_Samba_Black_White_c.jpg"
    ],
    nombre: "Adidas Samba Negro Blanco",
    precio: 655,
    moneda: "$",
    nuevo: false,
    disc: false
  },

  // página 2:
  {
    id: "510",
    imagenes: [
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Marine_White.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Marine_White_b.jpg",
      "resources/img/adidas/galaxy/Adidas_Galaxy_7_Marine_White_c.jpg"
    ],
    nombre: "Adidas Galaxy Azul Marino",
    precio: 675,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "90",
    imagenes: [
      "resources/img/nike/air_max/Air_Max_Black.jpg",
      "resources/img/nike/air_max/Air_Max_Black_b.jpg",
      "resources/img/nike/air_max/Air_Max_Black_c.jpg"
    ],
    nombre: "Nike Air Max Grises",
    precio: 655,
    moneda: "$",
    nuevo: false
  },
  {
    id: "018",
    imagenes: [
      "resources/img/adidas/xplr/Adidas_XPLR_Marino.jpg",
      "resources/img/adidas/xplr/Adidas_XPLR_Marino_b.jpg",
      "resources/img/adidas/xplr/Adidas_XPLR_Marino_c.jpg"
    ],
    nombre: "Adidas XPLR Azul Marino",
    precio: 685,
    moneda: "$",
    nuevo: false
  },
  {
    id: "Retro 1",
    imagenes: [
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Grey_Green.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Grey_Green_b.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_Mid_Grey_Green_c.jpg"
    ],
    nombre: "Air Jordan 1 Gris & Verde",
    precio: 1000,
    moneda: "$",
    nuevo: false
  },
  {
    id: "275",
    imagenes: [
      "resources/img/nike/af1/AF1_Black_White.jpg",
      "resources/img/nike/af1/AF1_Black_White_b.jpg",
      "resources/img/nike/af1/AF1_Black_White_c.jpg"
    ],
    nombre: "Air Force One Negro & Blanco",
    precio: 689,
    moneda: "$",
    nuevo: false
  },
  {
    id: "420",
    imagenes: [
      "resources/img/nike/af1/AF1_Black_White_2.jpg",
      "resources/img/nike/af1/AF1_Black_White_2_b.jpg",
      "resources/img/nike/af1/AF1_Black_White_2_c.jpg"
    ],
    nombre: "Air Force One Negro & Blanco [AIR]",
    precio: 689,
    moneda: "$",
    nuevo: false
  },
  {
    id: "",
    imagenes: [
      "resources/img/adidas/campus/Adidas_Campus_Grey.jpg",
      "resources/img/adidas/campus/Adidas_Campus_Grey_b.jpg",
      "resources/img/adidas/campus/Adidas_Campus_Grey_c.jpg"
    ],
    nombre: "Adidas Campus 00s Gris",
    precio: 697,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/adidas/campus/Adidas_Campus_Black.jpg",
      "resources/img/adidas/campus/Adidas_Campus_Black_b.jpg",
      "resources/img/adidas/campus/Adidas_Campus_Black_c.jpg"
    ],
    nombre: "Adidas Campus 00s Negro",
    precio: 697,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "https://www.mercadolibre.com.mx/tenis-all-star-chuck-taylor-high-top-unisex-color-negro-converse/up/MLMU990955145#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=5&type=product&tracking_id=c9f248a8-4c81-4053-a592-24334dcb7a4e&wid=MLM4953812168&sid=search",
    official: true,
    imagenes: [
      "resources/img/converse/mid/original/Converse_Mid_Black.jpg",
      "resources/img/converse/mid/original/Converse_Mid_Black_b.jpg",
      "resources/img/converse/mid/original/Converse_Mid_Black_c.jpg",
      "resources/img/converse/mid/original/Converse_Mid_Black_d.jpg",
      "resources/img/converse/mid/original/Converse_Mid_Black_e.jpg",
    ],
    nombre: "Converse Mid Negros",
    precio: 1499,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "",
    imagenes: [
      "resources/img/adidas/superstar/Adidas_SuperStar_Green.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_Green_b.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_Green_c.jpg"
    ],
    nombre: "Adidas SuperStar Verdes",
    precio: 667,
    moneda: "$",
    nuevo: true
  },
  {
    id: "270",
    imagenes: [
      "resources/img/nike/af1/AF1_Black_White_JustDoIt.jpg",
      "resources/img/nike/af1/AF1_Black_White_JustDoIt_b.jpg",
      "resources/img/nike/af1/AF1_Black_White_JustDoIt_c.jpg"
    ],
    nombre: "Nike Air Force One Blanco & Negro [Just Do It]",
    precio: 689,
    moneda: "$",
    nuevo: false
  },
  // página 3:
  {
    id: "025",
    imagenes: [
      "resources/img/nike/zoom/Nike_Air_Zoom.jpg",
      "resources/img/nike/zoom/Nike_Air_Zoom_b.jpg",
      "resources/img/nike/zoom/Nike_Air_Zoom_c.jpg"
    ],
    nombre: "Nike Air Zoom",
    precio: 645,
    moneda: "$",
    nuevo: true
  },
  {
    id: "175",
    imagenes: [
      "resources/img/vans/old_school/Vans_Old_School_Black.jpg",
      "resources/img/vans/old_school/Vans_Old_School_Black_b.jpg",
      "resources/img/vans/old_school/Vans_Old_School_Black_c.jpg"
    ],
    nombre: "Vans Old School Negro",
    precio: 615,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "270",
    official: false,
    imagenes: [
      "resources/img/nike/af1/AF1_White_Cian_Purple.jpg",
      "resources/img/nike/af1/AF1_White_Cian_Purple_b.jpg",
      "resources/img/nike/af1/AF1_White_Cian_Purple_c.jpg",
    ],
    nombre: "Nike AF1 Blaco Purpura",
    precio: 550,
    moneda: "$",
    nuevo: false,
    disc: true
  },
  {
    id: "ML",
    official: true,
    imagenes: [
      "resources/img/nike/af1/original/Nike_Air_Force_One_White.jpg",
      "resources/img/nike/af1/original/Nike_Air_Force_One_White_b.jpg",
      "resources/img/nike/af1/original/Nike_Air_Force_One_White_c.jpg",
      "resources/img/nike/af1/original/Nike_Air_Force_One_White_d.jpg",
      "resources/img/nike/af1/original/Nike_Air_Force_One_White_e.jpg",
      "resources/img/nike/af1/original/Nike_Air_Force_One_White_f.jpg"
    ],
    nombre: "Nike Air Force One Blanco",
    precio: 2700,
    moneda: "$",
    nuevo: true,
    disc: false
  },
  {
    id: "https://www.mercadolibre.com.mx/tenis-skechers-mujer-2110007bkpk-textil-negro/up/MLMU3809285919#polycard_client=search-desktop&search_layout=grid&position=1&type=product&tracking_id=94988087-669e-4673-ac6c-4048e174d0e6&wid=MLM4841778802&sid=search",
    official: true,
    imagenes: [
      "resources/img/skechers/original/Skechers_Black_Pink.jpg",
      "resources/img/skechers/original/Skechers_Black_Pink_b.jpg",
      "resources/img/skechers/original/Skechers_Black_Pink_c.jpg",
      "resources/img/skechers/original/Skechers_Black_Pink_d.jpg",
      "resources/img/skechers/original/Skechers_Black_Pink_e.jpg",
    ],
    nombre: "Skechers Negros Rosa P/Dama",
    precio: 1450,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "275",
    official: false,
    imagenes: [
      "resources/img/nike/af1/AF1_White_Lila.jpg",
      "resources/img/nike/af1/AF1_White_Lila_b.jpg",
      "resources/img/nike/af1/AF1_White_Lila_c.jpg",
    ],
    nombre: "Nike AF1 Blaco Lila",
    precio: 550,
    moneda: "$",
    nuevo: false,
    disc: false
  },
  {
    id: "270",
    official: false,
    imagenes: [
      "resources/img/nike/af1/AF1_Coral.jpg",
      "resources/img/nike/af1/AF1_Coral_b.jpg",
      "resources/img/nike/af1/AF1_Coral_c.jpg",
    ],
    nombre: "Nike AF1 Coral Lila",
    precio: 550,
    moneda: "$",
    nuevo: false,
    disc: false
  },
  {
    id: "",
    official: false,
    imagenes: [
      "resources/img/nike/air_jordan/Nike_Air_Jordan_4_White_Grey.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_4_White_Grey_b.jpg",
      "resources/img/nike/air_jordan/Nike_Air_Jordan_4_White_Grey_c.jpg",
    ],
    nombre: "Nike Air Jordan 4 Blanco Gris",
    precio: 757,
    moneda: "$",
    nuevo: false,
    disc: false
  },
  {
    id: "https://articulo.mercadolibre.com.mx/MLM-1402410801-tenis-para-hombre-nike-court-vision-low-next-nature-_JM?searchVariation=174386428951#polycard_client=search-desktop&searchVariation=174386428951&search_layout=grid&position=1&type=item&tracking_id=2bbe91b2-ac0d-445d-bcba-59d0cee0f0bf",
    official: true,
    imagenes: [
      "resources/img/nike/court/original/Nike_Court_Vision_Low.jpg",
      "resources/img/nike/court/original/Nike_Court_Vision_Low_b.jpg",
      "resources/img/nike/court/original/Nike_Court_Vision_Low_c.jpg",
      "resources/img/nike/court/original/Nike_Court_Vision_Low_d.jpg",
      "resources/img/nike/court/original/Nike_Court_Vision_Low_e.jpg",
    ],
    nombre: "Nike Court Vision Low Blanco",
    precio: 1900,
    moneda: "$",
    nuevo: true,
    disc: false
  },
//  {
//    id: "https://articulo.mercadolibre.com.mx/MLM-2633348521-nike-revolution-8-tenis-grises-de-correr-para-hombre-_JM?searchVariation=194438328859#polycard_client=search-desktop&searchVariation=194438328859&search_layout=grid&position=44&type=item&tracking_id=24b588ce-0b6b-4e21-b0a9-9a4cb2b2a863",
//    official: true,
//    imagenes: [
//      "resources/img/nike/revolution/original/Nike_Revolution.jpg",
//      "resources/img/nike/revolution/original/Nike_Revolution_b.jpg",
//      "resources/img/nike/revolution/original/Nike_Revolution_c.jpg",
//      "resources/img/nike/revolution/original/Nike_Revolution_d.jpg",
//      "resources/img/nike/revolution/original/Nike_Revolution_e.jpg",
//      "resources/img/nike/court/original/Nike_Court_Vision_Low_e.jpg",
//    ],
//    nombre: "Nike Revolution",
//    precio: 1389,
//    moneda: "$",
//    nuevo: true,
//    disc: true
//  },

//  {
//    id: "https://articulo.mercadolibre.com.mx/MLM-4542222992-nike-court-vision-low-fl-tenis-beige-para-mujer-_JM?searchVariation=188214960168#polycard_client=search-desktop&searchVariation=188214960168&search_layout=grid&position=9&type=item&tracking_id=6f06de3c-8240-4ea1-91d3-bb86606e8ecd",
//    official: true,
//    imagenes: [
//      "resources/img/nike/court/original/Nike_Court_Vision_Low_Beige.jpg",
//      "resources/img/nike/court/original/Nike_Court_Vision_Low_Beige_b.jpg",
//      "resources/img/nike/court/original/Nike_Court_Vision_Low_Beige_c.jpg",
//      "resources/img/nike/court/original/Nike_Court_Vision_Low_Beige_d.jpg",
//      "resources/img/nike/court/original/Nike_Court_Vision_Low_e.jpg",
//    ],
//    nombre: "Nike Court Vision Beige",
//    precio: 1435,
//    moneda: "$",
//    nuevo: true,
//    disc: true
//  }, 
  {
    id: "https://www.mercadolibre.com.mx/tenis-skechers-mujer-2110005blk-textil-negro/up/MLMU3819036748#polycard_client=recommendations_vip-pads-up&reco_backend=recomm_platform_base_pads_ron_marketplace&reco_model=rk_ent_v2_retsys_ads&reco_client=vip-pads-up&reco_item_pos=2&reco_backend_type=low_level&reco_id=ee69c953-c0c8-4151-b307-bcf9dfe8693d&wid=MLM4841445396&sid=recos&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=3&ad_click_id=YjIyMmYyOGMtZjZjMS00N2ZkLWI2ODUtOGJhYzEyOGI4ZWIx",
    official: true,
    imagenes: [
      "resources/img/skechers/original/Skechers_Black_Blue.jpg",
      "resources/img/skechers/original/Skechers_Black_Blue_b.jpg",
      "resources/img/skechers/original/Skechers_Black_Blue_c.jpg",
      "resources/img/skechers/original/Skechers_Black_Blue_d.jpg",
    ],
    nombre: "Skechers Negro Azul",
    precio: 1100,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "https://www.mercadolibre.com.mx/tenis-unisex-vans-ua-authentic-negroblanco-para-adulto/up/MLMU3215971389?pdp_filters=item_id%3AMLM4969610248#polycard_client=bookmarks&wid=MLM4969610248&sid=bookmarks",
    official: true,
    imagenes: [
      "resources/img/vans/original/Vans_UA_Authentic.jpg",
      "resources/img/vans/original/Vans_UA_Authentic_b.jpg",
      "resources/img/vans/original/Vans_UA_Authentic_c.jpg",
    ],
    nombre: "Vans UA Authentic",
    precio: 999,
    moneda: "$",
    nuevo: true,
    disc: false
  },
  {
    id: "https://articulo.mercadolibre.com.mx/MLM-2687042371-nike-court-vision-low-tenis-grises-para-hombre-_JM?searchVariation=189339325408#polycard_client=search-desktop&searchVariation=189339325408&search_layout=grid&position=48&type=item&tracking_id=e5d741dc-a65d-49e7-8556-e83df3aa779b",
    official: true,
    imagenes: [
      "resources/img/nike/court/original/Nike_Court_Vision_Low_Grey.jpg",
      "resources/img/nike/court/original/Nike_Court_Vision_Low_Grey_b.jpg",
      "resources/img/nike/court/original/Nike_Court_Vision_Low_Grey_c.jpg",
    ],
    nombre: "Nike Court Vision Low Grises",
    precio: 1657,
    moneda: "$",
    nuevo: true,
    disc: false
  },
  {
    id: "https://articulo.mercadolibre.com.mx/MLM-3479562252-botas-de-martin-casuales-ligeras-transpirables-para-hombres-_JM?attributes=COLOR_SECONDARY_COLOR%3ATmVncm8%3D&picker=true&searchVariation=182337908778&quantity=1",
    official: false,
    imagenes: [
      "resources/img/boots/Boot_Casual.jpg",
      "resources/img/boots/Boot_Casual_b.jpg",
      "resources/img/boots/Boot_Casual_c.jpg",
    ],
    nombre: "Bota Casual Marrón",
    precio: 438,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    id: "https://articulo.mercadolibre.com.mx/MLM-2752596082-tenis-flexi-para-mujer-estilo-125601-negro-_JM?searchVariation=179446840702#polycard_client=wishlist",
    official: true,
    imagenes: [
      "resources/img/flexi/piso/original/Flexi_Low_Black.jpg",
      "resources/img/flexi/piso/original/Flexi_Low_Black_b.jpg",
      "resources/img/flexi/piso/original/Flexi_Low_Black_c.jpg",
      "resources/img/flexi/piso/original/Flexi_Low_Black_d.jpg",
      "resources/img/flexi/piso/original/Flexi_Low_Black_e.jpg",
    ],
    nombre: "Flexi Low P/Dama",
    precio: 999,
    moneda: "$",
    nuevo: true,
    disc: true
  },

];

const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect fill="#242424" width="400" height="400"/><text x="200" y="215" font-family="sans-serif" font-size="64" fill="#444" text-anchor="middle">📦</text></svg>'
);

let favoritos = new Set(JSON.parse(localStorage.getItem('favs') || '[]'));
function saveFavs(){ localStorage.setItem('favs', JSON.stringify([...favoritos])); }
function fmt(p, m='$'){ return m + p.toLocaleString('es-MX', {minimumFractionDigits:2, maximumFractionDigits:2}); }

const cardState = {};

function cardSlide(idx, dir, e){
  if(e) e.stopPropagation();
  const imgs = productos[idx].imagenes || [];
  cardState[idx] = ((cardState[idx]||0) + dir + imgs.length) % imgs.length;
  const track = document.getElementById('track-'+idx);
  if(track) track.style.transform = 'translateX(-'+(cardState[idx]*100)+'%)';
  document.querySelectorAll('#dots-'+idx+' .dot').forEach((d,i)=>d.classList.toggle('active',i===cardState[idx]));
  const counter = document.getElementById('counter-'+idx);
  if(counter) counter.textContent = (cardState[idx]+1)+'/'+imgs.length;
}

function goCardDot(idx, slide, e){
  if(e) e.stopPropagation();
  const imgs = productos[idx].imagenes || [];
  cardState[idx] = slide;
  const track = document.getElementById('track-'+idx);
  if(track) track.style.transform = 'translateX(-'+(slide*100)+'%)';
  document.querySelectorAll('#dots-'+idx+' .dot').forEach((d,i)=>d.classList.toggle('active',i===slide));
  const counter = document.getElementById('counter-'+idx);
  if(counter) counter.textContent = (slide+1)+'/'+imgs.length;
}

function renderCards(lista){
  const cat = document.getElementById('catalog');
  document.getElementById('countNum').textContent = lista.length;
  if(!lista.length){
  const esFavFiltro = document.getElementById('sortSelect').value === 'favs';
  cat.innerHTML=`<div class="empty">
    <span class="material-icons-round">${esFavFiltro ? 'favorite_border' : 'search_off'}</span>
    <p>${esFavFiltro ? 'Aún no tienes favoritos.' : 'No se encontraron artículos.'}</p>
  </div>`;
  return;
  lista.forEach(p => {
  const idx = productos.indexOf(p);
  const imgs = (p.imagenes && p.imagenes.length) ? p.imagenes : [PLACEHOLDER];
  if(imgs.length <= 1) return;
  const carousel = document.getElementById('track-'+idx)?.parentElement;
  if(carousel) addSwipe(carousel, ()=>cardSlide(idx,1,null), ()=>cardSlide(idx,-1,null));
  });
  }
  cat.innerHTML = lista.map((p,i)=>{
    const idx = productos.indexOf(p);
    const imgs = (p.imagenes && p.imagenes.length) ? p.imagenes : [PLACEHOLDER];
    const single = imgs.length===1;
    if(cardState[idx]==null) cardState[idx]=0;
    const isFav = favoritos.has(idx);

    const trackImgs = imgs.map(src=>`<img src="${src}" alt="${p.nombre}" onerror="this.src='${PLACEHOLDER}'">`).join('');
    const dots = imgs.map((_,di)=>`<button class="dot${di===0?' active':''}" onclick="goCardDot(${idx},${di},event)"></button>`).join('');

    return `
    <div class="card${p.official?' official':''}" style="animation-delay:${i*60}ms" onclick="openModal(${idx})">
      <div class="carousel${single?' single':''}">
        <div class="carousel-track" id="track-${idx}">${trackImgs}</div>
        <button class="carousel-btn prev" onclick="cardSlide(${idx},-1,event)"><span class="material-icons-round">chevron_left</span></button>
        <button class="carousel-btn next" onclick="cardSlide(${idx},1,event)"><span class="material-icons-round">chevron_right</span></button>
        <div class="carousel-dots" id="dots-${idx}">${dots}</div>
        <span class="photo-count" id="counter-${idx}">1/${imgs.length}</span>
        <div class="img-overlay"></div>
        
      </div>
      <<div class="card-body">
        <div class="card-name">${p.nombre}</div>
        <div class="card-badges">
          ${p.nuevo?'<span class="badge-new">Nuevo</span>':''}
          ${p.disc ?'<span class="badge-disc">%OFF</span>':''}
          ${p.official?'<span class="badge-official">Original</span>':''}
        </div>
        <div class="card-footer">
          <div class="price">${fmt(p.precio,p.moneda||'$')}</div>
          <button class="fav-btn${isFav?' active':''}" onclick="toggleFav(event,${idx})" title="Favorito">
            <span class="material-icons-round">${isFav?'favorite':'favorite_border'}</span>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function getFiltered(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const sort = document.getElementById('sortSelect').value;
  let lista = productos.filter(p=>p.nombre.toLowerCase().includes(q));
  if(sort==='asc')  lista=[...lista].sort((a,b)=>a.precio-b.precio);
  if(sort==='desc') lista=[...lista].sort((a,b)=>b.precio-a.precio);
  if(sort==='name') lista=[...lista].sort((a,b)=>a.nombre.localeCompare(b.nombre));
  if(sort==='favs') lista=lista.filter((_,i)=>favoritos.has(productos.indexOf(lista[i])));
  return lista;
}
function refresh(){
  renderCards(getFiltered());
  updateWaBtn();
}

function updateWaBtn(){
  const btn = document.getElementById('waBtn');
  const esFavFiltro = document.getElementById('sortSelect').value === 'favs';
  const tieneFavs = favoritos.size > 0;

  if(esFavFiltro && tieneFavs){
    // Armar mensaje con la lista de favoritos
    const lista = [...favoritos].map(i => {
      const p = productos[i];
      return `• ${p.nombre} — ${p.moneda||'$'}${p.precio.toLocaleString('es-MX')}`;
    }).join('\n');
    const mensaje = `Hola, me interesan estos artículos:\n\n${lista}\n\n¿Me pueden dar más información?`;
    btn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
} 
document.getElementById('searchInput').addEventListener('input', refresh);
document.getElementById('sortSelect').addEventListener('change', refresh);

function toggleFav(e,idx){
  e.stopPropagation();
  favoritos.has(idx)?favoritos.delete(idx):favoritos.add(idx);
  saveFavs();
  // Solo actualiza el botón tocado, sin redibujar todo
  const btn = e.currentTarget;
  const isFav = favoritos.has(idx);
  btn.classList.toggle('active', isFav);
  btn.querySelector('.material-icons-round').textContent = isFav ? 'favorite' : 'favorite_border';

  // Si el filtro activo es "favoritos", sí hay que refrescar
  if(document.getElementById('sortSelect').value === 'favs') refresh();
}
function toggleFavModal(){
  favoritos.has(modalIdx) ? favoritos.delete(modalIdx) : favoritos.add(modalIdx);
  saveFavs();

  const isFav = favoritos.has(modalIdx);

  // Actualiza botón del modal
  const btn = document.getElementById('modalFavBtn');
  btn.classList.toggle('active', isFav);
  btn.querySelector('.material-icons-round').textContent = isFav ? 'favorite' : 'favorite_border';

  // Actualiza botón de la tarjeta sin redibujar
  const card = document.querySelector(`[onclick="openModal(${modalIdx})"]`);
  if(card){
    const favBtn = card.querySelector('.fav-btn');
    if(favBtn){
      favBtn.classList.toggle('active', isFav);
      favBtn.querySelector('.material-icons-round').textContent = isFav ? 'favorite' : 'favorite_border';
    }
  }

  if(document.getElementById('sortSelect').value === 'favs') refresh();
}

/* ── Modal ── */
let modalIdx=0, modalCurrent=0;

function openModal(idx){
  modalIdx=idx; modalCurrent=0;
  const p=productos[idx];
  const imgs=(p.imagenes&&p.imagenes.length)?p.imagenes:[PLACEHOLDER];
  document.getElementById('modalName').textContent=p.nombre;
  document.getElementById('modalPrice').textContent=fmt(p.precio,p.moneda||'$');

  const track=document.getElementById('modalTrack');
  track.style.transition='none';
  track.style.transform='translateX(0)';
  track.innerHTML = imgs.map(src =>
    `<img src="${src}" alt="${p.nombre}" onerror="this.src='${PLACEHOLDER}'">`
  ).join('');
  // Asignar onclick directamente al elemento DOM (evita problemas con el swipe)
  Array.from(track.querySelectorAll('img')).forEach((img, i) => {
    img.addEventListener('click', function(e){
      e.stopPropagation();
      openLightbox(imgs, i);
    });
  });

  const dotsEl=document.getElementById('modalDots');
  dotsEl.innerHTML=imgs.map((_,i)=>`<button class="modal-dot${i===0?' active':''}" onclick="goModalDot(${i})"></button>`).join('');

  const single=imgs.length===1;
  document.getElementById('modalPrev').classList.toggle('hidden',single);
  document.getElementById('modalNext').classList.toggle('hidden',single);
  dotsEl.style.display=single?'none':'flex';

  document.getElementById('modalOverlay').classList.add('open');

  const imgs2 = (p.imagenes && p.imagenes.length) ? p.imagenes : [PLACEHOLDER];
  const modalCarousel = document.getElementById('modalTrack').parentElement;
  if(imgs2.length > 1 && !modalCarousel._swipeAdded){
    addSwipe(modalCarousel, ()=>modalSlide(1), ()=>modalSlide(-1));
    modalCarousel._swipeAdded = true;
  }
  const favBtn = document.getElementById('modalFavBtn');
  const isFav = favoritos.has(idx);
  favBtn.classList.toggle('active', isFav);
  favBtn.querySelector('.material-icons-round').textContent = isFav ? 'favorite' : 'favorite_border';
  }

function modalSlide(dir){
  const imgs=(productos[modalIdx].imagenes||[PLACEHOLDER]);
  modalCurrent=(modalCurrent+dir+imgs.length)%imgs.length;
  const track=document.getElementById('modalTrack');
  track.style.transition='transform .42s cubic-bezier(.4,0,.2,1)';
  track.style.transform='translateX(-'+(modalCurrent*100)+'%)';
  document.querySelectorAll('.modal-dot').forEach((d,i)=>d.classList.toggle('active',i===modalCurrent));
}

function goModalDot(i){
  modalCurrent=i;
  const track=document.getElementById('modalTrack');
  track.style.transition='transform .42s cubic-bezier(.4,0,.2,1)';
  track.style.transform='translateX(-'+(i*100)+'%)';
  document.querySelectorAll('.modal-dot').forEach((d,j)=>d.classList.toggle('active',j===i));
}

function closeModal(){
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('closing');
  setTimeout(() => {
    overlay.classList.remove('open', 'closing');
  }, 150);
}

document.getElementById('modalOverlay').addEventListener('click',function(e){ if(e.target===this) closeModal(); });
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ closeModal(); closeLightbox(); }
  if(e.key==='ArrowLeft')  { modalSlide(-1); lbSlide(-1); }
  if(e.key==='ArrowRight') { modalSlide(1);  lbSlide(1);  }
});
 
function addSwipe(el, onLeft, onRight){
  let startX = 0;
  el.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX; }, {passive:true});
  el.addEventListener('touchend', e=>{
    const diff = startX - e.changedTouches[0].clientX;
    if(Math.abs(diff) < 40) return; // ignora toques cortos
    diff > 0 ? onLeft() : onRight();
  }, {passive:true});
}
let lbImgs = [], lbCurrent = 0;
 
function openLightbox(imgs, startIdx){
  lbImgs = imgs; lbCurrent = startIdx;
  document.getElementById('lightboxImg').src = imgs[startIdx];
  const single = imgs.length <= 1;
  document.getElementById('lbPrev').classList.toggle('hidden', single);
  document.getElementById('lbNext').classList.toggle('hidden', single);
  document.getElementById('lightbox').classList.add('open');
}
 
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
}
 
function lbSlide(dir){
  lbCurrent = (lbCurrent + dir + lbImgs.length) % lbImgs.length;
  document.getElementById('lightboxImg').src = lbImgs[lbCurrent];
}
refresh();