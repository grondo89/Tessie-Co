const Product = require('./models/products')
const Category = require('./models/category')
const User = require('./models/user')

Product.bulkCreate(
   [ {  name:'iPhone XR',
        price:68000,
        stock:45, 
        description:'Diseño todo pantalla. La mayor duración de batería en un iPhone. El rendimiento más rápido. Resistente a las salpicaduras y al agua. Fotos con calidad de estudio y video 4K. Más seguridad con Face ID. El nuevo iPhone XR. Es un cambio brillante.', 
        images:['https://as01.epimg.net/betech/imagenes/2018/09/12/portada/1536784865_386895_1536799374_noticia_normal.jpg', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-coral-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036571', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-blue-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036356', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036668'],
        reviews:[],
        rating:[5],
    },
    {
        name:'Apple TV 4K',
        price:9000,
        stock:6, 
        description:'Apple TV 4K te permite ver películas y programas en 4K HDR increíble, y ahora completa la imagen con sonido envolvente de Dolby Atmos.3 Transmite en vivo tus canales favoritos. Disfrute de excelente contenido de aplicaciones como Amazon Prime Video, HBO NOW, Hulu y Netflix.4 Y gracias a Siri, puede controlarlo todo solo con su voz. Encuentra deportes desde aplicaciones como NBA y MLB. Noticias de última hora de aplicaciones como Bloomberg y CNN. Y paquetes completos de canales en vivo y bajo demanda de aplicaciones como DirecTV Now, YouTube TV y Sling TV.', 
        images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/tv/apple-tv-gallery1-201709?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1508182636222', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/tv/apple-tv-gallery2-201709?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1508788579987', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/tv/apple-tv-gallery3-201709?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1508182630538', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/tv/apple-tv-gallery4-201709?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1508182629182', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/appletv/witb/appletv-witb-power-201709_GEO_US?wid=130&hei=392&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1503958531011'],
        reviews:[],
        rating:[5],
    },
    {       
    name:'MacBook - Space Gray',
    price:68000,
    stock:9,
    description:'Nuestro objetivo con la MacBook era hacer lo imposible: diseñar una experiencia de tamaño completo en el portátil Mac más delgado y liviano hasta el momento. Y no solo es compacto, sino que es más poderoso que nunca. La nueva MacBook ofrece un rendimiento hasta un 20 por ciento más rápido con los nuevos procesadores Intel Core m3, i5 e i7 de séptima generación, 1 y hasta un 50 por ciento de almacenamiento SSD más rápido.2', 
    images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/201810/macbook-201810-gallery1?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1539217638293', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/2017/macbook-2017-gallery2_GEO_US?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1537305768015', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/201810/macbook-201810-gallery3_GEO_US?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1539737516550', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/2017/macbook-2017-gallery4_GEO_US?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1537305800107', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/201810/macbook-201810-gallery5?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1539217636072'],
    reviews:[],
    rating:[5]},
    {
        name:'iPad Pro',
        price:45000,
        stock:11,
        description:'El iPad presenta chips avanzados diseñados por Apple, como el A12X Bionic con Neural Engine en el iPad Pro. Estos chips transforman la forma en que experimentas las fotos, los juegos y la realidad aumentada. También hacen que el iPad sea lo suficientemente potente como para manejar las aplicaciones que usas todos los días. E incluso aplicaciones profesionales como Adobe Photoshop CC.', 
        images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-12-11-select-201810?wid=435&amp;hei=550&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1540576039631', 'https://images-na.ssl-images-amazon.com/images/I/61yaUxH6XsL._SX466_.jpg', 'https://static.k-tuin.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/f/u/funda-para-ipad-pro-y-ipad-air-3-de-10_5_-slot-rojo-con-soporte-para-apple-pencil-comma.jpg','https://tshop.r10s.com/a98/edb/5056/b1e7/d0db/2570/a778/119de98e3bc45444889ca7.jpg'],
        reviews:[],
        rating:[5]},
        {
            name:'Apple Watch Silver Aluminium',
        price:22000,
        stock:10,
        description:'Apple Watch Series 4 (GPS + Celular) requiere un iPhone 6 o posterior con iOS 12 o posterior. Apple Watch Series 4 (GPS) requiere un iPhone 5s o posterior con iOS 12 o posterior. Se requiere plan de servicio inalámbrico para el servicio celular. El proveedor de servicios de Apple Watch y iPhone debe ser el mismo. No disponible con todos los proveedores de servicios. No todos los proveedores de servicios admiten cuentas empresariales o planes prepagos; Consulte con su empleador y proveedor de servicios. Algunos planes heredados pueden no ser compatibles. El roaming no está disponible. Póngase en contacto con su proveedor de servicios para obtener más detalles.', 
        images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/a/lu/alu/silver/alu-silver-sport-white-s4-2up_gpscell_varend?wid=470&hei=556&fmt=png-alpha&.v=1539194970829', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/4/4/44/alu/44-alu-silver-sport-white-s4-gallery2?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1539192139467', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/4/4/44/alu/44-alu-silver-sport-white-s4-gallery3?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1535748728969', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/4/4/44/alu/44-alu-silver-sport-white-s4-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1539191179382'],
        reviews:[],
        rating:[5]
        }, {
            name:'Iphone XS',
            price:75000,
            stock:5,
            description:'El Programa de actualización de iPhone es la forma más fácil de obtener un nuevo iPhone cada año, así como la seguridad y protección de AppleCare +. Puede comprar el iPhone XS, el iPhone XS Max o el iPhone XR con el Programa de actualización de iPhone en apple.com, usando la aplicación Apple Store o en Apple Store.', 
            images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-select-2018-group?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1550795427806', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-max-space-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409906', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-max-gold-select-2018?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1550795409154'],
            reviews:[],
            rating:[5]
        },
        {
            name:'AirPods ',
            price:9000,
            stock:25,
            description:'Más mágico que nunca.Los nuevos AirPods, completos con estuche de carga inalámbrica, ofrecen la experiencia de auriculares inalámbricos, reimaginados. Simplemente sáquelos del estuche y estarán listos para usar con su iPhone, Apple Watch, iPad o Mac, Después de una configuración sencilla de un solo toque, los AirPods funcionan como magia. Están automáticamente encendidos y siempre conectados. Los AirPods pueden incluso detectar cuándo están en tus oídos y hacer una pausa cuando los sacas, Para ajustar el volumen, cambiar la canción, hacer una llamada o incluso obtener instrucciones, simplemente diga "Hey Siri" y realice su solicitud. Tienes la libertad de usar uno o ambos AirPods, y puedes jugar o saltar hacia adelante con un doble toque cuando escuchas música o podcasts., Cargue sus AirPods rápida y fácilmente con el estuche de carga inalámbrica. Simplemente coloque el estuche sobre una alfombrilla de carga compatible con Qi y deje que se cargue. El indicador LED en la parte frontal de la caja le permite saber que sus AirPods se están cargando. Y cuando estás lejos de una plataforma de carga, puedes usar el puerto Lightning para cargar., Los AirPods brindan 5 horas de tiempo de audición1 y 3 horas de tiempo de conversación con una sola carga.2 Y están diseñados para mantenerse al día con usted, gracias a un estuche de carga inalámbrica que contiene múltiples cargas por más de 24 horas de tiempo de audición.3 ¿Necesita una carga rápida? Solo 15 minutos en el caso le da 3 horas de tiempo de escucha4 o 2 horas de tiempo de conversación.5, gracias al nuevo chip de auriculares Apple H1, los AirPods utilizan sensores ópticos y acelerómetros de movimiento para detectar cuándo están en sus oídos. Ya sea que esté utilizando AirPods o solo uno, el chip H1 enruta automáticamente el audio y se conecta al micrófono. Y cuando estás en una llamada o hablando con Siri, un acelerómetro de detección de voz adicional funciona con micrófonos de formación de haz para filtrar el ruido externo y concentrarse en el sonido de tu voz.', 
            images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RX/MRXJ2/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083','https://http2.mlstatic.com/apple-airpods-air-pods-bluetooth-mmef2bea-sellado-gtia-D_NQ_NP_718327-MLA28149679371_092018-F.jpg', 'https://icdn6.digitaltrends.com/image/airpods2-charging-case-on-846x468.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51VPy3MKYkL._SX569_.jpg', 'https://kola.co.ke/public/uploads/products/photos/kcJYttwe4bABdLJucnW3v8BdhioogCF4GiiopZfJ.jpeg' ],
            reviews:[],
            rating:[5]
        },
        {
            name:'iPhone XS Leather Case',
            price:2500,
            stock:6,
            description:'Estos estuches diseñados por Apple se ajustan perfectamente a las curvas de su iPhone sin agregar volumen. Están hechas de cuero europeo especialmente curtido y acabado, por lo que el exterior se siente suave al tacto y desarrolla una pátina natural con el tiempo. Los botones de aluminio mecanizados coinciden con el acabado de su funda de cuero, mientras que el interior de microfibra ayuda a proteger su iPhone. Y puede mantenerlo encendido todo el tiempo, incluso cuando se está cargando de forma inalámbrica.', 
            images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/TE/MTEV2/MTEV2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1535399239442', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/TE/MTEW2/MTEW2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1535399244650', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/M/TE/MTEX2/MTEX2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1535399265041', 'https://www.macstation.com.ar/img/productos/small/1310-1.jpg'],
            reviews:[],
            rating:[5]         
        }, {
            name:'Iphone 7 Plus',
            price:50000,
            stock:5,
            description:'Iphone 7 Plus Apple 128gb 4G 4K Sellado Smartphone Liberado de fábrica para todas las operadoras. Nuevo y Sellado. CARACTERÍSTICAS PRINCIPALES:• Pantalla Retina HD  • Pantalla Multi-Touch con tecnología IPS • Pantalla panorámica de 5.5 pulgadas (en diagonal) retroiluminada por LED • Resolución de 1.920 por 1.080 a 401 p/p • Chip A10 Fusion con arquitectura de 64 bits • Coprocesador de movimiento M10 integrado • Nueva cámara iSight de 12 Mpx • Grabación de vídeo en 4K (3.840 por 2.160) a 30 f/s• Grabación de vídeo en 1080p HD a 30 o 60 f/s • CÁMARA FACETIME HD: Fotos de 7 megapíxeles • TOUCH ID • Bandas LTE • Wi-Fi 802.11a/b/g/n/ac con MIMO • Tecnología inalámbrica Bluetooth 4.2 • NFC • Videollamadas FaceTime vía Wi-Fi o red móvil • Asistente SIRI7.• iOS 10 Con el sistema operativo móvil más avanzado del mundo, las apps integradas, Siri y el sistema de búsqueda salen ganando. De calle.             • Nano SIM', 
            images:['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795424922', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795425349', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795422818', 'https://www.tuimeilibre.com/69-large_default/iphone-7-plus-32gb-negro-mate.jpg', 'http://macyexpress.shop/wp-content/uploads/2018/08/iPhone-7-Plus-red.jpg'],
            reviews:[],
            rating:[5]
        }
])
User.create({
    name:"tessie",
    lastname:"sills",
    email:"tessie@tessie.com",
    password:"123",
    admin:true
})
Category.bulkCreate([
    {name:"Mac"},
    {name:"iPad"},
    {name:"iPhone"},
    {name:"Watch"},
    {name:"TV"},
    {name:"Gadget"}])

