/**
 * **********Cleaner Ismet Talepler****************
 * Sisteme giris yapilir
 * Sisteme giris yapildiginda ilk olarak müsterilerinin listesi görüntülenir,
 * Bir müsterinin üzerine tikladiginda, o müsteriye ait bir veya birden fazla kurban listesi göruntülenir,
 * Kurban listesinden birine tiklandiginda o kisinin adresleri görüntülenir
 * Kurbanlarin yaninda durum kontrolü yapan bir buton olusturulur
 * Durum kontrolü sonucunda temizlenen kurban silik görüntülenir
 * *****************Analiz*************************
 * Sisteme giris yapmak icin bir giris sayfasi olusturulur
 * Giris yapildiginda sayfa yenilenir ve yeni müsteri eklemek icin müsteri ekleme formu görüntülenir
 * yeni müsteri eklendiginde bu müsteri icin local storge'da bir object olusturulur
 * Localde olusan objeckten alinan bilgiler ile müsteri listesi ekrana yazdirilir,
 * Eklenen müsterinin üzerine tiklandiginda sayfa yenilenir,
 * Yeni sayfada müsterinin kurbanlarini olusturmak üzere bir form olusturulur,
 * Bu form ile kurban eklendiginde localdeki güncel müsterinin altina kurbanlar bölümü eklenir.
 * Localde olusan objeckten alinan bilgiler ile kurban listesi ekrana yazdirilir,
 * Eklenen kurbanin üzerine tiklandiginda sayfa yenilenir,
 * Yeni sayfada güncel kurbana adres eklemek bir form olusturulur,
 * Bu form ile adres eklendiginde localdeki güncel kurbanin altinda yer alan adresler arrayine yeni adres eklenir
 * Localde olusan objeckten alinan bilgiler ile adres listesi ekrana yazdirilir,
 * Localde olusturulan kurbanlar objectine status degiskeni eklenir ve bu deger boolean olarak tutulur,
 * Her kurbanin yanina checkbox input alani eklenir,
 * Checkbox isaretli olmasi durumunda status degeri true olarak localde güncellenir.
 * Status true degeri kurbanin temizlendigini ifade eder ve kurban resmi soluklasir.
 * ******Extra*****
 * Sisteme giris yapildiginda kurbanlara duyulan sayginin bir ifadesi olarak
 * Frédéric Chopin - Ölüm Marsi calinir.
 * Kurban temizlendiginde ise görevin basarili olmasini ifade eden kisa bir müzik calar.
 * Basarilar
 * 
 */

const mainElement = document.querySelector("#app");
let audio = new Audio("./audio/Deathmusic.mp3");
let audioAfrican = new Audio("./audio/African-Coffin.mp3");
let currentCustomer;
let currentVictim;
showStartPage();
enterTheSystem();
addCustomerHandler();