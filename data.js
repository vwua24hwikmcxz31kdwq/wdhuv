/* =========================================================
   DATA.JS — Data Website Pangan Lokal Indonesia
   Versi  : Bilingual (Indonesia + English)
   Berisi : Products (20) · Articles (6) · Gallery (10) · Categories
   ========================================================= */


/* =========================================================
   1. DATA PRODUK (20 ITEM) — BILINGUAL
   Setiap field teks punya versi ID & EN (akhiran "_en")
   ========================================================= */
const products = [
  /* ---------- MAKANAN (6) ---------- */
  {
    id: 1,
    name:           "Rendang",
    name_en:        "Rendang (Indonesian slow-cooked beef in coconut milk)",
    category:       "Makanan",
    category_en:    "Food",
    region:         "Sumatera Barat",
    region_en:      "West Sumatra, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Rendang",
    description:    "Rendang merupakan makanan tradisional yang dibuat dari daging sapi yang dimasak dengan santan dan berbagai rempah dalam waktu yang cukup lama. Proses memasaknya menghasilkan rasa gurih, kaya rempah, dan tekstur daging yang lembut.",
    description_en: "Rendang is a traditional dish made from beef cooked with coconut milk and various spices over a long period. The cooking process produces a savory, spice-rich flavor and tender meat texture.",
    keunikan:       "Memiliki proses memasak yang panjang sehingga bumbu meresap ke dalam daging. Rendang juga dikenal sebagai salah satu kuliner khas Minangkabau yang memiliki cita rasa rempah yang kuat.",
    keunikan_en:    "It has a long cooking process that allows the spices to fully absorb into the meat. Rendang is also known as one of the signature Minangkabau dishes with a strong spice flavor."
  },
  {
    id: 2,
    name:           "Gudeg",
    name_en:        "Gudeg (Young jackfruit stewed in coconut milk)",
    category:       "Makanan",
    category_en:    "Food",
    region:         "Yogyakarta",
    region_en:      "Yogyakarta, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Gudeg",
    description:    "Gudeg merupakan makanan khas Yogyakarta yang menggunakan nangka muda sebagai bahan utama. Nangka muda dimasak bersama santan dan berbagai bumbu hingga menghasilkan rasa yang khas.",
    description_en: "Gudeg is a Yogyakarta specialty that uses young jackfruit as the main ingredient. The young jackfruit is cooked with coconut milk and various spices to produce a distinctive flavor.",
    keunikan:       "Memiliki cita rasa manis dan gurih yang menjadi karakteristik kuliner Yogyakarta. Gudeg biasanya disajikan bersama nasi, telur, tahu, tempe, dan sambal krecek.",
    keunikan_en:    "It has a sweet and savory flavor that characterizes Yogyakarta cuisine. Gudeg is usually served with rice, egg, tofu, tempeh, and sambal krecek."
  },
  {
    id: 3,
    name:           "Rawon",
    name_en:        "Rawon (Black beef soup with kluwek)",
    category:       "Makanan",
    category_en:    "Food",
    region:         "Jawa Timur",
    region_en:      "East Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Rawon",
    description:    "Rawon adalah hidangan berkuah khas Jawa Timur yang menggunakan daging sapi sebagai bahan utama. Kuahnya berwarna gelap dan memiliki cita rasa gurih serta kaya rempah.",
    description_en: "Rawon is a soupy dish from East Java that uses beef as the main ingredient. The broth is dark in color and has a savory, spice-rich flavor.",
    keunikan:       "Warna hitam pada kuah berasal dari kluwek yang menjadi salah satu bahan khas dalam pembuatan rawon.",
    keunikan_en:    "The black color of the broth comes from kluwek, which is one of the signature ingredients in making rawon."
  },
  {
    id: 4,
    name:           "Pempek",
    name_en:        "Pempek (Fish cake in tangy cuko sauce)",
    category:       "Makanan",
    category_en:    "Food",
    region:         "Palembang, Sumatera Selatan",
    region_en:      "Palembang, South Sumatra, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Pempek",
    description:    "Pempek merupakan makanan berbahan dasar ikan dan tepung sagu yang kemudian dibentuk dan dimasak. Pempek biasanya disajikan dengan kuah cuko yang memiliki rasa asam, manis, dan pedas.",
    description_en: "Pempek is a dish made from fish and sago flour that is shaped and cooked. Pempek is usually served with cuko sauce that has a sour, sweet, and spicy taste.",
    keunikan:       "Kombinasi tekstur pempek yang kenyal dengan kuah cuko yang memiliki rasa kuat menjadi ciri khas makanan Palembang ini.",
    keunikan_en:    "The combination of pempek's chewy texture with the strong flavor of cuko sauce is the signature characteristic of this Palembang dish."
  },
  {
    id: 5,
    name:           "Papeda",
    name_en:        "Papeda (Sago porridge)",
    category:       "Makanan",
    category_en:    "Food",
    region:         "Papua dan Maluku",
    region_en:      "Papua and Maluku, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Papeda",
    description:    "Papeda merupakan makanan tradisional yang dibuat dari sagu. Teksturnya lembut dan lengket serta biasanya disantap bersama ikan kuah kuning atau lauk lainnya.",
    description_en: "Papeda is a traditional dish made from sago. Its texture is soft and sticky, and it is usually enjoyed with yellow fish soup or other side dishes.",
    keunikan:       "Menggunakan sagu sebagai bahan utama dan memiliki tekstur yang sangat khas. Papeda juga menunjukkan pemanfaatan sumber pangan lokal masyarakat di wilayah timur Indonesia.",
    keunikan_en:    "It uses sago as the main ingredient and has a very distinctive texture. Papeda also reflects the use of local food sources by communities in eastern Indonesia."
  },
  {
    id: 6,
    name:           "Tahu Sumedang",
    name_en:        "Tahu Sumedang (Crispy Sumedang tofu)",
    category:       "Makanan",
    category_en:    "Food",
    region:         "Sumedang, Jawa Barat",
    region_en:      "Sumedang, West Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Tahu+Sumedang",
    description:    "Tahu Sumedang merupakan olahan kedelai yang memiliki bagian luar berwarna kecokelatan setelah digoreng, sementara bagian dalamnya memiliki tekstur yang lebih lembut.",
    description_en: "Tahu Sumedang is a soybean product with a brownish outer layer after frying, while the inside has a softer texture.",
    keunikan:       "Memiliki tekstur luar yang renyah dan bagian dalam yang lembut. Tahu ini juga sering disajikan sebagai camilan bersama cabai atau sambal.",
    keunikan_en:    "It has a crispy outside and a soft inside. This tofu is also often served as a snack with chili or sambal."
  },

  /* ---------- CAMILAN (7) ---------- */
  {
    id: 7,
    name:           "Keripik Tempe",
    name_en:        "Keripik Tempe (Tempeh chips)",
    category:       "Camilan",
    category_en:    "Snack",
    region:         "Malang, Jawa Timur",
    region_en:      "Malang, East Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Keripik+Tempe",
    description:    "Keripik tempe merupakan camilan yang dibuat dari irisan tempe tipis yang dibalut adonan berbumbu kemudian digoreng hingga renyah.",
    description_en: "Keripik tempe is a snack made from thinly sliced tempeh coated in seasoned batter and then fried until crispy.",
    keunikan:       "Mengubah tempe yang merupakan pangan tradisional Indonesia menjadi camilan dengan tekstur renyah dan rasa gurih.",
    keunikan_en:    "It transforms tempeh, a traditional Indonesian food, into a snack with a crispy texture and savory taste."
  },
  {
    id: 8,
    name:           "Keripik Sanjai",
    name_en:        "Keripik Sanjai (Cassava chips)",
    category:       "Camilan",
    category_en:    "Snack",
    region:         "Sumatera Barat",
    region_en:      "West Sumatra, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Keripik+Sanjai",
    description:    "Keripik Sanjai merupakan camilan yang dibuat dari singkong yang diiris tipis kemudian digoreng. Keripik ini tersedia dalam beberapa varian rasa, termasuk rasa gurih dan pedas.",
    description_en: "Keripik Sanjai is a snack made from thinly sliced cassava that is then fried. These chips are available in several flavor variants, including savory and spicy.",
    keunikan:       "Menggunakan singkong sebagai bahan utama dan memiliki variasi rasa yang beragam, terutama varian dengan balutan bumbu cabai.",
    keunikan_en:    "It uses cassava as the main ingredient and has diverse flavor variations, especially the variant coated with chili seasoning."
  },
  {
    id: 9,
    name:           "Brem",
    name_en:        "Brem (Fermented glutinous rice cake)",
    category:       "Camilan",
    category_en:    "Snack",
    region:         "Madiun, Jawa Timur",
    region_en:      "Madiun, East Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Brem",
    description:    "Brem merupakan makanan tradisional berbentuk padat yang dibuat melalui proses pengolahan fermentasi beras ketan. Brem memiliki tekstur yang mudah hancur ketika dimakan.",
    description_en: "Brem is a traditional solid food made through a fermentation process of glutinous rice. Brem has a texture that easily crumbles when eaten.",
    keunikan:       "Memiliki tekstur yang khas dan memberikan sensasi mudah larut di dalam mulut dengan cita rasa manis dan sedikit asam.",
    keunikan_en:    "It has a distinctive texture and provides a sensation of easily dissolving in the mouth with a sweet and slightly sour taste."
  },
  {
    id: 10,
    name:           "Getuk",
    name_en:        "Getuk (Sweet cassava cake)",
    category:       "Camilan",
    category_en:    "Snack",
    region:         "Jawa Tengah",
    region_en:      "Central Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Getuk",
    description:    "Getuk merupakan makanan tradisional yang dibuat dari singkong yang dikukus atau direbus, kemudian dihaluskan dan dicampur dengan gula.",
    description_en: "Getuk is a traditional food made from steamed or boiled cassava, then mashed and mixed with sugar.",
    keunikan:       "Memiliki tekstur lembut dan dapat dibuat dalam berbagai warna serta variasi penyajian. Getuk juga sering disajikan dengan parutan kelapa.",
    keunikan_en:    "It has a soft texture and can be made in various colors and serving variations. Getuk is also often served with grated coconut."
  },
  {
    id: 11,
    name:           "Kerupuk Ikan",
    name_en:        "Kerupuk Ikan (Fish crackers)",
    category:       "Camilan",
    category_en:    "Snack",
    region:         "Berbagai daerah pesisir Indonesia",
    region_en:      "Various coastal areas of Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Kerupuk+Ikan",
    description:    "Kerupuk ikan dibuat menggunakan campuran ikan dan bahan tepung yang kemudian dibentuk, dikeringkan, dan digoreng hingga mengembang.",
    description_en: "Fish crackers are made using a mixture of fish and flour, which is then shaped, dried, and fried until it expands.",
    keunikan:       "Memiliki aroma dan cita rasa ikan yang khas serta dapat menjadi salah satu bentuk pengolahan hasil perikanan menjadi produk pangan yang tahan disimpan.",
    keunikan_en:    "It has a distinctive fish aroma and flavor and can be one of the ways to process fishery products into food products that can be stored longer."
  },
  {
    id: 12,
    name:           "Dodol Garut",
    name_en:        "Dodol Garut (Sweet sticky rice and coconut candy)",
    category:       "Camilan",
    category_en:    "Snack",
    region:         "Garut, Jawa Barat",
    region_en:      "Garut, West Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Dodol+Garut",
    description:    "Dodol Garut merupakan makanan tradisional yang dibuat dari tepung ketan, santan, dan gula. Bahan-bahan tersebut dimasak dan diaduk hingga menghasilkan tekstur yang kenyal.",
    description_en: "Dodol Garut is a traditional food made from glutinous rice flour, coconut milk, and sugar. These ingredients are cooked and stirred until they produce a chewy texture.",
    keunikan:       "Memiliki tekstur kenyal dan rasa manis yang khas. Dodol juga memiliki berbagai variasi rasa dan sering dijadikan oleh-oleh.",
    keunikan_en:    "It has a chewy texture and a distinctive sweet taste. Dodol also comes in various flavor variations and is often used as a souvenir."
  },
  {
    id: 13,
    name:           "Sale Pisang",
    name_en:        "Sale Pisang (Dried banana snack)",
    category:       "Camilan",
    category_en:    "Snack",
    region:         "Berbagai daerah di Indonesia",
    region_en:      "Various regions in Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Sale+Pisang",
    description:    "Sale pisang merupakan produk olahan pisang yang dibuat melalui proses pengeringan sehingga menghasilkan tekstur dan rasa yang berbeda dari pisang segar.",
    description_en: "Sale pisang is a banana product made through a drying process that produces a texture and taste different from fresh bananas.",
    keunikan:       "Memanfaatkan pisang sebagai bahan utama dan memiliki cita rasa manis dengan aroma khas pisang yang lebih kuat setelah melalui proses pengolahan.",
    keunikan_en:    "It uses bananas as the main ingredient and has a sweet taste with a stronger banana aroma after processing."
  },

  /* ---------- MINUMAN (5) ---------- */
  {
    id: 14,
    name:           "Wedang Uwuh",
    name_en:        "Wedang Uwuh (Yogyakarta spiced herbal drink)",
    category:       "Minuman",
    category_en:    "Drink",
    region:         "Yogyakarta",
    region_en:      "Yogyakarta, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Wedang+Uwuh",
    description:    "Wedang uwuh merupakan minuman tradisional yang dibuat dari berbagai bahan rempah, seperti jahe, kayu secang, kayu manis, dan bahan rempah lainnya. Minuman ini biasanya disajikan dalam keadaan hangat.",
    description_en: "Wedang uwuh is a traditional drink made from various spices such as ginger, sappan wood, cinnamon, and other spices. This drink is usually served warm.",
    keunikan:       "Memiliki tampilan khas dari potongan rempah yang berada di dalam minuman. Kayu secang juga memberikan warna merah alami.",
    keunikan_en:    "It has a distinctive appearance with spice pieces inside the drink. Sappan wood also gives it a natural red color."
  },
  {
    id: 15,
    name:           "Es Cendol",
    name_en:        "Es Cendol (Iced green jelly drink)",
    category:       "Minuman",
    category_en:    "Drink",
    region:         "Indonesia",
    region_en:      "Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Es+Cendol",
    description:    "Es cendol merupakan minuman yang terdiri dari cendol, santan, gula merah, dan es. Cendol memiliki tekstur kenyal dan biasanya berwarna hijau.",
    description_en: "Es cendol is a drink consisting of cendol, coconut milk, palm sugar, and ice. Cendol has a chewy texture and is usually green in color.",
    keunikan:       "Perpaduan cendol, santan, dan gula merah menghasilkan rasa manis dan gurih yang menjadi ciri khas minuman tradisional ini.",
    keunikan_en:    "The combination of cendol, coconut milk, and palm sugar produces a sweet and savory taste that is the signature of this traditional drink."
  },
  {
    id: 16,
    name:           "Wedang Ronde",
    name_en:        "Wedang Ronde (Ginger drink with glutinous rice balls)",
    category:       "Minuman",
    category_en:    "Drink",
    region:         "Jawa",
    region_en:      "Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Wedang+Ronde",
    description:    "Wedang ronde merupakan minuman hangat berbahan dasar kuah jahe yang disajikan bersama bola-bola ketan berisi kacang serta bahan pelengkap lainnya.",
    description_en: "Wedang ronde is a warm drink based on ginger broth served with glutinous rice balls filled with peanuts and other complementary ingredients.",
    keunikan:       "Memiliki perpaduan kuah jahe yang hangat dengan tekstur kenyal dari bola ketan.",
    keunikan_en:    "It combines warm ginger broth with the chewy texture of glutinous rice balls."
  },
  {
    id: 17,
    name:           "Sarabba",
    name_en:        "Sarabba (South Sulawesi ginger drink)",
    category:       "Minuman",
    category_en:    "Drink",
    region:         "Sulawesi Selatan",
    region_en:      "South Sulawesi, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Sarabba",
    description:    "Sarabba merupakan minuman tradisional khas Sulawesi Selatan yang dibuat dari jahe, santan, gula merah, dan rempah-rempah.",
    description_en: "Sarabba is a traditional drink from South Sulawesi made from ginger, coconut milk, palm sugar, and spices.",
    keunikan:       "Memiliki rasa yang kuat dari jahe dan rempah yang berpadu dengan rasa gurih dari santan serta manis dari gula merah.",
    keunikan_en:    "It has a strong flavor of ginger and spices combined with the savory taste of coconut milk and the sweetness of palm sugar."
  },
  {
    id: 18,
    name:           "Bajigur",
    name_en:        "Bajigur (West Java coconut and palm sugar drink)",
    category:       "Minuman",
    category_en:    "Drink",
    region:         "Jawa Barat",
    region_en:      "West Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Bajigur",
    description:    "Bajigur merupakan minuman tradisional khas Jawa Barat yang dibuat dari santan, gula aren, dan bahan pelengkap seperti jahe atau kopi.",
    description_en: "Bajigur is a traditional drink from West Java made from coconut milk, palm sugar, and complementary ingredients such as ginger or coffee.",
    keunikan:       "Memiliki cita rasa manis dan gurih dengan aroma khas gula aren serta biasanya disajikan dalam keadaan hangat.",
    keunikan_en:    "It has a sweet and savory flavor with the distinctive aroma of palm sugar and is usually served warm."
  },

  /* ---------- PANGAN FERMENTASI (2) ---------- */
  {
    id: 19,
    name:           "Tape Singkong",
    name_en:        "Tape Singkong (Fermented cassava)",
    category:       "Pangan Fermentasi",
    category_en:    "Fermented Food",
    region:         "Jawa Barat dan berbagai daerah di Indonesia",
    region_en:      "West Java and various regions of Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Tape+Singkong",
    description:    "Tape singkong dibuat dari singkong yang difermentasi menggunakan ragi. Proses tersebut menghasilkan perubahan rasa, aroma, dan tekstur pada singkong.",
    description_en: "Tape singkong is made from cassava fermented using yeast. This process produces changes in taste, aroma, and texture of the cassava.",
    keunikan:       "Memiliki rasa manis dengan sedikit rasa asam dan tekstur yang lembut sebagai hasil dari proses fermentasi.",
    keunikan_en:    "It has a sweet taste with a slight sourness and a soft texture resulting from the fermentation process."
  },
  {
    id: 20,
    name:           "Tempe",
    name_en:        "Tempe (Fermented soybean cake)",
    category:       "Pangan Fermentasi",
    category_en:    "Fermented Food",
    region:         "Jawa, Indonesia",
    region_en:      "Java, Indonesia",
    image:          "https://via.placeholder.com/600x450?text=Tempe",
    description:    "Tempe merupakan produk pangan yang dibuat dari kedelai melalui proses fermentasi menggunakan kapang. Tempe dapat diolah menjadi berbagai macam makanan.",
    description_en: "Tempe is a food product made from soybeans through fermentation using mold. Tempe can be processed into various kinds of dishes.",
    keunikan:       "Memiliki tekstur padat dengan pola putih khas hasil fermentasi dan dapat digunakan sebagai bahan berbagai hidangan tradisional maupun modern.",
    keunikan_en:    "It has a dense texture with a distinctive white pattern from fermentation and can be used as an ingredient for various traditional and modern dishes."
  }
];


