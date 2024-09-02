import React, { useState } from "react";

const SocialInformations = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    appStore: "",
    twitter: "",
    playStore: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    console.log("Updated Social Links:", socialLinks);
  };

  return (
    <div
      className="p-10 max-w-2xl mx-auto bg-white shadow-md rounded-lg"
      style={{ direction: "rtl" }}
    >
      <h2 className="text-2xl font-bold mb-4">معلومات التواصل الاجتماعي</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            رابط الفيسبوك
          </label>
          <input
            type="url"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            placeholder="https://facebook.com/yourprofile"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            رابط إنستغرام
          </label>
          <input
            type="url"
            name="instagram"
            value={socialLinks.instagram}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            placeholder="https://instagram.com/yourprofile"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            رابط متجر التطبيقات
          </label>
          <input
            type="url"
            name="appStore"
            value={socialLinks.appStore}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            placeholder="https://apps.apple.com/yourapp"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            رابط تويتر
          </label>
          <input
            type="url"
            name="twitter"
            value={socialLinks.twitter}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            placeholder="https://twitter.com/yourprofile"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            رابط متجر جوجل بلاي
          </label>
          <input
            type="url"
            name="playStore"
            value={socialLinks.playStore}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            placeholder="https://play.google.com/store/apps/details?id=yourapp"
          />
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          className="mt-4 w-full px-4 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          تحديث المعلومات
        </button>
      </div>
    </div>
  );
};

export default SocialInformations;
