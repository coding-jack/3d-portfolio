import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, categories = [] }) => {
  useEffect(() => {
    if (isOpen) {
      // Scroll to #tech
      const techSection = document.getElementById("tech");
      if (techSection) {
        techSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center z-1000 overflow-y-auto bg-[rgba(0,0,0,0.5)]" onClick={onClose}>
      <div className="green-pink-gradient p-[1px] rounded-[20px] sm:w-[360px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] z-50">
        <div className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col justify-between items-center p-5 h-full z-50" onClick={e => e.stopPropagation()}>
          {categories.map((arr, idx) => (
            <div key={idx} className="mb-5">
              <h3 className="text-white text-[24px] font-bold">{arr[0]}</h3>
              <p className="text-secondary text-[14px]">{arr.slice(1).join(", ")}</p>
            </div>
          ))}
          <button onClick={onClose} className="bg-tertiary text-white px-4 py-2 rounded-[10px] hover:bg-secondary transition mt-4 border border-secondary">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