/* =========================================================
   2. DATA ARTIKEL (6 ITEM) — BILINGUAL
   ========================================================= */
const articles = [
  {
    id: 1,
    title:        "Mengenal Kekayaan Pangan Lokal Indonesia",
    title_en:     "Discovering the Richness of Indonesian Local Food",
    category:     "Pengetahuan",
    category_en:  "Knowledge",
    date:         "26 September 2026",
    image:        "https://i.ibb.co.com/fdrvNdxm/file-00000000f01881faba7e08ab09b03c1c.png",
    supportImage: "https://via.placeholder.com/900x500?text=Pendukung+1",
    content: [
      "Indonesia merupakan negara yang memiliki kekayaan pangan lokal yang sangat beragam. Setiap daerah mempunyai makanan, minuman, dan produk olahan yang memiliki ciri khas masing-masing.",
      "Keberagaman tersebut dipengaruhi oleh kondisi alam, bahan pangan yang tersedia, serta kebiasaan masyarakat setempat. Contohnya, masyarakat Sumatera Barat mengenal rendang, Yogyakarta memiliki gudeg, Palembang terkenal dengan pempek, sedangkan Papua dan Maluku memiliki papeda.",
      "Pangan lokal tidak hanya memiliki nilai dari segi rasa, tetapi juga menyimpan nilai budaya dan sejarah. Proses pengolahan yang diwariskan dari generasi ke generasi menjadikan pangan lokal sebagai bagian dari identitas suatu daerah.",
      "Dengan mengenal berbagai pangan lokal, masyarakat khususnya generasi muda dapat lebih memahami keberagaman budaya Indonesia."
    ],
    content_en: [
      "Indonesia is a country with incredibly diverse local food. Every region has its own dishes, drinks, and processed products with distinctive characteristics.",
      "This diversity is influenced by natural conditions, available food sources, and local community habits. For example, West Sumatra is known for rendang, Yogyakarta has gudeg, Palembang is famous for pempek, while Papua and Maluku have papeda.",
      "Local food not only has value in terms of taste but also holds cultural and historical value. Processing methods passed down from generation to generation make local food part of a region's identity.",
      "By getting to know various local foods, people — especially the younger generation — can better understand Indonesia's cultural diversity."
    ],
    conclusion:    "Pangan lokal merupakan salah satu kekayaan Indonesia yang memiliki nilai budaya, sosial, dan ekonomi sehingga penting untuk dikenal dan dikembangkan.",
    conclusion_en: "Local food is one of Indonesia's treasures with cultural, social, and economic value, making it important to be recognized and developed."
  },
  {
    id: 2,
    title:        "Mengapa Pangan Lokal Perlu Dilestarikan?",
    title_en:     "Why Does Local Food Need to Be Preserved?",
    category:     "Pelestarian",
    category_en:  "Preservation",
    date:         "26 September 2026",
    image:        "https://i.ibb.co.com/JjFkPjbQ/file-0000000062cc81fabefcb2ba094ccd71.png",
    supportImage: "https://via.placeholder.com/900x500?text=Pendukung+2",
    content: [
      "Perkembangan zaman membawa banyak perubahan dalam kehidupan masyarakat, termasuk dalam hal makanan. Berbagai makanan modern semakin mudah ditemukan sehingga sebagian makanan tradisional mulai kurang dikenal oleh generasi muda.",
      "Pangan lokal perlu dilestarikan karena merupakan bagian dari warisan budaya. Di dalamnya terdapat pengetahuan mengenai bahan, cara memasak, serta kebiasaan masyarakat dari suatu daerah.",
      "Pelestarian dapat dilakukan dengan berbagai cara. Salah satunya adalah mengenalkan makanan tradisional kepada generasi muda melalui pendidikan dan media digital.",
      "Pemanfaatan teknologi juga dapat membantu memperkenalkan pangan lokal kepada masyarakat yang lebih luas. Informasi mengenai makanan daerah dapat disampaikan melalui website, media sosial, video, maupun berbagai media digital lainnya."
    ],
    content_en: [
      "The progress of time has brought many changes to people's lives, including in terms of food. Various modern foods are increasingly easy to find, so some traditional foods are becoming less known to the younger generation.",
      "Local food needs to be preserved because it is part of cultural heritage. It contains knowledge about ingredients, cooking methods, and the habits of a region's community.",
      "Preservation can be done in various ways. One of them is introducing traditional food to the younger generation through education and digital media.",
      "The use of technology can also help introduce local food to a broader audience. Information about regional food can be shared through websites, social media, videos, and various other digital media."
    ],
    conclusion:    "Melestarikan pangan lokal bukan berarti menolak perkembangan zaman, tetapi menjaga agar kekayaan pangan Indonesia tetap dikenal dan dapat terus berkembang.",
    conclusion_en: "Preserving local food does not mean rejecting the progress of time, but rather ensuring that Indonesia's food heritage remains known and continues to develop."
  },
  {
    id: 3,
    title:        "Pangan Lokal sebagai Identitas Budaya",
    title_en:     "Local Food as Cultural Identity",
    category:     "Budaya",
    category_en:  "Culture",
    date:         "26 September 2026",
    image:        "https://i.ibb.co.com/6SN6JLT/file-00000000f09481fa9448a068f1214a23.png",
    supportImage: "https://via.placeholder.com/900x500?text=Pendukung+3",
    content: [
      "Makanan tidak hanya berfungsi sebagai sumber pangan, tetapi juga dapat menjadi bagian dari identitas suatu masyarakat. Setiap daerah di Indonesia memiliki makanan khas yang mencerminkan lingkungan dan kebudayaan masyarakatnya.",
      "Bahan yang digunakan biasanya berasal dari sumber daya yang tersedia di daerah tersebut. Cara pengolahan dan penyajiannya juga dapat mencerminkan kebiasaan masyarakat setempat.",
      "Sebagai contoh, rendang merupakan salah satu makanan yang sangat dikenal dari Sumatera Barat. Gudeg menjadi salah satu makanan yang identik dengan Yogyakarta, sementara pempek memiliki hubungan yang kuat dengan Palembang.",
      "Keberadaan makanan khas tersebut menunjukkan bahwa pangan dapat menjadi media untuk mengenalkan suatu daerah kepada masyarakat luas."
    ],
    content_en: [
      "Food does not only function as a source of nutrition but can also be part of a community's identity. Every region in Indonesia has signature dishes that reflect its environment and culture.",
      "The ingredients used usually come from resources available in the area. The way they are processed and served can also reflect the habits of the local community.",
      "For example, rendang is one of the most well-known dishes from West Sumatra. Gudeg is a dish closely identified with Yogyakarta, while pempek has a strong connection with Palembang.",
      "The existence of these signature dishes shows that food can be a medium for introducing a region to a wider audience."
    ],
    conclusion:    "Pangan lokal merupakan bagian dari identitas budaya yang dapat membantu memperkenalkan karakter dan keberagaman setiap daerah di Indonesia.",
    conclusion_en: "Local food is part of cultural identity that can help introduce the character and diversity of each region in Indonesia."
  },
  {
    id: 4,
    title:        "Dari Bahan Lokal Menjadi Produk Bernilai",
    title_en:     "From Local Ingredients to Valuable Products",
    category:     "Ekonomi",
    category_en:  "Economy",
    date:         "26 September 2026",
    image:        "https://i.ibb.co.com/8DqbQNM8/dreamina-2026-09-26-4098-A4-landscape-cozy-watercolor-illustratio.jpg",
    supportImage: "https://via.placeholder.com/900x500?text=Pendukung+4",
    content: [
      "Indonesia memiliki berbagai sumber bahan pangan yang dapat diolah menjadi produk dengan nilai tambah. Bahan seperti singkong, pisang, kedelai, ikan, dan berbagai hasil pertanian dapat dikembangkan menjadi beragam produk pangan.",
      "Pengolahan bahan lokal dapat membuat produk lebih menarik, memiliki variasi rasa, dan memiliki nilai jual. Contohnya, singkong dapat diolah menjadi tape atau berbagai jenis makanan ringan.",
      "Selain menghasilkan produk pangan, kegiatan tersebut juga dapat membuka peluang usaha bagi masyarakat. Produk yang dikemas dengan baik dan dipromosikan secara tepat dapat dikenal oleh konsumen dari daerah lain.",
      "Teknologi digital memberikan peluang tambahan dalam proses promosi. Pelaku usaha dapat memanfaatkan website dan media digital untuk memberikan informasi mengenai produk kepada masyarakat."
    ],
    content_en: [
      "Indonesia has various food sources that can be processed into value-added products. Ingredients such as cassava, banana, soybean, fish, and various agricultural products can be developed into a wide range of food products.",
      "Processing local ingredients can make products more attractive, offer flavor variations, and have selling value. For example, cassava can be processed into tape or various types of snacks.",
      "Besides producing food products, these activities can also open business opportunities for the community. Products that are well-packaged and properly promoted can be recognized by consumers from other regions.",
      "Digital technology provides additional opportunities in the promotion process. Business owners can use websites and digital media to provide product information to the public."
    ],
    conclusion:    "Pengolahan dan promosi yang tepat dapat membantu meningkatkan nilai suatu bahan pangan lokal sekaligus membuka peluang ekonomi bagi masyarakat.",
    conclusion_en: "Proper processing and promotion can help increase the value of a local food ingredient while opening economic opportunities for the community."
  },
  {
    id: 5,
    title:        "Mengenal Pangan Fermentasi Indonesia",
    title_en:     "Getting to Know Indonesian Fermented Food",
    category:     "Pangan",
    category_en:  "Food",
    date:         "26 September 2026",
    image:        "https://i.ibb.co.com/WpgrvrHv/dreamina-2026-09-26-8525-modern-anime-illustration-A4-landscape-4.jpg",
    supportImage: "https://via.placeholder.com/900x500?text=Pendukung+5",
    content: [
      "Fermentasi merupakan salah satu teknik pengolahan pangan yang telah dikenal dalam berbagai masyarakat di Indonesia. Proses ini memanfaatkan aktivitas mikroorganisme tertentu untuk menghasilkan perubahan pada bahan pangan.",
      "Beberapa produk pangan Indonesia yang berkaitan dengan proses fermentasi antara lain tempe dan tape singkong. Produk tersebut memiliki karakteristik rasa, aroma, dan tekstur yang khas.",
      "Tempe dibuat dari kedelai yang melalui proses fermentasi sehingga menghasilkan produk dengan tekstur dan cita rasa yang berbeda dari bahan asalnya. Sementara itu, tape singkong dibuat melalui proses fermentasi singkong.",
      "Pangan fermentasi menunjukkan adanya pengetahuan tradisional dalam mengolah bahan pangan. Pengetahuan tersebut menjadi salah satu bagian dari kekayaan kuliner Indonesia."
    ],
    content_en: [
      "Fermentation is one of the food processing techniques that has been known in various communities in Indonesia. This process utilizes the activity of certain microorganisms to produce changes in food ingredients.",
      "Some Indonesian food products related to fermentation include tempeh and tape singkong. These products have distinctive characteristics in taste, aroma, and texture.",
      "Tempeh is made from soybeans through fermentation, producing a product with a texture and flavor different from its original ingredient. Meanwhile, tape singkong is made through cassava fermentation.",
      "Fermented food demonstrates the existence of traditional knowledge in processing food. This knowledge is part of Indonesia's culinary heritage."
    ],
    conclusion:    "Pangan fermentasi merupakan contoh bagaimana masyarakat Indonesia memanfaatkan pengetahuan pengolahan pangan untuk menghasilkan produk yang memiliki karakteristik khas.",
    conclusion_en: "Fermented food is an example of how Indonesian people use food processing knowledge to produce products with distinctive characteristics."
  },
  {
    id: 6,
    title:        "Peran Generasi Muda dalam Mengenalkan Pangan Lokal",
    title_en:     "The Role of the Younger Generation in Introducing Local Food",
    category:     "Generasi Muda",
    category_en:  "Young Generation",
    date:         "26 September 2026",
    image:        "https://i.ibb.co.com/tMzq9kDQ/dreamina-2026-09-26-6607-clean-modern-flat-illustration-A4-landsc.jpg",
    supportImage: "https://via.placeholder.com/900x500?text=Pendukung+6",
    content: [
      "Generasi muda memiliki peran penting dalam memperkenalkan pangan lokal kepada masyarakat. Perkembangan teknologi membuat informasi dapat disebarkan dengan lebih cepat melalui berbagai media digital.",
      "Pengenalan pangan lokal dapat dilakukan dengan membuat konten edukatif, fotografi makanan, video, artikel, maupun website. Media tersebut dapat digunakan untuk memberikan informasi mengenai nama produk, asal daerah, bahan, proses pengolahan, dan keunikannya.",
      "Selain membuat konten, generasi muda juga dapat membantu memperkenalkan produk lokal kepada lingkungan sekitar. Dengan cara tersebut, pangan tradisional dapat tetap dikenal di tengah perkembangan berbagai produk makanan modern.",
      "Penggunaan teknologi bukan hanya untuk mengikuti perkembangan zaman, tetapi juga dapat menjadi sarana untuk memperkenalkan budaya Indonesia."
    ],
    content_en: [
      "The younger generation has an important role in introducing local food to society. Technological developments make information spread faster through various digital media.",
      "Introducing local food can be done by creating educational content, food photography, videos, articles, or websites. These media can be used to provide information about product names, regions of origin, ingredients, processing methods, and their uniqueness.",
      "Besides creating content, the younger generation can also help introduce local products to their surroundings. In this way, traditional food can remain known amid the development of various modern food products.",
      "The use of technology is not only about following the times, but can also be a means of introducing Indonesian culture."
    ],
    conclusion:    "Generasi muda dapat memanfaatkan kreativitas dan teknologi digital sebagai media untuk mengenalkan serta membantu melestarikan keberagaman pangan lokal Indonesia.",
    conclusion_en: "The younger generation can use creativity and digital technology as a medium to introduce and help preserve the diversity of Indonesian local food."
  }
];


