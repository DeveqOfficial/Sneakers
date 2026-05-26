const WA_NUMBER = '525533948170';
const productos = [
  {
    airfireUrl: "https://airfire.com.mx/products/tenis-270-blanco-total",
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
    disc: true,
//    descripcion: "Clásico de clásicos. Parte superior de cuero sintético, suela de goma con amortiguación Air. Disponible en talla completa y media talla.",
//    tallas: [
//      { num: "24" },
//      { num: "24.5" },
//      { num: "25" },
//      { num: "25.5" },
//      { num: "26" },
//      { num: "26.5" },
//      { num: "27" },
//      { num: "27.5", agotado: true },
//      { num: "28" },
//      { num: "28.5" },
//      { num: "29" },
//    ]
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-travis-low-fragment-importado",
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
    id: "https://www.mercadolibre.com.mx/tenis-skechers-bobs-mujer-10008mxlav-textil-morado/up/MLMU3920258868#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=32&type=product&tracking_id=aff8f6a1-1f90-4ce9-84f0-0cca4006e243&wid=MLM5222932608&sid=search",
    official: true,
    imagenes: [
      "resources/img/skechers/original/bobs/Skechers_Purple.jpg",
      "resources/img/skechers/original/bobs/Skechers_Purple_b.jpg",
      "resources/img/skechers/original/bobs/Skechers_Purple_c.jpg",
      "resources/img/skechers/original/bobs/Skechers_Purple_d.jpg",
    ],
    nombre: "Skechers Morados",
    precio: 1150,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "22.5" },
      { num: "23.5" },
      { num: "25", agotado:true },
    ]
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-dunk-blanco-negro-negro",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-samba-blanco-negro-gris",
    id: "Smb",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-travis-low-fragment-x",
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
    id: "https://articulo.mercadolibre.com.mx/MLM-2399673323-tenis-mujer-skechers-entrenamiento-correr-transpirable-_JM?searchVariation=184600550312#is_advertising=true&searchVariation=184600550312&backend_model=search-backend&be_origin=backend&position=2&search_layout=grid&type=pad&tracking_id=aff8f6a1-1f90-4ce9-84f0-0cca4006e243&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=MWE2MjJiN2QtOWE0OS00ODI1LWExZWUtZTZjNjRlMTg2NTNi",
    official: true,
    imagenes: [
      "resources/img/skechers/original/Skechers_Grey.jpg",
      "resources/img/skechers/original/Skechers_Grey_b.jpg",
      "resources/img/skechers/original/Skechers_Grey_c.jpg",
      "resources/img/skechers/original/Skechers_Grey_d.jpg",
    ],
    nombre: "Skechers Gris P/Dama",
    precio: 1339,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "22" },
      { num: "23" },
      { num: "24" },
      { num: "25" },
      { num: "26" },
      { num: "27" },
    ]
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-max-90-blanco-negro",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-270-blanco-negro-negro",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-270-blanco-negro",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-dunk-niebla-blanco-niebla",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-dunk-low-white-gray-importado",
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
    airfireUrl:"https://airfire.com.mx/products/dunk-low-blanco-cielo",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-dunk-blanco-ambar",
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
    id: "https://articulo.mercadolibre.com.mx/MLM-1387293600-tenis-hombre-casuales-york-team-polo-club-caballero-_JM#polycard_client=recommendations_vip-pads-up&reco_backend=recomm_platform_base_pads_ron_marketplace&reco_model=fallback_productos-promocionados&reco_client=vip-pads-up&reco_item_pos=0&reco_backend_type=low_level&reco_id=bf610e7b-19ef-49a0-999a-fca089adebeb&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=1&ad_click_id=MTc4YzY0YmEtNTM2Yy00MzJjLWExOTktMDI3MjI4OTgzOWNk",
    official: true,
    imagenes: [
      "resources/img/polo/original/york_team/Polo_Club_York_Team.jpg",
      "resources/img/polo/original/york_team/Polo_Club_York_Team_b.jpg",
      "resources/img/polo/original/york_team/Polo_Club_York_Team_c.jpg",
    ],
    nombre: "Polo Club Gris Azul",
    precio: 899,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "25" },
      { num: "25.5" },
      { num: "26" },
      { num: "26.5" },
      { num: "27" },
      { num: "27.5"},
      { num: "28" },
      { num: "28.5" },
      { num: "29" },
    ]
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-510-plata-blanco",
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
  {
    id: "https://www.mercadolibre.com.mx/tenis-adidas-casual-street-talk-hombre-rayas-blancas-jp8276/up/MLMU3455706574#polycard_client=recommendations_vip-v2p&reco_backend=ranker_retrieval_online_vpp_v2p&reco_model=organicos_deduplication&reco_client=vip-v2p&reco_item_pos=0&reco_backend_type=low_level&reco_id=dd2af6cf-fa11-468f-82c5-315b0d88ef6e&wid=MLM4723661850&sid=recos",
    official: true,
    imagenes: [
      "resources/img/adidas/street/original/Adidas_Street.jpg",
      "resources/img/adidas/street/original/Adidas_Street_b.jpg",
      "resources/img/adidas/street/original/Adidas_Street_c.jpg",
      "resources/img/adidas/street/original/Adidas_Street_d.jpg",
    ],
    nombre: "Adidas Street",
    precio: 1449,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "25" },
      { num: "25.5" },
      { num: "26" },
      { num: "26.5", agotado:true },
      { num: "27" },
      { num: "27.5", agotado:true },
      { num: "28" },
      { num: "28.5" },
      { num: "29" },
      { num: "29", agotado:true },
    ]
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-retro-1-chicago-black",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-510-negro-oxford",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-superstar-blanco-negro",
    id: "",
    imagenes: [
      "resources/img/adidas/superstar/Adidas_SuperStar_White_Black.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_White_Black_b.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_White_Black_c.jpg"
    ],
    nombre: "Adidas SuperStar Blanco Negro",
    precio: 667,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    airfireUrl:"https://airfire.com.mx/products/air-force-1-negro-total-premium",
    id: "",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-018-negro-blanco",
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
    airfireUrl:"https://airfire.com.mx/products/air-force-1-blanco-total-piel-1-1",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-510-negro-rosa-turquesa",
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
    id: "https://articulo.mercadolibre.com.mx/MLM-2593134831-tenis-skechers-dama-lila-casual-diario-comodo-cintas-ajustables-suelda-de-aire-para-mujer-_JM?searchVariation=193548928209#is_advertising=true&searchVariation=193548928209&backend_model=search-backend&be_origin=backend&position=2&search_layout=grid&type=pad&tracking_id=898f4022-344c-4973-85fc-f6f1dc63dd21&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=OGQxMDIyY2EtYzY3NS00Y2UwLThjNGMtYTE5ZmUxNzgyNThl",
    official: true,
    imagenes: [
      "resources/img/skechers/original/angeles/Skechers_Lila_LA.jpg",
      "resources/img/skechers/original/angeles/Skechers_Lila_LA_b.jpg",
      "resources/img/skechers/original/angeles/Skechers_Lila_LA_c.jpg",
      "resources/img/skechers/original/angeles/Skechers_Lila_LA_d.jpg",
      "resources/img/skechers/original/angeles/Skechers_Lila_LA_e.jpg",
    ],
    nombre: "Skechers LA Lila",
    precio: 2000,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "22.5" },
      { num: "23" },
      { num: "23.5" },
      { num: "24", agotado: true },
      { num: "24.5" },
      { num: "25" },
      { num: "25.5" },
    ]
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-841-negro-total",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-vans-choclo-negro-blanco",
    id: "175",
    imagenes: [
      "resources/img/vans/old_school/Vans_Old_School_Black_White.jpg",
      "resources/img/vans/old_school/Vans_Old_School_Black_White_b.jpg",
      "resources/img/vans/old_school/Vans_Old_School_Black_White_c.jpg"
    ],
    nombre: "Vans Old School Negro Blanco",
    precio: 615,
    moneda: "$",
    nuevo: true,
    disc: false
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-270-negro-total",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-superstar-blanco-lila-jaspeado",
    id: "Concha",
    imagenes: [
      "resources/img/adidas/superstar/Adidas_SuperStar_Rainbow.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_Rainbow_b.jpg",
      "resources/img/adidas/superstar/Adidas_SuperStar_Rainbow_c.jpg"
    ],
    nombre: "Adidas SuperStar Rainbow",
    precio: 685,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-018-negro-plata",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-samba-negro-blanco",
    id: "Smb",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-510-marino-blanco",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-max-90-oxford-negro-blanco",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-018-marino-blanco",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-retro-1-dakar-gris-verde",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-275-negro-blanco",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-420-negro-blanco-negro",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-campus-gris-blanco",
    id: "2000s",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-campus-negro-total",
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
    disc: true,
    tallas: [
      { num: "23" },
      { num: "23.5" },
      { num: "24" },
      { num: "24.5" },
      { num: "25" },
      { num: "25.5" },
      { num: "26" },
      { num: "26.5" },
      { num: "27" },
      { num: "27.5" },
      { num: "28" },
      { num: "28.5" },
      { num: "29" },
      { num: "29.5" },
      { num: "30" },
    ]
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-superstar-blanco-verde",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-270-blanco-negro-rojo",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-timberland-bota-negro-blanco",
    id: "",
    imagenes: [
      "resources/img/timberland/Timberland_Mid_Black.jpg",
      "resources/img/timberland/Timberland_Mid_Black_b.jpg",
      "resources/img/timberland/Timberland_Mid_Black_c.jpg"
    ],
    nombre: "Timberland Bota Negro",
    precio: 947,
    moneda: "$",
    nuevo: true,
    disc: true
  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-vans-choclo-negro-total",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-270-blanco-cielo-lila",
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
    id: "https://articulo.mercadolibre.com.mx/MLM-2444931592-tenis-para-mujer-nike-air-force-1-07-blanco-_JM?searchVariation=179578755431#polycard_client=search-desktop&be_origin=backend&searchVariation=179578755431&search_layout=grid&position=3&type=item&tracking_id=c5984729-64a3-4fe1-a0f8-9bb221904daf",
    id2: "https://articulo.mercadolibre.com.mx/MLM-3488709256-tenis-para-hombre-nike-air-force-1-07-cw2288-111-_JM?searchVariation=186285986547#polycard_client=search-desktop&be_origin=backend&searchVariation=186285986547&search_layout=grid&position=1&type=item&tracking_id=d1c62455-41cb-42d2-95d5-5262bbe86d1f",
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
    disc: false,
    tallas: [
      { num: "24" },
      { num: "24.5" },
      { num: "25" },
      { num: "25.5" },
      { num: "26", agotado: true },
      { num: "26.5" },
      { num: "27" },
      { num: "27.5" },
      { num: "28" },
      { num: "28.5" },
      { num: "29" },
    ]
  },
