/*
Creator: Dion Arya Pamungkas
email: dionarya.p@gmail.com
web: dionarya6661.github.io

Data Berasal dari quransaya.id jika anda menemukan kesalahan
data bisa hubungi ke quransaya.id@gmail.com
*/
(function ($) {

var url    = '';
var listSurah  = [
      'Al-Fatihah','Al-Baqarah','Ali-Imran',
      'An-Nisa', "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "Al-Taubah", "Yunus", "Hud",
      "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahfi", "Maryam", "Ta-ha",
      "Al-Anbiya", "Al-Hajj", "Al-Muminun", "An-Nur", "Al-Furqan", "Ash-Shu'araa", "An-Naml", "Al-Qashash",
      "Al-Kanbut", "Ar-Rum", "Luqman", "As-Sajdah", "Al-Ahzab", "Saba", "Faathir", "Ya-sin", "Ash-Shaffat",
      "Sad", "Az-Zumar", "Al-Mu'min", "Ha-mim", "Ash-Shura", "Az-Zukhru", "Ad-Dukhan", "Al-Jathiya", "Al-Ahqaf",
      "Muhammad", "Al-fath", "Al-Hujurat", "Qaaf", "Az-Zariyat", "At-Tur", "An-Najm", "Al-Qamar",
      "Ar-Rahman", "Al-Waaqi'ah", "Al-Hadid", "Al-Mujadila", "Al-Hasyr", "Al-Mumtahana", "As-Shaff",
      "Al-Jumu'ah", "Al-Munafik", "At-Tagabun", "At-Talaq", "At-tahrim", "Al-Mulk", "Al-Qalam", "Al-aqqa",
      "Al-Ma'arij", "Nuh", "Al-Jinn", "Al-Muzammil", "Al-Muddathth", "Al-Qiyamat", "Ad-Dahr",
      "Al-Murlsalat", "An-Nabaa", "An-Nazi'at", "Abasa", "At-takwir", "Al-Infitar", "Al-Mutaffife",
      "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghashiya", "Al-Fajr", "Al-Balad",
      "Ash-Shams", "Al-Lail", "Adz-Dhuha", "Al-Syarh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Baiyinah",
      "Al-Zalzalah", "Al-Adiyat", "Al-Qari'a", "At-Takathur","Al-Asr", "Al-Humaza", "Al-Fil", "Quraish",
      "Al-Ma'un", "Al-Kautsar", "Al-Kafirun", "An-nashr", "Al-Lahab", "Al-Ikhlas", "Al-Falaq", "Al-Nas"
];


$.fn.quransaya = function(parameter) {
  url = 'https://api.quransaya.id/surat/'+parameter.surat+'/ayat/'+parameter.ayat;
  ini = this;
  suratKe = parseInt(parameter.surat) - 1;
  ayatKe  = parseInt(parameter.ayat);
  warna   = 'd-'+parameter.warna;
  doAjax(warna, suratKe, ayatKe, url, ini);

return this;
}

  var doAjax = function(warna, suratKe, ayatKe, url, ini){
    $.getJSON(url, function( data ) {
      ini.append("<blockquote class='d-panel d-leftbar "+warna+"'><p class='d-large'><i>"+data[0].arti+"</i></p><p>(QS. "+listSurah[suratKe]+":"+ayatKe+")</p></blockquote>");
    });
  }


}( jQuery ));
