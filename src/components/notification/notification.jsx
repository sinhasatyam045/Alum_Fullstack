import React from 'react';

const Notification = () => {
  // Sample data (replace with actual data from your application)
  const userProfile = 'Images/profile.jpg';
  const userName = 'John Doe';
  const notificationData = [
    { id: 1, message: 'liked your photo', actionButtons: ['View', 'Dismiss'] },
    { id: 2, message: 'started following you', actionButtons: ['Follow Back', 'Dismiss'] },
    { id: 3, message: 'liked your photo', actionButtons: ['View', 'Dismiss'] },
    { id: 4, message: 'liked your photo', actionButtons: ['View', 'Dismiss'] },
    { id: 5, message: 'liked your photo', actionButtons: ['View', 'Dismiss'] },
    { id: 6, message: 'started following you', actionButtons: ['View', 'Dismiss'] },
    { id: 7, message: 'liked your photo', actionButtons: ['Follow Back', 'Dismiss'] },
    { id: 8, message: 'liked your photo', actionButtons: ['Follow Back', 'Dismiss'] },
    { id: 9, message: 'liked your photo', actionButtons: ['View', 'Dismiss'] },
    { id: 20, message: 'started following you', actionButtons: ['View', 'Dismiss'] },
    { id: 11, message: 'started following you', actionButtons: ['View', 'Dismiss'] },

  ];

  const handleAction = (id, action) => {
    // Implement logic for handling the action for the given notification id
    console.log(`Notification ID ${id} - Action: ${action}`);
  };

  return (
    <div className=" mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
        <div className="mt-2">
        <h3 className="text-2xl font-semibold mb-4">Notifications</h3>
        <hr />

        {notificationData.map((notification) => (
          <div key={notification.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
              <img src={userProfile} alt="Notification User" className="w-10 h-10 rounded-full" />
              <div>
                <p>
                  <span className="font-bold">{userName}</span> {notification.message}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              {notification.actionButtons.map((actionButton, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(notification.id, actionButton)}
                  className="text-gray-200 hover:underline focus:outline-none"
                >
                  {actionButton}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
