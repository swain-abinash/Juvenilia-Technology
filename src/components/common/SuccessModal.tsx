import React from "react";

type SuccessModalProps = {
  successMessage: string;
  setSuccessMessage: (value: any) => void;
  title?: string;
};

const SuccessModal = ({ successMessage, setSuccessMessage, title = "🎉 Success" }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000] backdrop-blur-sm">
      <div
        className="bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-auto 
                 rounded-2xl shadow-2xl border-4 border-orange-500 p-6 text-center 
                 animate-[zoomIn_0.3s_ease-out]"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-4">{title}</h2>

        {/* Message */}
        <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
          {successMessage}
        </p>

        {/* Action Button */}
        <button
          onClick={() => setSuccessMessage(null)}
          className="px-6 py-2 bg-black text-white font-semibold rounded-lg 
                   hover:bg-orange-600 hover:text-white transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
