export const texts = {
  en: ["table","sky","book","road","coffee","wind","rain","sun","chair","door",
"window","tree","leaf","flower","sea","sand","mountain","river","city","village",
"bicycle","car","train","airplane","ship","lamp","paper","pen","ink","bag",
"shoe","shirt","hat","jacket","clock","time","day","night","morning","noon",
"sound","music","song","movie","screen","image","color","black","white","red",
"blue","green","yellow","purple","brown","gray","gold","silver","glass","iron",
"plastic","rubber","water","fire","earth","air","taste","sweet","salty","bitter",
"sour","spicy","warm","cold","fast","slow","big","small","long","short",
"tall","low","strong","weak","bright","dark","clean","dirty","new","old",
"life","death","love","hate","hope","dream","think","work","play","learn"],

  id: ["meja","langit","buku","jalan","kopi","angin","hujan","matahari","kursi","pintu",
"jendela","pohon","daun","bunga","laut","pasir","gunung","sungai","kota","desa",
"sepeda","mobil","kereta","pesawat","kapal","lampu","kertas","pena","tinta","tas",
"sepatu","baju","topi","jaket","jam","waktu","hari","malam","pagi","siang",
"suara","musik","lagu","film","layar","gambar","warna","hitam","putih","merah",
"biru","hijau","kuning","ungu","cokelat","abu","emas","perak","kaca","besi",
"plastik","karet","air","api","tanah","udara","rasa","manis","asin","pahit",
"asam","pedas","hangat","dingin","cepat","lambat","besar","kecil","panjang","pendek",
"tinggi","rendah","kuat","lemah","terang","gelap","bersih","kotor","baru","lama",
"hidup","mati","cinta","benci","harap","mimpi","pikir","kerja","main","belajar"]
}

export function generateText(lang: 'en' | 'id', count = 30) {
  const pool = texts[lang]
  return Array.from({ length: count }, () =>
    pool[Math.floor(Math.random() * pool.length)]
  ).join(' ')
}