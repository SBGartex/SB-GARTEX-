import { useState, useEffect } from 'react';
import { storage, SiteSettings } from '../../lib/storage';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  const [settings, setSettings] = useState<SiteSettings>(storage.getSettings());
  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    storage.saveSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-navy-900">Global Settings</h1>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-turquoise-500 text-navy-900 px-6 py-2 rounded-lg font-bold hover:bg-turquoise-600 transition-colors"
        >
          <Save size={18} />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
        {/* General Info */}
        <section>
          <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slogan</label>
              <input
                type="text"
                name="slogan"
                value={settings.slogan}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
              <textarea
                name="address"
                value={settings.address}
                onChange={handleChange}
                rows={2}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section>
          <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">Social Media Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
              <input
                type="text"
                name="instagram"
                value={settings.instagram}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
              <input
                type="text"
                name="linkedin"
                value={settings.linkedin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>
          </div>
        </section>

        {/* Images */}
        <section>
          <h2 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">Key Images (URL)</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hero Section Image</label>
              <input
                type="text"
                name="heroImage"
                value={settings.heroImage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
              <p className="text-xs text-gray-500 mt-1">Paste a direct image URL (e.g., from Unsplash)</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About Section Image</label>
              <input
                type="text"
                name="aboutImage"
                value={settings.aboutImage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
