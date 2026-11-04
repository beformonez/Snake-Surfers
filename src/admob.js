import { AdMob, AdmobConsentStatus, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

// First build uses Google's official test banner. After confirming it works,
// change USE_TEST_ADS to false to request the user's own banner ad unit.
const USE_TEST_ADS = true;
const TEST_BANNER_ID = 'ca-app-pub-3940256099942544/6300978111';
const LIVE_BANNER_ID = 'ca-app-pub-5519674260917128/3535289354';

async function showBurgerRushBanner() {
  if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android') return;

  try {
    let consent = await AdMob.requestConsentInfo();
    if (consent.isConsentFormAvailable && consent.status === AdmobConsentStatus.REQUIRED) {
      consent = await AdMob.showConsentForm();
    }
    if (!consent.canRequestAds) {
      console.log('[AdMob] Consent does not allow ad requests yet.');
      return;
    }

    await AdMob.initialize();
    await AdMob.showBanner({
      adId: USE_TEST_ADS ? TEST_BANNER_ID : LIVE_BANNER_ID,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: USE_TEST_ADS
    });
    console.log('[AdMob] Banner request sent.');
  } catch (error) {
    console.error('[AdMob] Banner could not be shown:', error);
  }
}

window.addEventListener('load', () => {
  // Give the native WebView time to finish attaching before initializing ads.
  setTimeout(() => { showBurgerRushBanner(); }, 700);
});
