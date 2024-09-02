import React from "react";

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

const notifications: Notification[] = [
  { id: 1, message: "تعليق جديد على منشورك", timestamp: "منذ دقيقتين" },
  { id: 2, message: "متابع جديد", timestamp: "منذ 10 دقائق" },
  { id: 3, message: "رسالة من جون", timestamp: "منذ ساعة" },
];

const NotificationsDropdown: React.FC = () => {
  return (
    <div
      className="absolute top-14 left-0 w-60 bg-white shadow-lg rounded-md border border-gray-200 z-50"
      style={{ direction: "rtl" }}
    >
      <div className="p-4 border-b border-gray-200 font-semibold">
        الإشعارات
      </div>
      <div className="max-h-60 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 border-b border-gray-100 hover:bg-gray-100"
            >
              <p className="text-sm">{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.timestamp}</p>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">لا توجد إشعارات</div>
        )}
      </div>
      <div className="p-2 text-center text-blue-600 hover:bg-gray-100 cursor-pointer">
        عرض الكل
      </div>
    </div>
  );
};

export default NotificationsDropdown;
