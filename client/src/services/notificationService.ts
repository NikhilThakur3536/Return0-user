import { type Notification } from "../types";


const fetchNotifications = async (): Promise<Notification[]> => {
  try {
    // Replace with actual API call
    const response = await fetch("/api/notifications");
    const data: Notification[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    // Mock data
    return [
      {
        id: "1",
        type: "info",
        title: "Trip Starting Soon",
        message: "Your trip to Dubai is starting tomorrow!",
        time: new Date().toISOString(),
        priority: "high",
        isRead: false,
        hazardType: undefined,
      },
      {
        id: "2",
        type: "warning",
        title: "Safety Alert",
        message: "Safety alert in your area",
        time: new Date().toISOString(),
        priority: "critical",
        isRead: false,
        hazardType: "flood",
      },
      {
        id: "3",
        type: "health",
        title: "Health Check",
        message: "Health check completed",
        time: new Date().toISOString(),
        priority: "medium",
        isRead: true,
        hazardType: undefined,
      },
    ];
  }
};

const getUnreadCount = async (): Promise<number> => {
  try {
    // Replace with actual API call
    const response = await fetch("/api/notifications/unread-count");
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error("Error fetching unread count:", error);
    return 0;
  }
};

const markAsRead = async (notificationId: string): Promise<void> => {
  try {
    // Replace with actual API call
    await fetch(`/api/notifications/${notificationId}/read`, { method: "POST" });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

const markAllAsRead = async (): Promise<void> => {
  try {
    // Replace with actual API call
    await fetch("/api/notifications/mark-all-read", { method: "POST" });
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    throw error;
  }
};

const deleteNotification = async (notificationId: string): Promise<void> => {
  try {
    // Replace with actual API call
    await fetch(`/api/notifications/${notificationId}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting notification:", error);
    throw error;
  }
};

export default {
  fetchNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  deleteNotification,
};