/* =========================================================
   3. DATA GALERI (10 ITEM) — BILINGUAL
   ========================================================= */
const gallery = [
  {
    id: 1,
    image:       "https://ibb.co.com/m5h8y5cQ",
    caption:     "Kekayaan pangan lokal Indonesia",
    caption_en:  "The richness of Indonesian local food"
  },
  {
    id: 2,
    image:       "https://via.placeholder.com/800x600?text=Galeri+2",
    caption:     "Rempah-rempah khas Nusantara",
    caption_en:  "Signature spices of the archipelago"
  },
  {
    id: 3,
    image:       "https://via.placeholder.com/800x600?text=Galeri+3",
    caption:     "Proses pengolahan pangan tradisional",
    caption_en:  "Traditional food processing"
  },
  {
    id: 4,
    image:       "https://via.placeholder.com/800x600?text=Galeri+4",
    caption:     "Produk olahan pangan lokal",
    caption_en:  "Processed local food products"
  },
  {
    id: 5,
    image:       "https://via.placeholder.com/800x600?text=Galeri+5",
    caption:     "Kemasan produk pangan daerah",
    caption_en:  "Regional food product packaging"
  },
  {
    id: 6,
    image:       "https://via.placeholder.com/800x600?text=Galeri+6",
    caption:     "Camilan tradisional Indonesia",
    caption_en:  "Traditional Indonesian snacks"
  },
  {
    id: 7,
    image:       "https://via.placeholder.com/800x600?text=Galeri+7",
    caption:     "Minuman rempah khas Nusantara",
    caption_en:  "Signature spiced drinks of the archipelago"
  },
  {
    id: 8,
    image:       "https://via.placeholder.com/800x600?text=Galeri+8",
    caption:     "Pangan fermentasi tradisional",
    caption_en:  "Traditional fermented food"
  },
  {
    id: 9,
    image:       "https://via.placeholder.com/800x600?text=Galeri+9",
    caption:     "Bahan pangan lokal Indonesia",
    caption_en:  "Indonesian local food ingredients"
  },
  {
    id: 10,
    image:       "https://via.placeholder.com/800x600?text=Galeri+10",
    caption:     "Makanan khas daerah",
    caption_en:  "Regional signature dishes"
  }
];


