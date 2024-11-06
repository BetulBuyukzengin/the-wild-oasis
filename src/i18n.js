import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      Dashboard: "Yönetim Paneli",
      Home: "Anasayfa",
      Bookings: "Rezervasyonlar",
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
      "Add new cabin": "Yeni Kabin Ekle",
      Cabin: "Bungalov",
      Capacity: "Kapasite",
      Price: "Fiyat",
      Discount: "İndirim",
      "Fits up to {{maxCapacity}} guests":
        "En fazla {{maxCapacity}} misafir ağırlayabilir",
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
      "Are you sure you want to delete this {{resourceName}} permanently? This action cannot be undone.":
        "Bu {{resourceName}} kaynağını kalıcı olarak silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",

      "Delete {{resourceName}}": "{{resourceName}} Delete", // resource name dinamik geliyor
      "All bookings": "Tüm Rezervasyonlar",
      "Checked in": "Giriş yapıldı",
      "Checked out": "Çıkış yapıldı",
      "Check out": "Çıkış yap",
      "Check in": "Giriş yap",
      "Delete booking": "Rezervasyonu sil",
      Unconfirmed: "Onaylanmamış",
      "Sort by date (recent first)": "Tarihe göre sırala (en yeniye )",
      "Sort by date (earlier first)": "Tarihe göre sırala (en eski)",
      "Sort by amount (high first)": "Tutara göre sırala (ilk yüksek)",
      "Sort by amount (low first)": "Tutara göre sırala (ilk düşük)",
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
    },
  },
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
