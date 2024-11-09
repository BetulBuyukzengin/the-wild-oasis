import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { tr, enUS } from "date-fns/locale";

const resources = {
  tr: {
    translation: {
      Dashboard: "Yönetim Paneli",
      Home: "Anasayfa",
      Bookings: "Rezervasyonlar",
      Booking: "Rezervasyon",
      Cabins: "Bungalovlar",
      Users: "Kullanıcılar",
      Settings: "Ayarlar",
      All: "Tümü",
      "With discount": "İndirimli",
      "No discount": "Standart", //indirimsiz
      "Sort by name (A-Z)": "İsme göre sırala (A-Z)",
      "Sort by name (Z-A)": "İsme göre sırala (Z-A)",
      "Sort by price (low first)": "Fiyata göre sırala(önce düşük)",
      "Sort by price (high first)": "Fiyata göre sırala(önce yüksek)",
      "Sort by capacity (low first)": "Kapasiteye göre sırala(önce düşük)",
      "Sort by capacity (high first)": "Kapasiteye göre sırala(önce yüksek)",
      "All cabins": "Tüm Bungalovlar",
      "Add new cabin": "Yeni bungalov Ekle",
      Cabin: "Bungalov",
      Capacity: "Kapasite",
      Price: "Fiyat",
      Discount: "İndirim",
      "Fits up to {{maxCapacity}} guests":
        "En fazla {{maxCapacity}} ziyaretçi ağırlayabilir",
      Duplicate: "Kopyala",
      Edit: "Düzenle",
      Delete: "Sil",
      "Cabin name": "Bungalov İsmi",
      "Maximum capacity": "Maximum kapasite",
      "Regular Price": "Normal Fiyat",
      "Description for website": "Website için Açıklama",
      "Cabin photo": "Bungalov Fotoğrafı",
      "Discount should be less than regular price!":
        "İndirim normal fiyatın altında olmalıdır!",
      "This field is required!": "Bu alanı doldurmak zorunludur!",
      "Create new cabin": "Yeni Bungalov oluştur",
      "Edit cabin": "Bungalov düzenle",
      Cancel: "İptal et",
      "Regular price should be at least 1!": "Normal fiyat en az 1 olmalıdır!",
      "Capacity should be at least 1!": "Kapasite en az 1 olmalıdır!",
      "All bookings": "Tüm Rezervasyonlar",
      "Checked in": "Giriş yapıldı",
      "Checked out": "Çıkış yapıldı",
      "Check out": "Çıkış yap",
      "Check in": "Giriş yap",
      "Delete Booking": "Rezervasyonu sil",
      Unconfirmed: "Onaylanmamış",
      unconfirmed: "ONAYLANMAMIŞ",
      "Sort by date (recent first)": "Tarihe göre sırala (en yeni )",
      "Sort by date (earlier first)": "Tarihe göre sırala (en eski)",
      "Sort by amount (high first)": "Tutara göre sırala (en yüksek)",
      "Sort by amount (low first)": "Tutara göre sırala (en düşük)",
      Guest: "Ziyaretçi",
      Dates: "Tarihler",
      Status: "Durum",
      Amount: "Tutar",
      Previous: "Önceki",
      Next: "Sonraki",
      "See details": "Ayrıntıları göster",
      "Breakfast included?": "Kahvaltı dahil mi?",
      "Total price": "Toplam fiyat",
      Paid: "Ödendi",
      "Will pay at property": "İşletmede ödeme yapacak",
      "National ID": "Ulusal kimlik numarası",
      Yes: "Evet",
      No: "Hayır",
      Sales: "Satış",
      "Check ins": "Girişler",
      "Occupancy rate": "Doluluk Oranı",
      Today: "Bugün",
      "Create new user": "Yeni kullanıcı oluştur",
      "Full name": "Ad Soyad",
      "Email address": "E-posta adresi",
      "Password (min 8 characters)": "Şifre (min 8 karakter)",
      "Repeat password": "Şifreyi tekrarla",
      "Minimum nights / booking": "En az gece sayısı / rezervasyon",
      "Maximum nights / booking": "En fazla gece sayısı / rezervasyon",
      "Maximum guests / booking": "En az ziyaretçi sayısı / rezervasyon",
      "Breakfast price": "Kahvaltı ücreti",
      "Update hotel settings": "Otel ayarlarını güncelle",
      "Create a new user": "Yeni bir kullanıcı oluştur",
      "Choose File": "Dosya Seç",
      "No file chosen": "Dosya seçilmedi",
      "night stay": "gece konaklama",
      guests: "ziyaretçilar",
      Booked: "Rezerve edildi",
      Back: "Geri",
      "Go back": "Geri dön",
      "The page you are looking for could not be found":
        "Aradığınız sayfa bulunamadı",
      "Check in booking": "Rezervasyon girişi",
      "Update your account": "Hesabını güncelle",
      "Update user data": "Kullanıcı bilgilerini güncelle",
      "Update password": "Şifre güncelle",
      "Avatar image": "Profil resmi",
      "Update account": "Hesabı güncelle",
      "Password needs a minimum of 8 characters":
        "Şifre minimum 8 karakter olmalı",
      "Passwords need to match": "Şifreler eşleşmiyor",
      "Confirm password": "Şifreyi onayla",
      "New password (min 8 chars)": "Yeni şifre (min 8 karakter)",
      "No email provided": "E-posta mevcut değil",
      "Unknown cabin": "Bilinmeyen bungalov",
      Arriving: "Varış",
      "Total sales": "Toplam satışlar",
      "Extras sales": "Ekstra satışlar",
      "Sales from": "Satış tarih aralığı",
      Departing: "Ayrılıyor",
      "Unknown guest": "Bilinmeyen ziyaretçi",
      cabin: "bungalov",
      breakfast: "kahvaltı",
      "I confirm that {{guestName}} has paid the total amount of {{totalAmount}}":
        "{{guestName}}'nın toplam {{totalAmount}} tutarında ödeme yaptığını onaylıyorum.",
      "I confirm that {{guestName}} has paid the total amount of {{totalAmount}} ({{baseAmount}} + {{breakfastAmount}})":
        "{{guestName}}'nın toplam {{totalAmount}} tutarında ödeme yaptığını onaylıyorum ({{baseAmount}} + {{breakfastAmount}}).",
      // checkın sayfasına bak-confirmDelete sayfasına bak
      // choose file update your account ve cabın bı seyde
      "Want to add breakfast for": "",
      Observations: "",
      "nights in Cabin": "gece - bungalov",
      //
      // "Delete {{resourceName}}": "{{resourceName}} Sil",
      // resourceNames: {
      //   cabin: "Bungalov",
      //   booking: "Rezervasyon",
      // },
      //

      "Are you sure you want to delete this {{resourceName}} permanently? This action cannot be undone.":
        "Bu {{resourceName}} kaynağını kalıcı olarak silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
      "Delete {{resourceName}}": "{{resourceName}} Sil",
      resourceNames: {
        cabin: "Bungalov",
        booking: "Rezervasyon",
      },

      "{{status}}": "{{status}}",
      statusNames: {
        "checked-out": "Kontrol edildi",
        unconfirmed: "Onaylanmamış",
        "checked-in": "Giriş yapıldı",
      },
      "Last 7 days": "Son 7 gün",
      "Last 30 days": "Son 30 gün",
      "Last 90 days": "Son 90 gün",
      "No activity today...": "Bugün aktivite yok...",
      "Stay duration summary": "Konaklama süresi özeti",
    },
  },
  en: {
    translation: {
      "Delete {{resourceName}}": "Delete {{resourceName}}",
      "Are you sure you want to delete this {{resourceName}} permanently? This action cannot be undone.":
        "Are you sure you want to delete this {{resourceName}} permanently? This action cannot be undone.",
      resourceNames: {
        cabin: "cabin",
        booking: "booking",
      },
      "{{status}}": "{{status}}",
      statusNames: {
        "checked-out": "checked-out",
        unconfirmed: "unconfirmed",
        "checked-in": "checked-in",
      },
    },
  },
};
export const getDateLocale = () => {
  return i18n.language === "tr" ? tr : enUS;
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en", // yedek dil
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