//  {
//    id: "https://www.mercadolibre.com.mx/tenis-skechers-mujer-2110007bkpk-textil-negro/up/MLMU3809285919#polycard_client=search-desktop&search_layout=grid&position=1&type=product&tracking_id=94988087-669e-4673-ac6c-4048e174d0e6&wid=MLM4841778802&sid=search",
//    official: true,
//    imagenes: [
//      "resources/img/skechers/original/Skechers_Black_Pink.jpg",
//      "resources/img/skechers/original/Skechers_Black_Pink_b.jpg",
//      "resources/img/skechers/original/Skechers_Black_Pink_c.jpg",
//      "resources/img/skechers/original/Skechers_Black_Pink_d.jpg",
//      "resources/img/skechers/original/Skechers_Black_Pink_e.jpg",
//    ],
//    nombre: "Skechers Negros Rosa P/Dama",
//    precio: 1450,
//    moneda: "$",
//    nuevo: true,
//    disc: true
//  },
  {
    airfireUrl:"https://airfire.com.mx/products/tenis-275-blanco-lila",
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
    airfireUrl:"https://airfire.com.mx/products/tenis-270-plus-charpeado-coral-lila",
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
    precio: 1599,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "24", agotado: true },
      { num: "24.5", agotado: true  },
      { num: "25", agotado: true  },
      { num: "25.5", agotado: true  },
      { num: "26", agotado: true  },
      { num: "26.5", agotado: true  },
      { num: "27", agotado: true  },
      { num: "27.5", agotado: true },
      { num: "28" },
      { num: "28.5" },
      { num: "29" },
      { num: "29.5" },
      { num: "30" },
      { num: "30.5" },
    ]
  }, 
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
    disc: true,
    tallas: [
      { num: "22.5" },
    ]
    
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
    precio: 899,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "22.5" },
      { num: "23" },
      { num: "23.5", agotado: true },
      { num: "24" },
      { num: "24.5", agotado: true},
      { num: "25" },
      { num: "25.5" },
      { num: "26", agotado: true },
      { num: "26.5", agotado: true },
      { num: "27" },
      { num: "27.5" },
      { num: "28", agotado: true },
      { num: "28.5" },
      { num: "29" },
    ]
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
    precio: 783,
    moneda: "$",
    nuevo: true,
    disc: true,
    tallas: [
      { num: "22" },
      { num: "22.5" },
      { num: "23" },
      { num: "23.5" },
      { num: "24" },
      { num: "24.5" },
      { num: "25" },
      { num: "25.5" },
      { num: "26" },
    ]
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
    <div class="card${p.official?' official':''}" style="animation-delay:${i*60}ms" onclick="openProduct(${idx})">
      <div class="carousel${single?' single':''}">
        <div class="carousel-track" id="track-${idx}">${trackImgs}</div>
        <button class="carousel-btn prev" onclick="cardSlide(${idx},-1,event)"><span class="material-icons-round">chevron_left</span></button>
        <button class="carousel-btn next" onclick="cardSlide(${idx},1,event)"><span class="material-icons-round">chevron_right</span></button>
        <div class="carousel-dots" id="dots-${idx}">${dots}</div>
        <span class="photo-count" id="counter-${idx}">1/${imgs.length}</span>
        <div class="img-overlay"></div>
        
      </div>
      <div class="card-body">
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
/* toggleFavModal removido — ahora se usa toggleFavProduct() en la vista SPA */

