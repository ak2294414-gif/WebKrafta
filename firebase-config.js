// firebase-config.js — WebKrafta Firebase Initialization
// Step 1 of 8

const firebaseConfig = {
  apiKey: "AIzaSyBa49TlTTEmhEMrBy5v_lmOB9X2NO_8aNc",
  authDomain: "webkrafta-6239f.firebaseapp.com",
  databaseURL: "https://webkrafta-6239f-default-rtdb.firebaseio.com",
  projectId: "webkrafta-6239f",
  storageBucket: "webkrafta-6239f.firebasestorage.app",
  messagingSenderId: "119327138062",
  appId: "1:119327138062:web:48cdb7eaa26cd891ed775f",
  measurementId: "G-C1V30E605N"
};

// Initialize Firebase (compat SDK)
firebase.initializeApp(firebaseConfig);

// Exports for use across files
const db   = firebase.database();
const auth = firebase.auth();

// Settings cache
let siteSettings = {
  hero: null,
  banner: null,
  founder: null,
  wa: null,
  agentVisibility: {},
  agentPrices: {},
  websiteVisibility: {},
  websitePrices: {}
};

// Load all public settings from Firebase once
function loadSiteSettings(callback) {
  db.ref('settings').once('value').then(snap => {
    const data = snap.val() || {};
    const site  = data.site    || {};
    const agents = data.agents  || {};
    const webs  = data.websites || {};

    siteSettings.hero              = site.hero    || null;
    siteSettings.banner            = site.banner  || null;
    siteSettings.founder           = site.founder || null;
    siteSettings.wa                = site.wa      || null;
    siteSettings.agentVisibility   = agents.visibility || {};
    siteSettings.agentPrices       = agents.prices     || {};
    siteSettings.websiteVisibility = webs.visibility   || {};
    siteSettings.websitePrices     = webs.prices       || {};

    if (callback) callback(siteSettings);
  }).catch(err => {
    console.warn('Firebase settings load failed:', err);
    if (callback) callback(siteSettings);
  });
}
