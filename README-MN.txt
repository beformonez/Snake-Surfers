BURGER RUSH — УТСААР APK BUILD ХИЙХ ЗААВАР

Энэ ZIP нь таны өгсөн index (8).html тоглоомыг Capacitor Android апп болгох төсөл.
AdMob native plugin холбогдсон. Эхний build Google-ийн TEST banner ашиглана.

1. Утсандаа GitHub account нээнэ (байхгүй бол github.com дээр бүртгүүлнэ).
2. github.com руу Chrome-оор орж New repository үүсгэнэ. Нэр: burger-rush-android.
3. ZIP-ийг задлаад доторх БҮХ файл, хавтсыг repository-ийн үндсэн хэсэгт байршуулна.
   GitHub web дээр Add file -> Upload files ашиглаж болно.
4. Upload хийсний дараа Actions таб руу орно.
5. "Build Burger Rush APK" workflow сонгоод Run workflow дарна.
6. Амжилттай дуусмагц тухайн run-ийн доод хэсгийн Artifacts-оос
   Burger-Rush-debug-APK татаж аваад ZIP-ийг задлан app-debug.apk суулгана.

АНХААР:
- Эхний APK нь TEST banner-тай. Тест зар дээр өөрөө дарж болохгүй.
- Google test banner зөв гарсны дараа src/admob.js дотор
  USE_TEST_ADS = true гэдгийг false болгоод дахин build хийвэл
  таны banner ID ашиглагдана.
- App ID AndroidManifest-д таны өгсөн утгаар тохируулагдана.
- APK нь debug build; Play Store-д нийтлэхэд release signing болон бусад
  шаардлагууд тусдаа хэрэгтэй.
- Build алдаа гарвал Actions-ийн улаан алдааны хэсгийн screenshot явуул.