/* ══════════════════════════════
   SPA — Navegación por hash
══════════════════════════════ */

function slugify(str){
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s-]/g,'')
    .trim().replace(/\s+/g,'-');
}

let currentProductIdx = null;
let currentImgs = [];
let currentThumb = 0;

function openProduct(idx){
  const p = productos[idx];
  window.location.hash = slugify(p.nombre);
  renderProduct(idx);
}

function renderProduct(idx){
  currentProductIdx = idx;
  const p = productos[idx];
  currentImgs = (p.imagenes && p.imagenes.length) ? p.imagenes : [PLACEHOLDER];
  currentThumb = 0;

  // Mostrar vista producto, ocultar catálogo
  document.getElementById('viewCatalog').style.display = 'none';
  document.getElementById('viewProduct').style.display = 'block';
  window.scrollTo(0, 0);

  // Imagen principal
  const mainImg = document.getElementById('productMainImg');
  mainImg.src = currentImgs[0];
  mainImg.alt = p.nombre;

  // Miniaturas
  const thumbsEl = document.getElementById('productThumbs');
  thumbsEl.innerHTML = currentImgs.map((src, i) => `
    <div class="product-thumb${i===0?' active':''}" onclick="selectThumb(${i})">
      <img src="${src}" alt="${p.nombre} foto ${i+1}" onerror="this.src='${PLACEHOLDER}'"/>
    </div>
  `).join('');

  // Nombre y precio
  document.getElementById('productName').textContent = p.nombre;
  document.getElementById('productPrice').textContent = fmt(p.precio, p.moneda||'$');

  // Badges
  const badgesEl = document.getElementById('productBadges');
  badgesEl.innerHTML = [
    p.nuevo    ? '<span class="badge-new">Nuevo</span>'      : '',
    p.disc     ? '<span class="badge-disc">%OFF</span>'      : '',
    p.official ? '<span class="badge-official">Original</span>' : '',
  ].join('');

  // Tallas
  // Tallas — consultar AirFire si hay URL, si no usar las manuales
  const sizesWrap = document.getElementById('productSizesWrap');
  const sizesEl   = document.getElementById('productSizes');
  if(p.airfireUrl){
    fetchTallas(p.airfireUrl);
  } else if(p.tallas && p.tallas.length){
    sizesWrap.style.display = 'block';
    sizesEl.innerHTML = p.tallas.map(t => `
      <button class="size-btn${t.agotado?' agotado':''}" onclick="selectSize(this,'${t.num}')" ${t.agotado?'disabled':''}>${t.num}</button>
    `).join('');
  } else {
    sizesWrap.style.display = 'none';
  }

  // Descripción
  const descEl = document.getElementById('productDesc');
  descEl.textContent = p.descripcion || '';
  descEl.style.display = p.descripcion ? 'block' : 'none';

  // Favorito
  const isFav = favoritos.has(idx);
  const favBtn = document.getElementById('productFavBtn');
  favBtn.classList.toggle('active', isFav);
  favBtn.querySelector('.material-icons-round').textContent = isFav ? 'favorite' : 'favorite_border';

  // WhatsApp
  const msg = `Hola, me interesa este artículo:\n\n• ${p.nombre} — ${p.moneda||'$'}${p.precio.toLocaleString('es-MX')}\n\n¿Me pueden dar más información?`;
  document.getElementById('productWaBtn').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  // Swipe en imagen principal
  const mainWrap = mainImg.parentElement;
  if(!mainWrap._swipeAdded){
    addSwipe(mainWrap, ()=>thumbNav(1), ()=>thumbNav(-1));
    mainWrap._swipeAdded = true;
  }
}

