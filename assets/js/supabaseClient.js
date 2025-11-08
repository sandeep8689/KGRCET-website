// Supabase client and helpers
// Requires: include config.js (copied from config.example.js) before this script

(function initSupabase() {
  if (!window.APP_CONFIG) {
    console.warn('APP_CONFIG not found. Create assets/js/config.js from config.example.js');
    return;
  }
  // When using CDN v2, global is window.supabase with .createClient
  var supaNs = window.supabase;
  if (supaNs && typeof supaNs.createClient === 'function') {
    window.SUPABASE = supaNs.createClient(window.APP_CONFIG.SUPABASE_URL, window.APP_CONFIG.SUPABASE_ANON_KEY);
  } else {
    console.warn('Supabase CDN not loaded before supabaseClient.js');
  }
})();

// Upload a file to a bucket and return public URL
async function uploadImageAndGetUrl(file, bucket, folder) {
  if (!file) throw new Error('No file provided');
  if (!window.SUPABASE) throw new Error('Supabase not initialized');

  var path = [folder || 'uploads', generateId('reg'), file.name.replace(/\s+/g, '_')].join('/');
  var upload = await window.SUPABASE.storage.from(bucket).upload(path, file, { upsert: false, cacheControl: '3600' });
  if (upload.error) throw upload.error;
  var pub = window.SUPABASE.storage.from(bucket).getPublicUrl(path);
  if (pub.data && pub.data.publicUrl) return pub.data.publicUrl;
  throw new Error('Failed to get public URL');
}

window.Supa = { uploadImageAndGetUrl: uploadImageAndGetUrl };


