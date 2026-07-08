/*
 * Shared Firebase configuration for the ELWOIC "popalert" project.
 *
 * This config powers the site-wide popup alerts / alert ticker and is consumed
 * by both the public homepage (index.html) and the admin console (admin.html).
 * Keep it in one place so the two pages can never drift apart.
 *
 * Note: these are public client-side Firebase settings (already shipped to the
 * browser), not secrets. Access is governed by Firebase security rules.
 */
window.ELWOIC_POPALERT_CONFIG = {
  apiKey: "AIzaSyBiTNKib18UgHd2HQCS0iBpUvo5oBI_7CQ",
  authDomain: "popalert-335e9.firebaseapp.com",
  databaseURL: "https://popalert-335e9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "popalert-335e9"
};