function selectThumb(i){
  currentThumb = i;
  document.getElementById('productMainImg').src = currentImgs[i];
  document.querySelectorAll('.product-thumb').forEach((t,j)=>t.classList.toggle('active',j===i));
}

function thumbNav(dir){
  const next = (currentThumb + dir + currentImgs.length) % currentImgs.length;
  selectThumb(next);
}

function selectSize(btn, num){
  document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

function toggleFavProduct(){
  const idx = currentProductIdx;
  favoritos.has(idx) ? favoritos.delete(idx) : favoritos.add(idx);
  saveFavs();
  const isFav = favoritos.has(idx);
  const btn = document.getElementById('productFavBtn');
  btn.classList.toggle('active', isFav);
  btn.querySelector('.material-icons-round').textContent = isFav ? 'favorite' : 'favorite_border';
}

function goBack(){
  history.back();
}

// Manejo del hash para navegación y botón atrás
function handleHash(){
  const hash = window.location.hash.slice(1);
  if(!hash){
    document.getElementById('viewCatalog').style.display = 'block';
    document.getElementById('viewProduct').style.display = 'none';
    return;
  }
  const idx = productos.findIndex(p => slugify(p.nombre) === hash);
  if(idx !== -1){
    renderProduct(idx);
  } else {
    document.getElementById('viewCatalog').style.display = 'block';
    document.getElementById('viewProduct').style.display = 'none';
  }
}

window.addEventListener('hashchange', handleHash);
handleHash();

document.addEventListener('keydown', e=>{
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowLeft')  lbSlide(-1);
  if(e.key==='ArrowRight') lbSlide(1);
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


const WORKER_URL = 'https://af-qs.dvq-ent.workers.dev/';

async function fetchTallas(airfireUrl){
  const sizesEl   = document.getElementById('productSizes');
  const sizesWrap = document.getElementById('productSizesWrap');

  // Mostrar estado de carga
  sizesWrap.style.display = 'block';
  sizesEl.innerHTML = '<span style="color:var(--muted);font-size:.85rem">Consultando disponibilidad...</span>';

  try {
    const res  = await fetch(`${WORKER_URL}?url=${encodeURIComponent(airfireUrl)}`);
    const data = await res.json();

    if(data.error || !data.variants?.length){
      sizesEl.innerHTML = '<span style="color:var(--muted);font-size:.85rem">No disponible por ahora</span>';
      return;
    }

    sizesEl.innerHTML = data.variants.map(v => `
      <button
        class="size-btn${v.available ? '' : ' agotado'}"
        ${v.available ? '' : 'disabled'}
        onclick="selectSize(this,'${v.title}')">
        ${v.title}
      </button>
    `).join('');

  } catch(err){
    sizesEl.innerHTML = '<span style="color:var(--muted);font-size:.85rem">Error al consultar tallas</span>';
  }
}
refresh();