/* =========================================================
   4. DAFTAR KATEGORI (UNTUK FILTER) — BILINGUAL
   ========================================================= */
const categories = [
  { key: "all",               labelID: "Semua",             labelEN: "All" },
  { key: "Makanan",           labelID: "Makanan",           labelEN: "Food" },
  { key: "Camilan",           labelID: "Camilan",           labelEN: "Snack" },
  { key: "Minuman",           labelID: "Minuman",           labelEN: "Drink" },
  { key: "Pangan Fermentasi", labelID: "Pangan Fermentasi", labelEN: "Fermented Food" }
];


/* =========================================================
   5. HELPER — AMBIL FIELD SESUAI BAHASA
   ========================================================= */
/**
 * Ambil nilai field produk/artikel/galeri sesuai bahasa aktif.
 * Contoh: pickLang(product, "name") → product.name atau product.name_en
 */
function pickLang(obj, field) {
  if (!obj) return "";
  const lang = (typeof getCurrentLang === "function") ? getCurrentLang() : "id";

  if (lang === "en") {
    const keyEn = field + "_en";
    if (obj[keyEn] !== undefined) return obj[keyEn];
  }
  return obj[field];
}


/* =========================================================
   6. EKSPOR KE GLOBAL
   ========================================================= */
window.products   = products;
window.articles   = articles;
window.gallery    = gallery;
window.categories = categories;
window.pickLang   = pickLang;


/* =========================================================
   END OF DATA.JS
   ========================================================= */
